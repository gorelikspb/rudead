# 🚀 Инструкция: Загрузка кода в Cloudflare Worker

## Шаг 1: Открой Cloudflare Dashboard

1. Зайди на https://dash.cloudflare.com/
2. Войди в аккаунт
3. В левом меню выбери **Workers & Pages**
4. Найди Worker **`rudead`** и нажми на него

## Шаг 2: Добавь Secrets (если еще не добавлены)

1. В Worker нажми **Settings** → **Variables**
2. В разделе **Environment Variables** → **Add variable**
3. Добавь два Secrets:

   **Secret 1:**
   - Name: `RESEND_API_KEY`
   - Value: `re_EXpNX9RS_5ad8xQ2yn3ihD26Dtk8JmDJH`
   - Type: **Secret** (важно!)

   **Secret 2:**
   - Name: `ADMIN_EMAIL`
   - Value: `gorelikgo@gmail.com`
   - Type: **Secret** (важно!)

4. Нажми **Save**

## Шаг 3: Вставь код Worker

1. В Worker нажми **Edit code** (или **Quick edit**)
2. Удали весь существующий код (если есть)
3. Скопируй весь код из файла `worker-code.js`
4. Вставь в редактор Worker
5. Нажми **Save and deploy** (или **Deploy**)

## Шаг 4: Проверь URL Worker

1. После деплоя нажми **Settings** → **Triggers**
2. Убедись, что Worker доступен по адресу: `https://rudead.gorelikgo.workers.dev`
3. Скопируй этот URL

## Шаг 5: Обнови URL в приложении (если нужно)

Если URL Worker отличается от `https://printacopy.gorelikgo.workers.dev`, обнови в `public/app.js`:

```javascript
// Найди строку:
const workerUrl = 'https://printacopy.gorelikgo.workers.dev';

// Замени на:
const workerUrl = 'https://rudead.gorelikgo.workers.dev';
```

## ✅ Готово!

Теперь Worker готов принимать запросы от приложения "R U Dead?".

---

## 🧪 Тестирование Worker

### Вариант 1: Через браузер (быстрый тест)

Открой в браузере:
```
https://rudead.gorelikgo.workers.dev
```

Должен вернуть: `Method not allowed` (это нормально для GET запроса)

### Вариант 2: Через curl (полный тест)

```bash
curl -X POST https://rudead.gorelikgo.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "type": "emergency",
    "contact_name": "Test Contact",
    "contact_phone": "+1234567890",
    "contact_email": "gorelikgo@gmail.com",
    "days_overdue": 5,
    "last_checkin": "2025-01-20 10:00:00"
  }'
```

Должен вернуть: `{"success":true}`

### Вариант 3: Через приложение

1. Открой приложение в браузере
2. Заполни форму контакта
3. Симулируй просрочку через консоль:
   ```javascript
   localStorage.setItem('lastCheckIn', (Date.now() - 5*24*60*60*1000).toString());
   const contact = JSON.parse(localStorage.getItem('emergencyContact'));
   sendEmergencyNotification(contact);
   ```
4. Проверь консоль - должно быть `Email sent successfully`
5. Проверь почту `gorelikgo@gmail.com` - письмо должно прийти

---

## 🔧 Troubleshooting

### Ошибка 500
- Проверь, что Secrets добавлены правильно (Settings → Variables)
- Проверь логи Worker (Workers & Pages → rudead → Logs)

### CORS ошибка
- Убедись, что в коде есть обработка OPTIONS запроса
- Проверь заголовки CORS

### Письма не приходят
- Проверь логи Worker
- Проверь Resend Dashboard → Emails
- Убедись, что API ключ правильный

---

**Готово!** Worker настроен и готов к работе.

