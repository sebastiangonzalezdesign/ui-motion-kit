import { useState } from 'react';
import CopyButton from '../CopyButton';
import './ColorSwatch.scss';

interface ColorSwatchProps {
  color: string;
  name: string;
  value?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  showCopy?: boolean;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  name,
  value,
  description,
  size = 'md',
  showCopy = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayValue = value || color;
  const copyText = name.startsWith('--') ? `var(${name})` : name;

  return (
    <div
      className={`color-swatch color-swatch--${size} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="color-swatch__color"
        style={{ backgroundColor: color }}
        title={`${name}: ${displayValue}`}
      >
        {showCopy && isHovered && (
          <div className="color-swatch__copy">
            <CopyButton text={copyText} variant="minimal" size="sm" />
          </div>
        )}
      </div>

      <div className="color-swatch__info">
        <div className="color-swatch__name" title={name}>
          {name}
        </div>

        {displayValue && (
          <div className="color-swatch__value" title={displayValue}>
            {displayValue}
          </div>
        )}

        {description && (
          <div className="color-swatch__description" title={description}>
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSwatch;
