import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button, SearchInput } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import type { SearchableItem } from '../../../components/primitives';
import {
  // Documentation section icons
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  PlayIcon,
  PaintBrushIcon,
  // Quick links icons
  SwatchIcon,
  CubeIcon,
  DocumentTextIcon,
  SparklesIcon,
  // Toggle icon
  Bars3Icon,
} from '@heroicons/react/24/outline';
import './design-tokens.scss';

type SectionId =
  | 'getting-started'
  | 'customization'
  | 'motion-system'
  | 'experience-system'
  | 'theming';

const Documentation = () => {
  const [selectedSection, setSelectedSection] = useState<SectionId>('getting-started');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sections = useMemo(
    () =>
      [
        {
          id: 'getting-started',
          label: 'Getting Started',
          description: 'Installation and setup guide',
        },
        {
          id: 'customization',
          label: 'Customization Guide',
          description: 'Override tokens and components',
        },
        {
          id: 'motion-system',
          label: 'Motion System',
          description: 'Animation philosophy and best practices',
          isPro: true,
        },
        {
          id: 'experience-system',
          label: 'Experience System',
          description: 'Context-aware, adaptive components',
          isPro: true,
          isNew: true,
        },
        {
          id: 'theming',
          label: 'Theming',
          description: 'Light/dark mode and extensibility',
        },
      ] as const,
    []
  );

  // Sidebar items with icons
  const sidebarItems = useMemo(
    () => [
      {
        id: 'getting-started',
        label: 'Getting Started',
        description: 'Installation and setup guide',
        icon: <RocketLaunchIcon width="16" height="16" />,
      },
      {
        id: 'customization',
        label: 'Customization Guide',
        description: 'Override tokens and components',
        icon: <WrenchScrewdriverIcon width="16" height="16" />,
      },
      {
        id: 'motion-system',
        label: 'Motion System',
        description: 'Animation philosophy and best practices',
        icon: <PlayIcon width="16" height="16" />,
        isPro: true,
      },
      {
        id: 'experience-system',
        label: 'Experience System',
        description: 'Context-aware, adaptive components',
        icon: <SparklesIcon width="16" height="16" />,
        isPro: true,
        isNew: true,
      },
      {
        id: 'theming',
        label: 'Theming',
        description: 'Light/dark mode and extensibility',
        icon: <PaintBrushIcon width="16" height="16" />,
      },
    ],
    []
  );

  // Searchable data for the search component
  const searchableData = useMemo(() => {
    const allData: SearchableItem[] = [];

    // Add sections
    sections.forEach((section) => {
      allData.push({
        label: section.label,
        description: section.description,
        type: 'section',
        category: section.id,
      });
    });

    return allData;
  }, [sections]);

  const handleSearchResultClick = (item: SearchableItem) => {
    if (item.type === 'section') {
      setSelectedSection(item.category as SectionId);
    }
  };

  const installationCode = `# Install the Motion UI Kit
npm install @motion-ui/kit

# Or with yarn
yarn add @motion-ui/kit

# Import the CSS in your main.tsx or App.tsx
import '@motion-ui/kit/dist/styles.css';`;

  const setupCode = `// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@motion-ui/kit';
import { ExperienceProvider } from '@motion-ui/kit/experience';
import './styles/main.scss';
import App from './App.tsx';

const experienceConfig = {
  adaptationRules: [
    {
      condition: (context) => context.userType === 'first-time',
      adaptations: [
        {
          componentType: 'button',
          adaptations: {
            guidance: 'show-hints',
            complexity: 'simplified',
          },
        },
      ],
    },
  ],
  enableUsageTracking: true,
  enableAutomaticAdaptation: true,
  enablePredictiveLoading: false,
  enableSmartBatching: false,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ExperienceProvider config={experienceConfig}>
        <App />
      </ExperienceProvider>
    </ThemeProvider>
  </StrictMode>
);`;

  const tokenCustomizationCode = `// Override design tokens
:root {
  /* Primary color customization */
  --accent-primary: #your-brand-color;
  --accent-secondary: #your-secondary-color;
  
  /* Typography customization */
  --font-family-base: 'Your Font', sans-serif;
  --text-base: 1rem;
  
  /* Spacing customization */
  --space-unit: 0.5rem; /* Base unit for spacing scale */
  
  /* Border radius customization */
  --radius-base: 8px;
}

/* Dark mode overrides */
[data-theme="dark"] {
  --surface-primary: #your-dark-bg;
  --text-primary: #your-dark-text;
}`;

  const componentCustomizationCode = `// Override component styles using SCSS
.button {
  // Your custom button styles
  &--custom {
    background: linear-gradient(45deg, #fe6b8b, #ff8e53);
    border: none;
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(254, 107, 139, 0.3);
    }
  }
}

// Or use CSS-in-JS with styled-components
const CustomButton = styled(Button)\`
  background: linear-gradient(45deg, #fe6b8b, #ff8e53);
  
  &:hover {
    transform: translateY(-2px);
  }
\`;`;

  const motionPhilosophyCode = `// Motion Design Principles
const motionPrinciples = {
  // 1. Purposeful - Every animation serves a purpose
  purposeful: {
    duration: "300ms", // Quick enough to not delay user
    easing: "ease-out", // Feels natural and responsive
  },
  
  // 2. Consistent - Use systematic timing and easing
  consistent: {
    durations: {
      fast: "150ms",    // Micro-interactions (hover, focus)
      normal: "300ms",  // Component transitions
      slow: "500ms",    // Page transitions, complex animations
    },
    easings: {
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)", // Material Design
      out: "cubic-bezier(0.0, 0, 0.2, 1)",   // Entering elements
      in: "cubic-bezier(0.4, 0, 1, 1)",      // Exiting elements
    }
  },
  
  // 3. Delightful - Add personality without overdoing it
  delightful: {
    spring: {
      stiffness: 300,
      damping: 30,
      mass: 1
    }
  }
};`;

  const springPresetsCode = `// Pro: Spring Animation Presets
import { motion } from 'framer-motion';

// Gentle spring - subtle, polished
const gentleSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

// Wobbly spring - playful, bouncy
const wobblySpring = {
  type: "spring",
  stiffness: 400,
  damping: 10
};

// Stiff spring - quick, responsive
const stiffSpring = {
  type: "spring",
  stiffness: 500,
  damping: 40
};

// Usage example
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={gentleSpring}
>
  Hover me for gentle spring animation
</motion.div>`;

  const themingSetupCode = `// Theme Provider Setup
import { ThemeProvider, useTheme } from '@motion-ui/kit';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourAppContent />
    </ThemeProvider>
  );
}

// Using the theme hook
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}`;

  const customThemeCode = `// Create a custom theme
const customTheme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
    // ... more colors
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['SF Mono', 'Monaco', 'monospace'],
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    // ... more spacing
  }
};

// Apply custom theme
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>`;

  // Experience System Code Examples
  const experienceSystemIntroCode = `// Traditional Button vs Smart Button
// Old way: Just visual variants
<Button variant="primary">Save</Button>
<Button variant="destructive">Delete</Button>

// Experience System: Intent-driven components
<SmartButton 
  intent="primary-action"
  criticality="high"
  userJourneyStage="purchase"
  adaptToUser={true}
>
  Complete Purchase
</SmartButton>

<SmartButton 
  intent="destructive"
  criticality="critical"
  flowPosition="confirmation"
  onInteraction={(type, metadata) => {
    console.log('User interaction:', type, metadata);
  }}
>
  Delete Account
</SmartButton>`;

  const experienceContextCode = `// Experience Context Provider Setup
import { ExperienceProvider, useExperienceContext } from '@motion-ui/kit/experience';

const experienceConfig = {
  adaptationRules: [
    {
      condition: (context) => context.userType === 'first-time',
      adaptations: [
        {
          componentType: 'button',
          adaptations: {
            guidance: 'show-hints',
            complexity: 'simplified',
          },
        },
      ],
    },
    {
      condition: (context) => context.device === 'mobile',
      adaptations: [
        {
          componentType: 'button',
          adaptations: {
            layout: 'spacious', // Larger touch targets
          },
        },
      ],
    },
  ],
  enableUsageTracking: true,
  enableAutomaticAdaptation: true,
};

function App() {
  return (
    <ExperienceProvider config={experienceConfig}>
      <YourComponents />
    </ExperienceProvider>
  );
}`;

  const adaptiveComponentCode = `// Components that adapt to user context
import { useExperienceContext, SmartButton } from '@motion-ui/kit/experience';

function AdaptiveInterface() {
  const { context } = useExperienceContext();
  
  return (
    <div>
      {/* Button adapts based on user type */}
      <SmartButton
        intent="primary-action"
        criticality="high"
        adaptToUser={true}
        learningEnabled={true}
      >
        {context.userType === 'first-time' 
          ? 'Get Started - Click Here!' 
          : 'Continue'
        }
      </SmartButton>
      
      {/* Confirmation flow adapts to user expertise */}
      <ConfirmationFlow
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isDestructive={true}
        // Automatically adapts button sizes for mobile
        // Shows more prominent warnings for first-time users
        // Reduces friction for power users
      />
    </div>
  );
}`;

  const intentDrivenCode = `// Intent-driven component design
// Instead of asking "How should this look?"
// Ask "What is the user trying to accomplish?"

const UserIntentExamples = () => (
  <div>
    {/* Primary Action - The main thing users want to do */}
    <SmartButton intent="primary-action" criticality="high">
      Save Document
    </SmartButton>
    
    {/* Navigation - Moving between sections */}
    <SmartButton 
      intent="navigation" 
      criticality="low"
      userJourneyStage="discovery"
    >
      Learn More
    </SmartButton>
    
    {/* Destructive - Actions that can't be undone */}
    <SmartButton 
      intent="destructive" 
      criticality="critical"
      flowPosition="confirmation"
    >
      Delete Account
    </SmartButton>
    
    {/* Secondary Action - Supporting actions */}
    <SmartButton intent="secondary-action" criticality="medium">
      Share
    </SmartButton>
  </div>
);`;

  const learningSystemCode = `// Components that learn from user behavior
import { SmartButton } from '@motion-ui/kit/experience';

function LearningComponent() {
  return (
    <SmartButton
      intent="destructive"
      criticality="critical"
      learningEnabled={true}
      onInteraction={(type, metadata) => {
        // Track user interactions
        console.log('Interaction:', {
          type, // 'hover', 'click', 'focus'
          intent: metadata.intent,
          userType: metadata.userType,
          device: metadata.deviceType,
          timestamp: metadata.timestamp,
        });
      }}
    >
      Delete File
    </SmartButton>
  );
}

// Learning behaviors:
// - If users frequently misclick destructive actions,
//   the button becomes less prominent
// - Mobile users automatically get larger touch targets
// - First-time users see more guidance
// - Power users get streamlined interfaces`;

  return (
    <div className="design-tokens-page">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Documentation', path: '/docs/documentation' },
        ]}
        className="documentation-breadcrumb"
      />

      <Hero
        headline="Documentation"
        description="Your complete developer handbook for building with Motion UI Kit. Learn setup, customization, and best practices."
        backgroundColor="brand-light"
        size="md"
        showIllustrations={false}
      />

      <div className={`design-tokens-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Enhanced Sidebar with Search */}
        <aside className={`design-tokens-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h3>Documentation</h3>
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <Bars3Icon width="16" height="16" />
            </button>
          </div>

          {!sidebarCollapsed && (
            <>
              <div className="sidebar-search">
                <SearchInput
                  placeholder="Search documentation..."
                  data={searchableData}
                  searchKeys={['label', 'description', 'name']}
                  onResultClick={handleSearchResultClick}
                  renderResult={(item: SearchableItem) => (
                    <div className="search-result-custom">
                      <span className="result-name">{item.label}</span>
                      <span className="result-type">{String(item.type)}</span>
                      {item.description && <span className="result-desc">{item.description}</span>}
                    </div>
                  )}
                />
              </div>

              <nav className="sidebar-nav" role="navigation">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSection(item.id as SectionId)}
                    className={`sidebar-nav-item ${selectedSection === item.id ? 'active' : ''}`}
                    aria-current={selectedSection === item.id ? 'page' : undefined}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {item.isPro && <span className="pro-badge">Pro</span>}
                    {item.isNew && <span className="new-badge">New</span>}
                  </button>
                ))}
              </nav>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main className="design-tokens-content">
          {/* Getting Started Section */}
          {selectedSection === 'getting-started' && (
            <section className="token-section">
              <div className="section-header">
                <h2>Getting Started</h2>
                <p>
                  Get up and running with Motion UI Kit in minutes. Follow this guide to install,
                  configure, and start building beautiful interfaces.
                </p>
              </div>

              <div className="doc-content">
                <Card className="doc-card">
                  <h3>📦 Installation</h3>
                  <p>Install Motion UI Kit using your preferred package manager:</p>
                  <CodePreview
                    title="Package Installation"
                    preview={
                      <div className="installation-preview">
                        <p>
                          Install via npm or yarn to get started with the complete component
                          library.
                        </p>
                      </div>
                    }
                    code={installationCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>⚛️ Setup</h3>
                  <p>Wrap your app with the ThemeProvider and import the base styles:</p>
                  <CodePreview
                    title="Basic Setup"
                    preview={
                      <div className="setup-preview">
                        <p>
                          The ThemeProvider enables theme switching and component customization.
                        </p>
                      </div>
                    }
                    code={setupCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🚀 First Component</h3>
                  <p>Import and use your first Motion UI Kit component:</p>
                  <CodePreview
                    title="Using Components"
                    preview={
                      <div className="first-component-preview">
                        <Button size="md">My First Button</Button>
                        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                          A button with built-in hover animations and accessibility features.
                        </p>
                      </div>
                    }
                    code={`import { Button } from '@motion-ui/kit';

function MyComponent() {
  return (
    <Button size="md" onClick={() => alert('Hello!')}>
      My First Button
    </Button>
  );
}`}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🧠 Experience System (Pro)</h3>
                  <div className="new-badge">New</div>
                  <p>
                    Upgrade to smart components that understand user intent and adapt to context:
                  </p>
                  <CodePreview
                    title="Smart Components"
                    preview={
                      <div className="experience-preview">
                        <div className="experience-feature">
                          <SparklesIcon width="20" height="20" />
                          <div>
                            <strong>Intent-Driven</strong>
                            <p>Components understand what users are trying to accomplish</p>
                          </div>
                        </div>
                        <div className="experience-feature">
                          <CubeIcon width="20" height="20" />
                          <div>
                            <strong>Context-Aware</strong>
                            <p>
                              Automatically adapts to device, accessibility needs, and user type
                            </p>
                          </div>
                        </div>
                        <div className="experience-feature">
                          <DocumentTextIcon width="20" height="20" />
                          <div>
                            <strong>Learning System</strong>
                            <p>Improves over time based on user behavior patterns</p>
                          </div>
                        </div>
                      </div>
                    }
                    code={`import { SmartButton, ExperienceProvider } from '@motion-ui/kit/experience';

function App() {
  return (
    <ExperienceProvider config={experienceConfig}>
      <SmartButton 
        intent="primary-action"
        criticality="high"
        adaptToUser={true}
        onInteraction={(type, metadata) => {
          console.log('User interaction:', type, metadata);
        }}
      >
        Complete Purchase
      </SmartButton>
    </ExperienceProvider>
  );
}`}
                  />
                </Card>
              </div>
            </section>
          )}

          {/* Customization Section */}
          {selectedSection === 'customization' && (
            <section className="token-section">
              <div className="section-header">
                <h2>Customization Guide</h2>
                <p>
                  Learn how to customize Motion UI Kit to match your brand. Override design tokens,
                  component styles, and create your unique design system.
                </p>
              </div>

              <div className="doc-content">
                <Card className="doc-card">
                  <h3>🎨 Token Customization</h3>
                  <p>Override design tokens to match your brand:</p>
                  <CodePreview
                    title="Custom Design Tokens"
                    preview={
                      <div className="token-preview">
                        <div className="custom-token-example">
                          <h4 style={{ color: '#9333ea' }}>Custom Branded Colors</h4>
                          <p>This preview shows custom purple brand colors in action.</p>
                          <Button size="sm" style={{ background: '#9333ea' }}>
                            Custom Button
                          </Button>
                        </div>
                      </div>
                    }
                    code={tokenCustomizationCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🔧 Component Overrides</h3>
                  <p>Customize individual components with CSS or styled-components:</p>
                  <CodePreview
                    title="Component Styling"
                    preview={
                      <div className="component-override-preview">
                        <div className="gradient-button-example">
                          <p>Example of a custom gradient button with hover effects:</p>
                          <Button
                            size="md"
                            style={{
                              background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
                              border: 'none',
                              color: 'white',
                            }}
                          >
                            Gradient Button
                          </Button>
                        </div>
                      </div>
                    }
                    code={componentCustomizationCode}
                  />
                </Card>
              </div>
            </section>
          )}

          {/* Motion System Section */}
          {selectedSection === 'motion-system' && (
            <section className="token-section">
              <div className="section-header">
                <h2>Motion System</h2>
                <div className="pro-badge">Pro Feature</div>
                <p>
                  Understand our motion design philosophy and learn to create delightful, purposeful
                  animations that enhance user experience.
                </p>
              </div>

              <div className="doc-content">
                <Card className="doc-card">
                  <h3>🎯 Motion Philosophy</h3>
                  <p>Our approach to motion design follows three core principles:</p>
                  <CodePreview
                    title="Motion Design Principles"
                    preview={
                      <div className="motion-philosophy-preview">
                        <div className="principle">
                          <strong>1. Purposeful:</strong> Every animation serves a clear purpose
                        </div>
                        <div className="principle">
                          <strong>2. Consistent:</strong> Systematic timing and easing curves
                        </div>
                        <div className="principle">
                          <strong>3. Delightful:</strong> Subtle personality without distraction
                        </div>
                      </div>
                    }
                    code={motionPhilosophyCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🌊 Spring Presets</h3>
                  <p>Pre-configured spring animations for common use cases:</p>
                  <CodePreview
                    title="Spring Animation System"
                    preview={
                      <div className="spring-preview">
                        <p>Hover the buttons to feel different spring characteristics:</p>
                        <div className="spring-examples">
                          <Button size="sm" style={{ marginRight: '0.5rem' }}>
                            Gentle Spring
                          </Button>
                          <Button size="sm" style={{ marginRight: '0.5rem' }}>
                            Wobbly Spring
                          </Button>
                          <Button size="sm">Stiff Spring</Button>
                        </div>
                      </div>
                    }
                    code={springPresetsCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🧠 Semantic Motion with Experience System</h3>
                  <div className="new-badge">Enhanced</div>
                  <p>Motion that adapts to user context and behavior patterns:</p>
                  <CodePreview
                    title="Context-Aware Motion"
                    preview={
                      <div className="semantic-motion-preview">
                        <div className="motion-example">
                          <strong>Micro-interactions:</strong> Subtle feedback for user actions
                        </div>
                        <div className="motion-example">
                          <strong>Entrance animations:</strong> Welcome users with purposeful motion
                        </div>
                        <div className="motion-example">
                          <strong>Emphasis motion:</strong> Draw attention when needed
                        </div>
                        <div className="motion-example">
                          <strong>Adaptive timing:</strong> Faster for power users, gentler for
                          first-time users
                        </div>
                      </div>
                    }
                    code={`// Semantic motion roles that adapt to user context
const motionSemantics = {
  'micro-interaction': {
    duration: context.userType === 'power-user' ? '100ms' : '150ms',
    easing: 'ease-emphasized',
  },
  'entrance': {
    duration: context.reducedMotion ? '150ms' : '300ms',
    easing: 'ease-decelerate',
  },
  'emphasis': {
    duration: context.device === 'mobile' ? '200ms' : '400ms',
    easing: 'ease-spring',
  },
  'feedback': {
    duration: '250ms',
    easing: context.accessibilityNeeds.reducedMotion 
      ? 'ease-out' 
      : 'ease-emphasized',
  }
};

// Usage with Experience System
<SmartButton
  intent="primary-action"
  motion="micro-interaction"  // Automatically adapts based on context
  adaptToUser={true}
>
  Save Changes
</SmartButton>`}
                  />
                </Card>
              </div>
            </section>
          )}

          {/* Experience System Section */}
          {selectedSection === 'experience-system' && (
            <section className="token-section">
              <div className="section-header">
                <h2>Experience System</h2>
                <div className="pro-badge">Pro Feature</div>
                <div className="new-badge">New</div>
                <p>
                  Revolutionary approach to component design. Build components that understand user
                  intent, adapt to context, and learn from behavior patterns.
                </p>
              </div>

              <div className="doc-content">
                <Card className="doc-card">
                  <h3>🧠 Philosophy: Beyond Static Components</h3>
                  <p>Traditional component libraries ask "How should this look?"</p>
                  <p>
                    <strong>Experience Systems ask "What is the user trying to accomplish?"</strong>
                  </p>

                  <div className="philosophy-comparison">
                    <div className="comparison-side">
                      <h4>Traditional Approach</h4>
                      <ul>
                        <li>Static visual variants</li>
                        <li>One-size-fits-all design</li>
                        <li>Developer-focused APIs</li>
                        <li>Visual consistency priority</li>
                      </ul>
                    </div>
                    <div className="comparison-side">
                      <h4>Experience System</h4>
                      <ul>
                        <li>Intent-driven components</li>
                        <li>Context-aware adaptation</li>
                        <li>User-focused APIs</li>
                        <li>Behavioral intelligence priority</li>
                      </ul>
                    </div>
                  </div>

                  <CodePreview
                    title="Traditional vs Experience System"
                    preview={
                      <div className="experience-comparison-preview">
                        <div className="old-way">
                          <h5>Old Way:</h5>
                          <code>&lt;Button variant="primary"&gt;Save&lt;/Button&gt;</code>
                        </div>
                        <div className="new-way">
                          <h5>Experience System:</h5>
                          <code>
                            &lt;SmartButton intent="primary-action" criticality="high"
                            adaptToUser&gt;Save&lt;/SmartButton&gt;
                          </code>
                        </div>
                      </div>
                    }
                    code={experienceSystemIntroCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🚀 Quick Start</h3>
                  <p>Set up the Experience System with context providers:</p>
                  <CodePreview
                    title="Experience Provider Setup"
                    preview={
                      <div className="setup-preview">
                        <p>
                          Wrap your app with ExperienceProvider to enable context-aware components
                        </p>
                        <div className="feature-list">
                          <div>✅ Automatic device detection</div>
                          <div>✅ Accessibility preference detection</div>
                          <div>✅ User behavior tracking</div>
                          <div>✅ Component adaptation rules</div>
                        </div>
                      </div>
                    }
                    code={experienceContextCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🎯 Intent-Driven Design</h3>
                  <p>
                    Components understand <em>what</em> users are trying to accomplish:
                  </p>
                  <CodePreview
                    title="Intent-Based Components"
                    preview={
                      <div className="intent-preview">
                        <div className="intent-example">
                          <span className="intent-badge primary">primary-action</span>
                          <span>The main thing users want to do</span>
                        </div>
                        <div className="intent-example">
                          <span className="intent-badge destructive">destructive</span>
                          <span>Actions that can't be undone</span>
                        </div>
                        <div className="intent-example">
                          <span className="intent-badge navigation">navigation</span>
                          <span>Moving between sections</span>
                        </div>
                        <div className="intent-example">
                          <span className="intent-badge secondary">secondary-action</span>
                          <span>Supporting actions</span>
                        </div>
                      </div>
                    }
                    code={intentDrivenCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🔄 Adaptive Components</h3>
                  <p>Components that automatically adapt based on user context:</p>
                  <CodePreview
                    title="Context-Aware Adaptation"
                    preview={
                      <div className="adaptive-preview">
                        <div className="adaptation-example">
                          <strong>📱 Mobile Users:</strong> Larger touch targets, simplified layouts
                        </div>
                        <div className="adaptation-example">
                          <strong>🆕 First-time Users:</strong> More guidance, prominent primary
                          actions
                        </div>
                        <div className="adaptation-example">
                          <strong>⚡ Power Users:</strong> Streamlined interfaces, advanced features
                        </div>
                        <div className="adaptation-example">
                          <strong>♿ Accessibility:</strong> Reduced motion, high contrast, larger
                          fonts
                        </div>
                      </div>
                    }
                    code={adaptiveComponentCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>📈 Learning System</h3>
                  <p>Components that learn from user behavior and improve over time:</p>
                  <CodePreview
                    title="Behavioral Learning"
                    preview={
                      <div className="learning-preview">
                        <div className="learning-example">
                          <strong>Usage Patterns:</strong> Track how users interact with components
                        </div>
                        <div className="learning-example">
                          <strong>Mistake Prevention:</strong> Reduce prominence of frequently
                          misclicked actions
                        </div>
                        <div className="learning-example">
                          <strong>Optimization:</strong> Adapt layouts based on success rates
                        </div>
                        <div className="learning-example">
                          <strong>Personalization:</strong> Remember user preferences and behaviors
                        </div>
                      </div>
                    }
                    code={learningSystemCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🎮 Try the Interactive Demo</h3>
                  <p>Experience the system in action with our interactive demonstration:</p>
                  <div className="demo-link-container">
                    <Link to="/experience-demo" className="demo-link">
                      <SparklesIcon width="20" height="20" />
                      Open Experience System Demo
                      <span className="demo-description">
                        See components adapt in real-time based on user context
                      </span>
                    </Link>
                  </div>
                </Card>

                <Card className="doc-card">
                  <h3>📚 Implementation Guide</h3>
                  <div className="implementation-steps">
                    <div className="step">
                      <h4>1. Basic Setup</h4>
                      <p>Add ExperienceProvider to your app root</p>
                    </div>
                    <div className="step">
                      <h4>2. Replace Components</h4>
                      <p>Gradually replace Button with SmartButton</p>
                    </div>
                    <div className="step">
                      <h4>3. Define Intent</h4>
                      <p>Add intent and criticality props to clarify purpose</p>
                    </div>
                    <div className="step">
                      <h4>4. Enable Learning</h4>
                      <p>Turn on usage tracking and behavioral adaptation</p>
                    </div>
                    <div className="step">
                      <h4>5. Customize Rules</h4>
                      <p>Define your own adaptation rules for specific contexts</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {/* Theming Section */}
          {selectedSection === 'theming' && (
            <section className="token-section">
              <div className="section-header">
                <h2>Theming</h2>
                <p>
                  Master light/dark mode theming and learn to extend the design system with your own
                  custom themes.
                </p>
              </div>

              <div className="doc-content">
                <Card className="doc-card">
                  <h3>🌙 Theme Provider</h3>
                  <p>Set up automatic theme switching and persistence:</p>
                  <CodePreview
                    title="Theme Setup"
                    preview={
                      <div className="theme-preview">
                        <p>
                          Theme Provider automatically handles light/dark mode switching and
                          persistence.
                        </p>
                        <Button size="sm">Toggle Theme Example</Button>
                      </div>
                    }
                    code={themingSetupCode}
                  />
                </Card>

                <Card className="doc-card">
                  <h3>🎨 Custom Themes</h3>
                  <p>Create and apply custom themes beyond light/dark:</p>
                  <CodePreview
                    title="Custom Theme Creation"
                    preview={
                      <div className="custom-theme-preview">
                        <p>Example of a custom blue theme with different spacing and typography.</p>
                        <div className="theme-example">
                          <h4>Custom Theme Preview</h4>
                          <Button size="sm">Themed Button</Button>
                        </div>
                      </div>
                    }
                    code={customThemeCode}
                  />
                </Card>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Quick Links */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-grid">
          <Card>
            <h3>
              <SwatchIcon width="20" height="20" />
              Design Tokens
            </h3>
            <p>Explore the complete token system</p>
            <Link to="/design-tokens">
              <Button size="sm" variant="outline">
                View Tokens
              </Button>
            </Link>
          </Card>
          <Card>
            <h3>
              <CubeIcon width="20" height="20" />
              Components
            </h3>
            <p>Browse all available components</p>
            <Link to="/components">
              <Button size="sm" variant="outline">
                View Components
              </Button>
            </Link>
          </Card>
          <Card>
            <h3>
              <DocumentTextIcon width="20" height="20" />
              Changelog
            </h3>
            <p>See what's new and improved</p>
            <Link to="/changelog">
              <Button size="sm" variant="outline">
                View Updates
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Pro Feature CTA */}
      <div className="pro-feature-cta">
        <Card className="cta-card">
          <h3>
            <SparklesIcon width="24" height="24" />
            Upgrade to Pro
          </h3>
          <p>
            Unlock advanced motion components, semantic motion tokens, and enterprise-ready design
            patterns. Take your projects to the next level with professional-grade animations.
          </p>
          <div className="cta-actions">
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                window.open('https://sebastiangonzalez.design/motion-ui-kit', '_blank')
              }
            >
              Get Pro →
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
