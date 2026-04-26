# Personal Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my work as a Full-Stack Developer and Information Systems student.

## 🚀 Live Demo

[View Portfolio](https://abrham-teshome.vercel.app/)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multi-page Navigation**: Home, Works, Blog, and Hire Me sections
- **Interactive Components**: Hover effects, transitions, and dynamic content
- **Contact Integration**: Direct Gmail integration for project inquiries
- **Dark Theme**: Consistent dark theme with custom color scheme
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vite Plugin React** - React integration for Vite

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── home/         # Home page components
│   │   ├── Work/         # Work/Projects components
│   │   ├── Blog/         # Blog components
│   │   └── Footer.jsx    # Footer component
│   ├── pages/            # Main page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Works.jsx     # Portfolio/Projects page
│   │   ├── Blog.jsx      # Blog/About page
│   │   └── HireMe.jsx    # Contact/Hire page
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.jsx          # App entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── eslint.config.js       # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abnormal03/Portfolio-2.0.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Linting

```bash
npm run lint
```

## 🎨 Customization

### Color Scheme

The portfolio uses a custom color scheme defined in `src/App.css`:

- **Primary**: Purple (#8B5CF6)
- **Secondary**: Cyan (#06B6D4)
- **Tertiary**: Lime (#ADFF2F)
- **Neutral**: Dark (#121212)

### Adding New Content

1. **Projects**: Update `src/components/Work/` components
2. **Blog Posts**: Modify `src/components/Blog/` components
3. **Personal Info**: Edit components in `src/components/home/`
4. **Contact Info**: Update `src/pages/HireMe.jsx`

### Styling

- Uses Tailwind CSS utility classes
- Custom animations defined in `src/App.css`
- Responsive design with mobile-first approach

## 📱 Pages Overview

### Home (/)
- Hero section with introduction
- Skills and availability status
- Call-to-action buttons

### Works (/works)
- Featured projects showcase
- Mini projects grid
- School projects section
- Links to GitHub repositories

### Blog (/blog)
- About section
- Personal story
- Contact information

### Hire Me (/hireme)
- Services overview
- Contact form with Gmail integration
- Direct contact links
- Social media connections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Abrham Teshome**
- Email: abrhamteshe321@gmail.com
- LinkedIn: [Abrham Teshome](https://www.linkedin.com/in/abrham-teshome-ea6203)
- GitHub: [Abnormal03](https://github.com/Abnormal03)
- Telegram: [@NormalAb321](https://t.me/NormalAb321)

---

⭐ **Star this repo** if you found it helpful!
