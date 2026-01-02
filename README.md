# Avinav Priyadarshi - Portfolio Website

A modern, interactive portfolio website featuring an immersive 3D environment with a macOS-inspired interface. Built with React, TypeScript, and Three.js (via Spline), this portfolio showcases my work as a game developer and full-stack web developer.

🔗 **Live Demo**: [https://avinav.vercel.app/](https://avinav-priyadarshi.vercel.app/)

## ✨ Features

### 🎨 Interactive 3D Environment
- Fully interactive 3D workspace built with Spline
- Smooth camera transitions and controls
- Dynamic lighting and animations
- Responsive design that works on both desktop and mobile

### 🖥️ macOS-Style Interface
- **Terminal App**: Interactive terminal with custom commands including `about`, `help`, `projects`, `skills`, and `contact`
- **Portfolio App**: Showcases my web development projects in a native-looking window
- **Resume App**: Full-screen PDF viewer with download capabilities
- **FaceTime App**: Camera integration for interactive demos
- Desktop icons with smooth animations and window management

### 🎵 Audio Experience
- Interactive keyboard typing sounds
- Mouse click sound effects
- Atmospheric office ambiance (optional)
- Startup sound effects
- Audio control system for managing sound preferences

### 🎯 Interactive Components
- **Preloader**: Animated loading screen with terminal-style greetings
- **Hero Section**: Eye-catching introduction with animated text
- **About Modal**: Detailed information about background and expertise
- **Projects Showcase**: Video demonstrations and interactive project cards
- **Blender Showcase**: 3D modeling and animation work
- **Experience Timeline**: Professional journey visualization
- **Contact Form**: EmailJS integration for direct communication
- **Stealth Browser Detail**: Advanced browser security project showcase

### 🎨 Visual Effects
- Shooting stars background animation
- Scroll progress indicator
- Reveal animations on scroll
- Smooth transitions and hover effects
- Glassmorphism UI elements

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets
- **Custom CSS** - Bespoke animations and effects

### 3D & Visualization
- **Spline Tool (React Spline)** - Interactive 3D graphics

### Communication
- **EmailJS** - Contact form integration

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS & Autoprefixer** - CSS processing
- **TypeScript ESLint** - Type-aware linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avinav2401/FUTURE_FS_01.git
   cd test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)
   - Configure EmailJS credentials for the contact form
   - Add any necessary API keys

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
test/
├── public/                 # Static assets
│   ├── resume.pdf         # PDF resume file
│   ├── *.jpg, *.mp4       # Project images and videos
│   └── static/            # Sound effects
│       ├── keyboard/      # Keyboard typing sounds
│       └── mouse/         # Mouse click sounds
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── AboutModal.tsx
│   │   ├── BlenderShowcase.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Preloader.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ShootingStars.tsx
│   │   └── StealthBrowserDetail.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useSoundEffects.ts
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   └── ContactPage.tsx
│   ├── assets/            # Images and resources
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── App.css            # App-specific styles
├── vercel.json            # Vercel deployment config
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🎮 Features In-Depth

### Sound Effects System
The portfolio includes an advanced sound effects system (`useSoundEffects` hook) that provides:
- Real-time keyboard typing sounds
- Interactive mouse click feedback
- Background atmospheric sounds
- Toggle controls for audio preferences

### Desktop Applications
macOS-style applications with full window management:
- Draggable windows
- Minimize, maximize, and close controls
- Fullscreen mode support
- Responsive sizing for mobile devices

### Terminal Commands
Interactive terminal with the following commands:
- `about` - Detailed professional bio
- `help` - List of available commands
- `projects` - Project showcase
- `skills` - Technical skills overview
- `contact` - Contact information
- `clear` - Clear terminal screen

## 🌐 Deployment

This project is configured for deployment on **Vercel** with optimized headers for security and performance. The `vercel.json` configuration handles routing and security headers.

### Deploy to Vercel
```bash
vercel deploy
```

Or simply push to your GitHub repository connected to Vercel for automatic deployments.

## 🎯 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Touch-friendly interactions
- Optimized camera controls for mobile
- Adaptive UI scaling
- Mobile-specific zoom handling
- Touch event support for 3D interactions

## 🤝 Contributing

This is a personal portfolio project, but feedback is always welcome! Feel free to:
- Report bugs
- Suggest features
- Share ideas for improvements

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means:**
- ✅ Free to use for personal and commercial projects
- ✅ Modify and distribute the code
- ✅ Use for educational purposes
- ❗ Must include the original copyright notice

## 👨‍💻 About the Developer

**Avinav Priyadarshi**
- 🎮 Game Developer & Full-Stack Web Developer
- 🌐 Portfolio: [avinav.vercel.app](https://avinav.vercel.app)
- 💼 Specialized in creating immersive, interactive web experiences


---

**Note**: This portfolio showcases advanced web development techniques including 3D graphics, audio integration, and complex state management. It's designed to demonstrate both technical skills and creative vision.

Made with ❤️ by Avinav Priyadarshi
