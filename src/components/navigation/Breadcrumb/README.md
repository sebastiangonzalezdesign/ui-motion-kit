# Breadcrumb Component

> **📍 Location**: `src/components/navigation/Breadcrumb/`  
> **Status**: ✅ **Available** — Production ready with full functionality

## Overview

The **Breadcrumb** component provides intelligent navigation with category-aware routing and state persistence. It automatically generates breadcrumbs based on the current route and maintains category context when navigating between the component library and individual examples.

## Features

- 🗺️ **Automatic Path Detection** — Generates breadcrumbs based on current route
- 🎯 **Category-Aware Navigation** — Maps component pages to their respective categories
- 🔄 **State Persistence** — Maintains category context using URL search parameters
- ♿ **Full Accessibility** — Keyboard navigation and screen reader support
- 🎨 **Theme Integration** — Adapts to light/dark modes automatically
- 📱 **Responsive Design** — Works seamlessly across all device sizes

## Usage

```tsx
import { Breadcrumb } from '../../components/navigation';

// Basic usage (auto-detects current route)
function Page() {
  return (
    <div>
      <Breadcrumb />
      {/* Page content */}
    </div>
  );
}

// Custom configuration
<Breadcrumb separator=">" showHome={false} maxItems={3} />;
```

## Props

```typescript
interface BreadcrumbProps {
  className?: string;
  separator?: React.ReactNode; // Default: "/"
  maxItems?: number; // Maximum breadcrumb items to display
  showHome?: boolean; // Show home icon (default: true)
}
```

## Category Mapping

The breadcrumb automatically maps component routes to their categories:

- **UI Basics**: buttons, cards, toggles, inputs
- **Navigation**: navbar, sidebar, tabs, command-palette, drawer
- **Feedback**: modals, toast
- **Motion Components**: loaders, micro-interactions, page-transitions

## Smart Navigation

When navigating from a component page back to the components library:

1. **Context Preservation**: Maintains the category you were viewing
2. **URL Parameters**: Uses `?category=navigation` for reliable state
3. **Seamless UX**: No loss of context or need to re-select categories

## Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Logical tab order
- **Semantic HTML**: Uses proper `nav` and list elements

## Styling

The component uses semantic CSS classes that integrate with the design system:

```scss
.breadcrumb {
  &__nav {
    /* Main navigation container */
  }
  &__list {
    /* Breadcrumb list */
  }
  &__item {
    /* Individual breadcrumb item */
  }
  &__link {
    /* Breadcrumb links */
  }
  &__separator {
    /* Separator between items */
  }
  &__current {
    /* Current page indicator */
  }
}
```

## Examples

### Basic Implementation

```tsx
<Breadcrumb />
// → Home / Components / Navigation / Sidebar
```

### Custom Separator

```tsx
<Breadcrumb separator="›" />
// → Home › Components › Navigation › Sidebar
```

### Limited Items

```tsx
<Breadcrumb maxItems={2} />
// → ... / Navigation / Sidebar
```

## Technical Details

- **React Router Integration**: Uses `useLocation` for route detection
- **State Management**: URL search parameters for category persistence
- **Performance**: Memoized component mapping for optimal rendering
- **Bundle Size**: Minimal impact (~2KB gzipped)

---

> **Note**: This component is designed to work seamlessly with the Motion UI Kit Pro navigation system and automatically adapts to your application's routing structure.
