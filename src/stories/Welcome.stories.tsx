import type { Meta, StoryObj } from '@storybook/react-vite';
import './Welcome.scss';

// Create a simple Welcome component
const WelcomeComponent = () => (
  <div className="welcome-container">
    <h1 className="welcome-title">🚀 Motion UI Kit Pro</h1>

    <p className="welcome-subtitle">
      A premium UI component library with sophisticated animations and comprehensive design system.
    </p>

    <div className="welcome-grid">
      <div className="welcome-card">
        <h3>🎨 Primitives</h3>
        <p>
          Essential components like Button, Toggle, and Input with professional styling and
          animations.
        </p>
      </div>

      <div className="welcome-card">
        <h3>🧭 Navigation</h3>
        <p>
          Advanced navigation components like Tabs with smooth transitions and accessibility
          features.
        </p>
      </div>
    </div>

    <div className="welcome-features">
      <h3>✨ Features</h3>
      <ul>
        <li>React 19 + TypeScript support</li>
        <li>Framer Motion animations</li>
        <li>SCSS design system with theme support</li>
        <li>Comprehensive accessibility features</li>
        <li>Professional component documentation</li>
        <li>Interactive playground with live props</li>
      </ul>
    </div>

    <div className="welcome-footer">
      <p>
        👈 Explore the components in the sidebar to see interactive examples with live props and
        comprehensive documentation.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof WelcomeComponent> = {
  title: 'Introduction/Welcome',
  component: WelcomeComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
    },
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GettingStarted: Story = {};
