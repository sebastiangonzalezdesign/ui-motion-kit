# Toast Component

> **📍 Location**: `src/components/feedback/Toast/`  
> **Category**: Feedback Components (Design System)  
> **Status**: Phase 2 - In Development

## Overview

A comprehensive notification system with positioning, stacking, auto-dismiss, and action support.

## Features

- ✅ Multiple position options (top/bottom + left/center/right)
- ✅ Auto-dismiss with progress indicator
- ✅ Action buttons (dismiss, undo, etc.)
- ✅ Intelligent stack management
- ✅ Accessible announcements (aria-live)
- ✅ Multiple variants (success, warning, error, info)
- ✅ Gesture support for dismiss
- ✅ Hook-based API for easy integration

## API Preview

```tsx
// Hook-based usage
const { toast, dismiss } = useToast();

const handleSuccess = () => {
  toast({
    title: 'Success!',
    description: 'Your changes have been saved.',
    variant: 'success',
    duration: 5000,
    action: {
      label: 'Undo',
      onClick: () => undoChanges(),
    },
  });
};

// Provider setup
<ToastProvider position="top-right" maxToasts={5}>
  <App />
</ToastProvider>;
```

## Implementation Status

- [ ] Toast component structure
- [ ] ToastProvider context
- [ ] useToast hook
- [ ] TypeScript interfaces
- [ ] SCSS styling system
- [ ] Animation system
- [ ] Stack management logic
- [ ] Accessibility features
- [ ] Tests
- [ ] Storybook stories

## Planned for Phase 2
