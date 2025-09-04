# Motion UI Kit Pro - Component API Reference

## 📖 **API Design Principles**

All Motion UI Kit Pro components follow consistent API patterns:

- **TypeScript-first** with comprehensive prop types
- **Composition-friendly** with flexible children patterns
- **Accessibility-built-in** with ARIA attributes and keyboard support
- **Theme-aware** with automatic dark/light mode support
- **Motion-configurable** with animation customization options

---

## 🧩 **Enhanced Core Components**

### **Button Component**

Enhanced from the free version with additional props and states.

#### **Props Interface**

```typescript
interface ButtonProps {
  // Core props (inherited from free version)
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  children: React.ReactNode;

  // PRO: New props
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  motion?: 'subtle' | 'smooth' | 'spring' | 'bounce' | 'none';
  fullWidth?: boolean;

  // Standard HTML props
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}
```

#### **Usage Examples**

```tsx
// Basic usage (compatible with free version)
<Button variant="primary" size="md">
  Save Changes
</Button>

// PRO: Loading state
<Button
  variant="primary"
  loading={isLoading}
  loadingText="Saving..."
>
  Save Changes
</Button>

// PRO: With icon
<Button
  variant="secondary"
  icon={<CheckIcon />}
  iconPosition="left"
>
  Complete Task
</Button>

// PRO: Custom motion
<Button
  variant="primary"
  motion="spring"
  size="lg"
>
  Get Started
</Button>
```

#### **CSS Classes**

```scss
.button {
  // Size variants
  &--xs {
    @include typography('caption');
    padding: space('1') space('2');
  }
  &--sm {
    @include typography('body-sm');
    padding: space('1.5') space('3');
  }
  &--md {
    @include typography('body-md');
    padding: space('2') space('4');
  }
  &--lg {
    @include typography('body-lg');
    padding: space('3') space('6');
  }
  &--xl {
    @include typography('heading-sm');
    padding: space('4') space('8');
  }

  // Motion variants
  &--motion-spring {
    @include motion('elastic');
  }
  &--motion-smooth {
    @include motion('fade');
  }

  // Loading state
  &--loading {
    cursor: wait;
    .button__spinner {
      opacity: 1;
    }
    .button__content {
      opacity: 0.7;
    }
  }
}
```

---

## 🆕 **Premium Components**

### **Tabs Component**

A sophisticated tabbed interface with animated indicators and keyboard navigation.

#### **Props Interface**

```typescript
interface TabsProps {
  // Core configuration
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  size?: 'sm' | 'md' | 'lg';

  // Behavior
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  activationMode?: 'automatic' | 'manual';

  // Animation
  motion?: 'slide' | 'fade' | 'none';
  indicatorAnimation?: 'spring' | 'smooth' | 'none';

  // Accessibility
  'aria-label'?: string;
  children: React.ReactNode;

  // Styling
  className?: string;
  tabListClassName?: string;
  tabPanelClassName?: string;
}

interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabTriggerProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface TabContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  lazy?: boolean; // PRO: Lazy load content
}
```

#### **Usage Examples**

```tsx
<Tabs defaultValue="overview" orientation="horizontal">
  <TabList aria-label="Product Information">
    <TabTrigger value="overview">Overview</TabTrigger>
    <TabTrigger value="specs">Specifications</TabTrigger>
    <TabTrigger value="reviews">Reviews</TabTrigger>
  </TabList>

  <TabContent value="overview" lazy>
    <ProductOverview />
  </TabContent>

  <TabContent value="specs" lazy>
    <ProductSpecs />
  </TabContent>

  <TabContent value="reviews" lazy>
    <ProductReviews />
  </TabContent>
</Tabs>

// Vertical tabs
<Tabs orientation="vertical" variant="pills">
  {/* Tab content */}
</Tabs>

// Controlled tabs
<Tabs
  value={activeTab}
  onValueChange={setActiveTab}
  motion="slide"
  indicatorAnimation="spring"
>
  {/* Tab content */}
</Tabs>
```

---

### **Toast Component**

A comprehensive notification system with positioning, stacking, and auto-dismiss.

#### **Props Interface**

```typescript
interface ToastProps {
  // Content
  title?: string;
  description?: string;
  children?: React.ReactNode;

  // Appearance
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';

  // Behavior
  duration?: number; // Auto-dismiss time in ms
  persistent?: boolean; // Never auto-dismiss

  // Actions
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;

  // Animation
  motion?: 'slide' | 'fade' | 'scale' | 'bounce';
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

  // Accessibility
  'aria-live'?: 'polite' | 'assertive';
  role?: 'alert' | 'status';
}

// Toast system hooks and utilities
interface UseToastReturn {
  toast: (props: Omit<ToastProps, 'onClose'>) => string; // Returns toast ID
  dismiss: (id: string) => void;
  dismissAll: () => void;
  toasts: ToastInstance[];
}
```

#### **Usage Examples**

```tsx
// Hook-based usage
const { toast, dismiss } = useToast();

const handleSuccess = () => {
  toast({
    title: "Success!",
    description: "Your changes have been saved.",
    variant: "success",
    duration: 5000,
    action: {
      label: "Undo",
      onClick: () => undoChanges()
    }
  });
};

// Component usage
<Toast
  title="New message"
  description="You have a new message from John"
  variant="info"
  position="top-right"
  motion="slide"
  onClose={() => setShowToast(false)}
/>

// Provider setup (in app root)
<ToastProvider position="top-right" maxToasts={5}>
  <App />
</ToastProvider>
```

---

### **Drawer Component**

A slide-out panel component with multiple directions and gesture support.

#### **Props Interface**

```typescript
interface DrawerProps {
  // Visibility
  open: boolean;
  onOpenChange: (open: boolean) => void;

  // Positioning
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  // Behavior
  modal?: boolean; // Whether to show backdrop
  dismissible?: boolean; // Can be closed by clicking backdrop
  dragToClose?: boolean; // PRO: Gesture support

  // Animation
  motion?: 'slide' | 'fade' | 'scale';
  backdropBlur?: boolean;

  // Content
  children: React.ReactNode;

  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;

  // Styling
  className?: string;
  overlayClassName?: string;
}

interface DrawerTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DrawerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface DrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}
```

#### **Usage Examples**

```tsx
<Drawer open={isOpen} onOpenChange={setIsOpen}>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DrawerTrigger>

  <DrawerContent side="right" size="md">
    <DrawerHeader>
      <h2>Navigation Menu</h2>
    </DrawerHeader>

    <nav>
      <NavigationItems />
    </nav>

    <DrawerFooter>
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Close
      </Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

// Mobile-responsive drawer
<Drawer
  side="left"
  size="full"
  dragToClose={true}
  backdropBlur={true}
>
  {/* Content */}
</Drawer>
```

---

### **Command Palette**

A searchable command interface with keyboard shortcuts and categorization.

#### **Props Interface**

```typescript
interface CommandPaletteProps {
  // Visibility
  open: boolean;
  onOpenChange: (open: boolean) => void;

  // Search
  placeholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  // Behavior
  shouldFilter?: boolean; // Use built-in filtering
  filter?: (value: string, search: string) => boolean;

  // Keyboard
  hotkeys?: string[]; // e.g., ['cmd+k', 'ctrl+k']

  // Content
  children: React.ReactNode;

  // Styling
  className?: string;
}

interface CommandGroupProps {
  heading?: string;
  children: React.ReactNode;
}

interface CommandItemProps {
  // Content
  children: React.ReactNode;
  value?: string; // For filtering
  keywords?: string[]; // Additional search terms

  // Behavior
  onSelect?: () => void;
  disabled?: boolean;

  // Display
  icon?: React.ReactNode;
  shortcut?: string; // e.g., "⌘K"

  // Styling
  className?: string;
}
```

#### **Usage Examples**

```tsx
<CommandPalette
  open={isOpen}
  onOpenChange={setIsOpen}
  hotkeys={['cmd+k', 'ctrl+k']}
  placeholder="Search commands..."
>
  <CommandGroup heading="Pages">
    <CommandItem icon={<HomeIcon />} onSelect={() => navigate('/')} shortcut="⌘H">
      Home
    </CommandItem>
    <CommandItem icon={<UserIcon />} onSelect={() => navigate('/profile')}>
      Profile
    </CommandItem>
  </CommandGroup>

  <CommandGroup heading="Actions">
    <CommandItem icon={<PlusIcon />} onSelect={() => createNew()} shortcut="⌘N">
      Create New
    </CommandItem>
    <CommandItem icon={<SearchIcon />} onSelect={() => openSearch()} shortcut="⌘F">
      Search
    </CommandItem>
  </CommandGroup>
</CommandPalette>;

// Auto-registration of commands
const { register } = useCommandPalette();

useEffect(() => {
  return register({
    id: 'create-post',
    label: 'Create New Post',
    keywords: ['new', 'post', 'create', 'write'],
    shortcut: '⌘N',
    onSelect: () => navigate('/posts/new'),
    icon: <PlusIcon />,
  });
}, []);
```

---

## 🎨 **Component Composition Patterns**

### **Compound Components**

Many Pro components use the compound component pattern:

```tsx
// Flexible composition
<Tabs>
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  <TabContent value="tab1">Content 1</TabContent>
  <TabContent value="tab2">Content 2</TabContent>
</Tabs>

// Custom layouts possible
<div className="grid grid-cols-2 gap-4">
  <Tabs orientation="vertical">
    <TabList>
      <TabTrigger value="a">A</TabTrigger>
      <TabTrigger value="b">B</TabTrigger>
    </TabList>
  </Tabs>

  <div>
    <TabContent value="a">Content A</TabContent>
    <TabContent value="b">Content B</TabContent>
  </div>
</div>
```

### **Render Props & Children Functions**

```tsx
<CommandPalette>
  {({ search, results }) => (
    <>
      <CommandInput placeholder={`Search ${results.length} items...`} />
      <CommandResults>
        {results.map((item) => (
          <CommandItem key={item.id} value={item.value}>
            {item.label}
          </CommandItem>
        ))}
      </CommandResults>
    </>
  )}
</CommandPalette>
```

---

## ⚡ **Performance Considerations**

### **Lazy Loading**

Many components support lazy loading for better performance:

```tsx
// Tabs with lazy content loading
<TabContent value="heavy-content" lazy>
  <HeavyComponent />
</TabContent>

// Command palette with async search
<CommandPalette
  onSearchChange={async (query) => {
    const results = await searchAPI(query);
    setResults(results);
  }}
/>
```

### **Virtualization** _(Coming in v1.1)_

For large datasets:

```tsx
<CommandPalette virtualized itemHeight={40}>
  {thousandsOfItems.map((item) => (
    <CommandItem key={item.id}>{item.label}</CommandItem>
  ))}
</CommandPalette>
```

---

## ♿ **Accessibility Features**

### **Built-in ARIA Support**

All components include comprehensive ARIA attributes:

```tsx
// Automatically includes proper ARIA attributes
<Tabs>
  <TabList role="tablist" aria-label="Product Information">
    <TabTrigger
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
    >
      Tab Label
    </TabTrigger>
  </TabList>

  <TabContent role="tabpanel" aria-labelledby={`tab-${value}`} id={`panel-${value}`}>
    Content
  </TabContent>
</Tabs>
```

### **Keyboard Navigation**

- **Tabs**: Arrow keys, Home, End, Enter, Space
- **Command Palette**: Up/Down arrows, Enter, Escape
- **Drawer**: Escape to close, focus trap
- **Toast**: Focus management for actions

### **Screen Reader Support**

```tsx
// Toast announcements
<Toast aria-live="polite" role="status">
  Changes saved successfully
</Toast>

// Command palette announcements
<CommandPalette aria-label="Command palette">
  <div aria-live="polite" aria-atomic="true" className="sr-only">
    {results.length} commands available
  </div>
</CommandPalette>
```

---

## 🎯 **Migration from Free Version**

### **Backward Compatibility**

All free version APIs continue to work:

```tsx
// Free version (still works)
<Button variant="primary">Click me</Button>
<Card>Content</Card>
<Modal isOpen={true}>Modal content</Modal>

// Enhanced with new props
<Button variant="primary" loading={isLoading}>Click me</Button>
<Card motion="spring">Content</Card>
<Modal isOpen={true} size="lg" motion="scale">Modal content</Modal>
```

### **Progressive Enhancement**

Add Pro features gradually:

```tsx
// Start with basic usage
<Button onClick={handleClick}>Save</Button>

// Add loading state
<Button onClick={handleClick} loading={isLoading}>Save</Button>

// Add icon and motion
<Button
  onClick={handleClick}
  loading={isLoading}
  icon={<SaveIcon />}
  motion="spring"
>
  Save
</Button>
```

---

## 📚 **TypeScript Support**

### **Full Type Safety**

```typescript
// Component props are fully typed
interface MyComponentProps {
  buttonVariant: ButtonProps['variant']; // 'primary' | 'secondary' | etc.
  onTabChange: TabsProps['onValueChange']; // (value: string) => void
}

// Event handlers are typed
const handleButtonClick: ButtonProps['onClick'] = (event) => {
  // event is properly typed as React.MouseEvent<HTMLButtonElement>
};
```

### **Generic Components**

```typescript
// Command palette with typed data
interface Command {
  id: string;
  label: string;
  action: () => void;
}

<CommandPalette<Command>
  items={commands}
  onSelect={(command) => command.action()} // Fully typed
/>
```

---

_This API documentation is comprehensive and updated with each release. Last updated: September 3, 2025_
