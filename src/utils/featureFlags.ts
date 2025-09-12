// Feature Flag Utilities
// ========================

export type BuildType = 'free' | 'pro';

// Safe environment variable access for browser compatibility
const getEnvVar = (key: string, defaultValue: string = '') => {
  if (typeof window === 'undefined') {
    // Node.js environment (SSR, build time)
    return process.env[key] || defaultValue;
  }
  // Browser environment - use import.meta.env for Vite
  return (import.meta.env as Record<string, string>)[key] || defaultValue;
};

// Environment Variables
export const BUILD_TYPE = getEnvVar('VITE_BUILD_TYPE', 'free') as BuildType;

// Feature Flags
export const featureFlags = {
  // Build type checks
  isFree: BUILD_TYPE === 'free',
  isPro: BUILD_TYPE === 'pro',

  // Feature-specific flags
  enableProFeatures: getEnvVar('VITE_ENABLE_PRO_FEATURES') === 'true',
  enableProTemplates: getEnvVar('VITE_ENABLE_PRO_TEMPLATES') === 'true',
  enablePremiumComponents: getEnvVar('VITE_ENABLE_PREMIUM_COMPONENTS') === 'true',
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
    : getEnvVar('VITE_PRO_DOWNLOAD_URL', '#');
};

// Debug helper (only in development)
export const debugFeatureFlags = () => {
  if (getEnvVar('NODE_ENV') === 'development' || import.meta.env.DEV) {
    console.group('🚩 Feature Flags Debug');
    console.log('Build Type:', BUILD_TYPE);
    console.log('Feature Flags:', featureFlags);
    console.groupEnd();
  }
};

// Call debug in development
if (getEnvVar('NODE_ENV') === 'development' || import.meta.env.DEV) {
  debugFeatureFlags();
}
