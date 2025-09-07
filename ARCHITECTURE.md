# Architecture Guide

## 🏗️ Project Structure Overview

Motion UI Kit Pro follows a **dual-purpose architecture** that cleanly separates the **design system** (customer-facing components) from the **demo site** (internal showcase).

```
src/
├── components/          # 🎨 Design System (Customer-Facing)
├── app/                 # 🚀 Demo Site (Internal Use)
├── styles/              # 🎨 Global Design System
├── utils/               # 🔧 Shared Utilities
└── types/               # 📝 TypeScript Definitions
```

## 🎨 Design System (`src/components/`)

This is the **core product** that customers receive. Components are organized by functionality:

### Structure

```
src/components/
├── primitives/          # Core UI building blocks
│   ├── Button/
│   ├── Card/
│   ├── Toggle/
│   ├── IconButton/
│   └── Spinner/
├── feedback/            # User feedback components
│   ├── Modal/
│   └── Toast/          # Phase 2
├── navigation/          # Navigation components
│   ├── Tabs/           # Phase 2
│   ├── CommandPalette/ # Phase 2
│   └── Drawer/         # Phase 2
├── layout/              # Layout utilities
│   └── ScrollToTop/
└── index.ts             # Main exports
```

### Guidelines

- **Accessibility-first**: WCAG 2.1 AA compliance
- **Framework-agnostic**: Minimal external dependencies
- **Themeable**: Support light/dark modes
- **TypeScript**: Full type definitions
- **Tested**: Unit tests for all components

## 🚀 Demo Site (`src/app/`)

Internal showcase and documentation site. Not shipped to customers.

### Structure

```
src/app/
├── components/          # Demo-specific components
│   ├── Navbar/         # Site navigation
│   ├── Hero/           # Landing hero
│   ├── Footer/         # Site footer
│   ├── ThemeToggle/    # Theme switcher
│   └── CodePreview/    # Code examples
└── pages/              # Demo site pages
    ├── Home.tsx        # Landing page (/)
    ├── docs/           # Documentation (/docs/*)
    │   ├── documentation.tsx # Main docs (/docs)
    │   ├── design-tokens.tsx # Design tokens (/docs/design-tokens)
    │   ├── components.tsx    # Component library (/docs/components)
    │   └── changelog.tsx     # Version history (/docs/changelog)
    └── examples/       # Component examples (/examples/*)
        ├── Buttons.tsx # Button examples (/examples/buttons)
        ├── Cards.tsx   # Card examples (/examples/cards)
        ├── Modals.tsx  # Modal examples (/examples/modals)
        ├── tabs.tsx    # Tabs examples (/examples/tabs)
        └── toast.tsx   # Toast examples (/examples/toasts)
```

### Guidelines

- **Showcase-focused**: Demonstrate design system capabilities
- **Educational**: Show best practices and usage patterns
- **Marketing**: Professional presentation for customers
- **Interactive**: Live examples and code snippets

## 🎨 Design System Architecture

### SCSS Organization

```
src/styles/
├── abstracts/           # Design tokens
│   ├── _colors.scss     # Color palettes
│   ├── _tokens.scss     # Semantic tokens
│   ├── _typography.scss # Font scales
│   ├── _motion.scss     # Animation tokens
│   └── _breakpoints.scss # Responsive breakpoints
├── base/               # Foundation styles
│   ├── _reset.scss     # CSS reset
│   └── _typography.scss # Base typography
├── layout/             # Layout utilities
│   └── _grid.scss      # Grid system
└── main.scss           # Entry point
```

### Component Architecture

Each design system component follows this structure:

```
ComponentName/
├── ComponentName.tsx    # React component
├── ComponentName.scss   # Component styles
├── index.ts            # Exports
└── README.md           # Documentation
```

## 🔄 Import Patterns

### Design System Components

```tsx
// Category-based imports (recommended)
import { Button, Card } from '../../components/primitives';
import { Modal } from '../../components/feedback';
import { Tabs } from '../../components/navigation';

// Individual imports (for tree-shaking)
import { Button } from '../../components/primitives/Button';
```

### Demo Site Components

```tsx
// App-specific imports
import { Hero, CodePreview } from '../components';
import { Navbar, Footer } from '../../app/components';
```

## 📦 Export Strategy

### Category Index Files

Each category has an `index.ts` that exports all components:

```ts
// src/components/primitives/index.ts
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Toggle } from './Toggle';
// ... etc
```

### Main Design System Export

```ts
// src/components/index.ts
export * from './primitives';
export * from './feedback';
export * from './navigation';
export * from './layout';
```

## 🎯 Benefits of This Architecture

1. **🔄 Scalability**: Easy to add new components and categories
2. **👥 Team Clarity**: Clear separation of concerns
3. **📦 Distribution**: Design system can be easily packaged
4. **🧩 Modularity**: Components can be imported individually
5. **🎨 Consistency**: Enforced patterns across all components
6. **📱 Responsive**: Mobile-first approach throughout
7. **♿ Accessibility**: Built-in accessibility patterns
8. **🎭 Theming**: Consistent theme system across all components

## 🚀 Development Workflow

### Adding New Design System Components

1. Choose appropriate category (`primitives`, `feedback`, `navigation`, `layout`)
2. Create component directory with proper structure
3. Implement following established patterns
4. Add to category `index.ts`
5. Create demo page in `src/app/pages/`
6. Add tests in `src/__tests__/`

### Adding Demo Site Features

1. Add to `src/app/components/` or `src/app/pages/`
2. Focus on showcasing design system capabilities
3. Follow demo site patterns and styling

This architecture ensures the project scales professionally while maintaining clear boundaries between the product (design system) and its showcase (demo site).

## 🌐 URL Structure

The application follows a clean, hierarchical URL structure:

### Documentation Routes (`/docs/*`)

- `/docs` — Main documentation hub
- `/docs/design-tokens` — Design system tokens and colors
- `/docs/components` — Component library overview
- `/docs/changelog` — Version history and updates

### Example Routes (`/examples/*`)

- `/examples/buttons` — Button component examples
- `/examples/cards` — Card component examples
- `/examples/modals` — Modal component examples
- `/examples/tabs` — Tabs component examples (Phase 2)
- `/examples/toasts` — Toast component examples (Phase 2)

### Benefits of This URL Structure

- **🔍 SEO-Friendly**: Clean, semantic URLs for better search indexing
- **📚 Logical Grouping**: Related content grouped under clear namespaces
- **🎯 User Experience**: Intuitive navigation that users expect
- **🔗 Bookmarkable**: Easy to bookmark and share specific sections
- **📱 Mobile-Friendly**: Short, clean URLs work well on mobile devices
