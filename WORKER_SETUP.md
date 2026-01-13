# 📧 Настройка Cloudflare Worker для "R U Dead?"

## Текущее решение

**Технология:** Cloudflare Worker + Resend API

**Worker URL:** `https://printacopy.gorelikgo.workers.dev`

**Принцип работы:**
1. При просрочке check-in (4+ дня) вызывается `sendEmergencyNotification()`
2. Функция отправляет POST запрос на Cloudflare Worker
3. Worker отправляет email через Resend API на `gorelikgo@gmail.com`
4. Контакт получает письмо с предупреждением

---

## Настройка Worker для этого проекта

### Вариант 1: Использовать существующий Worker (быстро)

Если Worker `printacopy` уже существует, нужно добавить обработку типа `emergency`:

1. Открой Cloudflare Dashboard → Workers & Pages → `printacopy`
2. Нажми **Edit code**
3. Добавь обработку `type: 'emergency'` в код Worker:

```javascript
// Добавь после обработки 'contact' формы:

if (data.type === 'emergency') {
  // Emergency notification for R U Dead? app
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'R U Dead? <onboarding@resend.dev>',
      to: env.ADMIN_EMAIL, // gorelikgo@gmail.com
      reply_to: data.contact_email || env.ADMIN_EMAIL,
      subject: `🚨 R U Dead? - User hasn't checked in for ${data.days_overdue} days`,
      html: `
        <h2>🚨 Emergency Alert</h2>
        <p><strong>User hasn't checked in for ${data.days_overdue} days!</strong></p>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.contact_name || 'Not provided'}</li>
          <li><strong>Phone:</strong> ${data.contact_phone || 'Not provided'}</li>
          <li><strong>Email:</strong> ${data.contact_email || 'Not provided'}</li>
        </ul>
        
        <h3>Check-in Details:</h3>
        <ul>
          <li><strong>Last check-in:</strong> ${data.last_checkin}</li>
          <li><strong>Days overdue:</strong> ${data.days_overdue}</li>
        </ul>
        
        <p><strong>Please check on the user immediately!</strong></p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This is an automated alert from R U Dead? app.<br>
          If you received this by mistake, please ignore it.
        </p>
      `
    })
  });
  
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
```

4. Нажми **Save and deploy**

### Вариант 2: Создать новый Worker

1. Cloudflare Dashboard → Workers & Pages → **Create application** → **Create Worker**
2. Название: `rudead-email` (или `deadalready-email`)
3. Добавь Secrets (Settings → Variables):
   - `RESEND_API_KEY` = `re_EXpNX9RS_5ad8xQ2yn3ihD26Dtk8JmDJH` (тип: Secret)
   - `ADMIN_EMAIL` = `gorelikgo@gmail.com` (тип: Secret)
4. Вставь код Worker (см. ниже)
5. Скопируй URL Worker и обнови в `app.js`:

```javascript
const workerUrl = 'https://твой-worker.твой-subdomain.workers.dev';
```

---

## Полный код Worker для R U Dead?

```javascript
export default {
  async fetch(request, env) {
    // CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method === 'POST') {
      try {
        const data = await request.json();
        
        // Emergency notification for R U Dead? app
        if (data.type === 'emergency') {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'R U Dead? <onboarding@resend.dev>',
              to: env.ADMIN_EMAIL,
              reply_to: data.contact_email || env.ADMIN_EMAIL,
              subject: `🚨 R U Dead? - User hasn't checked in for ${data.days_overdue} days`,
              html: `
                <h2>🚨 Emergency Alert</h2>
                <p><strong>User hasn't checked in for ${data.days_overdue} days!</strong></p>
                
                <h3>Contact Information:</h3>
                <ul>
                  <li><strong>Name:</strong> ${data.contact_name || 'Not provided'}</li>
                  <li><strong>Phone:</strong> ${data.contact_phone || 'Not provided'}</li>
                  <li><strong>Email:</strong> ${data.contact_email || 'Not provided'}</li>
                </ul>
                
                <h3>Check-in Details:</h3>
                <ul>
                  <li><strong>Last check-in:</strong> ${data.last_checkin}</li>
                  <li><strong>Days overdue:</strong> ${data.days_overdue}</li>
                </ul>
                
                <p><strong>Please check on the user immediately!</strong></p>
                
                <hr>
                <p style="color: #666; font-size: 12px;">
                  This is an automated alert from R U Dead? app.<br>
                  If you received this by mistake, please ignore it.
                </p>
              `
            })
          });
          
          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
        return new Response(JSON.stringify({ success: false, error: 'Unknown type' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    return new Response('Method not allowed', { status: 405 });
  }
}
```

---

## 🧪 Как протестировать отправку

### Быстрый тест через консоль:

1. Открой консоль браузера (F12)
2. Выполни:

```javascript
// 1. Симулировать просрочку 5 дней
localStorage.setItem('lastCheckIn', (Date.now() - 5*24*60*60*1000).toString());

// 2. Установить контакт
localStorage.setItem('emergencyContact', JSON.stringify({
    name: 'Test Contact',
    phone: '+1234567890',
    email: 'gorelikgo@gmail.com'  // Твой email для теста
}));

// 3. Вызвать отправку напрямую
const contact = JSON.parse(localStorage.getItem('emergencyContact'));
sendEmergencyNotification(contact);
```

3. Проверь консоль - должно быть `Email sent successfully`
4. Проверь почту `gorelikgo@gmail.com` - письмо должно прийти в течение минуты

### Автоматический тест:

1. Заполни форму контакта в приложении
2. Симулируй просрочку через консоль (как выше)
3. Перезагрузи страницу - письмо отправится автоматически

---

## ✅ Проверка что работает

1. **Консоль браузера** - должно быть `Email sent successfully`
2. **Cloudflare Dashboard** → **Workers & Pages** → **Logs** - там видны все запросы
3. **Resend Dashboard** → **Emails** - там видны все отправки
4. **Почта** - письмо придет на `gorelikgo@gmail.com`

---

## 🔧 Troubleshooting

### Письма не приходят

1. Проверь консоль браузера (F12) - есть ли ошибки?
2. Проверь логи Worker в Cloudflare Dashboard → Logs
3. Проверь Resend Dashboard → Emails - есть ли попытки отправки?
4. Проверь Secrets в Worker (Settings → Variables)

### CORS ошибка

- Убедись, что в Worker есть обработка OPTIONS запроса
- Проверь заголовки CORS в Worker

### 500 ошибка

- Проверь логи Worker
- Убедись, что Secrets добавлены правильно
- Проверь синтаксис кода Worker

---

## 📊 Лимиты

- **Resend:** 3,000 писем/месяц бесплатно
- **Cloudflare Worker:** 100,000 запросов/день бесплатно

---

**Готово!** Теперь при просрочке check-in контакт получит реальное письмо на email через Cloudflare Worker + Resend API.

