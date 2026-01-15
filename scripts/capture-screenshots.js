// Автоматическая генерация скриншотов для "Are You Dead?" App
// Использование: npm run screenshots
//
// ВАЖНО: Используется file:// протокол (не HTTP сервер)
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// ========== НАСТРОЙКИ ПРОЕКТА ==========
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const INDEX_HTML = path.join(PUBLIC_DIR, 'index.html');
const DOWNLOAD_HTML = path.join(PUBLIC_DIR, 'download', 'index.html');
const SCREENSHOTS_DIR = path.join(PROJECT_ROOT, 'screenshots');
const LANGUAGES = ['en']; // Основной язык (можно добавить 'ru' если нужно)

// Настройки скриншотов
const SCREENSHOT_CONFIG = {
    desktop: {
        viewport: { width: 1920, height: 1080 },
        screenshots: [
            {
                name: 'main-page',
                file: '01-main-page.png',
                url: INDEX_HTML,
                selector: null, // fullPage скриншот
                action: null,
                waitAfter: 1000
            },
            {
                name: 'download-page',
                file: '02-download-page.png',
                url: DOWNLOAD_HTML,
                selector: null, // fullPage скриншот
                action: null,
                waitAfter: 1000
            }
        ]
    },
    mobile: {
        viewport: { width: 375, height: 667 },
        screenshots: [
            {
                name: 'main-page-mobile',
                file: '03-main-page-mobile.png',
                url: INDEX_HTML,
                selector: null,
                action: null,
                waitAfter: 1000
            },
            {
                name: 'download-page-mobile',
                file: '04-download-page-mobile.png',
                url: DOWNLOAD_HTML,
                selector: null,
                action: null,
                waitAfter: 1000
            }
        ]
    }
};

// ========== ОСНОВНОЙ КОД ==========

async function captureScreenshots() {
    // Создаем папки если их нет
    LANGUAGES.forEach(lang => {
        const dir = path.join(SCREENSHOTS_DIR, lang);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    // Проверяем наличие файлов
    if (!fs.existsSync(INDEX_HTML)) {
        console.error('❌ Файл не найден:', INDEX_HTML);
        process.exit(1);
    }
    
    if (!fs.existsSync(DOWNLOAD_HTML)) {
        console.error('❌ Файл не найден:', DOWNLOAD_HTML);
        process.exit(1);
    }
    
    try {
        const browser = await puppeteer.launch({ 
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--allow-file-access-from-files'
            ]
        });
        
        for (const lang of LANGUAGES) {
            console.log(`\n=== Язык: ${lang.toUpperCase()} ===`);
            const page = await browser.newPage();
            
            // Десктопные скриншоты
            await page.setViewport(SCREENSHOT_CONFIG.desktop.viewport);
            
            for (const screenshot of SCREENSHOT_CONFIG.desktop.screenshots) {
                console.log(`📸 Скриншот: ${screenshot.name} (${lang})...`);
                
                const fileUrl = `file://${screenshot.url.replace(/\\/g, '/')}`;
                await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
                
                // Ждем загрузки контента
                await new Promise(resolve => setTimeout(resolve, screenshot.waitAfter));
                
                const outputPath = path.join(SCREENSHOTS_DIR, lang, screenshot.file);
                
                if (screenshot.selector) {
                    const element = await page.$(screenshot.selector);
                    if (element) {
                        await element.screenshot({ path: outputPath });
                    } else {
                        console.warn(`⚠️  Элемент не найден: ${screenshot.selector}, делаю fullPage`);
                        await page.screenshot({ path: outputPath, fullPage: true });
                    }
                } else {
                    await page.screenshot({ 
                        path: outputPath, 
                        fullPage: true 
                    });
                }
                
                console.log(`✅ Сохранено: ${outputPath}`);
            }

            // Мобильные скриншоты
            await page.setViewport(SCREENSHOT_CONFIG.mobile.viewport);
            
            for (const screenshot of SCREENSHOT_CONFIG.mobile.screenshots) {
                console.log(`📸 Скриншот: ${screenshot.name} mobile (${lang})...`);
                
                const fileUrl = `file://${screenshot.url.replace(/\\/g, '/')}`;
                await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
                
                await new Promise(resolve => setTimeout(resolve, screenshot.waitAfter));
                
                const outputPath = path.join(SCREENSHOTS_DIR, lang, screenshot.file);
                
                if (screenshot.selector) {
                    const element = await page.$(screenshot.selector);
                    if (element) {
                        await element.screenshot({ path: outputPath });
                    } else {
                        await page.screenshot({ path: outputPath, fullPage: true });
                    }
                } else {
                    await page.screenshot({ path: outputPath, fullPage: true });
                }
                
                console.log(`✅ Сохранено: ${outputPath}`);
            }

            await page.close();
        }

        await browser.close();
        console.log('\n✅ Все скриншоты созданы в:', SCREENSHOTS_DIR);
    } catch (error) {
        console.error('❌ Ошибка:', error.message);
        process.exit(1);
    }
}

captureScreenshots().catch(console.error);

