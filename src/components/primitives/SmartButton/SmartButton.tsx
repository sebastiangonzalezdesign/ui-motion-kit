// Experience-Enhanced Button Component
// This extends your existing Button with adaptive behavior

import React from 'react';
import { useSmartComponent } from '../../../utils/experience-context';
import Button from '../Button/Button';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline' | 'ghost';
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
}

export interface SmartButtonProps extends ButtonProps {
  // Experience System enhancements
  adaptToUser?: boolean;
  learningEnabled?: boolean;
  contextAware?: boolean;

  // Intent-based props (what is the user trying to do?)
  intent?: 'primary-action' | 'secondary-action' | 'destructive' | 'navigation' | 'toggle';
  criticality?: 'low' | 'medium' | 'high' | 'critical';

  // Context props (where/when is this being used?)
  flowPosition?: 'entry' | 'middle' | 'exit' | 'confirmation';
  userJourneyStage?: 'discovery' | 'evaluation' | 'purchase' | 'usage' | 'advocacy';

  // Learning props (how does this adapt over time?)
  onInteraction?: (type: 'hover' | 'click' | 'focus', metadata: Record<string, unknown>) => void;
}

export const SmartButton: React.FC<SmartButtonProps> = ({
  adaptToUser = true,
  learningEnabled = true,
  contextAware = true,
  intent = 'primary-action',
  criticality = 'medium',
  flowPosition = 'middle',
  userJourneyStage = 'usage',
  onInteraction,
  children,
  ...props
}) => {
  const { adaptiveProps, trackUsage, context } = useSmartComponent('button');

  // Adaptive behavior based on user context
  const getContextualProps = () => {
    if (!contextAware) return {};

    const contextualProps: Partial<ButtonProps> = {};

    // Adapt size based on device and accessibility needs
    if (context.device === 'mobile' || context.accessibilityNeeds?.largeFonts) {
      contextualProps.size = props.size || 'lg';
    }

    // Adapt variant based on user expertise and criticality
    if (context.userType === 'first-time' && criticality === 'high') {
      contextualProps.variant = 'primary'; // Make important actions more prominent for new users
    }

    // Note: Motion adaptation would be handled by the underlying Button component
    // since it doesn't expose motion props directly

    return contextualProps;
  };

  // Learning behavior - track patterns and adapt
  const handleInteraction = (type: 'hover' | 'click' | 'focus') => {
    if (learningEnabled) {
      const metadata = {
        intent,
        criticality,
        flowPosition,
        userJourneyStage,
        timestamp: Date.now(),
        deviceType: context.device,
        userType: context.userType,
      };

      // Track usage patterns
      trackUsage(`${type}_${intent}`);

      // Call user-provided handler
      onInteraction?.(type, metadata);
    }

    // Call original handlers for click
    if (type === 'click' && props.onClick) {
      props.onClick();
    }
  };

  // Predictive behavior - anticipate user needs
  const getPredictiveProps = () => {
    const predictiveProps: Partial<ButtonProps> = {};

    // If user frequently cancels actions, make destructive buttons less prominent
    const cancelPattern = context.componentUsagePatterns?.['click_destructive'] || 0;
    if (intent === 'destructive' && cancelPattern > 5) {
      predictiveProps.variant = 'outline'; // Less prominent to prevent accidents
    }

    // If user is on mobile and frequently misclicks, increase button spacing
    if (context.device === 'mobile' && flowPosition === 'confirmation') {
      predictiveProps.size = 'lg';
    }

    return predictiveProps;
  };

  // Merge all adaptive behaviors
  const finalProps = {
    ...props,
    ...(adaptToUser ? getContextualProps() : {}),
    ...(learningEnabled ? getPredictiveProps() : {}),
    ...adaptiveProps,
  };

  // Create enhanced onClick handler
  const enhancedOnClick = () => {
    handleInteraction('click');
  };

  return (
    <div onMouseEnter={() => handleInteraction('hover')} onFocus={() => handleInteraction('focus')}>
      <Button {...finalProps} onClick={enhancedOnClick}>
        {children}
      </Button>
    </div>
  );
};

// Smart button variants that understand intent
export const PrimaryActionButton: React.FC<Omit<SmartButtonProps, 'intent'>> = (props) => (
  <SmartButton {...props} intent="primary-action" criticality="high" />
);

export const NavigationButton: React.FC<Omit<SmartButtonProps, 'intent'>> = (props) => (
  <SmartButton {...props} intent="navigation" criticality="low" />
);

// Compound component for complex workflows
export const ConfirmationFlow: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}> = ({
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDestructive = false,
}) => {
  return (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
      <SmartButton
        variant="outline"
        intent="secondary-action"
        flowPosition="confirmation"
        onClick={onCancel}
      >
        {cancelText}
      </SmartButton>
      <SmartButton
        variant="primary"
        intent={isDestructive ? 'destructive' : 'primary-action'}
        criticality={isDestructive ? 'critical' : 'high'}
        flowPosition="confirmation"
        onClick={onConfirm}
      >
        {confirmText}
      </SmartButton>
    </div>
  );
};

export default SmartButton;
