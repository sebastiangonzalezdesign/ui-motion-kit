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
│   ├── Drawer/         # Phase 2
│   ├── Breadcrumb/     # Intelligent breadcrumb navigation ✅
│   └── Sidebar/        # Collapsible sidebar (preview)
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
        ├── buttons.tsx # Button examples (/examples/buttons)
        ├── cards.tsx   # Card examples (/examples/cards)
        ├── modals.tsx  # Modal examples (/examples/modals)
        ├── sidebar.tsx # Sidebar preview (/examples/sidebar) ✅
        ├── navbar.tsx  # Navigation examples (/examples/navbar)
        ├── toggles.tsx # Toggle examples (/examples/toggles)
        ├── inputs.tsx  # Input examples (/examples/inputs)
        ├── toast.tsx   # Toast examples (/examples/toast)
        ├── tabs.tsx    # Tabs examples (/examples/tabs)
        ├── loaders.tsx # Loading examples (/examples/loaders)
        ├── micro-interactions.tsx # Micro-interaction examples
        └── page-transitions.tsx   # Page transition examples
```

### Guidelines

- **Showcase-focused**: Demonstrate design system capabilities
- **Educational**: Show best practices and usage patterns
- **Marketing**: Professional presentation for customers
- **Interactive**: Live examples and code snippets

## 🎨 Design System Architecture

### Centralized Token System

Our enterprise-grade design token system uses a sophisticated centralized configuration approach:

#### **Three-Layer Architecture**

```scss
// Layer 1: Raw Color Palettes (_colors.scss)
$gray: (
  50: #f9fafb,
  100: #f3f4f6,
  500: #6b7280,
  900: #111827,
);

$primary-colors: (
  primary: rgb(99, 102, 241),
  // Brand color - fixed across themes
  secondary: rgb(244, 63, 94), // Accent color - fixed across themes
);

// Layer 2: Centralized Theme Configuration
$themes: (
  light: (
    background-primary: map.get($gray, 50),
    background-secondary: map.get($gray, 100),
    text-primary: map.get($gray, 900),
    text-secondary: map.get($gray, 600),
    border-primary: map.get($gray, 200),
  ),
  dark: (
    background-primary: map.get($gray, 900),
    background-secondary: map.get($gray, 800),
    text-primary: map.get($gray, 50),
    text-secondary: map.get($gray, 300),
    border-primary: map.get($gray, 700),
  ),
);

// Layer 3: Automatic Theme Generation
@each $theme-name, $theme-config in $themes {
  [data-theme='#{$theme-name}'] {
    @each $token-name, $token-value in $theme-config {
      --#{$token-name}: #{$token-value};
    }
  }
}
```

#### **Key Architectural Benefits**

1. **🎯 Single Source of Truth**: All theme variants defined in one centralized `$themes` map
2. **🔄 DRY Principle**: Eliminates 80+ lines of manual dark mode overrides
3. **📈 Infinite Scalability**: Adding new themes requires only map entries, not duplicate code
4. **🎨 Fixed vs. Contextual**: Brand colors remain consistent while contextual tokens adapt per theme
5. **⚡ Automatic Generation**: SCSS @each loops generate all theme variants programmatically
6. **🛠️ Maintainability**: Changes to token structure propagate automatically across all themes

#### **Token Categories**

- **Fixed Tokens**: Brand colors, primary palette (consistent across all themes)
- **Contextual Tokens**: Backgrounds, text, borders (adapt to each theme)
- **Semantic Naming**: `--background-primary`, `--text-secondary` for clear intent
- **Component Integration**: All components use CSS custom properties for theme-awareness

### SCSS Organization

```
src/styles/
├── abstracts/           # Design tokens
│   ├── _colors.scss     # Raw color palettes & brand colors
│   ├── _tokens.scss     # Centralized theme configuration & generation ⭐
│   ├── _typography.scss # Font scales
│   ├── _motion.scss     # UX-focused motion system with semantic roles
│   └── _breakpoints.scss # Responsive breakpoints
├── base/               # Foundation styles
│   ├── _reset.scss     # CSS reset
│   └── _typography.scss # Base typography
├── layout/             # Layout utilities
│   └── _grid.scss      # Grid system
└── main.scss           # Entry point
```

### UX-Focused Motion System Architecture

Our motion system represents a paradigm shift from traditional animation libraries to a **UX-focused semantic approach**:

#### **Semantic Motion Roles**

Instead of technical animation presets, we use UX-driven semantic roles:

```scss
$motion-semantic: (
  'micro-interaction': ...,
  // Hover, active, focus states
  'entrance': ...,
  // Modal opens, page reveals
  'exit': ...,
  // Dismissals, closures
  'emphasis': ...,
  // Draw attention, highlights
  'continuity': ...,
  // Navigation, context changes
  'feedback': ..., // Action confirmations
);
```

#### **Professional Easing Curves**

Easing functions mapped to specific UI intents:

- `ease-standard`: General UI transitions
- `ease-decelerate`: Entrances and reveals
- `ease-accelerate`: Exits and dismissals
- `ease-spring`: Playful, bouncy interactions
- `ease-emphasized`: Strong emphasis

#### **Architecture Benefits**

1. **🎯 UX-Driven**: Clear mapping between motion intent and implementation
2. **📏 Standardized**: Follows enterprise design system patterns
3. **🔄 Scalable**: Easy to extend with new semantic roles
4. **♿ Accessible**: Built-in `prefers-reduced-motion` support
5. **🧩 Modular**: Consistent with color/typography token architecture

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

## 🎯 **Future-Proof Token Evolution**

### **Current Foundation (Phase 1)**

The existing SCSS token system represents enterprise-grade architecture:

```scss
// Layer 1: Raw Palettes (_colors.scss)
$gray: (
  50: #f9fafb,
  100: #f3f4f6,
  ...,
  900: #111827,
);

// Layer 2: Semantic Tokens (_tokens.scss)
:root {
  --background-primary: #{map.get($gray, 50)};
  --text-primary: #{map.get($gray, 900)};
}

// Layer 3: Runtime Theming
[data-theme='dark'] {
  --background-primary: #{map.get($gray, 900)};
  --text-primary: #{map.get($gray, 50)};
}
```

### **Evolution Strategy (Phases 2-3)**

#### **Phase 2: Enhanced SCSS System**

- Maintain current SCSS workflow (proven and working)
- Add advanced semantic token categories
- Enhance theme switching capabilities
- Introduce component-level token customization

#### **Phase 3: Cross-Platform Token Pipeline**

**JSON Source of Truth Integration:**

```json
{
  "color": {
    "gray": { "50": { "value": "#f9fafb" }, "900": { "value": "#111827" } }
  },
  "semantic": {
    "background": {
      "primary": {
        "value": "{color.gray.50}",
        "darkValue": "{color.gray.900}"
      }
    }
  }
}
```

**Multi-Platform Generation:**

- **Web**: CSS custom properties (current) + SCSS maps
- **Mobile**: React Native style objects
- **Native**: iOS Swift tokens + Android XML resources
- **Frameworks**: Tailwind CSS configuration
- **Design**: Figma Token Studio integration

### **Architecture Benefits**

1. **🔄 Backward Compatibility**: Current SCSS workflow remains unchanged
2. **📱 Platform Agnostic**: Same tokens work across all platforms
3. **🎨 Designer Integration**: Seamless Figma synchronization
4. **🏢 Enterprise Ready**: Multi-brand, multi-platform token management
5. **⚡ Performance**: Optimized token delivery per platform
6. **🔧 Developer Experience**: Type safety, IDE support, auto-completion

This evolution positions Motion UI Kit Pro as a complete design system toolkit rather than just a React component library.

## 🌐 URL Structure

The application follows a clean, hierarchical URL structure:

### Documentation Routes (`/docs/*`)

### Documentation Routes (`/docs/*`)

- `/docs` — Main documentation hub
- `/docs/design-tokens` — Design system tokens and colors
- `/docs/components` — Component library overview with category-aware navigation
- `/docs/changelog` — Version history and updates

### Example Routes (`/examples/*`)

- `/examples/buttons` — Button component examples
- `/examples/cards` — Card component examples
- `/examples/modals` — Modal component examples
- `/examples/sidebar` — Sidebar component preview ✅
- `/examples/navbar` — Navigation component examples
- `/examples/toggles` — Toggle component examples
- `/examples/inputs` — Input component examples
- `/examples/toast` — Toast notification examples
- `/examples/tabs` — Tabs component examples (Phase 2)
- `/examples/loaders` — Loading component examples
- `/examples/micro-interactions` — Micro-interaction examples
- `/examples/page-transitions` — Page transition examples

### Navigation Features

- **🗺️ Intelligent Breadcrumbs**: Category-aware breadcrumb navigation with state persistence
- **🔄 Category Persistence**: URL search parameters maintain category context across navigation
- **📍 Component Mapping**: Automatic mapping of components to their respective categories
- **🎯 Seamless UX**: Smooth navigation between component library and individual examples

### Benefits of This URL Structure

- **🔍 SEO-Friendly**: Clean, semantic URLs for better search indexing
- **📚 Logical Grouping**: Related content grouped under clear namespaces
- **🎯 User Experience**: Intuitive navigation that users expect with intelligent context preservation
- **🔗 Bookmarkable**: Easy to bookmark and share specific sections with category context
- **📱 Mobile-Friendly**: Short, clean URLs work well on mobile devices
- **🧭 Smart Navigation**: Breadcrumb system maintains user context and reduces cognitive load
