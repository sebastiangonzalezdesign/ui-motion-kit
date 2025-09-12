// Feature Flag Utilities
// ========================

export type BuildType = 'free' | 'pro';

// Environment Variables
export const BUILD_TYPE = (process.env.REACT_APP_BUILD_TYPE || 'free') as BuildType;

// Feature Flags
export const featureFlags = {
  // Build type checks
  isFree: BUILD_TYPE === 'free',
  isPro: BUILD_TYPE === 'pro',

  // Feature-specific flags
  enableProFeatures: process.env.REACT_APP_ENABLE_PRO_FEATURES === 'true',
  enableProTemplates: process.env.REACT_APP_ENABLE_PRO_TEMPLATES === 'true',
  enablePremiumComponents: process.env.REACT_APP_ENABLE_PREMIUM_COMPONENTS === 'true',
} as const;

// Utility Functions
export const showProFeature = (feature?: keyof typeof featureFlags) => {
  if (feature) {
    return featureFlags[feature];
  }
  return featureFlags.enableProFeatures;
};

export const showProBadge = () => featureFlags.isFree;

export const getProCTAText = () => {
  return featureFlags.isFree ? 'Join Pro Waitlist' : 'Download Template';
};

export const getProCTALink = () => {
  return featureFlags.isFree
    ? 'https://sebastiangonzalez.design/motion-ui-kit'
    : process.env.REACT_APP_PRO_DOWNLOAD_URL || '#';
};

// Debug helper (only in development)
export const debugFeatureFlags = () => {
  if (process.env.NODE_ENV === 'development') {
    console.group('🚩 Feature Flags Debug');
    console.log('Build Type:', BUILD_TYPE);
    console.log('Feature Flags:', featureFlags);
    console.groupEnd();
  }
};

// Call debug in development
if (process.env.NODE_ENV === 'development') {
  debugFeatureFlags();
}
