import React from 'react';
import { showProBadge } from '../../utils/featureFlags';
import './ProBadge.scss';

interface ProBadgeProps {
  className?: string;
  variant?: 'default' | 'coming-soon' | 'premium';
}

const ProBadge: React.FC<ProBadgeProps> = ({ className = '', variant = 'default' }) => {
  // Only show in free builds
  if (!showProBadge()) return null;

  const getBadgeText = () => {
    switch (variant) {
      case 'coming-soon':
        return 'Coming Soon';
      case 'premium':
        return 'Premium';
      default:
        return 'Pro';
    }
  };

  return <span className={`pro-badge pro-badge--${variant} ${className}`}>{getBadgeText()}</span>;
};

export default ProBadge;
