# Motion UI Kit Pro

A **comprehensive, open-source library** of **UI micro-interactions** built with **React 19, Vite, TypeScript, SCSS, and Framer Motion**.  
Motion UI Kit Pro delivers advanced components, sophisticated animations, **revolutionary Experience System**, and a complete design system for professional applications.

> **� FREE & OPEN SOURCE** - Complete Experience System with context-aware components that understand user intent and adapt automatically to provide intelligent, personalized interfaces.

---

## 🧠 **Experience System** - Revolutionary Context-Aware UI

### **What is the Experience System?**

The Experience System is a groundbreaking approach to UI development that creates **context-aware, adaptive components** that understand user intent and automatically adjust their behavior, appearance, and guidance level based on user expertise, device context, and interaction patterns.

### **Key Capabilities:**

- **🎯 Intent-Driven Design**: Components understand what users are trying to accomplish
- **🧠 User Context Awareness**: Adapts to user expertise level, device type, and accessibility needs
- **📊 Learning System**: Components learn from user patterns and optimize over time
- **⚡ Real-Time Adaptation**: Interface adjusts instantly based on user behavior and context
- **♿ Accessibility Intelligence**: Automatically adapts for reduced motion, screen readers, and accessibility needs

### **Available Experience Components:**

#### **Smart Button** 🎯

Intent-driven buttons that adapt to user context:

- **Context-aware styling** based on action criticality (low/medium/high/critical)
- **User journey adaptation** (discovery/evaluation/purchase/usage/advocacy)
- **Flow position awareness** (entry/middle/exit/confirmation)
- **Automatic accessibility** enhancements based on user needs

#### **Confirmation Flow** 🧠

Intelligent confirmation dialogs that adapt to user expertise:

- **Adaptive complexity** - More guidance for new users, streamlined for experts
- **Context-aware confirmations** based on action criticality and user history
- **Smart safeguards** with automatic checklists for critical actions
- **Learning behavior** that reduces friction for experienced users

### **Developer Experience:**

```jsx
// Traditional approach
<Button variant="primary" size="lg">Delete Account</Button>

// Experience System approach - understands intent and adapts
<SmartButton
  intent="destructive"
  criticality="critical"
  userJourneyStage="usage"
  flowPosition="confirmation"
>
  Delete Account
</SmartButton>
```

The Experience System automatically:

- Adapts button styling based on action criticality
- Provides appropriate confirmation flows for destructive actions
- Adjusts guidance level based on user expertise
- Learns from user patterns to optimize future interactions

---

## 🎮 **Live Demo**

👉 [View Live Demo](https://motion-pro.sebastiangonzalez.design/)

Experience the full range of open-source components, advanced animations, and the revolutionary Experience System in action.

> **Status:** Phase 2 Complete ✅ — Experience System implemented with Smart Button and Confirmation Flow components, comprehensive design system, and intelligent navigation

---

## ✨ Features

- 🎨 **Advanced Design System** — centralized theme configuration with automatic generation, eliminating duplication across 7 complete color scales (50-900 shades)
- 🌗 **Enhanced Theme System** — sophisticated light/dark modes with CSS custom properties and runtime switching
- 🌀 **Advanced Motion System** — UX-focused semantic motion roles with professional easing curves and accessibility-first approach
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

### 🌟 **Experience System** - Revolutionary Context-Aware Components

#### 🧠 **Smart Components** (`src/components/primitives/`)

- **SmartButton** — Intent-driven buttons that adapt to user context, criticality, and journey stage with automatic accessibility enhancements
- **Confirmation Flow** — Intelligent confirmation dialogs that adapt complexity based on user expertise and action criticality
- **Adaptive Forms** — _(Coming Soon)_ Forms that adapt validation and guidance based on user behavior patterns

#### ⚡ **Experience Context** (`src/utils/`)

- **ExperienceProvider** — Global context provider for user behavior tracking and adaptive component behavior
- **useSmartComponent** — React hook for accessing user context and tracking component interactions
- **Adaptation Rules** — Configurable rules engine for defining how components adapt to different user contexts

### ✅ **Foundation Components** - Phase 1 Complete

#### 🧩 **Primitives** (`src/components/primitives/`)

- **Button** — Multiple variants (primary, outline, ghost) with hover & press states, full accessibility
- **Card** — Flexible content layout with hover effects and interactive states
- **Toggle** — Enhanced animated switch with morphing Hero Icons, state-based colors (off: white, on: accent), smooth spring physics
- **Input** — Complete form input system with floating/fixed labels, validation states, password toggle, search optimization, icon support, error styling with proper focus colors, accessibility compliance
- **IconButton** — Compact button variant with icon support and multiple states
- **Spinner** — Multiple sizes and variants for loading states

#### 💬 **Feedback** (`src/components/feedback/`)

- **Modal** — Fully accessible modal with backdrop, ESC/backdrop close, focus trap, and portal mounting

#### 🧭 **Navigation** (`src/components/navigation/`)

- **Breadcrumb** — Intelligent breadcrumb navigation with category-aware routing and state persistence
- **Tabs** — Advanced tabbed interface with three variants (default, pills, underline, bordered), animated indicators, smooth transitions, accessibility compliance
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

### 🚀 Phase 2 - Premium Components (Major Progress)

| Component Category  | Phase 1 Foundation ✅                                                                      | Phase 2 Premium 🚀                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **Core Components** | ✅ **Buttons**, ✅ **Cards**, ✅ **Modals**, ✅ **Toggles**, ✅ **Spinners**, ✅ **Toast** | ✅ **Tabs** (4 variants), ✅ **Advanced Input** (floating/fixed labels), + Drawers, Counters |
| **Navigation**      | ✅ **Breadcrumb**, ✅ **Tabs**, ✅ **Command Palette**, ✅ **Drawer**                      | + Pagination, Advanced Sidebar, Mega Menu                                                    |
| **Forms**           | ✅ **Input** (complete with validation)                                                    | + Advanced form components, validation, file uploads                                         |
| **Data Display**    | Basic Cards                                                                                | + Tables, Lists, Statistics Cards, Progress Indicators                                       |
| **Motion System**   | ✅ **Enhanced spring physics**, basic transitions                                          | + Advanced scroll-triggered animations, stagger effects                                      |
| **Documentation**   | ✅ **Storybook** (interactive component playground) + README + demo site                   | Additional design tokens visualization + comprehensive guides                                |
| **Theming**         | Light + Dark modes                                                                         | + Multiple theme presets + custom token system                                               |
| **Templates**       | Component demos                                                                            | + Dashboard layouts + Landing page templates                                                 |
| **Developer Tools** | SCSS tokens                                                                                | + Figma design system + Tailwind CSS integration + Cross-platform token pipeline             |

#### 🎯 **Recent Achievements (Phase 2 & 3)**

- ✅ **Advanced Input Component**: Complete implementation with floating/fixed labels, validation, password toggle, icon support
- ✅ **Enhanced Toggle Component**: Morphing animations with Hero Icons, state-based colors, smooth spring physics
- ✅ **Advanced Tabs Component**: Four variants (default, pills, underline, bordered) with animated indicators and accessibility
- ✅ **Security Hardening**: Protected against npm supply chain attacks with exact dependency versioning
- ✅ **Animation Enhancement**: Advanced spring physics and context-aware transitions
- ✅ **Interactive Documentation**: Complete Storybook component playground with live props, controls, and comprehensive examples

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
│   │   ├── SmartButton/ # 🌟 Experience System - Context-aware buttons ✨
│   │   ├── Card/        # Flexible content containers
│   │   ├── Toggle/      # Enhanced animated switch with Hero Icons ✅
│   │   ├── Input/       # Advanced input with floating/fixed labels ✅
│   │   ├── IconButton/  # Compact icon-based buttons
│   │   └── Spinner/     # Loading state indicators
│   ├── feedback/        # User feedback components
│   │   ├── Modal/       # Accessible modal dialogs
│   │   └── Toast/       # Notification toasts (Phase 2)
│   ├── navigation/      # Navigation components
│   │   ├── Tabs/        # Advanced tab interface with 4 variants ✅
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
│       │   ├── buttons.tsx           # Button showcase with SmartButton integration (/examples/buttons)
│       │   ├── experience-demo.tsx   # 🌟 Experience System interactive demo (/examples/experience-demo) ✨
│       │   ├── confirmation-flow.tsx # 🧠 Intelligent confirmation examples (/examples/confirmation-flow) ✨
│       │   ├── cards.tsx             # Card examples (/examples/cards)
│       │   ├── modals.tsx            # Modal demonstrations (/examples/modals)
│       │   ├── sidebar.tsx           # Sidebar preview (/examples/sidebar) ✅
│       │   ├── tabs.tsx              # Tabs showcase (/examples/tabs)
│       │   ├── toast.tsx             # Toast examples (/examples/toast)
│       │   ├── navbar.tsx            # Navigation examples (/examples/navbar)
│       │   ├── toggles.tsx           # Toggle examples (/examples/toggles)
│       │   ├── inputs.tsx            # Input examples (/examples/inputs)
│       │   ├── loaders.tsx           # Loading examples (/examples/loaders)
│       │   ├── micro-interactions.tsx # Micro-interaction examples
│       │   └── page-transitions.tsx   # Page transition examples
│       └── Home.tsx     # Landing page (/)
├── styles/              # 🎨 SCSS Design System
│   ├── abstracts/       # Design tokens, colors, typography
│   ├── base/            # Reset, typography base styles
│   ├── layout/          # Grid and layout utilities
│   └── main.scss        # Main stylesheet entry
├── utils/               # JavaScript utilities
│   ├── motion.ts        # Motion configuration and helpers
│   └── experience-context.ts # 🌟 Experience System - Context provider and hooks ✨
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
npm run storybook    # Start Storybook component playground
npm run build-storybook # Build Storybook for production
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

### Phase 2 - Experience System & Premium Components ✅ **COMPLETE**

**Experience System - Revolutionary Achievement ✅**

- [x] **Context-Aware Architecture** - Global ExperienceProvider with user behavior tracking
- [x] **SmartButton Component** - Intent-driven buttons that adapt to user context, criticality, and journey stage
- [x] **Confirmation Flow System** - Intelligent confirmation dialogs that adapt complexity based on user expertise
- [x] **Learning System** - Components learn from user patterns and optimize over time
- [x] **Accessibility Intelligence** - Automatic adaptation for reduced motion, screen readers, and accessibility needs
- [x] **Experience Demo Page** - Interactive demonstrations of context-aware component behavior
- [x] **Site Integration** - Experience System featured across Home, Components, and Examples pages

**Premium Components - Major Progress ✅**

- [x] **Advanced Input Component** - Complete with floating/fixed labels, validation states, password toggle, icon support
- [x] **Enhanced Toggle Component** - Morphing animations with Hero Icons, state-based colors, smooth spring physics
- [x] **Advanced Tabs Component** - Four variants (default, pills, underline, bordered) with animated indicators and accessibility
- [x] **Security Hardening** - Protected against npm supply chain attacks with exact dependency versioning
- [x] **Animation Enhancement** - Advanced spring physics and context-aware transitions

### Phase 3 - Advanced Components & Tools 🔄 **IN PROGRESS**

**Next Priority Components**

- [ ] **Adaptive Forms** - Forms that adapt validation and guidance based on user behavior patterns
- [ ] **Smart Navigation** - Context-aware navigation components that adapt to user flow
- [ ] **Intelligent Data Display** - Tables and lists that adapt complexity based on user expertise
- [ ] **Advanced Experience Rules** - More sophisticated adaptation rules and learning algorithms

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
