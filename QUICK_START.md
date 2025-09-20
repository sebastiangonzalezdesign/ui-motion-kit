# 🚀 Quick Start Guide

## ⚡ 2-Minute Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
# → Opens http://localhost:5173
```

### 3. Explore Components

```bash
npm run storybook
# → Opens http://localhost:6006
```

## 🎯 Using Components in Your Project

### Copy Individual Components

```bash
# Copy the components you need
cp -r src/components/Button/ your-project/src/components/
cp -r src/styles/ your-project/src/styles/
```

### Install Required Dependencies

```bash
npm install framer-motion react-router-dom @heroicons/react
```

### Basic Usage

```jsx
import { Button } from './components/Button/Button';
import './styles/main.scss';

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}
```

## 🎨 Design System

Import design tokens for consistent theming:

```scss
@import 'styles/abstracts/tokens';

.my-component {
  background: var(--background-primary);
  color: var(--text-primary);
  padding: var(--spacing-md);
}
```

## 📚 What's Next?

- ✅ **Explore Storybook** - Interactive component playground
- ✅ **Read COMPONENTS.md** - Complete API reference
- ✅ **Check DESIGN_TOKENS.md** - Design system guide
- ✅ **Customize themes** - Adapt colors to your brand

---

🎉 **You're ready to build! Start exploring the components in Storybook.**
