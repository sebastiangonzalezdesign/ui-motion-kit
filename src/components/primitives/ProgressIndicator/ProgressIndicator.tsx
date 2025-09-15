import { motion } from 'framer-motion';
import './ProgressIndicator.scss';

interface ProgressIndicatorProps {
  value: number; // 0-100
  type?: 'linear' | 'circular' | 'stepped';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showLabel?: boolean;
  label?: string;
  steps?: number; // For stepped type
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  value,
  type = 'linear',
  size = 'md',
  animated = true,
  showLabel = false,
  label,
  steps = 5,
  className = '',
}) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  const getRadius = () => {
    switch (size) {
      case 'sm':
        return 20;
      case 'lg':
        return 35;
      default:
        return 25;
    }
  };

  const getStrokeWidth = () => {
    switch (size) {
      case 'sm':
        return 3;
      case 'lg':
        return 5;
      default:
        return 4;
    }
  };

  const getCircularSize = () => {
    const radius = getRadius();
    return (radius + getStrokeWidth()) * 2;
  };

  const renderLinearProgress = () => (
    <div
      className={`progress-indicator progress-indicator--linear progress-indicator--${size} ${className}`}
    >
      {(showLabel || label) && (
        <div className="progress-indicator__label">
          <span>{label || `${clampedValue}%`}</span>
        </div>
      )}
      <div className="progress-indicator__track">
        <motion.div
          className="progress-indicator__fill"
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{
            duration: animated ? 0.5 : 0,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );

  const renderCircularProgress = () => {
    const radius = getRadius();
    const strokeWidth = getStrokeWidth();
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (clampedValue / 100) * circumference;
    const size = getCircularSize();

    return (
      <div
        className={`progress-indicator progress-indicator--circular progress-indicator--${size} ${className}`}
      >
        <div className="progress-indicator__circular-wrapper">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="progress-indicator__svg"
          >
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="none"
              className="progress-indicator__track-circle"
            />

            {/* Progress circle */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              className="progress-indicator__fill-circle"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset: animated
                  ? strokeDashoffset
                  : circumference - (clampedValue / 100) * circumference,
              }}
              transition={{
                duration: animated ? 0.5 : 0,
                ease: 'easeOut',
              }}
            />
          </svg>

          {(showLabel || label) && (
            <div className="progress-indicator__circular-label">
              <span>{label || `${clampedValue}%`}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSteppedProgress = () => {
    const completedSteps = Math.floor((clampedValue / 100) * steps);

    return (
      <div
        className={`progress-indicator progress-indicator--stepped progress-indicator--${size} ${className}`}
      >
        {(showLabel || label) && (
          <div className="progress-indicator__label">
            <span>{label || `Step ${completedSteps} of ${steps}`}</span>
          </div>
        )}
        <div className="progress-indicator__steps">
          {Array.from({ length: steps }, (_, index) => (
            <motion.div
              key={index}
              className={`progress-indicator__step ${index < completedSteps ? 'completed' : ''}`}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: index < completedSteps ? 1 : 0.8,
                opacity: index < completedSteps ? 1 : 0.5,
              }}
              transition={{
                duration: animated ? 0.3 : 0,
                delay: animated ? index * 0.1 : 0,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  switch (type) {
    case 'circular':
      return renderCircularProgress();
    case 'stepped':
      return renderSteppedProgress();
    case 'linear':
    default:
      return renderLinearProgress();
  }
};

export default ProgressIndicator;
