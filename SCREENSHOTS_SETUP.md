# 📸 Настройка автоматических скриншотов

## Использование шаблона из common

Скрипт для скриншотов уже есть в `../common/instructions/scripts/capture-screenshots-template.js`

## Что нужно сделать:

1. **Скопировать и настроить шаблон:**
   ```bash
   # Скопируй шаблон в проект
   cp ../common/instructions/scripts/capture-screenshots-template.js scripts/capture-screenshots.js
   ```

2. **Настроить пути в скрипте:**
   Открой `scripts/capture-screenshots.js` и измени:
   ```javascript
   const PROJECT_ROOT = path.resolve(__dirname, '..');
   const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
   const INDEX_HTML = path.join(PUBLIC_DIR, 'index.html');
   const SCREENSHOTS_DIR = path.join(PROJECT_ROOT, 'screenshots');
   const LANGUAGES = ['en']; // или ['en', 'ru'] если нужно
   ```

3. **Настроить SCREENSHOT_CONFIG:**
   ```javascript
   const SCREENSHOT_CONFIG = {
       desktop: {
           viewport: { width: 1920, height: 1080 },
           screenshots: [
               {
                   name: 'main-page',
                   file: '01-main-page.png',
                   selector: null, // fullPage
                   action: null,
                   waitAfter: 1000
               },
               {
                   name: 'download-page',
                   file: '02-download-page.png',
                   url: path.join(PUBLIC_DIR, 'download', 'index.html'), // Для другой страницы
                   selector: null,
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
               }
           ]
       }
   };
   ```

4. **Запустить:**
   ```bash
   npm run screenshots
   ```

## Структура папок:

```
rudead/
├── screenshots/
│   └── en/
│       ├── 01-main-page.png
│       ├── 02-download-page.png
│       └── 03-main-mobile.png
└── scripts/
    └── capture-screenshots.js (скопированный из common)
```

## Документация:

Полная инструкция: `../common/instructions/AUTOMATED_SCREENSHOTS.md`

