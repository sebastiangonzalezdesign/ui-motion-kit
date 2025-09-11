import type { Meta, StoryObj } from '@storybook/react-vite';

// Overview component showing all available components
const OverviewComponent = () => (
  <div
    style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      lineHeight: '1.6',
    }}
  >
    <h1
      style={{
        color: '#1f2937',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: '700',
      }}
    >
      📋 Component Overview
    </h1>

    <p
      style={{
        fontSize: '1.125rem',
        color: '#6b7280',
        marginBottom: '3rem',
      }}
    >
      A comprehensive overview of all available components in Motion UI Kit Pro.
    </p>

    <div
      style={{
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      }}
    >
      <div
        style={{
          padding: '2rem',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          backgroundColor: '#ffffff',
        }}
      >
        <h3 style={{ color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem' }}>
          🎨 Primitives
        </h3>
        <ul style={{ color: '#6b7280', paddingLeft: '1.5rem', margin: 0 }}>
          <li>Button - Interactive button component with variants</li>
          <li>Toggle - Switch/toggle component with smooth animations</li>
          <li>Input - Form input component with validation states</li>
        </ul>
      </div>

      <div
        style={{
          padding: '2rem',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          backgroundColor: '#ffffff',
        }}
      >
        <h3 style={{ color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem' }}>
          🧭 Navigation
        </h3>
        <ul style={{ color: '#6b7280', paddingLeft: '1.5rem', margin: 0 }}>
          <li>Tabs - Advanced tabbed navigation component</li>
        </ul>
      </div>
    </div>

    <div
      style={{
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <p style={{ color: '#475569', margin: 0 }}>
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
