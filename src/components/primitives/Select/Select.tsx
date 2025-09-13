import { useState, forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import './Select.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  variant?: 'default' | 'outlined' | 'filled';
  labelVariant?: 'floating' | 'fixed';
  size?: 'sm' | 'md' | 'lg';
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      success,
      hint,
      variant = 'default',
      labelVariant = 'fixed',
      size = 'md',
      options,
      placeholder = 'Select an option...',
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const hasError = !!error;
    const hasSuccess = !!success && !hasError;

    // Determine if we should show the floating label as placeholder or not
    const shouldShowFloatingLabel = labelVariant === 'floating' && label;
    const shouldShowFixedLabel = labelVariant === 'fixed' && label;

    return (
      <div
        className={`select-group select-group--${variant} select-group--${size} select-group--${labelVariant} ${className}`}
      >
        {shouldShowFixedLabel && (
          <label className="select__label select__label--fixed" htmlFor={props.id}>
            {label}
          </label>
        )}

        <div
          className={`select__wrapper ${hasError ? 'select__wrapper--error' : ''} ${hasSuccess ? 'select__wrapper--success' : ''}`}
        >
          {shouldShowFloatingLabel && (
            <label
              className={`select__label select__label--floating ${isFocused || hasValue ? 'select__label--focused' : ''} ${hasError ? 'select__label--error' : ''}`}
              htmlFor={props.id}
            >
              {label}
            </label>
          )}

          <select
            ref={ref}
            className="select"
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleSelectChange}
            {...props}
          >
            {placeholder && !hasValue && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="select__icon">
            <ChevronDownIcon className="select__chevron" />
          </div>
        </div>

        <AnimatePresence>
          {(error || success || hint) && (
            <motion.div
              className="select__message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error && <span className="select__error">{error}</span>}
              {success && !error && <span className="select__success">{success}</span>}
              {hint && !error && !success && <span className="select__hint">{hint}</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
