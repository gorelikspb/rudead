# Проверка логирования email адресов

## Проблема
Email адреса не приходят на админский адрес.

## Что проверить:

### 1. Cloudflare Worker настройки
- Зайдите в Cloudflare Dashboard → Workers & Pages → ваш worker
- Проверьте переменные окружения (Environment Variables):
  - `ADMIN_EMAIL` - должен быть установлен на ваш email (например: `your-email@gmail.com`)
  - `RESEND_API_KEY` - должен быть установлен ваш API ключ от Resend

### 2. Worker URL
Текущий URL в коде: `https://rudead.gorelikgo.workers.dev`
- Проверьте, что этот worker существует и активен
- Если worker называется по-другому, обновите URL в `public/app.js` (строка 1056)

### 3. Проверка в консоли браузера
Откройте консоль браузера (F12) и проверьте:
- Есть ли ошибки при отправке email
- Что показывает `console.log('Email logged to admin:', ...)`

### 4. Проверка Resend API
- Убедитесь, что ваш Resend API ключ активен
- Проверьте лимиты отправки в Resend Dashboard
- Убедитесь, что домен `onboarding@resend.dev` разрешен для отправки

### 5. Тестовая команда в консоли браузера
Выполните в консоли браузера:
```javascript
fetch('https://rudead.gorelikgo.workers.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        type: 'log_email',
        email_type: 'test',
        email: 'test@example.com',
        name: 'Test User',
        phone: 'Not provided',
        timestamp: new Date().toISOString()
    })
}).then(r => r.json()).then(console.log).catch(console.error);
```

### 6. Проверка локального хранения
Все email также сохраняются локально в браузере:
```javascript
// Посмотреть все сохраненные email
JSON.parse(localStorage.getItem('emailHistory') || '[]')
```

## Что было исправлено:
1. Добавлена передача `message` для типа `contact_dev`
2. Улучшено логирование ошибок в консоль
3. Добавлена проверка ответа от worker

## Следующие шаги:
1. Проверьте настройки Cloudflare Worker (ADMIN_EMAIL и RESEND_API_KEY)
2. Проверьте консоль браузера на наличие ошибок
3. Выполните тестовую команду выше
4. Проверьте логи Cloudflare Worker в Dashboard

