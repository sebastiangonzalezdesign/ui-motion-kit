import type { Meta, StoryObj } from '@storybook/react-vite';
import './Overview.scss';

// Overview component showing all available components
const OverviewComponent = () => (
  <div className="overview-container">
    <h1 className="overview-title">📋 Component Overview</h1>

    <p className="overview-subtitle">
      A comprehensive overview of all available components in Motion UI Kit Pro.
    </p>

    <div className="overview-grid">
      <div className="overview-card">
        <h3>🎨 Primitives</h3>
        <ul>
          <li>Button - Interactive button component with variants</li>
          <li>Toggle - Switch/toggle component with smooth animations</li>
          <li>Input - Form input component with validation states</li>
        </ul>
      </div>

      <div className="overview-card">
        <h3>🧭 Navigation</h3>
        <ul>
          <li>Tabs - Advanced tabbed navigation component</li>
        </ul>
      </div>
    </div>

    <div className="overview-footer">
      <p>
        Navigate through the sidebar to explore each component with interactive examples and
        documentation.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof OverviewComponent> = {
  title: 'Introduction/Overview',
  component: OverviewComponent,
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

export const ComponentOverview: Story = {};
