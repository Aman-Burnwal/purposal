# 💕 Romantic Proposal Web App

A beautiful, interactive single-page React application designed to help you pop the question in the most romantic way possible! This app features a playful "No" button that dodges clicks and a stunning celebration screen when your loved one says "Yes!"

## ✨ Features

### Proposal Screen
- **Romantic Design**: Soft pastel gradients, floating hearts, and elegant typography
- **Heartfelt Messages**: Multiple love messages and romantic quotes that cycle through
- **Love Reasons**: Beautiful list of reasons why you love them
- **Playful "No" Button**: Dodges away when hovered or clicked, making it impossible to refuse!
- **Stable "Yes" Button**: Easy to click with attractive styling
- **Progressive Messages**: The more they try to click "No", the more heartfelt the messages become

### Celebration Screen
- **Floating Hearts**: Animated hearts rising from bottom to top
- **Confetti Effect**: Colorful confetti particles falling from the sky
- **Sparkles**: Twinkling stars scattered across the screen
- **Multiple Love Messages**: Romantic declarations and promises
- **Smooth Animations**: All powered by Framer Motion for buttery-smooth effects

### Design Highlights
- **Mobile-First Approach**: Optimized for mobile devices first, then scaled up
- **Fully Responsive**: Works beautifully on phones, tablets, and desktops
- **Romantic Color Palette**: Soft pinks, lavenders, and creams
- **Premium Fonts**: Dancing Script, Playfair Display, and Poppins
- **Smooth Animations**: Fade-ins, scale effects, and spring animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd proposal-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## 🎨 Customization

### Changing the Romantic Messages

Edit `src/components/ProposalScreen.jsx` and modify the `romanticMessages` array:

```javascript
const romanticMessages = [
  "Your custom message here 💕",
  "Another romantic message ✨",
  // Add more messages...
];
```

### Modifying Love Reasons

In `src/components/ProposalScreen.jsx`, find the `love-reasons` section and customize:

```jsx
<div className="reason-item">
  <span className="reason-icon">🌹</span>
  <span className="reason-text">Your custom reason</span>
</div>
```

### Changing Colors

Edit `src/App.css` and modify the gradient colors in `.proposal-screen`:

```css
background: linear-gradient(135deg, 
  #fff0f6 0%,   /* Change these hex colors */
  #ffe4f1 20%,
  /* ... */
);
```

### Adjusting Button Behavior

In `src/components/ProposalScreen.jsx`, you can modify:
- `getRandomPosition()` - Controls how the "No" button moves
- `handleNoHover()` - Triggered when hovering over "No" button
- `getPlayfulMessage()` - Messages shown after multiple dodge attempts

## 📱 Mobile Touch Support

The "No" button responds to both:
- `onMouseEnter` for desktop hover
- `onTouchStart` for mobile touch

## 🎭 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with gradients, animations, and responsive design
- **Google Fonts** - Dancing Script, Playfair Display, Poppins

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 💝 Tips for the Perfect Proposal

1. **Test First**: Run through the app a few times to make sure everything works
2. **Choose the Right Moment**: Pick a romantic setting and time
3. **Have a Backup**: Make sure your device is charged and has good internet (if needed)
4. **Personalize**: Customize the messages to make them personal to your relationship
5. **Be Ready**: Have the real ring ready for when they say yes! 💍

## 🎉 What Happens When They Say Yes?

The app transitions to a beautiful celebration screen with:
- Animated floating hearts
- Falling confetti
- Romantic messages and quotes
- Love declarations
- Sparkle effects

## 🐛 Troubleshooting

**The "No" button isn't visible:**
- Make sure all animations have loaded (wait 2-3 seconds after page load)
- Check browser console for errors

**Animations are laggy:**
- Close other browser tabs
- Try a different browser (Chrome/Firefox recommended)
- Reduce the number of particles in the code

**Mobile touch not working:**
- Make sure you're testing on an actual mobile device
- Try both tap and tap-hold gestures

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your special moment!

## ❤️ Made with Love

Created to help you create the perfect proposal moment. Good luck, and congratulations! 🎊

---

**Remember**: The best proposals come from the heart. This app is just a fun, creative way to ask the most important question of your life! 💕
