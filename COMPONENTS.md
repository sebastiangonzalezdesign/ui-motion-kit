# 🧩 Component Reference

Complete API reference for all Motion UI Kit Pro components.

## 🎨 Primitives

### Button

Interactive button component with multiple variants and states.

```jsx
import { Button } from './components/Button/Button';

// Basic usage
<Button variant="primary">Click me</Button>
<Button variant="outline" size="lg">Large Button</Button>
<Button variant="ghost" disabled>Disabled</Button>

// With icons
<Button variant="primary" icon={<PlusIcon />}>Add Item</Button>
```

**Props:**

- `variant`: `"primary" | "outline" | "ghost"` - Button style variant
- `size`: `"sm" | "md" | "lg"` - Button size
- `disabled`: `boolean` - Disable button interaction
- `icon`: `ReactNode` - Icon to display alongside text
- `onClick`: `() => void` - Click handler

### Toggle

Animated switch/toggle component with smooth transitions.

```jsx
import { Toggle } from './components/Toggle/Toggle';

// Basic usage
<Toggle checked={isEnabled} onChange={setIsEnabled} />
<Toggle checked={darkMode} onChange={setDarkMode} label="Dark Mode" />

// With custom icons
<Toggle
  checked={notifications}
  onChange={setNotifications}
  iconOff={<BellSlashIcon />}
  iconOn={<BellIcon />}
/>
```

**Props:**

- `checked`: `boolean` - Toggle state
- `onChange`: `(checked: boolean) => void` - State change handler
- `label`: `string` - Accessible label
- `disabled`: `boolean` - Disable toggle interaction
- `iconOff`: `ReactNode` - Icon when toggle is off
- `iconOn`: `ReactNode` - Icon when toggle is on

### Input

Complete form input component with validation and multiple states.

```jsx
import { Input } from './components/Input/Input';

// Basic usage
<Input placeholder="Enter your name" />
<Input type="email" label="Email Address" required />
<Input type="password" label="Password" />

// With validation
<Input
  label="Username"
  error="Username already taken"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

**Props:**

- `type`: `"text" | "email" | "password" | "search"` - Input type
- `label`: `string` - Input label (floating or fixed)
- `placeholder`: `string` - Placeholder text
- `error`: `string` - Error message to display
- `disabled`: `boolean` - Disable input
- `required`: `boolean` - Mark as required field
- `value`: `string` - Controlled input value
- `onChange`: `(event) => void` - Change handler

### Card

Flexible content container with hover effects and interactive states.

```jsx
import { Card } from './components/Card/Card';

// Basic usage
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>

// Interactive card
<Card interactive onClick={() => navigate('/details')}>
  <h3>Clickable Card</h3>
  <p>This card responds to clicks and hover.</p>
</Card>
```

**Props:**

- `children`: `ReactNode` - Card content
- `interactive`: `boolean` - Enable hover/click interactions
- `onClick`: `() => void` - Click handler for interactive cards

## 🧭 Navigation

### Tabs

Advanced tabbed interface with smooth animations and accessibility.

```jsx
import { Tabs } from './components/Tabs/Tabs';

const tabs = [
  { id: 'overview', label: 'Overview', content: <OverviewPanel /> },
  { id: 'settings', label: 'Settings', content: <SettingsPanel /> },
  { id: 'billing', label: 'Billing', content: <BillingPanel /> }
];

// Basic usage
<Tabs tabs={tabs} defaultTab="overview" />

// Different variants
<Tabs tabs={tabs} variant="pills" />
<Tabs tabs={tabs} variant="underline" />
<Tabs tabs={tabs} variant="bordered" />
```

**Props:**

- `tabs`: `Array<{id: string, label: string, content: ReactNode}>` - Tab configuration
- `defaultTab`: `string` - Initially active tab ID
- `variant`: `"default" | "pills" | "underline" | "bordered"` - Tab style variant
- `onTabChange`: `(tabId: string) => void` - Tab change handler

## 💬 Feedback

### Modal

Accessible modal dialog with backdrop, focus trap, and portal mounting.

```jsx
import { Modal } from './components/Modal/Modal';

// Basic usage
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
  <Button onClick={() => setIsModalOpen(false)}>Close</Button>
</Modal>

// Confirmation modal
<Modal
  isOpen={showConfirm}
  onClose={cancelAction}
  title="Confirm Action"
>
  <p>Are you sure you want to delete this item?</p>
  <div className="modal-actions">
    <Button variant="outline" onClick={cancelAction}>Cancel</Button>
    <Button variant="primary" onClick={confirmAction}>Delete</Button>
  </div>
</Modal>
```

**Props:**

- `isOpen`: `boolean` - Modal visibility state
- `onClose`: `() => void` - Close handler (ESC key, backdrop click)
- `title`: `string` - Modal title
- `children`: `ReactNode` - Modal content

### Spinner

Loading indicator with multiple sizes and variants.

```jsx
import { Spinner } from './components/Spinner/Spinner';

// Basic usage
<Spinner />
<Spinner size="lg" />
<Spinner variant="primary" />

// In buttons
<Button disabled>
  <Spinner size="sm" /> Loading...
</Button>
```

**Props:**

- `size`: `"sm" | "md" | "lg"` - Spinner size
- `variant`: `"default" | "primary"` - Spinner color variant

## 🎨 Design System Integration

### Using Design Tokens

```scss
// Import tokens
@import 'styles/abstracts/tokens';

// Use CSS custom properties
.my-component {
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  padding: var(--spacing-md);
  border-radius: $radius-md;
  transition: all $transition-fast $easing-smooth;
}

// Theme-aware styling
[data-theme='dark'] .my-component {
  background: var(--background-secondary);
}
```

### Theme Integration

```jsx
// Theme toggle component
import { useTheme } from './hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      checked={theme === 'dark'}
      onChange={toggleTheme}
      iconOff={<SunIcon />}
      iconOn={<MoonIcon />}
    />
  );
}
```

## 🎯 Best Practices

### Component Composition

```jsx
// Good: Compose components together
function UserCard({ user }) {
  return (
    <Card interactive>
      <div className="user-header">
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
      </div>
      <p>{user.bio}</p>
      <Button variant="outline" size="sm">
        View Profile
      </Button>
    </Card>
  );
}
```

### Accessibility

```jsx
// Good: Include proper ARIA labels
<Button
  aria-label="Delete user account"
  onClick={deleteAccount}
>
  <TrashIcon />
</Button>

<Input
  label="Email"
  required
  aria-describedby="email-error"
  error="Please enter a valid email"
/>
```

### Performance

```jsx
// Good: Use React.memo for expensive components
const ExpensiveCard = React.memo(({ data }) => <Card>{/* Heavy rendering logic */}</Card>);
```

---

📚 **Need more examples? Check out the interactive Storybook documentation!**
