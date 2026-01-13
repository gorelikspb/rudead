// Translations
const translations = {
    en: {
        'app-title': 'Are You Dead?',
        'app-subtitle': 'Check in every 2 days',
        'status-safe': "You're Alive!",
        'status-warning': 'Check In Soon',
        'status-danger': 'Are You Dead?',
        'last-checkin': 'Last check-in:',
        'next-checkin': 'Next check-in due:',
        'checkin-btn-text': 'Check In Now',
        'settings-title': 'Emergency Contact',
        'contact-name-label': 'Contact Name',
        'contact-email-label': 'Email',
        'save-contact-text': 'Save Contact',
        'how-it-works-title': 'How It Works',
        'app-description': 'A safety companion for people living alone. Whether you\'re an office worker living solo, a student away from home, an introvert, someone with depression, or anyone choosing a solitary lifestyle - this app is for you.',
        'step-1': 'Check in every 2 days by pressing the big button to confirm you\'re alive',
        'step-2': 'If you don\'t check in, we\'ll automatically notify your emergency contact',
        'step-3': 'All your data stays private and secure on your device',
        'why-needed': 'It\'s scary to think that someone living alone could die unnoticed with no one to call for help. This app ensures someone will know if something happens to you.',
        'never': 'Never',
        'contact-saved': 'Contact saved!',
        'checkin-success': 'Check-in successful!',
        'checkin-error': 'Error saving check-in',
        'contact-error': 'Error saving contact',
        'user-email-title': 'Your Email (for sync across devices)',
        'user-email-description': 'Save your email to check in from any device. Your check-in status will be synced.',
        'user-email-label': 'Your Email',
        'save-user-email-text': 'Save Email',
        'user-email-saved': 'Email saved! You can now check in from any device.',
        'user-email-error': 'Please enter a valid email address',
        'contact-title': 'Contact Developer',
        'contact-description': 'Have a question or feedback? Get in touch:',
        'contact-email-label-input': 'Your Email',
        'contact-message-label': 'Message',
        'send-contact-text': 'Send Message',
        'contact-sent': 'Message sent! Thank you for your feedback.',
        'contact-error': 'Please fill in your email and message',
        'share-title': 'Share This App',
        'share-description': 'Help others stay safe by sharing this app with friends and family',
        'share-text': 'Check out this safety check-in app for people living alone! Are You Dead? App - Check in every 2 days to stay safe.',
        'share-copied': 'Copied!',
        'punchline-label': 'Choose a message:',
        'seo-article-title': 'Are You Dead? App: A Safety Net for People Living Alone',
        'seo-para-1': 'In today\'s fast-paced world, millions of people live alone. Whether you\'re an office worker in a big city, a student studying far from home, an introvert who prefers solitude, or someone dealing with depression - living alone comes with unique challenges. One of the most frightening realities is the possibility of something happening to you with no one around to notice or call for help.',
        'seo-h3-1': 'The Problem: Dying Alone and Unnoticed',
        'seo-para-2': 'It\'s a sobering thought, but it happens more often than we\'d like to admit. People living alone can experience medical emergencies, accidents, or other critical situations where time is of the essence. Without someone checking in regularly, these situations can go unnoticed for days or even weeks. The "Are You Dead?" app, inspired by the viral Chinese app Sileme (Ты умер?), addresses this very real concern.',
        'seo-h3-2': 'How Are You Dead? App Works',
        'seo-para-3': 'The concept is simple yet powerful: you check in every 2 days by pressing a button to confirm you\'re alive and well. If you don\'t check in within the 2-day window, the app automatically sends an email notification to your designated emergency contact. This ensures that if something happens to you, someone will know and can take action.',
        'seo-h3-3': 'Who Is This App For?',
        'seo-para-4': 'This safety check-in app is designed for anyone living alone who wants peace of mind:',
        'seo-list-item-1': 'Office workers living solo: Long hours at work, coming home to an empty apartment - this app ensures someone knows if you don\'t make it home.',
        'seo-list-item-2': 'Students away from home: Living in a dorm or apartment far from family, this app gives your loved ones a way to know you\'re safe.',
        'seo-list-item-3': 'Introverts and people who prefer solitude: You may enjoy living alone, but that doesn\'t mean you shouldn\'t have a safety net.',
        'seo-list-item-4': 'People dealing with depression or mental health challenges: Regular check-ins can provide structure and ensure someone knows if you need help.',
        'seo-list-item-5': 'Elderly individuals living independently: For seniors who want to maintain independence while having a safety mechanism in place.',
        'seo-list-item-6': 'Anyone choosing a solitary lifestyle: Whether by choice or circumstance, living alone shouldn\'t mean being completely isolated.',
        'seo-h3-4': 'Privacy and Security',
        'seo-para-5': 'Your privacy is paramount. All data is stored locally on your device. The app doesn\'t track your location, doesn\'t access your contacts, and doesn\'t share your information with third parties. The only time your emergency contact receives a notification is when you fail to check in for more than 2 days - and even then, only the information you\'ve provided is shared.',
        'seo-h3-5': 'Inspired by Sileme (Ты умер?)',
        'seo-para-6': 'The "Are You Dead?" app is inspired by Sileme, a Chinese app that gained viral popularity for its provocative name and important purpose. The concept resonated with millions of people who live alone and worry about what might happen if they become unable to call for help. This app brings that same peace of mind to a global audience, available in multiple languages including English, Spanish, German, French, Russian, and Chinese.',
        'seo-h3-6': 'Free and Easy to Use',
        'seo-para-7': 'The app is completely free to use. There are no subscriptions, no hidden fees, and no premium features locked behind a paywall. Simply set up your emergency contact, check in every 2 days, and rest easy knowing someone will be notified if something happens to you. The interface is simple and intuitive - just one button to press every 2 days.',
        'seo-h3-7': 'Why Every 2 Days?',
        'seo-para-8': 'The 2-day check-in interval strikes a balance between being frequent enough to catch emergencies early, while not being so frequent that it becomes a burden. Two days is long enough that you won\'t forget to check in during normal circumstances, but short enough that if something serious happens, help can be notified relatively quickly.',
        'seo-h3-8': 'Getting Started',
        'seo-para-9': 'Getting started with "Are You Dead?" is simple:',
        'seo-ordered-item-1': 'Add your emergency contact\'s name and email address',
        'seo-ordered-item-2': 'Press the "Check In Now" button to confirm you\'re alive',
        'seo-ordered-item-3': 'Remember to check in every 2 days',
        'seo-ordered-item-4': 'If you don\'t check in, your emergency contact will automatically receive an email notification',
        'seo-para-10': 'It\'s that simple. A small action every 2 days can provide significant peace of mind for you and your loved ones. Download the app today and take control of your safety, even when living alone.'
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
        'contact-email-label': 'Email',
        'save-contact-text': 'Сохранить контакт',
        'how-it-works-title': 'Как это работает',
        'app-description': 'Компаньон по безопасности для людей, живущих в одиночку. Независимо от того, являетесь ли вы офисным работником, живущим в одиночку, студентом вдали от дома, интровертом, человеком с депрессией или человеком, сознательно выбравшим уединенный образ жизни - это приложение для вас.',
        'step-1': 'Отмечайся каждые 2 дня, нажимая большую кнопку, чтобы подтвердить, что ты жив',
        'step-2': 'Если не отметишься, мы автоматически уведомим твой контакт для экстренных случаев',
        'step-3': 'Все твои данные остаются приватными и безопасными на твоем устройстве',
        'why-needed': 'Страшно, что человек, живущий один, может умереть незаметно, и некому будет позвать на помощь. Это приложение гарантирует, что кто-то узнает, если с тобой что-то случится.',
        'never': 'Никогда',
        'contact-saved': 'Контакт сохранен!',
        'checkin-success': 'Проверка успешна!',
        'checkin-error': 'Ошибка сохранения проверки',
        'contact-error': 'Ошибка сохранения контакта',
        'user-email-title': 'Твой Email (для синхронизации между устройствами)',
        'user-email-description': 'Сохрани свой email, чтобы отмечаться с любого устройства. Статус проверки будет синхронизирован.',
        'user-email-label': 'Твой Email',
        'save-user-email-text': 'Сохранить Email',
        'user-email-saved': 'Email сохранен! Теперь ты можешь отмечаться с любого устройства.',
        'user-email-error': 'Введи корректный email адрес',
        'contact-title': 'Связаться с разработчиком',
        'contact-description': 'Есть вопрос или отзыв? Напиши:',
        'contact-email-label-input': 'Твой Email',
        'contact-message-label': 'Сообщение',
        'send-contact-text': 'Отправить сообщение',
        'contact-sent': 'Сообщение отправлено! Спасибо за отзыв.',
        'contact-error': 'Заполни email и сообщение',
        'share-title': 'Поделиться приложением',
        'share-description': 'Помоги другим оставаться в безопасности, поделившись этим приложением с друзьями и семьей',
        'share-text': 'Посмотри это приложение для проверки безопасности для людей, живущих одни! Ты умер? - Отмечайся каждые 2 дня, чтобы оставаться в безопасности.',
        'share-copied': 'Скопировано!',
        'punchline-label': 'Выбери сообщение:',
        'seo-article-title': 'Are You Dead? App: Защита для людей, живущих одни',
        'seo-para-1': 'В современном мире миллионы людей живут одни. Будь ты офисный работник в большом городе, студент, учащийся далеко от дома, интроверт, предпочитающий одиночество, или человек, борющийся с депрессией - жизнь в одиночестве имеет свои уникальные вызовы. Одна из самых пугающих реальностей - это возможность того, что с тобой что-то случится, и никто не заметит и не вызовет помощь.',
        'seo-h3-1': 'Проблема: Умереть в одиночестве незамеченным',
        'seo-para-2': 'Это отрезвляющая мысль, но это происходит чаще, чем нам хотелось бы признать. Люди, живущие одни, могут столкнуться с медицинскими чрезвычайными ситуациями, несчастными случаями или другими критическими ситуациями, где время имеет решающее значение. Без регулярных проверок эти ситуации могут остаться незамеченными в течение дней или даже недель. Приложение "Are You Dead?", вдохновленное вирусным китайским приложением Sileme (Ты умер?), решает эту очень реальную проблему.',
        'seo-h3-2': 'Как работает приложение Are You Dead?',
        'seo-para-3': 'Концепция проста, но мощна: ты отмечаешься каждые 2 дня, нажимая кнопку, чтобы подтвердить, что ты жив и здоров. Если ты не отметишься в течение 2-дневного окна, приложение автоматически отправляет уведомление по email твоему назначенному контакту для экстренных случаев. Это гарантирует, что если с тобой что-то случится, кто-то узнает и сможет принять меры.',
        'seo-h3-3': 'Для кого это приложение?',
        'seo-para-4': 'Это приложение для проверки безопасности разработано для всех, кто живет один и хочет спокойствия:',
        'seo-list-item-1': 'Офисные работники, живущие одни: Долгие рабочие часы, возвращение домой в пустую квартиру - это приложение гарантирует, что кто-то узнает, если ты не вернешься домой.',
        'seo-list-item-2': 'Студенты вдали от дома: Жизнь в общежитии или квартире далеко от семьи, это приложение дает твоим близким способ узнать, что ты в безопасности.',
        'seo-list-item-3': 'Интроверты и люди, предпочитающие одиночество: Ты можешь наслаждаться жизнью в одиночестве, но это не значит, что у тебя не должно быть защитной сети.',
        'seo-list-item-4': 'Люди, борющиеся с депрессией или проблемами психического здоровья: Регулярные проверки могут обеспечить структуру и гарантировать, что кто-то узнает, если тебе нужна помощь.',
        'seo-list-item-5': 'Пожилые люди, живущие самостоятельно: Для пожилых людей, которые хотят сохранить независимость, имея при этом механизм безопасности.',
        'seo-list-item-6': 'Все, кто выбирает одинокий образ жизни: Будь то по выбору или по обстоятельствам, жизнь в одиночестве не должна означать полную изоляцию.',
        'seo-h3-4': 'Конфиденциальность и безопасность',
        'seo-para-5': 'Твоя конфиденциальность имеет первостепенное значение. Все данные хранятся локально на твоем устройстве. Приложение не отслеживает твое местоположение, не получает доступ к твоим контактам и не делится твоей информацией с третьими лицами. Единственный раз, когда твой контакт для экстренных случаев получает уведомление - это когда ты не отмечаешься более 2 дней - и даже тогда делится только информация, которую ты предоставил.',
        'seo-h3-5': 'Вдохновлено Sileme (Ты умер?)',
        'seo-para-6': 'Приложение "Are You Dead?" вдохновлено Sileme, китайским приложением, которое получило вирусную популярность благодаря провокационному названию и важной цели. Концепция нашла отклик у миллионов людей, которые живут одни и беспокоятся о том, что может произойти, если они не смогут позвать на помощь. Это приложение приносит то же спокойствие глобальной аудитории, доступно на нескольких языках, включая английский, испанский, немецкий, французский, русский и китайский.',
        'seo-h3-6': 'Бесплатно и легко использовать',
        'seo-para-7': 'Приложение полностью бесплатно в использовании. Нет подписок, нет скрытых платежей и нет премиум-функций, заблокированных за платным доступом. Просто настрой контакт для экстренных случаев, отмечайся каждые 2 дня и отдыхай спокойно, зная, что кто-то будет уведомлен, если с тобой что-то случится. Интерфейс прост и интуитивен - просто одна кнопка для нажатия каждые 2 дня.',
        'seo-h3-7': 'Почему каждые 2 дня?',
        'seo-para-8': '2-дневный интервал проверки находит баланс между достаточной частотой для раннего обнаружения чрезвычайных ситуаций и не слишком частой, чтобы стать обузой. Два дня достаточно долго, чтобы ты не забыл отметить во время обычных обстоятельств, но достаточно коротко, чтобы если что-то серьезное произойдет, помощь может быть уведомлена относительно быстро.',
        'seo-h3-8': 'Начало работы',
        'seo-para-9': 'Начать работу с "Are You Dead?" просто:',
        'seo-ordered-item-1': 'Добавь имя и email адрес твоего контакта для экстренных случаев',
        'seo-ordered-item-2': 'Нажми кнопку "Отметиться сейчас", чтобы подтвердить, что ты жив',
        'seo-ordered-item-3': 'Помни отмечаться каждые 2 дня',
        'seo-ordered-item-4': 'Если ты не отметишься, твой контакт для экстренных случаев автоматически получит уведомление по email',
        'seo-para-10': 'Это так просто. Небольшое действие каждые 2 дня может обеспечить значительное спокойствие для тебя и твоих близких. Скачай приложение сегодня и возьми контроль над своей безопасностью, даже живя один.'
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
        'contact-email-label': 'Email',
        'save-contact-text': 'Guardar contacto',
        'how-it-works-title': 'Cómo Funciona',
        'app-description': 'Un compañero de seguridad para personas que viven solas. Ya seas un trabajador de oficina viviendo solo, un estudiante lejos de casa, un introvertido, alguien con depresión, o cualquiera que elija un estilo de vida solitario - esta aplicación es para ti.',
        'step-1': 'Regístrate cada 2 días presionando el botón grande para confirmar que estás vivo',
        'step-2': 'Si no te registras, notificaremos automáticamente a tu contacto de emergencia',
        'step-3': 'Todos tus datos permanecen privados y seguros en tu dispositivo',
        'why-needed': 'Es aterrador pensar que alguien que vive solo podría morir sin que nadie se dé cuenta y sin nadie que llame por ayuda. Esta aplicación asegura que alguien sabrá si algo te pasa.',
        'never': 'Nunca',
        'contact-saved': '¡Contacto guardado!',
        'checkin-success': '¡Registro exitoso!',
        'checkin-error': 'Error al guardar el registro',
        'contact-error': 'Error al guardar el contacto',
        'user-email-title': 'Tu Email (para sincronizar entre dispositivos)',
        'user-email-description': 'Guarda tu email para registrarte desde cualquier dispositivo. Tu estado de registro se sincronizará.',
        'user-email-label': 'Tu Email',
        'save-user-email-text': 'Guardar Email',
        'user-email-saved': '¡Email guardado! Ahora puedes registrarte desde cualquier dispositivo.',
        'user-email-error': 'Por favor ingresa una dirección de email válida',
        'contact-title': 'Contactar al Desarrollador',
        'contact-description': '¿Tienes una pregunta o comentario? Ponte en contacto:',
        'contact-email-label-input': 'Tu Email',
        'contact-message-label': 'Mensaje',
        'send-contact-text': 'Enviar Mensaje',
        'contact-sent': '¡Mensaje enviado! Gracias por tus comentarios.',
        'contact-error': 'Por favor completa tu email y mensaje',
        'share-title': 'Compartir Esta Aplicación',
        'share-description': 'Ayuda a otros a mantenerse seguros compartiendo esta aplicación con amigos y familiares',
        'share-text': '¡Mira esta aplicación de registro de seguridad para personas que viven solas! ¿Estás muerto? App - Regístrate cada 2 días para mantenerte seguro.',
        'share-copied': '¡Copiado!',
        'punchline-label': 'Elige un mensaje:',
        'seo-article-title': 'Are You Dead? App: Una Red de Seguridad para Personas que Viven Solas',
        'seo-para-1': 'En el mundo acelerado de hoy, millones de personas viven solas. Ya seas un trabajador de oficina en una gran ciudad, un estudiante lejos de casa, un introvertido que prefiere la soledad, o alguien que lidia con la depresión - vivir solo viene con desafíos únicos. Una de las realidades más aterradoras es la posibilidad de que algo te pase sin que nadie esté cerca para notarlo o llamar por ayuda.',
        'seo-h3-1': 'El Problema: Morir Solo y Desapercibido',
        'seo-para-2': 'Es un pensamiento aleccionador, pero sucede con más frecuencia de la que nos gustaría admitir. Las personas que viven solas pueden experimentar emergencias médicas, accidentes u otras situaciones críticas donde el tiempo es esencial. Sin alguien que revise regularmente, estas situaciones pueden pasar desapercibidas durante días o incluso semanas. La aplicación "Are You Dead?", inspirada en la aplicación viral china Sileme (¿Estás muerto?), aborda esta preocupación muy real.',
        'seo-h3-2': 'Cómo Funciona Are You Dead? App',
        'seo-para-3': 'El concepto es simple pero poderoso: te registras cada 2 días presionando un botón para confirmar que estás vivo y bien. Si no te registras dentro de la ventana de 2 días, la aplicación envía automáticamente una notificación por email a tu contacto de emergencia designado. Esto asegura que si algo te pasa, alguien lo sabrá y puede tomar medidas.',
        'seo-h3-3': '¿Para Quién Es Esta Aplicación?',
        'seo-para-4': 'Esta aplicación de registro de seguridad está diseñada para cualquiera que viva solo y quiera tranquilidad:',
        'seo-list-item-1': 'Trabajadores de oficina que viven solos: Largas horas de trabajo, llegando a casa a un apartamento vacío - esta aplicación asegura que alguien sepa si no llegas a casa.',
        'seo-list-item-2': 'Estudiantes lejos de casa: Viviendo en una residencia o apartamento lejos de la familia, esta aplicación le da a tus seres queridos una forma de saber que estás seguro.',
        'seo-list-item-3': 'Introvertidos y personas que prefieren la soledad: Puedes disfrutar viviendo solo, pero eso no significa que no debas tener una red de seguridad.',
        'seo-list-item-4': 'Personas que lidian con depresión o desafíos de salud mental: Los registros regulares pueden proporcionar estructura y asegurar que alguien sepa si necesitas ayuda.',
        'seo-list-item-5': 'Personas mayores que viven independientemente: Para adultos mayores que quieren mantener la independencia mientras tienen un mecanismo de seguridad en su lugar.',
        'seo-list-item-6': 'Cualquiera que elija un estilo de vida solitario: Ya sea por elección o circunstancia, vivir solo no debería significar estar completamente aislado.',
        'seo-h3-4': 'Privacidad y Seguridad',
        'seo-para-5': 'Tu privacidad es primordial. Todos los datos se almacenan localmente en tu dispositivo. La aplicación no rastrea tu ubicación, no accede a tus contactos y no comparte tu información con terceros. La única vez que tu contacto de emergencia recibe una notificación es cuando no te registras por más de 2 días - y aún así, solo se comparte la información que has proporcionado.',
        'seo-h3-5': 'Inspirado por Sileme (¿Estás muerto?)',
        'seo-para-6': 'La aplicación "Are You Dead?" está inspirada en Sileme, una aplicación china que ganó popularidad viral por su nombre provocativo y propósito importante. El concepto resonó con millones de personas que viven solas y se preocupan por lo que podría pasar si no pueden pedir ayuda. Esta aplicación trae esa misma tranquilidad a una audiencia global, disponible en múltiples idiomas incluyendo inglés, español, alemán, francés, ruso y chino.',
        'seo-h3-6': 'Gratis y Fácil de Usar',
        'seo-para-7': 'La aplicación es completamente gratuita de usar. No hay suscripciones, no hay tarifas ocultas y no hay funciones premium bloqueadas detrás de un muro de pago. Simplemente configura tu contacto de emergencia, regístrate cada 2 días y descansa tranquilo sabiendo que alguien será notificado si algo te pasa. La interfaz es simple e intuitiva - solo un botón para presionar cada 2 días.',
        'seo-h3-7': '¿Por Qué Cada 2 Días?',
        'seo-para-8': 'El intervalo de registro de 2 días encuentra un equilibrio entre ser lo suficientemente frecuente para detectar emergencias temprano, sin ser tan frecuente que se convierta en una carga. Dos días es lo suficientemente largo para que no olvides registrarte en circunstancias normales, pero lo suficientemente corto para que si algo serio pasa, la ayuda puede ser notificada relativamente rápido.',
        'seo-h3-8': 'Cómo Empezar',
        'seo-para-9': 'Empezar con "Are You Dead?" es simple:',
        'seo-ordered-item-1': 'Agrega el nombre y dirección de email de tu contacto de emergencia',
        'seo-ordered-item-2': 'Presiona el botón "Registrarse ahora" para confirmar que estás vivo',
        'seo-ordered-item-3': 'Recuerda registrarte cada 2 días',
        'seo-ordered-item-4': 'Si no te registras, tu contacto de emergencia recibirá automáticamente una notificación por email',
        'seo-para-10': 'Es así de simple. Una pequeña acción cada 2 días puede proporcionar una tranquilidad significativa para ti y tus seres queridos. Descarga la aplicación hoy y toma control de tu seguridad, incluso cuando vives solo.'
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
        'contact-email-label': 'E-Mail',
        'save-contact-text': 'Kontakt speichern',
        'how-it-works-title': 'Wie es funktioniert',
        'app-description': 'Ein Sicherheitsbegleiter für Menschen, die allein leben. Ob du ein allein lebender Büroangestellter, ein Student weit weg von zu Hause, ein Introvertierter, jemand mit Depressionen oder jemand bist, der bewusst einen einsamen Lebensstil gewählt hat - diese App ist für dich.',
        'step-1': 'Melde dich alle 2 Tage, indem du den großen Button drückst, um zu bestätigen, dass du lebst',
        'step-2': 'Wenn du dich nicht meldest, benachrichtigen wir automatisch deinen Notfallkontakt',
        'step-3': 'Alle deine Daten bleiben privat und sicher auf deinem Gerät',
        'why-needed': 'Es ist beängstigend zu denken, dass jemand, der allein lebt, unbemerkt sterben könnte, ohne dass jemand um Hilfe ruft. Diese App stellt sicher, dass jemand Bescheid weiß, wenn dir etwas passiert.',
        'never': 'Nie',
        'contact-saved': 'Kontakt gespeichert!',
        'checkin-success': 'Einchecken erfolgreich!',
        'checkin-error': 'Fehler beim Speichern des Eincheckens',
        'contact-error': 'Fehler beim Speichern des Kontakts',
        'user-email-title': 'Deine E-Mail (für Synchronisation zwischen Geräten)',
        'user-email-description': 'Speichere deine E-Mail, um dich von jedem Gerät aus einzutragen. Dein Check-in-Status wird synchronisiert.',
        'user-email-label': 'Deine E-Mail',
        'save-user-email-text': 'E-Mail speichern',
        'user-email-saved': 'E-Mail gespeichert! Du kannst dich jetzt von jedem Gerät aus eintragen.',
        'user-email-error': 'Bitte gib eine gültige E-Mail-Adresse ein',
        'contact-title': 'Entwickler kontaktieren',
        'contact-description': 'Hast du eine Frage oder Feedback? Kontaktiere uns:',
        'contact-email-label-input': 'Deine E-Mail',
        'contact-message-label': 'Nachricht',
        'send-contact-text': 'Nachricht senden',
        'contact-sent': 'Nachricht gesendet! Vielen Dank für dein Feedback.',
        'contact-error': 'Bitte gib deine E-Mail und Nachricht ein',
        'share-title': 'Diese App teilen',
        'share-description': 'Hilf anderen, sicher zu bleiben, indem du diese App mit Freunden und Familie teilst',
        'share-text': 'Schau dir diese Sicherheits-Check-in-App für Alleinlebende an! Bist du tot? App - Melde dich alle 2 Tage an, um sicher zu bleiben.',
        'share-copied': 'Kopiert!',
        'punchline-label': 'Wähle eine Nachricht:',
        'seo-article-title': 'Are You Dead? App: Ein Sicherheitsnetz für Alleinlebende',
        'seo-para-1': 'In der schnelllebigen Welt von heute leben Millionen von Menschen allein. Ob du ein Büroangestellter in einer großen Stadt bist, ein Student weit weg von zu Hause, ein Introvertierter, der Einsamkeit bevorzugt, oder jemand, der mit Depressionen zu kämpfen hat - allein zu leben bringt einzigartige Herausforderungen mit sich. Eine der beängstigendsten Realitäten ist die Möglichkeit, dass dir etwas passiert, ohne dass jemand in der Nähe ist, der es bemerkt oder Hilfe holt.',
        'seo-h3-1': 'Das Problem: Allein und unbemerkt sterben',
        'seo-para-2': 'Es ist ein nüchterner Gedanke, aber es passiert häufiger, als wir zugeben möchten. Menschen, die allein leben, können medizinische Notfälle, Unfälle oder andere kritische Situationen erleben, in denen Zeit von entscheidender Bedeutung ist. Ohne jemanden, der regelmäßig nach dem Rechten sieht, können diese Situationen tagelang oder sogar wochenlang unbemerkt bleiben. Die App "Are You Dead?", inspiriert von der viralen chinesischen App Sileme (Bist du tot?), befasst sich mit dieser sehr realen Sorge.',
        'seo-h3-2': 'Wie funktioniert Are You Dead? App',
        'seo-para-3': 'Das Konzept ist einfach, aber kraftvoll: Du meldest dich alle 2 Tage, indem du einen Button drückst, um zu bestätigen, dass du lebst und gesund bist. Wenn du dich nicht innerhalb des 2-Tage-Fensters meldest, sendet die App automatisch eine E-Mail-Benachrichtigung an deinen festgelegten Notfallkontakt. Dies stellt sicher, dass jemand Bescheid weiß und Maßnahmen ergreifen kann, wenn dir etwas passiert.',
        'seo-h3-3': 'Für wen ist diese App?',
        'seo-para-4': 'Diese Sicherheits-Check-in-App ist für alle gedacht, die allein leben und Seelenfrieden wollen:',
        'seo-list-item-1': 'Büroangestellte, die allein leben: Lange Arbeitszeiten, nach Hause in eine leere Wohnung kommen - diese App stellt sicher, dass jemand weiß, wenn du nicht nach Hause kommst.',
        'seo-list-item-2': 'Studenten weit weg von zu Hause: In einem Wohnheim oder einer Wohnung weit weg von der Familie leben, diese App gibt deinen Liebsten eine Möglichkeit zu wissen, dass du sicher bist.',
        'seo-list-item-3': 'Introvertierte und Menschen, die Einsamkeit bevorzugen: Du magst es vielleicht, allein zu leben, aber das bedeutet nicht, dass du kein Sicherheitsnetz haben solltest.',
        'seo-list-item-4': 'Menschen, die mit Depressionen oder psychischen Gesundheitsproblemen zu kämpfen haben: Regelmäßige Check-ins können Struktur bieten und sicherstellen, dass jemand weiß, wenn du Hilfe brauchst.',
        'seo-list-item-5': 'Ältere Menschen, die unabhängig leben: Für Senioren, die ihre Unabhängigkeit bewahren wollen, während sie einen Sicherheitsmechanismus haben.',
        'seo-list-item-6': 'Jeder, der einen einsamen Lebensstil wählt: Ob aus Wahl oder Umständen, allein zu leben sollte nicht bedeuten, völlig isoliert zu sein.',
        'seo-h3-4': 'Datenschutz und Sicherheit',
        'seo-para-5': 'Deine Privatsphäre hat oberste Priorität. Alle Daten werden lokal auf deinem Gerät gespeichert. Die App verfolgt deinen Standort nicht, greift nicht auf deine Kontakte zu und teilt deine Informationen nicht mit Dritten. Die einzige Zeit, in der dein Notfallkontakt eine Benachrichtigung erhält, ist, wenn du dich länger als 2 Tage nicht meldest - und selbst dann wird nur die von dir bereitgestellte Information geteilt.',
        'seo-h3-5': 'Inspiriert von Sileme (Bist du tot?)',
        'seo-para-6': 'Die App "Are You Dead?" ist inspiriert von Sileme, einer chinesischen App, die virale Popularität für ihren provokativen Namen und wichtigen Zweck erlangte. Das Konzept fand Anklang bei Millionen von Menschen, die allein leben und sich Sorgen machen, was passieren könnte, wenn sie nicht in der Lage sind, um Hilfe zu rufen. Diese App bringt denselben Seelenfrieden zu einem globalen Publikum, verfügbar in mehreren Sprachen, einschließlich Englisch, Spanisch, Deutsch, Französisch, Russisch und Chinesisch.',
        'seo-h3-6': 'Kostenlos und einfach zu verwenden',
        'seo-para-7': 'Die App ist völlig kostenlos zu verwenden. Es gibt keine Abonnements, keine versteckten Gebühren und keine Premium-Funktionen, die hinter einer Paywall gesperrt sind. Richte einfach deinen Notfallkontakt ein, melde dich alle 2 Tage und ruhe dich aus, wissend, dass jemand benachrichtigt wird, wenn dir etwas passiert. Die Benutzeroberfläche ist einfach und intuitiv - nur ein Button zum Drücken alle 2 Tage.',
        'seo-h3-7': 'Warum alle 2 Tage?',
        'seo-para-8': 'Das 2-Tage-Check-in-Intervall findet ein Gleichgewicht zwischen häufig genug, um Notfälle früh zu erkennen, ohne so häufig zu sein, dass es zur Belastung wird. Zwei Tage sind lang genug, dass du nicht vergisst, dich unter normalen Umständen zu melden, aber kurz genug, dass, wenn etwas Ernstes passiert, Hilfe relativ schnell benachrichtigt werden kann.',
        'seo-h3-8': 'Erste Schritte',
        'seo-para-9': 'Mit "Are You Dead?" zu beginnen ist einfach:',
        'seo-ordered-item-1': 'Füge den Namen und die E-Mail-Adresse deines Notfallkontakts hinzu',
        'seo-ordered-item-2': 'Drücke den Button "Jetzt einchecken", um zu bestätigen, dass du lebst',
        'seo-ordered-item-3': 'Denke daran, dich alle 2 Tage zu melden',
        'seo-ordered-item-4': 'Wenn du dich nicht meldest, erhält dein Notfallkontakt automatisch eine E-Mail-Benachrichtigung',
        'seo-para-10': 'So einfach ist das. Eine kleine Aktion alle 2 Tage kann erheblichen Seelenfrieden für dich und deine Liebsten bieten. Lade die App heute herunter und übernimm die Kontrolle über deine Sicherheit, auch wenn du allein lebst.'
    },
    fr: {
        'app-title': 'Es-tu mort?',
        'app-subtitle': 'Enregistre-toi tous les 2 jours',
        'status-safe': 'Tu es vivant!',
        'status-warning': 'Enregistre-toi bientôt',
        'status-danger': 'Es-tu mort?',
        'last-checkin': 'Dernier enregistrement:',
        'next-checkin': 'Prochain enregistrement:',
        'checkin-btn-text': 'Enregistre-toi maintenant',
        'settings-title': 'Contact d\'urgence',
        'contact-name-label': 'Nom du contact',
        'contact-email-label': 'Email',
        'save-contact-text': 'Enregistrer le contact',
        'how-it-works-title': 'Comment ça fonctionne',
        'app-description': 'Un compagnon de sécurité pour les personnes qui vivent seules. Que tu sois un travailleur de bureau vivant seul, un étudiant loin de chez lui, un introverti, quelqu\'un avec une dépression, ou quiconque choisissant un mode de vie solitaire - cette application est pour toi.',
        'step-1': 'Enregistre-toi tous les 2 jours en appuyant sur le gros bouton pour confirmer que tu es vivant',
        'step-2': 'Si tu ne t\'enregistres pas, nous notifierons automatiquement ton contact d\'urgence',
        'step-3': 'Toutes tes données restent privées et sécurisées sur ton appareil',
        'why-needed': 'C\'est effrayant de penser qu\'une personne vivant seule pourrait mourir sans que personne ne s\'en aperçoive et sans personne pour appeler à l\'aide. Cette application garantit que quelqu\'un saura si quelque chose t\'arrive.',
        'never': 'Jamais',
        'contact-saved': 'Contact enregistré!',
        'checkin-success': 'Enregistrement réussi!',
        'checkin-error': 'Erreur lors de l\'enregistrement',
        'contact-error': 'Erreur lors de l\'enregistrement du contact',
        'user-email-title': 'Ton Email (pour la synchronisation entre appareils)',
        'user-email-description': 'Enregistre ton email pour t\'enregistrer depuis n\'importe quel appareil. Ton statut d\'enregistrement sera synchronisé.',
        'user-email-label': 'Ton Email',
        'save-user-email-text': 'Enregistrer l\'Email',
        'user-email-saved': 'Email enregistré! Tu peux maintenant t\'enregistrer depuis n\'importe quel appareil.',
        'user-email-error': 'Veuillez entrer une adresse email valide',
        'contact-title': 'Contacter le Développeur',
        'contact-description': 'Une question ou un commentaire? Contactez-nous:',
        'contact-email-label-input': 'Ton Email',
        'contact-message-label': 'Message',
        'send-contact-text': 'Envoyer le Message',
        'contact-sent': 'Message envoyé! Merci pour vos commentaires.',
        'contact-error': 'Veuillez remplir votre email et message',
        'share-title': 'Partager Cette Application',
        'share-description': 'Aidez les autres à rester en sécurité en partageant cette application avec vos amis et votre famille',
        'share-text': 'Découvrez cette application de vérification de sécurité pour les personnes vivant seules! Es-tu mort? App - Enregistrez-vous tous les 2 jours pour rester en sécurité.',
        'share-copied': 'Copié!',
        'punchline-label': 'Choisissez un message:',
        'seo-article-title': 'Are You Dead? App: Un Filet de Sécurité pour les Personnes Vivant Seules',
        'seo-para-1': 'Dans le monde trépidant d\'aujourd\'hui, des millions de personnes vivent seules. Que tu sois un travailleur de bureau dans une grande ville, un étudiant loin de chez lui, un introverti qui préfère la solitude, ou quelqu\'un qui lutte contre la dépression - vivre seul vient avec des défis uniques. L\'une des réalités les plus effrayantes est la possibilité que quelque chose t\'arrive sans que personne ne soit là pour le remarquer ou appeler à l\'aide.',
        'seo-h3-1': 'Le Problème: Mourir Seul et Inaperçu',
        'seo-para-2': 'C\'est une pensée qui fait réfléchir, mais cela arrive plus souvent qu\'on ne voudrait l\'admettre. Les personnes vivant seules peuvent subir des urgences médicales, des accidents ou d\'autres situations critiques où le temps est essentiel. Sans quelqu\'un qui vérifie régulièrement, ces situations peuvent passer inaperçues pendant des jours ou même des semaines. L\'application "Are You Dead?", inspirée de l\'application virale chinoise Sileme (Es-tu mort?), aborde cette préoccupation très réelle.',
        'seo-h3-2': 'Comment Fonctionne Are You Dead? App',
        'seo-para-3': 'Le concept est simple mais puissant: tu t\'enregistres tous les 2 jours en appuyant sur un bouton pour confirmer que tu es vivant et en bonne santé. Si tu ne t\'enregistres pas dans la fenêtre de 2 jours, l\'application envoie automatiquement une notification par email à ton contact d\'urgence désigné. Cela garantit que si quelque chose t\'arrive, quelqu\'un le saura et pourra agir.',
        'seo-h3-3': 'Pour Qui Est Cette Application?',
        'seo-para-4': 'Cette application d\'enregistrement de sécurité est conçue pour quiconque vit seul et veut la tranquillité d\'esprit:',
        'seo-list-item-1': 'Travailleurs de bureau vivant seuls: De longues heures de travail, rentrer chez soi dans un appartement vide - cette application garantit que quelqu\'un sait si tu ne rentres pas à la maison.',
        'seo-list-item-2': 'Étudiants loin de chez eux: Vivre dans un dortoir ou un appartement loin de la famille, cette application donne à tes proches un moyen de savoir que tu es en sécurité.',
        'seo-list-item-3': 'Introvertis et personnes qui préfèrent la solitude: Tu peux aimer vivre seul, mais cela ne signifie pas que tu ne devrais pas avoir un filet de sécurité.',
        'seo-list-item-4': 'Personnes luttant contre la dépression ou des défis de santé mentale: Les enregistrements réguliers peuvent fournir une structure et garantir que quelqu\'un sait si tu as besoin d\'aide.',
        'seo-list-item-5': 'Personnes âgées vivant de manière indépendante: Pour les personnes âgées qui veulent maintenir leur indépendance tout en ayant un mécanisme de sécurité en place.',
        'seo-list-item-6': 'Quiconque choisit un mode de vie solitaire: Que ce soit par choix ou par circonstance, vivre seul ne devrait pas signifier être complètement isolé.',
        'seo-h3-4': 'Confidentialité et Sécurité',
        'seo-para-5': 'Ta confidentialité est primordiale. Toutes les données sont stockées localement sur ton appareil. L\'application ne suit pas ta localisation, n\'accède pas à tes contacts et ne partage pas tes informations avec des tiers. La seule fois où ton contact d\'urgence reçoit une notification est lorsque tu ne t\'enregistres pas pendant plus de 2 jours - et même alors, seule l\'information que tu as fournie est partagée.',
        'seo-h3-5': 'Inspiré par Sileme (Es-tu mort?)',
        'seo-para-6': 'L\'application "Are You Dead?" est inspirée de Sileme, une application chinoise qui a gagné une popularité virale pour son nom provocateur et son objectif important. Le concept a résonné avec des millions de personnes qui vivent seules et s\'inquiètent de ce qui pourrait arriver si elles ne peuvent pas appeler à l\'aide. Cette application apporte cette même tranquillité d\'esprit à un public mondial, disponible en plusieurs langues, notamment l\'anglais, l\'espagnol, l\'allemand, le français, le russe et le chinois.',
        'seo-h3-6': 'Gratuit et Facile à Utiliser',
        'seo-para-7': 'L\'application est entièrement gratuite à utiliser. Il n\'y a pas d\'abonnements, pas de frais cachés et pas de fonctionnalités premium verrouillées derrière un mur payant. Configure simplement ton contact d\'urgence, enregistre-toi tous les 2 jours et repose-toi tranquille en sachant que quelqu\'un sera notifié si quelque chose t\'arrive. L\'interface est simple et intuitive - juste un bouton à appuyer tous les 2 jours.',
        'seo-h3-7': 'Pourquoi Tous les 2 Jours?',
        'seo-para-8': 'L\'intervalle d\'enregistrement de 2 jours trouve un équilibre entre être assez fréquent pour détecter les urgences tôt, sans être si fréquent que cela devienne un fardeau. Deux jours sont assez longs pour que tu n\'oublies pas de t\'enregistrer dans des circonstances normales, mais assez courts pour que si quelque chose de grave se produit, l\'aide peut être notifiée relativement rapidement.',
        'seo-h3-8': 'Pour Commencer',
        'seo-para-9': 'Commencer avec "Are You Dead?" est simple:',
        'seo-ordered-item-1': 'Ajoute le nom et l\'adresse email de ton contact d\'urgence',
        'seo-ordered-item-2': 'Appuie sur le bouton "Enregistre-toi maintenant" pour confirmer que tu es vivant',
        'seo-ordered-item-3': 'N\'oublie pas de t\'enregistrer tous les 2 jours',
        'seo-ordered-item-4': 'Si tu ne t\'enregistres pas, ton contact d\'urgence recevra automatiquement une notification par email',
        'seo-para-10': 'C\'est aussi simple que ça. Une petite action tous les 2 jours peut fournir une tranquillité d\'esprit significative pour toi et tes proches. Télécharge l\'application aujourd\'hui et prends le contrôle de ta sécurité, même en vivant seul.'
    },
    zh: {
        'app-title': 'Sileme',
        'app-subtitle': '每2天签到一次',
        'status-safe': '你还活着！',
        'status-warning': '请尽快签到',
        'status-danger': '你死了吗？',
        'last-checkin': '上次签到：',
        'next-checkin': '下次签到：',
        'checkin-btn-text': '立即签到',
        'settings-title': '紧急联系人',
        'contact-name-label': '联系人姓名',
        'contact-email-label': '邮箱',
        'save-contact-text': '保存联系人',
        'how-it-works-title': '如何使用',
        'app-description': '独居人士的安全伴侣。无论你是独居的上班族、远离家乡的学生、内向的人、抑郁症患者，还是选择独居生活方式的任何人——这个应用都适合你。',
        'step-1': '每2天按一下大按钮签到，确认你还活着',
        'step-2': '如果你不签到，我们会自动通知你的紧急联系人',
        'step-3': '你的所有数据都安全地保存在你的设备上',
        'why-needed': '想到一个独居的人可能悄无声息地死去，没有人呼救，这很可怕。这个应用确保如果有人发生什么事，会有人知道。',
        'never': '从未',
        'contact-saved': '联系人已保存！',
        'checkin-success': '签到成功！',
        'checkin-error': '保存签到失败',
        'contact-error': '保存联系人失败',
        'user-email-title': '你的邮箱（用于跨设备同步）',
        'user-email-description': '保存你的邮箱，以便从任何设备签到。你的签到状态将被同步。',
        'user-email-label': '你的邮箱',
        'save-user-email-text': '保存邮箱',
        'user-email-saved': '邮箱已保存！你现在可以从任何设备签到了。',
        'user-email-error': '请输入有效的邮箱地址',
        'contact-title': '联系开发者',
        'contact-description': '有问题或反馈？联系我们：',
        'contact-email-label-input': '你的邮箱',
        'contact-message-label': '消息',
        'send-contact-text': '发送消息',
        'contact-sent': '消息已发送！感谢您的反馈。',
        'contact-error': '请填写邮箱和消息',
        'share-title': '分享此应用',
        'share-description': '通过与朋友和家人分享此应用，帮助他人保持安全',
        'share-text': '看看这个为独居人士设计的安全签到应用！Sileme - 每2天签到一次，保持安全。',
        'share-copied': '已复制！',
        'punchline-label': '选择消息：',
        'seo-article-title': 'Sileme：独居人士的安全网',
        'seo-para-1': '在当今快节奏的世界中，数百万人独自生活。无论你是大城市的上班族、远离家乡的学生、喜欢独处的内向者，还是正在与抑郁症作斗争的人——独自生活都面临着独特的挑战。最令人恐惧的现实之一是，如果发生什么事情，周围没有人注意到或寻求帮助。',
        'seo-h3-1': '问题：独自死去而不被注意',
        'seo-para-2': '这是一个令人清醒的想法，但它发生的频率比我们愿意承认的要高。独自生活的人可能会遇到医疗紧急情况、事故或其他时间至关重要的危急情况。如果没有定期检查，这些情况可能会在几天甚至几周内不被注意。Sileme应用程序解决了这个非常现实的担忧。',
        'seo-h3-2': 'Sileme如何工作',
        'seo-para-3': '概念简单而强大：你每2天通过按一个按钮来签到，以确认你活着并且健康。如果你在2天窗口内没有签到，应用程序会自动向你指定的紧急联系人发送电子邮件通知。这确保如果发生什么事情，有人会知道并可以采取行动。',
        'seo-h3-3': '这个应用程序适合谁？',
        'seo-para-4': '这个安全签到应用程序专为任何独自生活并希望安心的人设计：',
        'seo-list-item-1': '独自生活的上班族：长时间工作，回到空荡荡的公寓——这个应用程序确保如果有人知道你是否没有回家。',
        'seo-list-item-2': '远离家乡的学生：住在远离家人的宿舍或公寓，这个应用程序给你的亲人一种知道你安全的方式。',
        'seo-list-item-3': '内向者和喜欢独处的人：你可能喜欢独自生活，但这并不意味着你不应该有安全网。',
        'seo-list-item-4': '与抑郁症或心理健康挑战作斗争的人：定期签到可以提供结构，并确保如果有人知道你需要帮助。',
        'seo-list-item-5': '独立生活的老年人：对于希望保持独立性同时拥有安全机制的老年人。',
        'seo-list-item-6': '选择独居生活方式的人：无论是选择还是环境，独自生活不应该意味着完全孤立。',
        'seo-h3-4': '隐私和安全',
        'seo-para-5': '你的隐私至关重要。所有数据都本地存储在您的设备上。应用程序不跟踪您的位置，不访问您的联系人，也不与第三方共享您的信息。您的紧急联系人收到通知的唯一时间是当您超过2天没有签到时——即使在那时，也只共享您提供的信息。',
        'seo-h3-5': '灵感来自Sileme（你死了吗？）',
        'seo-para-6': 'Sileme是一个中国应用程序，因其挑衅性的名称和重要目的而获得了病毒式传播的受欢迎程度。这个概念引起了数百万独自生活并担心如果无法寻求帮助可能会发生什么的人的共鸣。Sileme为全球观众带来了安心，提供多种语言版本，包括英语、西班牙语、德语、法语、俄语和中文。',
        'seo-h3-6': '免费且易于使用',
        'seo-para-7': '该应用程序完全免费使用。没有订阅，没有隐藏费用，也没有锁定在付费墙后面的高级功能。只需设置您的紧急联系人，每2天签到一次，并放心，如果有人知道如果发生什么事情，会收到通知。界面简单直观——只需每2天按一个按钮。',
        'seo-h3-7': '为什么每2天？',
        'seo-para-8': '2天签到间隔在足够频繁以早期发现紧急情况和不会太频繁以至于成为负担之间找到了平衡。两天足够长，在正常情况下你不会忘记签到，但足够短，如果发生严重的事情，可以相对快速地通知帮助。',
        'seo-h3-8': '开始使用',
        'seo-para-9': '开始使用Sileme很简单：',
        'seo-ordered-item-1': '添加您紧急联系人的姓名和电子邮件地址',
        'seo-ordered-item-2': '按"立即签到"按钮确认您还活着',
        'seo-ordered-item-3': '记住每2天签到一次',
        'seo-ordered-item-4': '如果您不签到，您的紧急联系人将自动收到电子邮件通知',
        'seo-para-10': '就是这么简单。每2天的一个小动作可以为您和您的亲人提供重要的安心。今天下载应用程序，即使独自生活也要控制您的安全。'
    }
};

// App state
let currentLang = localStorage.getItem('lang') || 'en';
const CHECK_IN_INTERVAL = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
let currentPunchlineIndex = 0;

// Punchlines for sharing
const punchlines = {
    ru: [
        "Если ты не ответишь на это сообщение через 2 дня, я буду знать, что ты мертв 😅 Проверь приложение: https://areyoudeadapp.pages.dev",
        "Живешь один и боишься умереть незамеченным? Есть приложение, которое проверит, не стал ли ты призраком 👻 https://areyoudeadapp.pages.dev",
        "Наконец-то приложение, которое ответит на вопрос 'Ты еще жив?' лучше, чем твоя мама в 3 утра 📱 https://areyoudeadapp.pages.dev",
        "Одинокие люди, объединяйтесь! Нет, подождите... Просто установите это приложение, чтобы кто-то знал, если с вами что-то случится 😄 https://areyoudeadapp.pages.dev",
        "Приложение для тех, кто живет один и хочет убедиться, что их найдут, если они умрут. Мрачно? Да. Полезно? Тоже да! https://areyoudeadapp.pages.dev",
        "Твоя мама звонит каждые 2 дня? Теперь можешь заменить ее приложением! https://areyoudeadapp.pages.dev",
        "Живешь один и никто не заметит, если ты умрешь? Есть решение! Проверь: https://areyoudeadapp.pages.dev",
        "Приложение для интровертов, которые хотят быть уверены, что их найдут после смерти 😅 https://areyoudeadapp.pages.dev"
    ],
    en: [
        "If you don't reply to this message in 2 days, I'll know you're dead 😅 Check out the app: https://areyoudeadapp.pages.dev",
        "Living alone and afraid of dying unnoticed? There's an app that will check if you've become a ghost 👻 https://areyoudeadapp.pages.dev",
        "Finally, an app that answers 'Are you still alive?' better than your mom at 3 AM 📱 https://areyoudeadapp.pages.dev",
        "Lonely people, unite! No wait... Just install this app so someone knows if something happens to you 😄 https://areyoudeadapp.pages.dev",
        "An app for those who live alone and want to make sure they'll be found if they die. Dark? Yes. Useful? Also yes! https://areyoudeadapp.pages.dev",
        "Your mom calls every 2 days? Now you can replace her with an app! https://areyoudeadapp.pages.dev",
        "Living alone and no one will notice if you die? There's a solution! Check it out: https://areyoudeadapp.pages.dev",
        "An app for introverts who want to make sure they'll be found after death 😅 https://areyoudeadapp.pages.dev"
    ],
    es: [
        "Si no respondes a este mensaje en 2 días, sabré que estás muerto 😅 Mira la aplicación: https://areyoudeadapp.pages.dev",
        "¿Vives solo y temes morir sin que nadie se dé cuenta? Hay una aplicación que verificará si te has convertido en un fantasma 👻 https://areyoudeadapp.pages.dev",
        "Finalmente, una aplicación que responde '¿Sigues vivo?' mejor que tu mamá a las 3 AM 📱 https://areyoudeadapp.pages.dev",
        "¡Gente solitaria, únanse! No esperen... Solo instalen esta aplicación para que alguien sepa si algo te pasa 😄 https://areyoudeadapp.pages.dev",
        "Una aplicación para aquellos que viven solos y quieren asegurarse de que los encuentren si mueren. ¿Oscuro? Sí. ¿Útil? ¡También sí! https://areyoudeadapp.pages.dev",
        "¿Tu mamá llama cada 2 días? ¡Ahora puedes reemplazarla con una aplicación! https://areyoudeadapp.pages.dev",
        "¿Vives solo y nadie notará si mueres? ¡Hay una solución! Échale un vistazo: https://areyoudeadapp.pages.dev",
        "Una aplicación para introvertidos que quieren asegurarse de ser encontrados después de la muerte 😅 https://areyoudeadapp.pages.dev"
    ],
    de: [
        "Wenn du nicht innerhalb von 2 Tagen auf diese Nachricht antwortest, werde ich wissen, dass du tot bist 😅 Schau dir die App an: https://areyoudeadapp.pages.dev",
        "Lebst du allein und hast Angst, unbemerkt zu sterben? Es gibt eine App, die überprüft, ob du ein Geist geworden bist 👻 https://areyoudeadapp.pages.dev",
        "Endlich eine App, die 'Bist du noch am Leben?' besser beantwortet als deine Mama um 3 Uhr morgens 📱 https://areyoudeadapp.pages.dev",
        "Einsame Menschen, vereinigt euch! Nein, wartet... Installiert einfach diese App, damit jemand weiß, wenn euch etwas passiert 😄 https://areyoudeadapp.pages.dev",
        "Eine App für diejenigen, die allein leben und sicherstellen wollen, dass sie gefunden werden, wenn sie sterben. Düster? Ja. Nützlich? Auch ja! https://areyoudeadapp.pages.dev",
        "Deine Mama ruft alle 2 Tage an? Jetzt kannst du sie durch eine App ersetzen! https://areyoudeadapp.pages.dev",
        "Lebst du allein und niemand wird merken, wenn du stirbst? Es gibt eine Lösung! Schau es dir an: https://areyoudeadapp.pages.dev",
        "Eine App für Introvertierte, die sicherstellen wollen, dass sie nach dem Tod gefunden werden 😅 https://areyoudeadapp.pages.dev"
    ],
    fr: [
        "Si tu ne réponds pas à ce message dans 2 jours, je saurai que tu es mort 😅 Découvre l'application: https://areyoudeadapp.pages.dev",
        "Tu vis seul et tu as peur de mourir sans que personne ne s'en aperçoive? Il y a une application qui vérifiera si tu es devenu un fantôme 👻 https://areyoudeadapp.pages.dev",
        "Enfin, une application qui répond 'Es-tu encore vivant?' mieux que ta maman à 3h du matin 📱 https://areyoudeadapp.pages.dev",
        "Gens solitaires, unissez-vous! Non attendez... Installez simplement cette application pour que quelqu'un sache si quelque chose vous arrive 😄 https://areyoudeadapp.pages.dev",
        "Une application pour ceux qui vivent seuls et veulent s'assurer qu'ils seront trouvés s'ils meurent. Sombre? Oui. Utile? Aussi oui! https://areyoudeadapp.pages.dev",
        "Ta maman appelle tous les 2 jours? Maintenant tu peux la remplacer par une application! https://areyoudeadapp.pages.dev",
        "Tu vis seul et personne ne remarquera si tu meurs? Il y a une solution! Découvre-la: https://areyoudeadapp.pages.dev",
        "Une application pour les introvertis qui veulent s'assurer d'être trouvés après la mort 😅 https://areyoudeadapp.pages.dev"
    ],
    zh: [
        "如果你在2天内不回复这条消息，我就知道你已经死了😅 看看这个应用：https://areyoudeadapp.pages.dev",
        "独自生活，害怕死得无人知晓？有一个应用会检查你是否变成了鬼👻 https://areyoudeadapp.pages.dev",
        "终于有一个应用能比凌晨3点你妈妈更好地回答'你还活着吗？'这个问题📱 https://areyoudeadapp.pages.dev",
        "孤独的人们，团结起来！不，等等...只需安装这个应用，这样如果有人发生什么事，就会有人知道😄 https://areyoudeadapp.pages.dev",
        "一个为独居者设计的应用，确保如果他们死了会被找到。黑暗？是的。有用？也是的！https://areyoudeadapp.pages.dev",
        "你妈妈每2天打电话？现在你可以用应用代替她！https://areyoudeadapp.pages.dev",
        "独自生活，没人会注意到你死了？有解决方案！看看：https://areyoudeadapp.pages.dev",
        "一个为内向者设计的应用，他们想确保死后会被找到😅 https://areyoudeadapp.pages.dev"
    ]
};

// Initialize app
function init() {
    // Detect language from URL path (e.g., /es/, /ru/, etc.)
    const path = window.location.pathname;
    const pathLang = path.split('/').filter(p => p && p !== 'index.html')[0];
    
    // Check URL parameter for language (fallback for old links)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Priority: path > URL param > localStorage > default
    if (pathLang && ['en', 'ru', 'es', 'de', 'fr', 'zh'].includes(pathLang)) {
        currentLang = pathLang;
        localStorage.setItem('lang', pathLang);
    } else if (urlLang && ['en', 'ru', 'es', 'de', 'fr', 'zh'].includes(urlLang)) {
        currentLang = urlLang;
        localStorage.setItem('lang', urlLang);
    } else {
        // Use stored language or default to 'en'
        currentLang = localStorage.getItem('lang') || 'en';
        // Ensure it's a valid language
        if (!['en', 'ru', 'es', 'de', 'fr', 'zh'].includes(currentLang)) {
            currentLang = 'en';
        }
        localStorage.setItem('lang', currentLang);
    }
    
    // Setup event listeners first (before loadLanguage to ensure buttons exist)
    setupEventListeners();
    
    // Load language and update UI
    loadLanguage(currentLang);
    loadContact();
    
    // Load saved user email
    const savedUserEmail = localStorage.getItem('userEmail');
    if (savedUserEmail) {
        const userEmailInput = document.getElementById('user-email');
        if (userEmailInput) {
            userEmailInput.value = savedUserEmail;
        }
    }
    
    updateCheckInStatus();
    requestNotificationPermission();
    checkNotificationStatus();
}

// SEO meta tags for different languages
const seoTags = {
    en: {
        title: 'Are You Dead? App - Safety Check-in App for People Living Alone | Inspired by Sileme',
        description: 'Are You Dead? App - Safety check-in app for people living alone. Inspired by viral Chinese app Sileme (Ты умер?). Check in every 2 days. If you don\'t, your emergency contact will be notified. For office workers living solo, students away from home, introverts, people with depression, and anyone choosing a solitary lifestyle.',
        keywords: 'r u dead, are you dead app, ты умер приложение, sileme app, sileme приложение, safety check-in app, lonely people app, single household app, emergency contact app, check in app, safety app, living alone app, office worker living alone, student away from home, introvert app, depression app, solitary lifestyle app, человек живущий один может умереть незаметно'
    },
    ru: {
        title: 'Ты умер? Приложение - Приложение для проверки безопасности одиноких людей | Вдохновлено Sileme',
        description: 'Ты умер? Приложение - Приложение для проверки безопасности для людей, живущих одни. Вдохновлено вирусным китайским приложением Sileme (Ты умер?). Отмечайся каждые 2 дня. Если не отметишься, твой контакт получит уведомление. Для офисных работников, живущих в одиночку, студентов вдали от дома, интровертов, людей с депрессией и всех, кто выбрал уединенный образ жизни.',
        keywords: 'ты умер приложение, приложение ты умер, sileme приложение, sileme app, приложение для одиноких, приложение для проверки безопасности, приложение для людей живущих одни, экстренный контакт приложение, офисный работник живущий один, студент вдали от дома, интроверты, люди с депрессией, одинокий человек может умереть незаметно, уединенный образ жизни, приложение для интровертов'
    },
    es: {
        title: '¿Estás muerto? App - Aplicación de verificación de seguridad para personas que viven solas | Inspirado en Sileme',
        description: '¿Estás muerto? App - Aplicación de verificación de seguridad para personas que viven solas. Inspirado en la aplicación viral china Sileme (Ты умер?). Regístrate cada 2 días. Si no lo haces, tu contacto de emergencia será notificado. Para trabajadores de oficina viviendo solos, estudiantes lejos de casa, introvertidos, personas con depresión y cualquiera que elija un estilo de vida solitario.',
        keywords: 'estás muerto app, aplicación estás muerto, sileme app, aplicación para personas solas, aplicación de verificación de seguridad, aplicación para personas que viven solas, contacto de emergencia app, trabajador de oficina viviendo solo, estudiante lejos de casa, introvertido app, depresión app, estilo de vida solitario'
    },
    de: {
        title: 'Bist du tot? App - Sicherheits-Check-in-App für alleinlebende Menschen | Inspiriert von Sileme',
        description: 'Bist du tot? App - Sicherheits-Check-in-App für alleinlebende Menschen. Inspiriert von der viralen chinesischen App Sileme (Ты умер?). Checken Sie alle 2 Tage ein. Wenn nicht, wird Ihr Notfallkontakt benachrichtigt. Für alleinlebende Büroangestellte, Studenten weit weg von zu Hause, Introvertierte, Menschen mit Depressionen und alle, die bewusst einen einsamen Lebensstil gewählt haben.',
        keywords: 'bist du tot app, sileme app, sicherheits app, app für alleinlebende, app für einsame menschen, notfallkontakt app, check-in app, büroangestellter allein lebend, student weit weg von zu hause, introvertierter app, depression app, einsamer lebensstil'
    },
    fr: {
        title: 'Es-tu mort? App - Application de vérification de sécurité pour personnes vivant seules | Inspiré de Sileme',
        description: 'Es-tu mort? App - Application de vérification de sécurité pour personnes vivant seules. Inspiré de l\'application virale chinoise Sileme (Ты умер?). Enregistre-toi tous les 2 jours. Si tu ne le fais pas, ton contact d\'urgence sera notifié. Pour les travailleurs de bureau vivant seuls, les étudiants loin de chez eux, les introvertis, les personnes souffrant de dépression et tous ceux qui choisissent un mode de vie solitaire.',
        keywords: 'es-tu mort app, es tu mort application, application sécurité, app pour personnes seules, app pour personnes vivant seules, contact urgence app, sileme app, travailleur bureau seul, étudiant loin de chez lui, introverti app, dépression app, mode de vie solitaire'
    },
    zh: {
        title: 'Sileme - 独居人士安全签到应用',
        description: 'Sileme - 独居人士的安全签到应用。每2天签到一次。如果不签到，你的紧急联系人将被通知。适用于独居的上班族、远离家乡的学生、内向的人、抑郁症患者以及选择独居生活方式的任何人。',
        keywords: 'sileme, sileme应用, 你死了吗, 你死了吗应用, 独居应用, 安全签到应用, 独居人士应用, 紧急联系人应用, 签到应用, 安全应用, 独居, 单身, 紧急联系人'
    }
};

// Language switching
function loadLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update active state for language links
    document.querySelectorAll('[data-lang]').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        // Update href to current path if it's a link
        if (btn.tagName === 'A' && isActive) {
            btn.style.pointerEvents = 'none'; // Disable link for active language
        } else if (btn.tagName === 'A') {
            btn.style.pointerEvents = 'auto';
        }
    });
    
    const t = translations[lang];
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'UL' || element.tagName === 'OL') {
                // For list elements, update child li elements
                const listItems = element.querySelectorAll('li');
                listItems.forEach((li, index) => {
                    const stepKey = `step-${index + 1}`;
                    if (t[stepKey]) {
                        li.textContent = t[stepKey];
                    }
                });
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update SEO tags
    updateSEOTags(lang);
    
    // Update SEO article
    updateSEOArticle(lang);
    
    // Update share section
    updateShareSection(lang);
    
    // Update punchline when language changes
    currentPunchlineIndex = 0;
    updatePunchline();
    
    updateCheckInStatus();
}

// Update SEO meta tags based on language
function updateSEOTags(lang) {
    const seo = seoTags[lang] || seoTags.en;
    
    // Update title
    document.title = seo.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = seo.description;
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seo.keywords;
    
    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    ogTitle.content = seo.title;
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
    }
    ogDesc.content = seo.description;
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Don't update URL here - let it be handled by navigation or init
}

// Update SEO article content based on language
function updateSEOArticle(lang) {
    const t = translations[lang] || translations.en;
    
    // Update article title
    const articleTitle = document.getElementById('seo-article-title');
    if (articleTitle && t['seo-article-title']) {
        articleTitle.textContent = t['seo-article-title'];
    }
    
    // Update article content paragraphs and headings
    const articleContent = document.getElementById('seo-article-content');
    if (!articleContent) return;
    
    // Update all paragraphs
    const paragraphs = articleContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        const key = `seo-para-${index + 1}`;
        if (t[key]) {
            p.textContent = t[key];
        }
    });
    
    // Update all h3 headings
    const headings = articleContent.querySelectorAll('h3');
    headings.forEach((h3, index) => {
        const key = `seo-h3-${index + 1}`;
        if (t[key]) {
            h3.textContent = t[key];
        }
    });
    
    // Update list items
    const listItems = articleContent.querySelectorAll('ul li, ol li');
    listItems.forEach((li, index) => {
        const key = `seo-list-item-${index + 1}`;
        const orderedKey = `seo-ordered-item-${index + 1}`;
        if (t[key]) {
            li.innerHTML = t[key];
        } else if (t[orderedKey]) {
            li.textContent = t[orderedKey];
        }
    });
}

// Update share section text
function updateShareSection(lang) {
    const t = translations[lang] || translations.en;
    
    const shareTitle = document.getElementById('share-title');
    if (shareTitle && t['share-title']) {
        shareTitle.textContent = t['share-title'];
    }
    
    const shareDescription = document.getElementById('share-description');
    if (shareDescription && t['share-description']) {
        shareDescription.textContent = t['share-description'];
    }
    
    const punchlineLabel = document.getElementById('punchline-label');
    if (punchlineLabel && t['punchline-label']) {
        punchlineLabel.textContent = t['punchline-label'];
    }
}

// Load emergency contact from localStorage
function loadContact() {
    const contact = JSON.parse(localStorage.getItem('emergencyContact') || '{}');
    if (contact.name) document.getElementById('contact-name').value = contact.name;
    if (contact.email) document.getElementById('contact-email').value = contact.email;
}

// Save emergency contact
function saveContact() {
    try {
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        
        if (!nameInput || !emailInput) {
            console.error('Contact form inputs not found');
            alert('Error: Form inputs not found');
            return;
        }
        
        const contact = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim()
        };
        
        if (!contact.name || !contact.email || !contact.email.includes('@')) {
            const errorMsg = translations[currentLang]?.['contact-error'] || 'Please fill in name and email';
            alert(errorMsg);
            return;
        }
        
        localStorage.setItem('emergencyContact', JSON.stringify(contact));
        
        // Save to email history
        saveEmailToHistory({
            type: 'contact',
            email: contact.email,
            name: contact.name,
            phone: 'Not provided',
            timestamp: new Date().toISOString()
        });
        
        // Log contact email to admin
        logEmailToAdmin({
            type: 'contact',
            email: contact.email,
            name: contact.name,
            phone: 'Not provided'
        });
        
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
    if (!contact.name || !contact.email) return;
    
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

// Send test email to preview what contact will receive
// Save user email for cross-device sync
function saveUserEmail() {
    try {
        const userEmailInput = document.getElementById('user-email');
        const userEmail = userEmailInput.value.trim();
        
        if (!userEmail || !userEmail.includes('@')) {
            alert(translations[currentLang]['user-email-error']);
            userEmailInput.focus();
            return;
        }
        
        // Save to localStorage
        localStorage.setItem('userEmail', userEmail);
        
        // Save to email history
        saveEmailToHistory({
            type: 'user',
            email: userEmail,
            name: 'User',
            phone: 'Not provided',
            timestamp: new Date().toISOString()
        });
        
        // Log to admin
        logEmailToAdmin({
            type: 'user',
            email: userEmail,
            name: 'User',
            phone: 'Not provided'
        });
        
        alert(translations[currentLang]['user-email-saved']);
        console.log('User email saved:', userEmail);
    } catch (error) {
        console.error('Error saving user email:', error);
        alert('Error saving email. Please try again.');
    }
}

// Save email to local history
function saveEmailToHistory(emailData) {
    try {
        const history = JSON.parse(localStorage.getItem('emailHistory') || '[]');
        const historyEntry = {
            type: emailData.type,
            email: emailData.email,
            name: emailData.name || 'Not provided',
            phone: emailData.phone || 'Not provided',
            timestamp: emailData.timestamp || new Date().toISOString()
        };
        if (emailData.message) {
            historyEntry.message = emailData.message;
        }
        history.push(historyEntry);
        // Keep only last 100 entries
        if (history.length > 100) {
            history.shift();
        }
        localStorage.setItem('emailHistory', JSON.stringify(history));
        console.log('Email saved to history:', emailData);
    } catch (error) {
        console.error('Failed to save email to history:', error);
    }
}

// Get email history (for admin/debugging)
function getEmailHistory() {
    try {
        return JSON.parse(localStorage.getItem('emailHistory') || '[]');
    } catch (error) {
        console.error('Failed to get email history:', error);
        return [];
    }
}

// Send contact message to developer
function sendContactMessage() {
    try {
        const contactEmailInput = document.getElementById('contact-email-input');
        const contactMessageInput = document.getElementById('contact-message');
        
        const contactEmail = contactEmailInput.value.trim();
        const contactMessage = contactMessageInput.value.trim();
        
        if (!contactEmail || !contactEmail.includes('@') || !contactMessage) {
            alert(translations[currentLang]['contact-error']);
            return;
        }
        
        // Save to email history
        saveEmailToHistory({
            type: 'contact_dev',
            email: contactEmail,
            name: 'User',
            phone: 'Not provided',
            message: contactMessage,
            timestamp: new Date().toISOString()
        });
        
        // Log to admin
        logEmailToAdmin({
            type: 'contact_dev',
            email: contactEmail,
            name: 'User',
            phone: 'Not provided',
            message: contactMessage
        });
        
        // Clear form
        contactEmailInput.value = '';
        contactMessageInput.value = '';
        
        alert(translations[currentLang]['contact-sent']);
        console.log('Contact message sent:', { email: contactEmail, message: contactMessage });
    } catch (error) {
        console.error('Error sending contact message:', error);
        alert('Error sending message. Please try again.');
    }
}

// Log email to admin for tracking
async function logEmailToAdmin(emailData) {
    try {
        const workerUrl = 'https://rudead.gorelikgo.workers.dev';
        await fetch(workerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type: 'log_email',
                email_type: emailData.type, // 'contact' or 'test'
                email: emailData.email,
                name: emailData.name || emailData.contact_name || 'Not provided',
                phone: emailData.phone || emailData.contact_phone || 'Not provided',
                timestamp: new Date().toISOString()
            })
        });
        console.log('Email logged to admin:', emailData);
    } catch (error) {
        console.error('Failed to log email to admin:', error);
        // Don't show error to user, just log it
    }
}

// Send emergency notification via Cloudflare Worker + Resend API
async function sendEmergencyNotification(contact) {
    console.log('Emergency notification triggered for:', contact);
    
    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Are You Dead? Alert', {
            body: `Emergency contact ${contact.name} should be notified - user hasn't checked in for 4+ days`,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="%231a1a1a"/><circle cx="96" cy="80" r="36" fill="%23ff4444"/><rect x="70" y="80" width="52" height="38" fill="%23ff4444"/><circle cx="84" cy="76" r="8" fill="%231a1a1a"/><circle cx="108" cy="76" r="8" fill="%231a1a1a"/><path d="M 96 88 L 88 100 L 104 100 Z" fill="%231a1a1a"/><circle cx="96" cy="100" r="16" fill="none" stroke="%231a1a1a" stroke-width="3"/><line x1="96" y1="100" x2="96" y2="88" stroke="%231a1a1a" stroke-width="3"/><line x1="96" y1="100" x2="108" y2="100" stroke="%231a1a1a" stroke-width="2"/></svg>'
        });
    }
    
    // Log emergency contact email to admin
    if (contact.email) {
        logEmailToAdmin({
            type: 'emergency',
            email: contact.email,
            name: contact.name,
            phone: 'Not provided'
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
                contact_phone: 'Not provided',
                contact_email: contact.email,
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
                new Notification('Are You Dead? Reminder', {
                    body: 'Time to check in! Tap the button to confirm you\'re alive.',
                    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="%231a1a1a"/><circle cx="96" cy="80" r="36" fill="%23ff4444"/><rect x="70" y="80" width="52" height="38" fill="%23ff4444"/><circle cx="84" cy="76" r="8" fill="%231a1a1a"/><circle cx="108" cy="76" r="8" fill="%231a1a1a"/><path d="M 96 88 L 88 100 L 104 100 Z" fill="%231a1a1a"/><circle cx="96" cy="100" r="16" fill="none" stroke="%231a1a1a" stroke-width="3"/><line x1="96" y1="100" x2="96" y2="88" stroke="%231a1a1a" stroke-width="3"/><line x1="96" y1="100" x2="108" y2="100" stroke="%231a1a1a" stroke-width="2"/></svg>',
                    tag: 'checkin-reminder'
                });
            }
        }, timeUntilNotification);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language switcher - remove old listeners first to avoid duplicates
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // Clone node to remove all event listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = newBtn.dataset.lang;
            if (lang && ['en', 'ru', 'es', 'de', 'fr', 'zh'].includes(lang)) {
                loadLanguage(lang);
                // Update URL without reload
                const url = new URL(window.location);
                if (lang === 'en') {
                    url.pathname = '/';
                    url.search = '';
                } else {
                    url.pathname = `/${lang}/`;
                    url.search = '';
                }
                window.history.pushState({}, '', url);
            }
        });
    });
    
    // Check-in button
    document.getElementById('checkin-btn').addEventListener('click', checkIn);
    
    // Save contact button
    document.getElementById('save-contact-btn').addEventListener('click', saveContact);
    
    // User email button
    document.getElementById('save-user-email-btn').addEventListener('click', saveUserEmail);
    
    // Load saved user email
    const savedUserEmail = localStorage.getItem('userEmail');
    if (savedUserEmail) {
        document.getElementById('user-email').value = savedUserEmail;
    }
    
    // Contact developer button
    document.getElementById('send-contact-btn').addEventListener('click', sendContactMessage);
    
    // Share buttons
    setupShareButtons();
    
    // Setup punchline selector
    setupPunchlineSelector();
    
    // Setup floating share button and modal
    setupShareModal();
    
    // Check for native share API
    if (navigator.share) {
        const nativeBtn = document.getElementById('share-native-btn');
        if (nativeBtn) {
            nativeBtn.style.display = 'flex';
            nativeBtn.style.alignItems = 'center';
            nativeBtn.style.justifyContent = 'center';
        }
    }
    
    // Update status every minute
    setInterval(updateCheckInStatus, 60 * 1000);
}

// Share functionality
function setupShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.dataset.platform;
            if (platform) {
                shareToPlatform(platform);
            }
        });
    });
}

// Setup punchline selector
function setupPunchlineSelector() {
    const punchlineTextarea = document.getElementById('share-punchline');
    const changeBtn = document.getElementById('change-punchline-btn');
    
    if (!punchlineTextarea) return;
    
    // Initialize with first punchline
    updatePunchline();
    
    // Change punchline on button click
    if (changeBtn) {
        changeBtn.addEventListener('click', () => {
            currentPunchlineIndex = (currentPunchlineIndex + 1) % getPunchlinesForLang().length;
            updatePunchline();
        });
    }
}

function getPunchlinesForLang() {
    return punchlines[currentLang] || punchlines.en;
}

function updatePunchline() {
    const punchlineTextarea = document.getElementById('share-punchline');
    if (!punchlineTextarea) return;
    
    const langPunchlines = getPunchlinesForLang();
    if (langPunchlines.length > 0) {
        currentPunchlineIndex = currentPunchlineIndex % langPunchlines.length;
        punchlineTextarea.value = langPunchlines[currentPunchlineIndex];
    }
}

// Setup share modal
function setupShareModal() {
    const floatingBtn = document.getElementById('floating-share-btn');
    const modalOverlay = document.getElementById('share-modal-overlay');
    const modalClose = document.getElementById('share-modal-close');
    
    if (!floatingBtn || !modalOverlay) return;
    
    // Open modal
    floatingBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeShareModal);
    }
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeShareModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeShareModal();
        }
    });
}

function closeShareModal() {
    const modalOverlay = document.getElementById('share-modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function shareToPlatform(platform) {
    const url = 'https://areyoudeadapp.pages.dev';
    const title = translations[currentLang]?.['share-title'] || 'Are You Dead? App';
    
    // Get current punchline from textarea
    const punchlineTextarea = document.getElementById('share-punchline');
    const text = punchlineTextarea ? punchlineTextarea.value.trim() : (translations[currentLang]?.['share-text'] || 'Check out this safety check-in app for people living alone!');
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            break;
        case 'whatsapp':
            // WhatsApp uses the text directly, URL is already in punchline
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
            window.open(shareUrl, '_blank');
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            break;
        case 'vk':
            shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(text)}`;
            window.open(shareUrl, '_blank', 'width=600,height=400');
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
            window.location.href = shareUrl;
            break;
        case 'copy':
            copyToClipboard(url);
            // Don't close modal for copy, user might want to copy again
            break;
        case 'native':
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).then(() => {
                    closeShareModal();
                }).catch(err => console.log('Error sharing:', err));
            }
            break;
    }
    
    // Close modal after sharing (except for copy)
    if (platform !== 'copy' && platform !== 'native') {
        setTimeout(() => {
            closeShareModal();
        }, 300);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            const copyBtn = document.querySelector('.share-copy');
            const copyText = document.getElementById('share-copy-text');
            if (copyBtn && copyText) {
                const originalText = copyText.textContent;
                copyText.textContent = translations[currentLang]?.['share-copied'] || 'Copied!';
                setTimeout(() => {
                    copyText.textContent = originalText;
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        const copyBtn = document.querySelector('.share-copy');
        const copyText = document.getElementById('share-copy-text');
        if (copyBtn && copyText) {
            const originalText = copyText.textContent;
            copyText.textContent = translations[currentLang]?.['share-copied'] || 'Copied!';
            setTimeout(() => {
                copyText.textContent = originalText;
            }, 2000);
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
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

