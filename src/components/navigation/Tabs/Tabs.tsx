import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Tabs.scss';

// Context for tabs state management
interface TabsContextValue {
  value: string | undefined;
  onValueChange: (value: string) => void;
  orientation: 'horizontal' | 'vertical';
  variant: 'default' | 'pills' | 'underline' | 'bordered';
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

// Main Tabs component
export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  className?: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = 'horizontal',
  variant = 'default',
  className = '',
  children,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const value = controlledValue ?? internalValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: TabsContextValue = {
    value,
    onValueChange: handleValueChange,
    orientation,
    variant,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={`tabs tabs--${orientation} tabs--${variant} ${className}`}
        data-orientation={orientation}
        data-variant={variant}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabList component
export interface TabListProps {
  'aria-label'?: string;
  className?: string;
  children: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({
  'aria-label': ariaLabel,
  className = '',
  children,
}) => {
  const { orientation } = useTabsContext();
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const { key } = event;
    const tabs = listRef.current?.querySelectorAll('[role="tab"]:not([aria-disabled="true"])');

    if (!tabs || tabs.length === 0) return;

    const currentIndex = Array.from(tabs).findIndex((tab) => tab === document.activeElement);

    let nextIndex = currentIndex;

    switch (key) {
      case 'ArrowLeft':
        if (orientation === 'horizontal') {
          event.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        }
        break;
      case 'ArrowRight':
        if (orientation === 'horizontal') {
          event.preventDefault();
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        break;
      case 'ArrowUp':
        if (orientation === 'vertical') {
          event.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        }
        break;
      case 'ArrowDown':
        if (orientation === 'vertical') {
          event.preventDefault();
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    (tabs[nextIndex] as HTMLElement).focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={orientation}
      className={`tab-list tab-list--${orientation} ${className}`}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

// TabTrigger component
export interface TabTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TabTrigger: React.FC<TabTriggerProps> = ({
  value,
  disabled = false,
  className = '',
  children,
}) => {
  const { value: selectedValue, onValueChange, variant } = useTabsContext();
  const isSelected = selectedValue === value;
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!disabled) {
      onValueChange(value);
    }
  };

  return (
    <button
      ref={triggerRef}
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      aria-selected={isSelected}
      aria-disabled={disabled}
      data-state={isSelected ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      className={`tab-trigger tab-trigger--${variant} ${
        isSelected ? 'tab-trigger--active' : ''
      } ${disabled ? 'tab-trigger--disabled' : ''} ${className}`}
      onClick={handleClick}
    >
      {children}

      {/* Animated indicator for certain variants */}
      {isSelected && (variant === 'underline' || variant === 'pills') && (
        <motion.div
          className="tab-indicator"
          layoutId="tab-indicator"
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
    </button>
  );
};

// TabContent component with lazy loading support
export interface TabContentProps {
  value: string;
  lazy?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({
  value,
  lazy = false,
  className = '',
  children,
}) => {
  const { value: selectedValue } = useTabsContext();
  const isSelected = selectedValue === value;
  const [hasBeenSelected, setHasBeenSelected] = useState(!lazy || isSelected);

  useEffect(() => {
    if (isSelected && !hasBeenSelected) {
      setHasBeenSelected(true);
    }
  }, [isSelected, hasBeenSelected]);

  // Don't render content if lazy loading and never been selected
  if (lazy && !hasBeenSelected) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isSelected && (
        <motion.div
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${value}`}
          data-state={isSelected ? 'active' : 'inactive'}
          className={`tab-content ${className}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
