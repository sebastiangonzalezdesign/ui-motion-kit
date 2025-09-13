import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import './Checkbox.scss';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'solid' | 'minimal';
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      size = 'md',
      variant = 'default',
      indeterminate = false,
      className = '',
      disabled = false,
      checked,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const handleWrapperClick = (e: React.MouseEvent) => {
      // Allow clicks on wrapper and checkbox box, but not on input (let native behavior handle input)
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.closest('input');

      if (!isInput && !disabled && onChange) {
        e.preventDefault();
        const syntheticEvent = {
          target: { checked: !checked },
          currentTarget: { checked: !checked }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    return (
      <div
        className={`checkbox-group checkbox-group--${variant} checkbox-group--${size} ${className} ${hasError ? 'checkbox-group--error' : ''} ${disabled ? 'checkbox-group--disabled' : ''}`}
      >
        <div className="checkbox__wrapper" onClick={handleWrapperClick}>
          <input
            ref={ref}
            type="checkbox"
            className="checkbox__input"
            id={inputId}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            {...props}
          />

          <motion.div
            className={`checkbox__box ${(checked ?? false) || indeterminate ? 'checkbox__box--checked' : ''}`}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            transition={{ duration: 0.1 }}
          >
            <AnimatePresence>
              {((checked ?? false) || indeterminate) && (
                <motion.div
                  className="checkbox__icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {indeterminate ? (
                    <div className="checkbox__indeterminate" />
                  ) : (
                    <CheckIcon className="checkbox__check" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {(label || description) && (
            <div className="checkbox__content">
              {label && (
                <label className="checkbox__label" htmlFor={inputId}>
                  {label}
                </label>
              )}
              {description && <span className="checkbox__description">{description}</span>}
            </div>
          )}
        </div>

        <AnimatePresence>
          {error && (
            <motion.div
              className="checkbox__error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
