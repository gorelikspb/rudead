// Simple script to generate PWA icons
// Run with: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Create simple SVG icons and convert to PNG
// For now, we'll create a simple HTML file that can generate icons in browser

const iconHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Generate Icons</title>
</head>
<body>
    <h1>SafeCheck Icon Generator</h1>
    <p>Icons will download automatically...</p>
    <script>
        function generateIcon(size, filename) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            
            // Background gradient
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#4CAF50');
            gradient.addColorStop(1, '#45a049');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);
            
            // White checkmark
            ctx.fillStyle = 'white';
            ctx.font = \`bold \${size * 0.625}px Arial\`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✓', size / 2, size / 2);
            
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
            });
        }
        
        setTimeout(() => {
            generateIcon(192, 'icon-192.png');
            setTimeout(() => {
                generateIcon(512, 'icon-512.png');
                setTimeout(() => {
                    document.body.innerHTML = '<h1>Icons generated! Check your downloads folder.</h1>';
                }, 500);
            }, 500);
        }, 500);
    </script>
</body>
</html>`;

// Write HTML file
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'generate-icons.html'), iconHTML);
console.log('✅ Icon generator created at public/generate-icons.html');
console.log('📱 Open it in your browser to generate icons');

