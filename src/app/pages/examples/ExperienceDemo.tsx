import React, { useState } from 'react';
import { Button, Card, Select, Checkbox } from '../../../components/primitives';
import { Hero, CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import {
  CpuChipIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserIcon,
  StarIcon,
  EyeIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/20/solid';
import './ExperienceDemo.scss';

// Mock SmartButton that demonstrates adaptive behavior
const MockSmartButton: React.FC<{
  intent?: string;
  userJourneyStage?: string;
  criticality?: string;
  flowPosition?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  onInteraction?: (type: string, metadata: Record<string, unknown>) => void;
  children: React.ReactNode;
  userContext: UserContextState;
}> = ({
  intent,
  userJourneyStage,
  criticality,
  flowPosition,
  variant: initialVariant = 'primary',
  size: initialSize = 'md',
  onClick,
  onInteraction,
  children,
  userContext,
}) => {
  // Adaptive logic based on user context
  const getAdaptiveProps = () => {
    let variant = initialVariant;
    let size = initialSize;

    // Adapt based on user type
    if (userContext.userType === 'first-time' && criticality === 'high') {
      variant = 'primary'; // More prominent for new users
    }

    // Adapt based on device
    if (userContext.device === 'mobile' || userContext.largeFonts) {
      size = 'lg'; // Larger for mobile/accessibility
    }

    // Adapt based on intent
    if (intent === 'destructive') {
      variant = 'danger';
    }

    return { variant, size };
  };

  // Get adaptive button labels based on user type
  const getAdaptiveLabel = () => {
    if (intent === 'primary-action') {
      switch (userContext.userType) {
        case 'first-time':
          return 'Start Your Journey';
        case 'returning':
          return 'Continue';
        case 'power-user':
          return 'Launch';
        default:
          return children;
      }
    }

    if (intent === 'navigation') {
      switch (userContext.userType) {
        case 'first-time':
          return 'Tell Me More';
        case 'returning':
          return 'Learn More';
        case 'power-user':
          return 'Docs';
        default:
          return children;
      }
    }

    if (intent === 'destructive') {
      switch (userContext.userType) {
        case 'first-time':
          return 'Delete Account (Permanent)';
        case 'returning':
          return 'Delete Account';
        case 'power-user':
          return 'Delete';
        default:
          return children;
      }
    }

    return children;
  };

  const { variant, size } = getAdaptiveProps();

  const handleClick = () => {
    onClick?.();
    onInteraction?.('click', {
      intent,
      criticality,
      flowPosition,
      userJourneyStage,
      timestamp: Date.now(),
      adaptations: getAdaptiveProps(),
    });
  };

  // Get adaptive styles based on accessibility preferences
  const getAdaptiveStyles = () => {
    const styles: React.CSSProperties = {};

    // Only add styles that aren't handled by CSS classes
    // The CSS classes handle the main styling, these are just supplementary

    return styles;
  };

  // Get adaptive class names for CSS-based behavior
  const getAdaptiveClassNames = () => {
    const classNames = [];

    // Add reduced motion class to disable CSS transitions
    if (userContext.reducedMotion) {
      classNames.push('reduced-motion');
    }

    // Add high contrast class for CSS-based enhancements
    if (userContext.highContrast) {
      classNames.push('high-contrast');
    }

    return classNames.join(' ');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      style={getAdaptiveStyles()}
      className={getAdaptiveClassNames()}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent any hover animations for reduced motion
        if (userContext.reducedMotion) {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.transition = 'none';
        }
      }}
    >
      {getAdaptiveLabel()}
    </Button>
  );
};

interface UserContextState {
  userType: 'first-time' | 'returning' | 'power-user';
  device: 'mobile' | 'tablet' | 'desktop';
  reducedMotion: boolean;
  largeFonts: boolean;
  highContrast: boolean;
}

const ExperienceDemo: React.FC = () => {
  const [userContext, setUserContext] = useState<UserContextState>({
    userType: 'first-time',
    device: 'desktop',
    reducedMotion: false,
    largeFonts: false,
    highContrast: false,
  });

  const getActiveAdaptations = () => {
    const adaptations = [];
    if (userContext.device === 'mobile') adaptations.push('Mobile-optimized button sizes');
    if (userContext.userType === 'first-time')
      adaptations.push('Prominent primary actions for new users');
    if (userContext.userType === 'power-user')
      adaptations.push('Streamlined interface for experienced users');
    if (userContext.largeFonts) adaptations.push('Larger button sizes for accessibility');
    if (userContext.reducedMotion) adaptations.push('Reduced animations');
    if (userContext.highContrast) adaptations.push('Enhanced visual contrast');
    return adaptations;
  };

  // Get responsive grid class based on device
  const getGridClass = () => {
    switch (userContext.device) {
      case 'desktop':
        return 'grid-3'; // 3 columns
      case 'tablet':
        return 'grid-2'; // 2 columns
      case 'mobile':
        return 'grid-1'; // 1 column (stacked)
      default:
        return 'grid-3';
    }
  };

  const userTypeOptions = [
    { value: 'first-time', label: 'First Time User' },
    { value: 'returning', label: 'Returning User' },
    { value: 'power-user', label: 'Power User' },
  ];

  const deviceOptions = [
    { value: 'mobile', label: 'Mobile' },
    { value: 'tablet', label: 'Tablet' },
    { value: 'desktop', label: 'Desktop' },
  ];

  return (
    <div className="page experience-demo">
      <Breadcrumb />
      <Hero
        headline="Smart Button Experience System"
        description="Context-aware buttons that understand user intent and adapt their behavior automatically based on user expertise, device context, and interaction patterns."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      {/* Settings Panel */}
      <div className="configuration-panel">
        <Card className="card--highlight">
          <h2 className="panel-header">
            <AdjustmentsHorizontalIcon className="icon" />
            Configuration Panel
          </h2>
          <p className="panel-description">
            Adjust the settings below and click the Smart Buttons to see how they adapt their
            behavior.
            <strong className="highlight"> Open your browser console</strong> to view detailed
            adaptation metadata.
          </p>

          <div className="configuration-grid">
            <div className="config-section">
              <h4 className="section-header">
                <UserIcon className="icon" />
                User Profile
              </h4>
              <div className="form-controls">
                <Select
                  label="User Type"
                  variant="outlined"
                  size="md"
                  options={userTypeOptions}
                  value={userContext.userType}
                  onChange={(e) =>
                    setUserContext((prev) => ({
                      ...prev,
                      userType: e.target.value as UserContextState['userType'],
                    }))
                  }
                />
                <Select
                  label="Device Type"
                  variant="outlined"
                  size="md"
                  options={deviceOptions}
                  value={userContext.device}
                  onChange={(e) =>
                    setUserContext((prev) => ({
                      ...prev,
                      device: e.target.value as UserContextState['device'],
                    }))
                  }
                />
              </div>
            </div>

            <div className="config-section">
              <h4 className="section-header">
                <EyeIcon className="icon" />
                Accessibility Preferences
              </h4>
              <div className="form-controls">
                <Checkbox
                  variant="default"
                  size="md"
                  label="Reduced Motion"
                  description="Minimize animations and transitions"
                  checked={userContext.reducedMotion}
                  onChange={(e) =>
                    setUserContext((prev) => ({ ...prev, reducedMotion: e.target.checked }))
                  }
                />
                <Checkbox
                  variant="default"
                  size="md"
                  label="Large Fonts"
                  description="Increase text size for better readability"
                  checked={userContext.largeFonts}
                  onChange={(e) =>
                    setUserContext((prev) => ({ ...prev, largeFonts: e.target.checked }))
                  }
                />
                <Checkbox
                  variant="default"
                  size="md"
                  label="High Contrast"
                  description="Enhanced color contrast for visibility"
                  checked={userContext.highContrast}
                  onChange={(e) =>
                    setUserContext((prev) => ({ ...prev, highContrast: e.target.checked }))
                  }
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <CodePreview
        title="Context-Aware Smart Buttons"
        preview={
          <div>
            <div className="adaptations-container">
              <strong className="text-primary-strong">Active Adaptations:</strong>
              <ul className="adaptations-list">
                {userContext.device === 'mobile' && <li>Mobile layout: Stacked buttons</li>}
                {userContext.device === 'tablet' && <li>Tablet layout: 2-column grid</li>}
                {userContext.device === 'desktop' && <li>Desktop layout: 3-column grid</li>}
                {userContext.userType === 'first-time' && (
                  <li>First-time user: Descriptive button labels</li>
                )}
                {userContext.userType === 'returning' && (
                  <li>Returning user: Familiar button labels</li>
                )}
                {userContext.userType === 'power-user' && (
                  <li>Power user: Concise button labels</li>
                )}
                {userContext.largeFonts && <li>Larger button sizes for accessibility</li>}
                {userContext.reducedMotion && <li>Reduced animations</li>}
                {userContext.highContrast && <li>Enhanced visual contrast</li>}
              </ul>
            </div>

            <div className={`${getGridClass()} gap-4`}>
              <MockSmartButton
                intent="primary-action"
                userJourneyStage="discovery"
                criticality="high"
                size="md"
                userContext={userContext}
                onClick={() => console.log('Get Started clicked - User:', userContext)}
                onInteraction={(type: string, metadata: Record<string, unknown>) => {
                  console.log(`${type} interaction:`, {
                    ...metadata,
                    userContext,
                    adaptations: getActiveAdaptations(),
                  });
                }}
              >
                Get Started
              </MockSmartButton>
              <MockSmartButton
                variant="outline"
                intent="navigation"
                userJourneyStage="evaluation"
                criticality="medium"
                size="md"
                userContext={userContext}
                onClick={() => console.log('Learn More clicked - User:', userContext)}
                onInteraction={(type: string, metadata: Record<string, unknown>) => {
                  console.log(`${type} interaction:`, {
                    ...metadata,
                    userContext,
                    adaptations: getActiveAdaptations(),
                  });
                }}
              >
                Learn More
              </MockSmartButton>
              <MockSmartButton
                variant="danger"
                intent="destructive"
                criticality="critical"
                flowPosition="confirmation"
                size="md"
                userContext={userContext}
                onClick={() => console.log('Delete Account clicked - User:', userContext)}
                onInteraction={(type: string, metadata: Record<string, unknown>) => {
                  console.log(`${type} interaction:`, {
                    ...metadata,
                    userContext,
                    adaptations: getActiveAdaptations(),
                  });
                }}
              >
                Delete Account
              </MockSmartButton>
            </div>
          </div>
        }
        code={`// Context-Aware Smart Buttons with Adaptive Behavior
import { Button } from '../../../components/primitives';

// MockSmartButton with adaptive props and accessibility support
const MockSmartButton = ({ 
  intent, 
  userContext, 
  variant = 'primary', 
  size = 'md',
  children 
}) => {
  // Adaptive class names for accessibility
  const getAdaptiveClassNames = () => {
    const classNames = [];
    
    if (userContext.reducedMotion) {
      classNames.push('reduced-motion');
    }
    
    if (userContext.highContrast) {
      classNames.push('high-contrast');
    }
    
    return classNames.join(' ');
  };

  // Adaptive labels based on user type
  const getAdaptiveLabel = () => {
    if (intent === 'primary-action') {
      switch (userContext.userType) {
        case 'first-time': return 'Start Your Journey';
        case 'returning': return 'Continue';
        case 'power-user': return 'Launch';
        default: return children;
      }
    }
    return children;
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={getAdaptiveClassNames()}
      onMouseEnter={(e) => {
        // Disable animations for reduced motion
        if (userContext.reducedMotion) {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.transition = 'none';
        }
      }}
    >
      {getAdaptiveLabel()}
    </Button>
  );
};

// Usage Examples:
<MockSmartButton
  intent="primary-action"
  userContext={userContext}
  variant="primary"
  size="md"
>
  Get Started
</MockSmartButton>

<MockSmartButton
  intent="navigation"
  userContext={userContext}
  variant="outline"
  size="md"
>
  Learn More
</MockSmartButton>

<MockSmartButton
  intent="destructive"
  userContext={userContext}
  variant="danger"
  size="md"
>
  Delete Account
</MockSmartButton>

/* CSS for Accessibility Features */
.button.reduced-motion {
  transition: none !important;
  animation: none !important;
  transform: none !important;
}

.button.high-contrast {
  filter: contrast(1.5) saturate(1.3) brightness(0.9) !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4) !important;
}`}
      />

      <div className="benefits-section">
        <h2 className="benefits-heading">Experience System Benefits</h2>

        <div className="grid-2 gap-6">
          <Card>
            <div className="benefit-item">
              <CpuChipIcon className="benefit-icon" />
              <div>
                <h3 className="heading-sm text-primary mb-2">Intent-Driven Design</h3>
                <p className="text-secondary margin-0">
                  Components understand what users are trying to accomplish, not just how they
                  interact.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="benefit-item">
              <LightBulbIcon className="benefit-icon" />
              <div>
                <h3 className="heading-sm text-primary mb-2">Context-Aware Adaptation</h3>
                <p className="text-secondary margin-0">
                  Automatically adapts to user type, device, accessibility needs, and journey stage.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="benefit-item">
              <ChartBarIcon className="benefit-icon" />
              <div>
                <h3 className="heading-sm text-primary mb-2">Learning System</h3>
                <p className="text-secondary margin-0">
                  Tracks usage patterns and improves interface decisions over time.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="benefit-item">
              <EyeIcon className="benefit-icon" />
              <div>
                <h3 className="heading-sm text-primary mb-2">Predictive Interface</h3>
                <p className="text-secondary margin-0">
                  Anticipates user needs and prevents common mistakes before they happen.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="card--highlight">
        <h3 className="flex-center gap-2 mb-3">
          <StarIcon className="star-icon" />
          Try the Experience System
        </h3>
        <p className="description-text">
          Change the configuration settings above, then click any Smart Button below to see
          real-time adaptation. Each button will automatically adjust its behavior, styling, and
          interaction patterns based on your selections.
        </p>
        <p className="accent-text">
          💡 Pro Tip: Open your browser's developer console (F12) to see detailed adaptation
          metadata and interaction tracking logs.
        </p>
      </Card>
    </div>
  );
};

export default ExperienceDemo;
