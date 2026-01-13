# R U Dead? - Safety Check-in App

A provocative yet playful safety check-in app for people living alone. Check in every 2 days to confirm you're alive. If you don't check in, your emergency contact will be notified.

**Inspired by the viral Chinese app "Sileme" (Are you dead?) that became #1 in China's App Store.**

## 🎯 Concept

Inspired by the viral Chinese app "Sileme" (Are you dead?) that became #1 in China's App Store, **R U Dead?** uses a provocative yet playful name to address a real problem: people living alone who fear dying unnoticed. The playful question format makes it less morbid while still being memorable and shareable - like a friend asking "you still alive?" as a joke.

The app requires regular check-ins every 2 days. If a user doesn't check in, their emergency contact is notified. The provocative name drives curiosity and downloads, just like the original.

## ✨ Features

- **Simple Check-in**: Press one button every 2 days
- **Emergency Contact**: Set up a contact who will be notified if you don't check in
- **Multi-language**: English, Russian, Spanish, German
- **PWA Ready**: Install as an app on your phone
- **Privacy First**: All data stored locally, no server required
- **Free**: Completely free with no ads

## 🚀 Quick Start

### Generate Icons First

Before running the app, generate PWA icons:

1. Open `public/generate-icons.html` in your browser
2. Icons will download automatically (icon-192.png and icon-512.png)
3. Move them to the `public/` folder

Or create simple icons manually:
- 192x192px PNG with green background (#4CAF50) and white checkmark (✓)
- 512x512px PNG with same design

### Local Development

1. Clone the repository
2. Serve the `public/` folder with any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve public

# Using PHP
php -S localhost:8000 -t public
```

3. Open `http://localhost:8000` in your browser

### Deploy to Cloudflare Pages

1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Set build settings:
   - **Build output directory**: `public`
   - **Build command**: (leave empty)
   - **Framework preset**: None

## 📱 How It Works

1. **Set Emergency Contact**: Enter name, phone, and optional email
2. **Check In**: Press the "Check In Now" button every 2 days
3. **Stay Safe**: If you don't check in, your contact will be notified

## 🌍 Target Markets

- **USA**: Large population of people living alone
- **Europe**: Growing single-person households
- **Russia**: Similar demographic trends
- **Other markets**: Wherever people live alone

## 🔧 Technology

- Pure HTML/CSS/JavaScript (no frameworks)
- LocalStorage for data persistence
- Service Worker for PWA functionality
- Responsive design for mobile and desktop

## 📈 Growth Strategy

1. **ASO Optimization**: 
   - **Provocative name**: "R U Dead?" - playful, memorable, shareable
   - Keywords: "r u dead", "are you dead", "safety check", "lonely", "single", "emergency contact", "living alone"
   - Clear description highlighting the real fear: dying alone unnoticed

2. **Social Media**:
   - Share on Reddit (r/lonely, r/single, etc.)
   - Twitter/X posts about the concept
   - TikTok videos explaining the need

3. **Press Coverage**:
   - Reach out to tech blogs
   - Highlight the trend from China
   - Position as solution for growing single-person households

4. **App Store Optimization**:
   - Free app (no barriers)
   - Simple, clear screenshots
   - User testimonials

## 🎨 Future Enhancements

- Email/SMS integration for emergency notifications
- Multiple emergency contacts
- Customizable check-in intervals
- Statistics and history
- Widget for quick check-in
- Dark mode

## 📄 License

Free to use and modify.

## 🔗 Links

- [Development Blog](https://codengodiary.pages.dev/)

---

**Note**: This is a basic MVP. For production, you'll need to integrate with email/SMS services (EmailJS, Twilio, etc.) to actually send notifications to emergency contacts.

