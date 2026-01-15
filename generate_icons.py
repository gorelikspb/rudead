#!/usr/bin/env python3
"""
Generate PNG icons for Are You Dead? App
Creates icon-192.png and icon-512.png
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("PIL/Pillow not installed. Installing...")
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw, ImageFont

def create_icon(size):
    """Create icon with skull and clock design"""
    # Create image with dark background
    img = Image.new('RGB', (size, size), color='#1a1a1a')
    draw = ImageDraw.Draw(img)
    
    # Scale factors based on 192px base
    scale = size / 192
    
    center_x = size / 2
    head_y = size * 0.417  # 80/192
    head_radius = size * 0.1875  # 36/192
    
    # Draw red skull head (circle)
    head_box = [
        center_x - head_radius,
        head_y - head_radius,
        center_x + head_radius,
        head_y + head_radius
    ]
    draw.ellipse(head_box, fill='#ff4444')
    
    # Draw red jaw (rectangle)
    jaw_x = size * 0.365  # 70/192
    jaw_y = head_y
    jaw_width = size * 0.271  # 52/192
    jaw_height = size * 0.198  # 38/192
    draw.rectangle([jaw_x, jaw_y, jaw_x + jaw_width, jaw_y + jaw_height], fill='#ff4444')
    
    # Draw eyes
    eye_size = size * 0.042  # 8/192
    eye_y = head_y - size * 0.021
    draw.ellipse([center_x - size * 0.0625 - eye_size, eye_y - eye_size,
                  center_x - size * 0.0625 + eye_size, eye_y + eye_size], fill='#1a1a1a')
    draw.ellipse([center_x + size * 0.0625 - eye_size, eye_y - eye_size,
                  center_x + size * 0.0625 + eye_size, eye_y + eye_size], fill='#1a1a1a')
    
    # Draw mouth (triangle)
    mouth_y = head_y + size * 0.042  # 88/192
    mouth_points = [
        (center_x, mouth_y),
        (center_x - size * 0.042, mouth_y + size * 0.0625),
        (center_x + size * 0.042, mouth_y + size * 0.0625)
    ]
    draw.polygon(mouth_points, fill='#1a1a1a')
    
    # Draw clock circle
    clock_y = size * 0.521  # 100/192
    clock_radius = size * 0.083  # 16/192
    clock_box = [
        center_x - clock_radius,
        clock_y - clock_radius,
        center_x + clock_radius,
        clock_y + clock_radius
    ]
    draw.ellipse(clock_box, outline='#1a1a1a', width=int(size * 0.016))  # 3/192
    
    # Draw clock hands
    hand_width = int(size * 0.016)  # 3/192
    # Hour hand (pointing up)
    draw.line([center_x, clock_y, center_x, clock_y - size * 0.052], fill='#1a1a1a', width=hand_width)
    # Minute hand (pointing right)
    draw.line([center_x, clock_y, center_x + size * 0.0625, clock_y], fill='#1a1a1a', width=hand_width)
    
    return img

def main():
    print("Generating PNG icons...")
    
    # Generate 192x192 icon
    icon192 = create_icon(192)
    icon192.save('public/icon-192.png', 'PNG')
    print("[OK] Created public/icon-192.png")
    
    # Generate 512x512 icon
    icon512 = create_icon(512)
    icon512.save('public/icon-512.png', 'PNG')
    print("[OK] Created public/icon-512.png")
    
    print("\nIcons generated successfully!")
    print("Next step: git add public/icon-*.png && git commit -m 'Add PNG icons' && git push")

if __name__ == '__main__':
    main()

