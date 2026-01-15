// Универсальный шаблон для автоматической генерации скриншотов
// Использование: скопируй в свой проект и настрой под свои нужды
//
// ВАЖНО: Используется file:// протокол (не HTTP сервер)
// Преимущества:
// - Не нужно запускать сервер вручную
// - Скрипт не зависает при запуске/остановке сервера
// - Работает сразу после npm run screenshots
// - Обходит CORS через флаги Puppeteer
//
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// ========== НАСТРОЙКИ ПРОЕКТА ==========
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const INDEX_HTML = path.join(PUBLIC_DIR, 'index.html');
const DOWNLOAD_HTML = path.join(PUBLIC_DIR, 'download', 'index.html');
const SCREENSHOTS_DIR = path.join(PROJECT_ROOT, 'rudead_log', 'screenshots');
const LANGUAGES = ['en']; // Основной язык

// Настройки скриншотов для "Are You Dead?" App
const SCREENSHOT_CONFIG = {
    desktop: {
        viewport: { width: 1920, height: 1080 },
        screenshots: [
            {
                name: 'main-page',
                file: '01-main-page.png',
                selector: null, // fullPage скриншот
                action: null,
                waitAfter: 1000
            },
            {
                name: 'download-page',
                file: '02-download-page.png',
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
                name: 'main-mobile',
                file: '03-main-mobile.png',
                selector: null,
                action: null,
                waitAfter: 1000
            },
            {
                name: 'download-mobile',
                file: '04-download-mobile.png',
                selector: null,
                action: null,
                waitAfter: 1000
            }
        ]
    }
};

// ========== ОСНОВНОЙ КОД (обычно не требует изменений) ==========

async function captureScreenshots() {
    // Создаем папки если их нет
    LANGUAGES.forEach(lang => {
        const dir = path.join(SCREENSHOTS_DIR, lang);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    // Проверяем наличие файла
    if (!fs.existsSync(INDEX_HTML)) {
        console.error('❌ Файл не найден:', INDEX_HTML);
        console.error('Проверь путь в настройках PROJECT_ROOT и INDEX_HTML');
        process.exit(1);
    }
    
    try {
        const browser = await puppeteer.launch({ 
            headless: true,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-web-security', // Обходим CORS для file://
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
                
                // Определяем URL для скриншота
                let fileUrl;
                if (screenshot.name === 'download-page') {
                    fileUrl = `file://${DOWNLOAD_HTML.replace(/\\/g, '/')}`;
                } else {
                    fileUrl = `file://${INDEX_HTML.replace(/\\/g, '/')}`;
                }
                
                await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
                
                // Ждем загрузки всех стилей и ресурсов
                await page.evaluate(() => {
                    return new Promise((resolve) => {
                        if (document.readyState === 'complete') {
                            resolve();
                        } else {
                            window.addEventListener('load', resolve);
                        }
                    });
                });
                
                // Дополнительная задержка для загрузки CSS и применения стилей
                await new Promise(resolve => setTimeout(resolve, screenshot.waitAfter + 2000));
                
                // Проверяем, что стили загружены (проверяем наличие computed styles у body)
                const stylesLoaded = await page.evaluate(() => {
                    const body = document.body;
                    const computedStyle = window.getComputedStyle(body);
                    // Проверяем, что стили применены (background не прозрачный или есть другие стили)
                    const hasStyles = computedStyle.fontFamily !== '' || 
                                     computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
                                     computedStyle.color !== '';
                    return hasStyles;
                });
                
                if (!stylesLoaded) {
                    console.warn('⚠️  Стили могут быть не загружены, ждем еще...');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
                
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
                    await page.screenshot({ path: outputPath, fullPage: true });
                }
                
                console.log(`✅ Сохранено: ${outputPath}`);
            }

            // Мобильные скриншоты
            await page.setViewport(SCREENSHOT_CONFIG.mobile.viewport);
            
            for (const screenshot of SCREENSHOT_CONFIG.mobile.screenshots) {
                console.log(`📸 Скриншот: ${screenshot.name} mobile (${lang})...`);
                
                let fileUrl;
                if (screenshot.name === 'download-mobile') {
                    fileUrl = `file://${DOWNLOAD_HTML.replace(/\\/g, '/')}`;
                } else {
                    fileUrl = `file://${INDEX_HTML.replace(/\\/g, '/')}`;
                }
                
                await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
                
                // Ждем загрузки всех стилей и ресурсов
                await page.evaluate(() => {
                    return new Promise((resolve) => {
                        if (document.readyState === 'complete') {
                            resolve();
                        } else {
                            window.addEventListener('load', resolve);
                        }
                    });
                });
                
                // Дополнительная задержка для загрузки CSS и применения стилей
                await new Promise(resolve => setTimeout(resolve, screenshot.waitAfter + 2000));
                
                // Проверяем, что стили загружены (проверяем наличие computed styles у body)
                const stylesLoaded = await page.evaluate(() => {
                    const body = document.body;
                    const computedStyle = window.getComputedStyle(body);
                    // Проверяем, что стили применены (background не прозрачный или есть другие стили)
                    const hasStyles = computedStyle.fontFamily !== '' || 
                                     computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
                                     computedStyle.color !== '';
                    return hasStyles;
                });
                
                if (!stylesLoaded) {
                    console.warn('⚠️  Стили могут быть не загружены, ждем еще...');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
                
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
        console.error('Ошибка:', error.message);
        process.exit(1);
    }
}

captureScreenshots().catch(console.error);

