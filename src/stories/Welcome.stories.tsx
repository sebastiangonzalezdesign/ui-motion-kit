import type { Meta, StoryObj } from '@storybook/react-vite';

// Create a simple Welcome component
const WelcomeComponent = () => (
  <div
    style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
    }}
  >
    <h1
      style={{
        color: '#1f2937',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        fontWeight: '700',
      }}
    >
      🚀 Motion UI Kit Pro
    </h1>

    <p
      style={{
        fontSize: '1.25rem',
        color: '#6b7280',
        marginBottom: '2rem',
      }}
    >
      A premium UI component library with sophisticated animations and comprehensive design system.
    </p>

    <div
      style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        marginBottom: '2rem',
      }}
    >
      <div
        style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb',
        }}
      >
        <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>🎨 Primitives</h3>
        <p style={{ color: '#6b7280', margin: 0 }}>
          Essential components like Button, Toggle, and Input with professional styling and
          animations.
        </p>
      </div>

      <div
        style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb',
        }}
      >
        <h3 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>🧭 Navigation</h3>
        <p style={{ color: '#6b7280', margin: 0 }}>
          Advanced navigation components like Tabs with smooth transitions and accessibility
          features.
        </p>
      </div>
    </div>

    <div
      style={{
        padding: '1.5rem',
        backgroundColor: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px',
        marginBottom: '2rem',
      }}
    >
      <h3 style={{ color: '#1e40af', marginBottom: '1rem' }}>✨ Features</h3>
      <ul style={{ color: '#1e40af', paddingLeft: '1.5rem', margin: 0 }}>
        <li>React 19 + TypeScript support</li>
        <li>Framer Motion animations</li>
        <li>SCSS design system with theme support</li>
        <li>Comprehensive accessibility features</li>
        <li>Professional component documentation</li>
        <li>Interactive playground with live props</li>
      </ul>
    </div>

    <div
      style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
      }}
    >
      <p style={{ color: '#4b5563', margin: 0 }}>
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
