import React, { createContext, useContext, useCallback, useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../primitives';
import './Toast.scss';

// Toast Types
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

// Toast Interface
export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

// Toast Options for creating toasts
export interface ToastOptions {
  type?: ToastType;
  title?: string;
  duration?: number;
  dismissible?: boolean;
  position?: ToastPosition;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

// Context Types
interface ToastState {
  toasts: Toast[];
  position: ToastPosition;
}

type ToastAction =
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string }
  | { type: 'SET_POSITION'; payload: ToastPosition }
  | { type: 'CLEAR_ALL' };

export interface ToastContextType {
  state: ToastState;
  toast: (message: string, options?: ToastOptions) => string;
  success: (message: string, options?: Omit<ToastOptions, 'type'>) => string;
  error: (message: string, options?: Omit<ToastOptions, 'type'>) => string;
  warning: (message: string, options?: Omit<ToastOptions, 'type'>) => string;
  info: (message: string, options?: Omit<ToastOptions, 'type'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
  setPosition: (position: ToastPosition) => void;
}

// Toast Context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast Reducer
const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    case 'SET_POSITION':
      return {
        ...state,
        position: action.payload,
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        toasts: [],
      };
    default:
      return state;
  }
};

// Generate unique ID
const generateId = (): string => {
  return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Toast Provider Component
interface ToastProviderProps {
  children: React.ReactNode;
  defaultPosition?: ToastPosition;
  maxToasts?: number;
}

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultPosition = 'top-right',
  maxToasts = 5,
}) => {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
    position: defaultPosition,
  });

  // Auto-dismiss handler
  const handleAutoDismiss = useCallback((id: string, duration: number) => {
    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: id });
    }, duration);
  }, []);

  // Create toast function
  const toast = useCallback(
    (message: string, options: ToastOptions = {}): string => {
      const id = generateId();
      const {
        type = 'info',
        title,
        duration = 5000,
        dismissible = true,
        action,
        onDismiss,
      } = options;

      const newToast: Toast = {
        id,
        type,
        title,
        message,
        duration,
        dismissible,
        action,
        onDismiss,
      };

      // Remove oldest toast if exceeding max limit
      if (state.toasts.length >= maxToasts) {
        const oldestToast = state.toasts[0];
        dispatch({ type: 'REMOVE_TOAST', payload: oldestToast.id });
      }

      dispatch({ type: 'ADD_TOAST', payload: newToast });

      // Auto-dismiss if duration is set
      if (duration > 0) {
        handleAutoDismiss(id, duration);
      }

      return id;
    },
    [state.toasts, maxToasts, handleAutoDismiss]
  );

  // Convenience methods
  const success = useCallback(
    (message: string, options: Omit<ToastOptions, 'type'> = {}) => {
      return toast(message, { ...options, type: 'success' });
    },
    [toast]
  );

  const error = useCallback(
    (message: string, options: Omit<ToastOptions, 'type'> = {}) => {
      return toast(message, { ...options, type: 'error', duration: options.duration || 0 });
    },
    [toast]
  );

  const warning = useCallback(
    (message: string, options: Omit<ToastOptions, 'type'> = {}) => {
      return toast(message, { ...options, type: 'warning' });
    },
    [toast]
  );

  const info = useCallback(
    (message: string, options: Omit<ToastOptions, 'type'> = {}) => {
      return toast(message, { ...options, type: 'info' });
    },
    [toast]
  );

  // Dismiss functions
  const dismiss = useCallback(
    (id: string) => {
      const toast = state.toasts.find((t) => t.id === id);
      if (toast?.onDismiss) {
        toast.onDismiss();
      }
      dispatch({ type: 'REMOVE_TOAST', payload: id });
    },
    [state.toasts]
  );

  const dismissAll = useCallback(() => {
    state.toasts.forEach((toast) => {
      if (toast.onDismiss) {
        toast.onDismiss();
      }
    });
    dispatch({ type: 'CLEAR_ALL' });
  }, [state.toasts]);

  const setPosition = useCallback((position: ToastPosition) => {
    dispatch({ type: 'SET_POSITION', payload: position });
  }, []);

  const contextValue: ToastContextType = {
    state,
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
    setPosition,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Toast Item Component
interface ToastItemProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'info':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`toast toast--${toast.type}`}
      role="alert"
      aria-live="polite"
    >
      <div className="toast__icon">{getIcon()}</div>

      <div className="toast__content">
        {toast.title && <div className="toast__title">{toast.title}</div>}
        <div className="toast__message">{toast.message}</div>

        {toast.action && (
          <Button
            size="sm"
            variant="primary"
            onClick={toast.action.onClick}
            className="toast__action"
          >
            {toast.action.label}
          </Button>
        )}
      </div>

      {toast.dismissible && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onDismiss(toast.id)}
          className="toast__dismiss"
          aria-label="Dismiss notification"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      )}
    </motion.div>
  );
};

// Toast Container Component
const ToastContainer: React.FC = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('ToastContainer must be used within a ToastProvider');
  }

  const { state, dismiss } = context;
  const { toasts, position } = state;

  return (
    <div className={`toast-container toast-container--${position}`}>
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Export components
export { ToastContext, ToastProvider, ToastContainer };
export default ToastProvider;
