import { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  BellSlashIcon,
  EyeIcon,
  EyeSlashIcon,
  WifiIcon,
  SignalSlashIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import './Toggle.scss';

interface ToggleProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'pill' | 'square';
  iconType?: 'check' | 'theme' | 'notification' | 'visibility' | 'wifi';
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  description?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  initialState = false,
  onToggle,
  size = 'md',
  variant = 'default',
  iconType = 'check',
  disabled = false,
  loading = false,
  label,
  description,
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    if (disabled || loading) return;

    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  const getIcons = () => {
    switch (iconType) {
      case 'theme':
        return {
          on: <SunIcon className="toggle-icon" />,
          off: <MoonIcon className="toggle-icon" />,
        };
      case 'notification':
        return {
          on: <BellIcon className="toggle-icon" />,
          off: <BellSlashIcon className="toggle-icon" />,
        };
      case 'visibility':
        return {
          on: <EyeIcon className="toggle-icon" />,
          off: <EyeSlashIcon className="toggle-icon" />,
        };
      case 'wifi':
        return {
          on: <WifiIcon className="toggle-icon" />,
          off: <SignalSlashIcon className="toggle-icon" />,
        };
      default:
        return {
          on: <CheckIcon className="toggle-icon" />,
          off: <XMarkIcon className="toggle-icon" />,
        };
    }
  };

  const icons = getIcons();

  const toggleContent = (
    <motion.button
      className={`toggle toggle--${size} toggle--${variant} ${isOn ? 'toggle--on' : 'toggle--off'} ${disabled ? 'toggle--disabled' : ''} ${loading ? 'toggle--loading' : ''}`}
      onClick={handleToggle}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      transition={{ duration: 0.1 }}
      disabled={disabled || loading}
    >
      <motion.div
        className="toggle__track"
        animate={{
          backgroundColor: isOn ? 'var(--primary)' : 'var(--background-tertiary)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          className="toggle__thumb"
          animate={{
            x: isOn ? 'var(--thumb-translate)' : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
        >
          {loading ? (
            <motion.div
              className="toggle__spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={isOn ? 'on' : 'off'}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="toggle__icon-container"
              >
                {isOn ? icons.on : icons.off}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );

  if (label || description) {
    return (
      <div className="toggle-group">
        <div className="toggle-group__content">
          {label && <label className="toggle-group__label">{label}</label>}
          {description && <span className="toggle-group__description">{description}</span>}
        </div>
        {toggleContent}
      </div>
    );
  }

  return toggleContent;
};

export default Toggle;
