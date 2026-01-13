// Translations
const translations = {
    en: {
        'app-title': 'R U Dead?',
        'app-subtitle': 'Check in every 2 days',
        'status-safe': "You're Alive!",
        'status-warning': 'Check In Soon',
        'status-danger': 'R U Dead?',
        'last-checkin': 'Last check-in:',
        'next-checkin': 'Next check-in due:',
        'checkin-btn-text': 'Check In Now',
        'settings-title': 'Emergency Contact',
        'contact-name-label': 'Contact Name',
        'contact-phone-label': 'Phone Number',
        'contact-email-label': 'Email (optional)',
        'save-contact-text': 'Save Contact',
        'how-it-works-title': 'How It Works',
        'step-1': 'Press the button every 2 days to confirm you\'re alive',
        'step-2': 'If you don\'t check in, we\'ll notify your emergency contact',
        'step-3': 'All data stays private and secure on your device',
        'never': 'Never',
        'contact-saved': 'Contact saved!',
        'checkin-success': 'Check-in successful!',
        'checkin-error': 'Error saving check-in',
        'contact-error': 'Error saving contact'
    },
    ru: {
        'app-title': 'Ты умер?',
        'app-subtitle': 'Отмечайся каждые 2 дня',
        'status-safe': 'Ты жив!',
        'status-warning': 'Отметься скоро',
        'status-danger': 'Ты умер?',
        'last-checkin': 'Последняя проверка:',
        'next-checkin': 'Следующая проверка:',
        'checkin-btn-text': 'Отметиться сейчас',
        'settings-title': 'Контакт для экстренных случаев',
        'contact-name-label': 'Имя контакта',
        'contact-phone-label': 'Номер телефона',
        'contact-email-label': 'Email (необязательно)',
        'save-contact-text': 'Сохранить контакт',
        'how-it-works-title': 'Как это работает',
        'step-1': 'Нажимай кнопку каждые 2 дня, чтобы подтвердить, что ты жив',
        'step-2': 'Если не отметишься, мы уведомим твой контакт для экстренных случаев',
        'step-3': 'Все данные хранятся приватно и безопасно на твоем устройстве',
        'never': 'Никогда',
        'contact-saved': 'Контакт сохранен!',
        'checkin-success': 'Проверка успешна!',
        'checkin-error': 'Ошибка сохранения проверки',
        'contact-error': 'Ошибка сохранения контакта'
    },
    es: {
        'app-title': '¿Estás muerto?',
        'app-subtitle': 'Regístrate cada 2 días',
        'status-safe': '¡Estás vivo!',
        'status-warning': 'Regístrate pronto',
        'status-danger': '¿Estás muerto?',
        'last-checkin': 'Último registro:',
        'next-checkin': 'Próximo registro:',
        'checkin-btn-text': 'Registrarse ahora',
        'settings-title': 'Contacto de emergencia',
        'contact-name-label': 'Nombre del contacto',
        'contact-phone-label': 'Número de teléfono',
        'contact-email-label': 'Email (opcional)',
        'save-contact-text': 'Guardar contacto',
        'how-it-works-title': 'Cómo funciona',
        'step-1': 'Regístrese cada 2 días presionando el botón',
        'step-2': 'Si no se registra, se notificará a su contacto de emergencia',
        'step-3': 'Sus datos permanecen privados y seguros',
        'never': 'Nunca',
        'contact-saved': '¡Contacto guardado!',
        'checkin-success': '¡Registro exitoso!',
        'checkin-error': 'Error al guardar el registro',
        'contact-error': 'Error al guardar el contacto'
    },
    de: {
        'app-title': 'Bist du tot?',
        'app-subtitle': 'Alle 2 Tage einchecken',
        'status-safe': 'Du lebst!',
        'status-warning': 'Bald einchecken',
        'status-danger': 'Bist du tot?',
        'last-checkin': 'Letztes Einchecken:',
        'next-checkin': 'Nächstes Einchecken fällig:',
        'checkin-btn-text': 'Jetzt einchecken',
        'settings-title': 'Notfallkontakt',
        'contact-name-label': 'Kontaktname',
        'contact-phone-label': 'Telefonnummer',
        'contact-email-label': 'E-Mail (optional)',
        'save-contact-text': 'Kontakt speichern',
        'how-it-works-title': 'Wie es funktioniert',
        'step-1': 'Checken Sie alle 2 Tage ein, indem Sie die Schaltfläche drücken',
        'step-2': 'Wenn Sie nicht einchecken, wird Ihr Notfallkontakt benachrichtigt',
        'step-3': 'Ihre Daten bleiben privat und sicher',
        'never': 'Nie',
        'contact-saved': 'Kontakt gespeichert!',
        'checkin-success': 'Einchecken erfolgreich!',
        'checkin-error': 'Fehler beim Speichern des Eincheckens',
        'contact-error': 'Fehler beim Speichern des Kontakts'
    }
};

// App state
let currentLang = localStorage.getItem('lang') || 'en';
const CHECK_IN_INTERVAL = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

// Initialize app
function init() {
    loadLanguage(currentLang);
    loadContact();
    updateCheckInStatus();
    setupEventListeners();
    requestNotificationPermission();
    checkNotificationStatus();
}

// Language switching
function loadLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    const t = translations[lang];
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    });
    
    updateCheckInStatus();
}

// Load emergency contact from localStorage
function loadContact() {
    const contact = JSON.parse(localStorage.getItem('emergencyContact') || '{}');
    if (contact.name) document.getElementById('contact-name').value = contact.name;
    if (contact.phone) document.getElementById('contact-phone').value = contact.phone;
    if (contact.email) document.getElementById('contact-email').value = contact.email;
}

// Save emergency contact
function saveContact() {
    try {
        const nameInput = document.getElementById('contact-name');
        const phoneInput = document.getElementById('contact-phone');
        const emailInput = document.getElementById('contact-email');
        
        if (!nameInput || !phoneInput || !emailInput) {
            console.error('Contact form inputs not found');
            alert('Error: Form inputs not found');
            return;
        }
        
        const contact = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim()
        };
        
        if (!contact.name || !contact.phone) {
            const errorMsg = translations[currentLang]?.['contact-error'] || 'Please fill in name and phone number';
            alert(errorMsg);
            return;
        }
        
        localStorage.setItem('emergencyContact', JSON.stringify(contact));
        const successMsg = translations[currentLang]?.['contact-saved'] || 'Contact saved!';
        alert(successMsg);
    } catch (error) {
        console.error('Error saving contact:', error);
        alert('Error saving contact. Please try again.');
    }
}

// Check in function
function checkIn() {
    const now = new Date().getTime();
    localStorage.setItem('lastCheckIn', now.toString());
    updateCheckInStatus();
    
    // Show success message
    const btn = document.getElementById('checkin-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = translations[currentLang]['checkin-success'];
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 2000);
    
    // Schedule next notification
    scheduleNotification();
}

// Update check-in status display
function updateCheckInStatus() {
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const statusCard = document.getElementById('status-card');
    const statusIcon = document.getElementById('status-icon');
    const statusTitle = document.getElementById('status-title');
    const lastCheckInEl = document.getElementById('last-checkin');
    const nextCheckInEl = document.getElementById('next-checkin');
    
    if (!lastCheckIn) {
        statusCard.className = 'status-card danger';
        statusIcon.textContent = '⚠️';
        statusTitle.textContent = translations[currentLang]['status-danger'];
        lastCheckInEl.textContent = translations[currentLang]['never'];
        nextCheckInEl.textContent = translations[currentLang]['never'];
        return;
    }
    
    const lastCheckInTime = parseInt(lastCheckIn);
    const now = new Date().getTime();
    const timeSinceCheckIn = now - lastCheckInTime;
    const timeUntilNext = CHECK_IN_INTERVAL - timeSinceCheckIn;
    
    // Format last check-in time
    const lastDate = new Date(lastCheckInTime);
    const daysAgo = Math.floor(timeSinceCheckIn / (24 * 60 * 60 * 1000));
    const hoursAgo = Math.floor((timeSinceCheckIn % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    
    let lastCheckInText = '';
    if (daysAgo === 0) {
        lastCheckInText = hoursAgo === 0 ? 'Just now' : `${hoursAgo}h ago`;
    } else if (daysAgo === 1) {
        lastCheckInText = '1 day ago';
    } else {
        lastCheckInText = `${daysAgo} days ago`;
    }
    
    if (currentLang === 'ru') {
        if (daysAgo === 0) {
            lastCheckInText = hoursAgo === 0 ? 'Только что' : `${hoursAgo}ч назад`;
        } else if (daysAgo === 1) {
            lastCheckInText = '1 день назад';
        } else if (daysAgo < 5) {
            lastCheckInText = `${daysAgo} дня назад`;
        } else {
            lastCheckInText = `${daysAgo} дней назад`;
        }
    }
    
    lastCheckInEl.textContent = lastCheckInText;
    
    // Update status based on time
    if (timeUntilNext <= 0) {
        // Overdue
        statusCard.className = 'status-card danger';
        statusIcon.textContent = '🚨';
        statusTitle.textContent = translations[currentLang]['status-danger'];
        nextCheckInEl.textContent = translations[currentLang]['never'];
        
        // Check if we should notify emergency contact
        checkEmergencyNotification(lastCheckInTime);
    } else if (timeUntilNext <= 12 * 60 * 60 * 1000) {
        // Less than 12 hours remaining
        statusCard.className = 'status-card warning';
        statusIcon.textContent = '⚠️';
        statusTitle.textContent = translations[currentLang]['status-warning'];
        const hoursLeft = Math.floor(timeUntilNext / (60 * 60 * 1000));
        nextCheckInEl.textContent = `${hoursLeft}h`;
    } else {
        // Safe
        statusCard.className = 'status-card safe';
        statusIcon.textContent = '✅';
        statusTitle.textContent = translations[currentLang]['status-safe'];
        const daysLeft = Math.floor(timeUntilNext / (24 * 60 * 60 * 1000));
        const hoursLeft = Math.floor((timeUntilNext % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        nextCheckInEl.textContent = `${daysLeft}d ${hoursLeft}h`;
    }
}

// Check if emergency notification should be sent
function checkEmergencyNotification(lastCheckInTime) {
    const contact = JSON.parse(localStorage.getItem('emergencyContact') || '{}');
    if (!contact.name || !contact.phone) return;
    
    const now = new Date().getTime();
    const timeSinceCheckIn = now - lastCheckInTime;
    
    // Only notify if overdue by more than 2 days (4 days total)
    if (timeSinceCheckIn > CHECK_IN_INTERVAL * 2) {
        const lastNotification = localStorage.getItem('lastEmergencyNotification');
        const notificationTime = lastNotification ? parseInt(lastNotification) : 0;
        
        // Don't notify more than once per day
        if (now - notificationTime > 24 * 60 * 60 * 1000) {
            sendEmergencyNotification(contact);
            localStorage.setItem('lastEmergencyNotification', now.toString());
        }
    }
}

// Send emergency notification via Cloudflare Worker + Resend API
async function sendEmergencyNotification(contact) {
    console.log('Emergency notification triggered for:', contact);
    
    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('R U Dead? Alert', {
            body: `Emergency contact ${contact.name} should be notified - user hasn't checked in for 4+ days`,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="%231a1a1a"/><circle cx="96" cy="96" r="70" fill="none" stroke="%23ff4444" stroke-width="15"/><text x="96" y="120" font-size="100" fill="%23ff4444" text-anchor="middle" font-weight="bold">?</text></svg>'
        });
    }
    
    // Send email via Cloudflare Worker + Resend API
    const workerUrl = 'https://rudead.gorelikgo.workers.dev';
    
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const daysOverdue = lastCheckIn 
        ? Math.floor((Date.now() - parseInt(lastCheckIn)) / (24 * 60 * 60 * 1000))
        : 0;
    
    try {
        const response = await fetch(workerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'emergency',
                contact_name: contact.name,
                contact_phone: contact.phone,
                contact_email: contact.email || contact.phone,
                days_overdue: daysOverdue,
                last_checkin: lastCheckIn 
                    ? new Date(parseInt(lastCheckIn)).toLocaleString()
                    : 'Never'
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('Emergency email sent successfully:', result);
            return { success: true, result };
        } else {
            console.error('Failed to send email:', result);
            return { success: false, error: result.error };
        }
    } catch (error) {
        console.error('Error sending emergency notification:', error);
        return { success: false, error: error.message };
    }
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Check notification status
function checkNotificationStatus() {
    if ('Notification' in window && Notification.permission === 'granted') {
        scheduleNotification();
    }
}

// Schedule notification for next check-in
function scheduleNotification() {
    if ('Notification' in window && Notification.permission !== 'granted') return;
    
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    if (!lastCheckIn) return;
    
    const nextCheckInTime = parseInt(lastCheckIn) + CHECK_IN_INTERVAL;
    const now = new Date().getTime();
    const timeUntilNotification = nextCheckInTime - now;
    
    if (timeUntilNotification > 0) {
        setTimeout(() => {
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('R U Dead? Reminder', {
                    body: 'Time to check in! Tap the button to confirm you\'re alive.',
                    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="%231a1a1a"/><circle cx="96" cy="96" r="70" fill="none" stroke="%23ff4444" stroke-width="15"/><text x="96" y="120" font-size="100" fill="%23ff4444" text-anchor="middle" font-weight="bold">?</text></svg>',
                    tag: 'checkin-reminder'
                });
            }
        }, timeUntilNotification);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadLanguage(btn.dataset.lang);
        });
    });
    
    // Check-in button
    document.getElementById('checkin-btn').addEventListener('click', checkIn);
    
    // Save contact button
    document.getElementById('save-contact-btn').addEventListener('click', saveContact);
    
    // Update status every minute
    setInterval(updateCheckInStatus, 60 * 1000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

