# 🚀 Motion UI Kit Pro - Installation Guide

Thank you for purchasing Motion UI Kit Pro! This guide will help you get started quickly.

## 📦 What's Included

```
motion-ui-kit-pro/
├── 📁 src/components/          # Ready-to-use React components
├── 📁 src/styles/             # Complete SCSS design system
├── 📁 .storybook/             # Interactive component playground
├── 📁 docs/                   # Documentation and guides
├── 📄 QUICK_START.md          # Fast setup guide
├── 📄 COMPONENTS.md           # Component usage examples
├── 📄 DESIGN_TOKENS.md        # Design system reference
└── 📄 LICENSE                 # MIT License
```

## ⚡ Quick Start (2 minutes)

### Option 1: Copy Components to Existing Project

1. **Copy the components you need:**

   ```bash
   # Copy individual components
   cp -r src/components/Button/ your-project/src/components/
   cp -r src/styles/ your-project/src/styles/
   ```

2. **Install required dependencies:**

   ```bash
   npm install framer-motion react-router-dom @heroicons/react
   ```

3. **Import and use:**

   ```jsx
   import { Button } from './components/Button/Button';
   import './styles/main.scss';

   function App() {
     return <Button variant="primary">Click me!</Button>;
   }
   ```

### Option 2: Run as Complete Project

1. **Install dependencies:**

   ```bash
   cd motion-ui-kit-pro
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   # → Opens http://localhost:5173
   ```

3. **View Storybook playground:**
   ```bash
   npm run storybook
   # → Opens http://localhost:6006
   ```

## 🎨 Design System Integration

The complete SCSS design system is included with:

- **Color Tokens**: Light/dark themes with 7 complete color scales
- **Typography Scale**: Professional font sizing and weights
- **Motion System**: Accessibility-first animations with `prefers-reduced-motion`
- **Spacing Tokens**: 8px grid system with semantic aliases

```scss
// Import design tokens
@import 'styles/abstracts/tokens';

// Use in your components
.my-component {
  background: var(--background-primary);
  color: var(--text-primary);
  padding: var(--spacing-md);
  border-radius: $radius-md;
}
```

## 📚 Documentation

- **QUICK_START.md** - Get running in 2 minutes
- **COMPONENTS.md** - Complete component API reference
- **DESIGN_TOKENS.md** - Design system documentation
- **Storybook** - Interactive component playground with live props

## 🛠️ Tech Stack

- **React 19** + TypeScript
- **Framer Motion** for animations
- **SCSS** design system
- **Heroicons** for SVG icons
- **Storybook** for documentation

## 💡 Support

- 📖 **Documentation**: Check the included guides and Storybook
- 🐛 **Issues**: Email support@sebastiangonzalez.design
- 💬 **Questions**: Included community Discord invite

## 🎯 Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Explore components in Storybook (`npm run storybook`)
3. ✅ Copy components to your project
4. ✅ Customize design tokens for your brand
5. ✅ Build something amazing!

---

**🚀 Ready to build? Start with `npm run dev` and explore the components!**
