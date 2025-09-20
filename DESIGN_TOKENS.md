# 🎨 Design Tokens Reference

Complete reference for the Motion UI Kit Pro design system.

## 🌈 Color System

### Color Scales

Each color has 9 shades (50-900) for complete flexibility:

```scss
// Available color scales
$gray: (
  50: #f9fafb,
  100: #f3f4f6,
  ...,
  900: #111827,
);
$blue: (
  50: #eff6ff,
  100: #dbeafe,
  ...,
  900: #1e3a8a,
);
$green: (
  50: #f0fdf4,
  100: #dcfce7,
  ...,
  900: #14532d,
);
$red: (
  50: #fef2f2,
  100: #fee2e2,
  ...,
  900: #7f1d1d,
);
$yellow: (
  50: #fefce8,
  100: #fef3c7,
  ...,
  900: #78350f,
);
$orange: (
  50: #fff7ed,
  100: #ffedd5,
  ...,
  900: #7c2d12,
);
$purple: (
  50: #faf5ff,
  100: #f3e8ff,
  ...,
  900: #581c87,
);
```

### Semantic Color Tokens

#### Background Tokens

```scss
// CSS Custom Properties
--background-primary     // Main background color
--background-secondary   // Secondary surfaces
--background-tertiary    // Tertiary surfaces
--background-inverse     // Inverse/contrast background

// SCSS Variables
$background-primary: var(--background-primary);
$background-secondary: var(--background-secondary);
```

#### Text Tokens

```scss
--text-primary          // Primary text color
--text-secondary        // Secondary text color
--text-tertiary         // Tertiary/muted text
--text-inverse          // Inverse text color
--text-disabled         // Disabled state text
```

#### Border Tokens

```scss
--border-light          // Light border color
--border-medium         // Medium border color
--border-dark           // Dark border color
--border-focus          // Focus state border
```

#### Feedback Tokens

```scss
--feedback-success      // Success state color
--feedback-warning      // Warning state color
--feedback-error        // Error state color
--feedback-info         // Info state color

// Light variants for backgrounds
--feedback-success-light
--feedback-warning-light
--feedback-error-light
--feedback-info-light
```

### Theme Implementation

#### Light Theme (Default)

```scss
:root {
  --background-primary: #ffffff;
  --background-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-light: #e5e7eb;
  // ... more tokens
}
```

#### Dark Theme

```scss
[data-theme='dark'] {
  --background-primary: #111827;
  --background-secondary: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --border-light: #374151;
  // ... more tokens
}
```

## 📏 Spacing System

### 8px Grid System

All spacing follows an 8px grid for visual consistency:

```scss
// Base spacing tokens
--spacing-0: 0;
--spacing-1: 0.25rem; // 4px
--spacing-2: 0.5rem; // 8px
--spacing-3: 0.75rem; // 12px
--spacing-4: 1rem; // 16px
--spacing-5: 1.25rem; // 20px
--spacing-6: 1.5rem; // 24px
--spacing-8: 2rem; // 32px
--spacing-10: 2.5rem; // 40px
--spacing-12: 3rem; // 48px
--spacing-16: 4rem; // 64px
--spacing-20: 5rem; // 80px
--spacing-24: 6rem; // 96px

// Semantic aliases
--spacing-xs: var(--spacing-1); // 4px
--spacing-sm: var(--spacing-2); // 8px
--spacing-md: var(--spacing-4); // 16px
--spacing-lg: var(--spacing-6); // 24px
--spacing-xl: var(--spacing-8); // 32px
--spacing-2xl: var(--spacing-12); // 48px
```

### Usage Examples

```scss
.component {
  padding: var(--spacing-md); // 16px
  margin-bottom: var(--spacing-lg); // 24px
  gap: var(--spacing-sm); // 8px
}
```

## 🔤 Typography System

### Font Families

```scss
--font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-code: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### Font Scale

```scss
// Font size tokens
--text-xs: 0.75rem; // 12px
--text-sm: 0.875rem; // 14px
--text-base: 1rem; // 16px
--text-lg: 1.125rem; // 18px
--text-xl: 1.25rem; // 20px
--text-2xl: 1.5rem; // 24px
--text-3xl: 1.875rem; // 30px
--text-4xl: 2.25rem; // 36px

// Font weight tokens
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

// Line height tokens
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Typography Classes

```scss
// Utility classes for typography
.text-xs {
  font-size: var(--text-xs);
}
.text-sm {
  font-size: var(--text-sm);
}
.text-base {
  font-size: var(--text-base);
}
.text-lg {
  font-size: var(--text-lg);
}

.font-normal {
  font-weight: var(--font-normal);
}
.font-medium {
  font-weight: var(--font-medium);
}
.font-bold {
  font-weight: var(--font-bold);
}
```

## 🌀 Motion System

### Timing Tokens

```scss
// Duration tokens
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;

// Easing tokens
--easing-linear: cubic-bezier(0, 0, 1, 1);
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--easing-sharp: cubic-bezier(0.4, 0, 1, 1);
```

### Motion Utilities

```scss
// Transition utilities
.transition-fast {
  transition: all var(--duration-fast) var(--easing-smooth);
}

.transition-normal {
  transition: all var(--duration-normal) var(--easing-smooth);
}

// Transform utilities
.scale-hover:hover {
  transform: scale(1.05);
}

.translate-y-hover:hover {
  transform: translateY(-2px);
}
```

### Accessibility

```scss
// Respect user motion preferences
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📐 Border Radius

```scss
// Border radius tokens
--radius-none: 0;
--radius-sm: 0.125rem; // 2px
--radius-base: 0.25rem; // 4px
--radius-md: 0.375rem; // 6px
--radius-lg: 0.5rem; // 8px
--radius-xl: 0.75rem; // 12px
--radius-2xl: 1rem; // 16px
--radius-full: 9999px; // Pill shape

// SCSS aliases for easier use
$radius-sm: var(--radius-sm);
$radius-md: var(--radius-md);
$radius-lg: var(--radius-lg);
```

## 🎯 Breakpoints

### Responsive Breakpoints

```scss
// Mobile-first breakpoint system
$breakpoints: (
  xs: 480px,
  // Small phones
  sm: 640px,
  // Large phones
  md: 768px,
  // Tablets
  lg: 1024px,
  // Small laptops
  xl: 1280px,
  // Large laptops
  2xl: 1536px, // Desktop monitors
);

// Breakpoint mixins
@mixin mobile-up {
  @media (min-width: 480px) {
    @content;
  }
}

@mixin tablet-up {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin desktop-up {
  @media (min-width: 1024px) {
    @content;
  }
}
```

### Usage Examples

```scss
.responsive-component {
  padding: var(--spacing-sm);

  @include tablet-up {
    padding: var(--spacing-md);
  }

  @include desktop-up {
    padding: var(--spacing-lg);
  }
}
```

## 🛠️ Using Design Tokens

### In Components

```scss
// Import tokens
@import 'styles/abstracts/tokens';

.my-component {
  // Use CSS custom properties (theme-aware)
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-light);

  // Use SCSS variables (for calculations)
  padding: $spacing-md;
  border-radius: $radius-lg;
  transition: all $duration-fast $easing-smooth;

  &:hover {
    background: var(--background-secondary);
    transform: translateY(-2px);
  }
}
```

### In JavaScript/React

```jsx
// Access CSS custom properties in JS
const styles = {
  backgroundColor: 'var(--background-primary)',
  color: 'var(--text-primary)',
  padding: 'var(--spacing-md)',
  borderRadius: 'var(--radius-lg)',
};

function MyComponent() {
  return <div style={styles}>Themed component</div>;
}
```

### Theme Switching

```jsx
// Toggle between light and dark themes
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
}
```

## 🎨 Customization

### Overriding Tokens

```scss
// Override default tokens for your brand
:root {
  --brand-primary: #6366f1; // Custom brand color
  --brand-secondary: #8b5cf6; // Custom accent color

  // Override existing tokens
  --text-primary: #1a1a1a;
  --background-primary: #fafafa;
}
```

### Adding Custom Tokens

```scss
// Add your own semantic tokens
:root {
  --color-success-bright: #10b981;
  --color-warning-bright: #f59e0b;
  --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

---

🎨 **Use these tokens consistently across your components for a cohesive design system!**
