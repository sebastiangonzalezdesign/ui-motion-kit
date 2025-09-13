import { motion } from 'framer-motion';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'md',
  icon,
  iconPosition = 'left',
  variant = 'primary',
  style,
  className,
  onMouseEnter,
}) => {
  const defaultClassName = `button button-${size} button--${variant}`;
  const finalClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <motion.button
      className={finalClassName}
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {icon && iconPosition === 'left' && (
        <motion.span
          className="button__icon button__icon--left"
          whileTap={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="button__content">{children}</span>
      {icon && iconPosition === 'right' && (
        <motion.span
          className="button__icon button__icon--right"
          whileTap={{ scale: 1.2, rotate: -10 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;
