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
} from '@heroicons/react/24/outline';
import './design-tokens.scss';

type SectionId = 'getting-started' | 'customization' | 'motion-system' | 'theming';

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
import './styles/main.scss';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
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
        backgroundColor="brand-medium"
        borderRadius="lg"
        size="md"
        showIllustrations={false}
      />

      <div className="design-tokens-layout">
        {/* Enhanced Sidebar with Search */}
        <aside className={`design-tokens-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h3>Documentation</h3>
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
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
            <h3>🎨 Design Tokens</h3>
            <p>Explore the complete token system</p>
            <Link to="/design-tokens">
              <Button size="sm" variant="outline">
                View Tokens
              </Button>
            </Link>
          </Card>
          <Card>
            <h3>🧩 Components</h3>
            <p>Browse all available components</p>
            <Link to="/components">
              <Button size="sm" variant="outline">
                View Components
              </Button>
            </Link>
          </Card>
          <Card>
            <h3>📋 Changelog</h3>
            <p>See what's new and improved</p>
            <Link to="/changelog">
              <Button size="sm" variant="outline">
                View Updates
              </Button>
            </Link>
          </Card>
          <Card>
            <h3>🚀 Upgrade to Pro</h3>
            <p>Unlock advanced features</p>
            <Button
              size="sm"
              onClick={() =>
                window.open('https://sebastiangonzalez.design/motion-ui-kit', '_blank')
              }
            >
              Get Pro
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
