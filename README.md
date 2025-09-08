# Motion UI Kit Pro

A **premium, comprehensive library** of **UI micro-interactions** built with **React 19, Vit### **Color System\*\*

- **Cen### **Enhanced Motion System\*\*

- **UX-Focused Semantic Roles**: Motion tokens mapped to specific interaction patterns (micro-interaction, entrance, exit, emphasis, continuity, feedback)
- **Professional Easing Curves**: Semantic easing functions with clear intent (ease-standard, ease-decelerate, ease-accelerate, ease-spring, ease-emphasized)
- **Accessibility-First**: Built-in `prefers-reduced-motion` support and performance optimization
- **Centralized Architecture**: All motion tokens in `_motion.scss` and `_tokens.scss` following established patterns
- **Duration Scale**: Six-level timing system from instant (0ms) to slowest (1000ms) for different interaction types
- **Backward Compatibility**: Legacy aliases maintained while introducing semantic improvementszed Theme Configuration\*\*: Single `$themes` map eliminates duplication and scales to any number of themes
- **Automatic Generation**: No manual dark mode overrides — themes generated programmatically from centralized configuration
- **Fixed vs. Contextual**: Brand colors stay consistent while contextual tokens (backgrounds, text) adapt to themes
- **Seven Complete Scales**: Gray, Blue, Green, Red, Yellow, Orange, Purple with 50-900 shades each
- **Enterprise-Ready**: DRY principle applied with professional separation of concerns

### **Theme System**

- **Runtime Switching**: CSS custom properties enable instant theme changes without page reload
- **Scalable Architecture**: Adding new themes (high-contrast, sepia, etc.) requires only map updates
- **Brand Consistency**: Fixed tokens ensure brand elements remain consistent across all themes
- **Performance**: Optimized compilation with minimal runtime overheadCSS, and Framer Motion\*\*.  
  Motion UI Kit Pro delivers advanced components, sophisticated animations, and a complete design system for professional applications.

---

## ## � Support

This free release is just the beginning. If you like it, **star the repo ⭐** and let us know which components you'd like to see next.

> Motion UI Kit — bring polish, accessibility, and motion to your interfaces.

---

**Last Updated**: September 2025 — Enhanced motion system with UX-focused semantic roles and professional easing curves.

👉 [View Live Demo](https://motion-pro.sebastiangonzalez.design/)

Experience the full range of premium components, advanced animations, and comprehensive design system in action.

> **Status:** Phase 1 Complete ✅ — Enhanced foundation with comprehensive design system, UX-focused motion architecture, and intelligent navigation

---

## ✨ Features

- 🎨 **Advanced Design System** — centralized theme configuration with automatic generation, eliminating duplication across 7 complete color scales (50-900 shades)
- 🌗 **Enhanced Theme System** — sophisticated light/dark modes with CSS custom properties and runtime switching
- 🌀 **Premium Motion System** — UX-focused semantic motion roles with professional easing curves and accessibility-first approach
- 📚 **Professional Components** — production-ready components with TypeScript support and accessibility built-in
- ⚡ **Interactive UI Library** — enhanced buttons, cards, modals with hover states and micro-interactions
- 🧩 **Modular Design System** — scalable SCSS architecture with semantic tokens and utility functions
- ♿ **Accessibility Excellence** — WCAG 2.1 AA compliance with `prefers-reduced-motion` support
- 📱 **Advanced Responsive** — granular breakpoints with mobile-first approach and fluid typography
- 🔄 **Sophisticated Transitions** — context-aware animations with performance optimization
- 🗺️ **Intelligent Navigation** — breadcrumb system with category-aware routing and state persistence
- 📖 **Complete Documentation** — comprehensive guides, API references, and design system documentation

---

## 📦 Components

### ✅ Phase 1 Complete - Foundation Components

#### 🧩 **Primitives** (`src/components/primitives/`)

- **Button** — Multiple variants (primary, secondary, ghost) with hover & press states, full accessibility
- **Card** — Flexible content layout with hover effects and interactive states
- **Toggle** — Smooth animated switch with labels and accessibility support
- **IconButton** — Compact button variant with icon support and multiple states
- **Spinner** — Multiple sizes and variants for loading states

#### 💬 **Feedback** (`src/components/feedback/`)

- **Modal** — Fully accessible modal with backdrop, ESC/backdrop close, focus trap, and portal mounting

#### 🧭 **Navigation** (`src/components/navigation/`)

- **Breadcrumb** — Intelligent breadcrumb navigation with category-aware routing and state persistence
- **Sidebar** — Collapsible sidebar navigation (coming soon with advanced features)
- _Additional Phase 2 components ready for implementation_

#### 📐 **Layout** (`src/components/layout/`)

- **ScrollToTop** — Smooth scroll-to-top functionality with animated button

#### 🚀 **Demo Site Components** (`src/app/components/`)

- **ThemeToggle** — Persistent light/dark mode toggle (☀️/🌙) with system preference detection
- **CodePreview** — Interactive code snippets with syntax highlighting and copy functionality
- **Hero Section** — Landing page hero with advanced typography and call-to-action components
- **Navbar** — Responsive navigation with theme toggle integration
- **Footer** — Site footer with links and branding

### 🎨 Enhanced Design System (Phase 1)

- **Color System**: 7 complete color scales (Gray, Blue, Green, Red, Yellow, Orange, Purple) with 50-900 shades
- **Semantic Tokens**: Background, text, border, accent, and feedback color tokens with CSS custom properties
- **Theme System**: Light/dark mode with runtime switching and `prefers-color-scheme` support
- **Typography Scale**: Comprehensive font sizing, weights, and responsive typography
- **Motion Tokens**: Accessibility-first animation system with `prefers-reduced-motion` support
- **SCSS Architecture**: Modern module system with proper separation of concerns

### 🚀 Phase 2 - Premium Components (In Development)

| Component Category  | Phase 1 Foundation ✅                     | Phase 2 Premium 🚀                                                               |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| **Core Components** | Buttons, Cards, Modals, Toggles, Spinners | + Tabs, Drawers, Toasts, Counters, Advanced Forms                                |
| **Navigation**      | Breadcrumb, Sidebar (preview)             | + Command Palette, Pagination, Advanced Sidebar                                  |
| **Data Display**    | Basic Cards                               | + Tables, Lists, Statistics Cards, Progress Indicators                           |
| **Motion System**   | Basic transitions                         | + Advanced spring physics, scroll-triggered animations, stagger effects          |
| **Documentation**   | README + demo site                        | + Full Storybook with interactive controls and design tokens                     |
| **Theming**         | Light + Dark modes                        | + Multiple theme presets + custom token system                                   |
| **Templates**       | Component demos                           | + Dashboard layouts + Landing page templates                                     |
| **Developer Tools** | SCSS tokens                               | + Figma design system + Tailwind CSS integration + Cross-platform token pipeline |

---

## 🛠️ Tech Stack

- ⚛️ **React 19** + TypeScript
- ⚡ **Vite 7** for lightning-fast builds
- 🎨 **SCSS** with design-system architecture
- 🌀 **Framer Motion** for animations
- 📦 **Heroicons** for scalable SVG icons
- 🔗 **React Router** for navigation
- 📝 **Prettier** for code formatting

---

## 🎨 Design System Architecture

### Color System

- **Raw Palettes**: 7 color scales with 50-900 shades in `_colors.scss`
- **Semantic Tokens**: Meaningful color names in `_tokens.scss` with CSS custom properties
- **Utility Functions**: Helper functions in `functions/_colors.scss` for accessing colors
- **Theme Switching**: Runtime light/dark mode with CSS custom properties

### **Typography System**

- **Centralized Token Architecture**: All typography tokens defined in `_tokens.scss` for maximum maintainability
- **Semantic Utility Classes**: Auto-generated `.text-*` classes from `$typography-scale` map in `_typography.scss`
- **Consistent Naming Convention**: `display-*`, `heading-*`, `body-*` patterns for intuitive hierarchy
- **Responsive by Default**: Fluid typography with `clamp()` functions for optimal readability across devices
- **Theme-Aware Colors**: Typography colors automatically adapt to light/dark themes via CSS custom properties
- **Three-Tier System**: Display (hero), Heading (sections), Body (content) with specialized styles (caption, overline, code)
- **Auto-Generated Utilities**: SCSS loops eliminate manual utility class creation and ensure consistency
- **Performance Optimized**: CSS generated at build time with zero runtime overhead

### Motion System

- **Accessibility First**: Respects `prefers-reduced-motion` user preference
- **Motion Tokens**: `$motion-normal`, `$motion-fast` with consistent easing curves
- **Framer Motion**: Advanced animations with spring physics and performance optimization

### SCSS Architecture

```
styles/
├── abstracts/           # Design tokens and variables
│   ├── _colors.scss     # Raw color palettes (7 scales, 50-900 shades)
│   ├── _tokens.scss     # Centralized design tokens (colors, typography, spacing)
│   ├── _typography.scss # Typography scale system with auto-generated utilities
│   ├── _motion.scss     # UX-focused motion system with semantic roles and easing curves
│   └── _breakpoints.scss# Responsive breakpoints and media queries
├── functions/           # Utility functions
│   └── _colors.scss     # Color access functions and theme utilities
├── base/               # Reset and base styles
└── components/         # Component-specific styles
```

---

## 📁 Project Structure

```
src/
├── components/          # 🎨 Design System Components (Customer-Facing)
│   ├── primitives/      # Core UI building blocks
│   │   ├── Button/      # Primary, secondary, ghost variants
│   │   ├── Card/        # Flexible content containers
│   │   ├── Toggle/      # Animated switch controls
│   │   ├── IconButton/  # Compact icon-based buttons
│   │   └── Spinner/     # Loading state indicators
│   ├── feedback/        # User feedback components
│   │   ├── Modal/       # Accessible modal dialogs
│   │   └── Toast/       # Notification toasts (Phase 2)
│   ├── navigation/      # Navigation components
│   │   ├── Tabs/        # Tab interface (Phase 2)
│   │   ├── CommandPalette/ # Command search (Phase 2)
│   │   ├── Drawer/      # Side drawer (Phase 2)
│   │   ├── Breadcrumb/  # Intelligent breadcrumb navigation ✅
│   │   └── Sidebar/     # Collapsible sidebar (preview)
│   ├── layout/          # Layout utilities
│   │   └── ScrollToTop/ # Scroll-to-top functionality
│   └── index.ts         # Main component exports
├── app/                 # 🚀 Demo Site (Internal Use)
│   ├── components/      # Demo site specific components
│   │   ├── Navbar/      # Site navigation
│   │   ├── Hero/        # Landing page hero sections
│   │   ├── Footer/      # Site footer
│   │   ├── ThemeToggle/ # Light/dark mode switcher
│   │   └── CodePreview/ # Interactive code examples
│   └── pages/           # Demo site pages
│       ├── docs/        # Documentation pages
│       │   ├── components.tsx    # Component library (/docs/components)
│       │   ├── design-tokens.tsx # Design system showcase (/docs/design-tokens)
│       │   ├── documentation.tsx # Main documentation (/docs)
│       │   └── changelog.tsx     # Version history (/docs/changelog)
│       ├── examples/    # Component examples
│       │   ├── buttons.tsx       # Button showcase (/examples/buttons)
│       │   ├── cards.tsx         # Card examples (/examples/cards)
│       │   ├── modals.tsx        # Modal demonstrations (/examples/modals)
│       │   ├── sidebar.tsx       # Sidebar preview (/examples/sidebar) ✅
│       │   ├── tabs.tsx          # Tabs showcase (/examples/tabs)
│       │   ├── toast.tsx         # Toast examples (/examples/toast)
│       │   ├── navbar.tsx        # Navigation examples (/examples/navbar)
│       │   ├── toggles.tsx       # Toggle examples (/examples/toggles)
│       │   ├── inputs.tsx        # Input examples (/examples/inputs)
│       │   ├── loaders.tsx       # Loading examples (/examples/loaders)
│       │   ├── micro-interactions.tsx # Micro-interaction examples
│       │   └── page-transitions.tsx   # Page transition examples
│       └── Home.tsx     # Landing page (/)
├── styles/              # 🎨 SCSS Design System
│   ├── abstracts/       # Design tokens, colors, typography
│   ├── base/            # Reset, typography base styles
│   ├── layout/          # Grid and layout utilities
│   └── main.scss        # Main stylesheet entry
├── utils/               # JavaScript utilities
│   └── motion.ts        # Motion configuration and helpers
└── types/               # TypeScript type definitions
```

### 🏗️ Architecture Benefits

- **🔄 Scalable Structure**: Clean separation between design system and demo site
- **👥 Customer Clarity**: Clear distinction between shipped components and demo-only features
- **📦 Easy Distribution**: Design system components can be easily extracted and packaged
- **🧩 Modular Design**: Components organized by functionality for better maintainability
- **🎯 Professional**: Industry-standard structure that scales with team growth

> 📖 **Detailed Architecture Guide**: See [ARCHITECTURE.md](./ARCHITECTURE.md) for comprehensive documentation on project structure, patterns, and development workflow.

---

## 🧪 Development

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Opens http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Build Output

- **CSS**: ~69KB (12KB gzipped) - Optimized SCSS compilation
- **JS**: ~394KB (123KB gzipped) - React 19 + Framer Motion bundle
- **Zero Warnings**: Clean build with modern SCSS architecture

---

## ✅ Development Status

### Phase 1 - Foundation ✅ **COMPLETE**

- [x] Enhanced color system with 7 complete scales (50-900 shades)
- [x] Modern SCSS architecture with proper separation of concerns
- [x] CSS custom properties for runtime theme switching
- [x] Semantic design tokens with utility functions
- [x] All foundation components tested and production-ready
- [x] Zero build warnings with optimized compilation
- [x] Accessibility support with `prefers-reduced-motion`
- [x] TypeScript integration with proper type definitions
- [x] Responsive design with mobile-first approach

### Phase 2 - Premium Components 🚧 **NEXT**

- [ ] Advanced component library (Tabs, Drawers, Toasts)
- [ ] Command palette with search and keyboard navigation
- [ ] Data display components (Tables, Progress, Statistics)
- [ ] Advanced motion system with scroll-triggered animations
- [ ] Storybook documentation with interactive controls
- [ ] Multiple theme presets and custom theming system
- [ ] Dashboard and landing page templates
- [ ] Figma design system integration

### Phase 3 - Cross-Platform Token System 🎯 **FUTURE**

- [ ] JSON-based token source of truth with Style Dictionary integration
- [ ] Multi-platform token generation (React Native, iOS, Android, Tailwind)
- [ ] Figma bidirectional sync and Token Studio integration
- [ ] Enterprise multi-brand token management
- [ ] Automated token validation and documentation generation
- [ ] Cross-platform design system toolkit

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE) — free to use and modify with attribution.

---

## 🤝 Contributing

We welcome contributions! 🎉 See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on PRs, formatting, and tests.

---

## 🙋 Support

This free release is just the beginning. If you like it, **star the repo ⭐** and let us know which components you’d like to see next.

> Motion UI Kit — bring polish, accessibility, and motion to your interfaces.
