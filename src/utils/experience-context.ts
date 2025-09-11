// Experience System Context Provider
// This enables components to automatically adapt based on user context

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface UserContext {
  // Intent - What are they trying to do?
  currentTask?: 'browsing' | 'purchasing' | 'learning' | 'searching' | 'creating';
  userIntentHistory?: string[];

  // Context - Who are they and where?
  userType?: 'first-time' | 'returning' | 'power-user' | 'mobile-only';
  sessionCount?: number;
  preferredInteractionMode?: 'touch' | 'mouse' | 'keyboard' | 'voice';

  // Platform - What device/environment?
  device?: 'mobile' | 'tablet' | 'desktop' | 'tv' | 'watch';
  connectionSpeed?: 'slow' | 'medium' | 'fast';
  accessibilityNeeds?: {
    reducedMotion: boolean;
    highContrast: boolean;
    screenReader: boolean;
    largeFonts: boolean;
  };

  // Personalization - What have they done before?
  componentUsagePatterns?: Record<string, number>;
  preferredAnimationStyle?: 'minimal' | 'standard' | 'playful';
  learningProgress?: Record<string, 'novice' | 'intermediate' | 'expert'>;
}

export interface ExperienceSystemConfig {
  // Agentic Orchestration - How do all layers work together?
  adaptationRules: Array<{
    condition: (context: UserContext) => boolean;
    adaptations: ComponentAdaptation[];
  }>;

  // Learning system
  enableUsageTracking: boolean;
  enableAutomaticAdaptation: boolean;

  // Performance
  enablePredictiveLoading: boolean;
  enableSmartBatching: boolean;
}

export interface ComponentAdaptation {
  componentType: string;
  adaptations: {
    motion?: 'reduced' | 'standard' | 'enhanced';
    complexity?: 'simplified' | 'standard' | 'advanced';
    guidance?: 'show-hints' | 'hide-hints' | 'auto';
    layout?: 'compact' | 'comfortable' | 'spacious';
  };
}

const ExperienceContext = createContext<{
  context: UserContext;
  config: ExperienceSystemConfig;
  updateContext: (updates: Partial<UserContext>) => void;
  trackUsage: (componentType: string, action: string) => void;
} | null>(null);

export const useExperienceContext = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperienceContext must be used within ExperienceProvider');
  }
  return context;
};

export const ExperienceProvider: React.FC<{
  children: React.ReactNode;
  initialContext?: Partial<UserContext>;
  config: ExperienceSystemConfig;
}> = ({ children, initialContext = {}, config }) => {
  const [context, setContext] = useState<UserContext>(() => {
    // Initialize with device detection and accessibility preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const deviceType =
      window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';

    return {
      device: deviceType,
      accessibilityNeeds: {
        reducedMotion: mediaQuery.matches,
        highContrast: window.matchMedia('(prefers-contrast: high)').matches,
        screenReader: navigator.userAgent.includes('NVDA') || navigator.userAgent.includes('JAWS'),
        largeFonts: window.devicePixelRatio > 1.5,
      },
      userType: 'first-time', // Could be loaded from localStorage
      sessionCount: 1,
      componentUsagePatterns: {},
      preferredAnimationStyle: mediaQuery.matches ? 'minimal' : 'standard',
      learningProgress: {},
      ...initialContext,
    };
  });

  const updateContext = (updates: Partial<UserContext>) => {
    setContext((prev) => ({ ...prev, ...updates }));
  };

  const trackUsage = (componentType: string, action: string) => {
    if (!config.enableUsageTracking) return;

    setContext((prev) => ({
      ...prev,
      componentUsagePatterns: {
        ...prev.componentUsagePatterns,
        [`${componentType}:${action}`]:
          (prev.componentUsagePatterns?.[`${componentType}:${action}`] || 0) + 1,
      },
    }));
  };

  // Auto-adapt based on rules
  useEffect(() => {
    if (!config.enableAutomaticAdaptation) return;

    config.adaptationRules.forEach((rule) => {
      if (rule.condition(context)) {
        // Apply adaptations automatically
        console.log('Applying automatic adaptations:', rule.adaptations);
      }
    });
  }, [context, config]);

  return React.createElement(
    ExperienceContext.Provider,
    { value: { context, config, updateContext, trackUsage } },
    children
  );
};

// Smart component adapter hook
export const useSmartComponent = (componentType: string) => {
  const { context, trackUsage } = useExperienceContext();

  // Get adaptive properties based on context
  const getAdaptiveProps = () => {
    const adaptations: Record<string, unknown> = {};

    // Motion adaptation based on user preferences and device
    if (context.accessibilityNeeds?.reducedMotion || context.device === 'mobile') {
      adaptations.motion = 'reduced';
    } else if (context.preferredAnimationStyle === 'playful') {
      adaptations.motion = 'enhanced';
    }

    // Complexity adaptation based on user expertise
    const usage = context.componentUsagePatterns?.[componentType] || 0;
    if (usage < 3) {
      adaptations.showHints = true;
      adaptations.simplified = true;
    }

    // Layout adaptation based on device and accessibility
    if (context.device === 'mobile' || context.accessibilityNeeds?.largeFonts) {
      adaptations.layout = 'spacious';
    }

    return adaptations;
  };

  return {
    adaptiveProps: getAdaptiveProps(),
    trackUsage: (action: string) => trackUsage(componentType, action),
    context,
  };
};
