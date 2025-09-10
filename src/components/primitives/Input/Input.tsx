import { useState, forwardRef, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EyeIcon,
  EyeSlashIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import './Input.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  variant?: 'default' | 'outlined' | 'filled';
  labelVariant?: 'floating' | 'fixed';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'user' | 'email' | 'phone' | 'search' | 'password' | React.ReactNode;
  loading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      hint,
      variant = 'default',
      labelVariant = 'floating',
      size = 'md',
      icon,
      loading = false,
      clearable = false,
      onClear,
      type = 'text',
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    // Update hasValue when props.value changes (for controlled components)
    useEffect(() => {
      setHasValue(!!props.value);
    }, [props.value]);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const handleClear = () => {
      setHasValue(false);
      onClear?.();
    };

    const getIcon = () => {
      if (typeof icon === 'string') {
        switch (icon) {
          case 'user':
            return <UserIcon className="input__icon" />;
          case 'email':
            return <EnvelopeIcon className="input__icon" />;
          case 'phone':
            return <PhoneIcon className="input__icon" />;
          case 'search':
            return <MagnifyingGlassIcon className="input__icon" />;
          case 'password':
            return <LockClosedIcon className="input__icon" />;
          default:
            return null;
        }
      }
      return icon;
    };

    const hasError = !!error;
    const hasSuccess = !!success && !hasError;

    // Determine if we should show the floating label as placeholder or not
    const shouldShowFloatingLabel = labelVariant === 'floating' && label;
    const shouldShowFixedLabel = labelVariant === 'fixed' && label;

    // Calculate proper centering offset based on input size
    const getCenterOffset = () => {
      switch (size) {
        case 'sm':
          return -12; // 36px height - fine-tune for perfect centering
        case 'lg':
          return -14; // 52px height - fine-tune for perfect centering
        default:
          return -12; // 44px height (md) - fine-tune for perfect centering
      }
    };

    return (
      <div
        className={`input-group input-group--${variant} input-group--${size} input-group--${labelVariant} ${className}`}
      >
        {shouldShowFixedLabel && (
          <label className="input__label input__label--fixed" htmlFor={props.id}>
            {label}
          </label>
        )}

        <div
          className={`input__wrapper ${hasError ? 'input__wrapper--error' : ''} ${hasSuccess ? 'input__wrapper--success' : ''} ${isPassword ? 'input__wrapper--password' : ''}`}
        >
          {getIcon() && (
            <div className="input__icon-wrapper input__icon-wrapper--left">{getIcon()}</div>
          )}

          {shouldShowFloatingLabel && (
            <motion.label
              className={`input__label input__label--floating ${isFocused || hasValue ? 'input__label--focused' : ''} ${hasError ? 'input__label--error' : ''}`}
              htmlFor={props.id}
              animate={{
                y: isFocused || hasValue ? (variant === 'outlined' ? -34 : -30) : getCenterOffset(),
                scale: isFocused || hasValue ? 0.85 : 1,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {label}
            </motion.label>
          )}

          <input
            ref={ref}
            type={inputType}
            className={`input ${icon ? 'input--with-icon' : ''} ${isPassword ? 'input--with-password' : ''} ${clearable && hasValue ? 'input--with-clear' : ''}`}
            disabled={disabled || loading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleInputChange}
            placeholder={shouldShowFloatingLabel ? undefined : props.placeholder}
            {...props}
          />

          {loading && (
            <div className="input__icon-wrapper input__icon-wrapper--right">
              <motion.div
                className="input__spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          )}

          {clearable && hasValue && !loading && (
            <motion.button
              className="input__clear"
              onClick={handleClear}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              ×
            </motion.button>
          )}

          {isPassword && (
            <motion.button
              className="input__password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
            >
              {showPassword ? (
                <EyeSlashIcon className="input__icon" />
              ) : (
                <EyeIcon className="input__icon" />
              )}
            </motion.button>
          )}

          {hasError && (
            <div className="input__icon-wrapper input__icon-wrapper--right">
              <ExclamationCircleIcon className="input__icon input__icon--error" />
            </div>
          )}

          {hasSuccess && (
            <div className="input__icon-wrapper input__icon-wrapper--right">
              <CheckCircleIcon className="input__icon input__icon--success" />
            </div>
          )}
        </div>

        <AnimatePresence>
          {(error || success || hint) && (
            <motion.div
              className="input__message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error && <span className="input__error">{error}</span>}
              {success && !error && <span className="input__success">{success}</span>}
              {hint && !error && !success && <span className="input__hint">{hint}</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
