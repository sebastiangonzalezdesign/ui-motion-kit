import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs, TabList, TabTrigger, TabContent } from './Tabs';

// Create a wrapper component for easier story configuration
interface TabsWrapperProps {
  variant?: 'default' | 'pills' | 'underline' | 'bordered';
  defaultTab?: string;
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
  }>;
  onTabChange?: (value: string) => void;
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({
  variant = 'default',
  defaultTab,
  tabs,
  onTabChange,
}) => {
  return (
    <Tabs value={defaultTab} onValueChange={onTabChange} variant={variant} orientation="horizontal">
      <TabList>
        {tabs.map((tab) => (
          <TabTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabTrigger>
        ))}
      </TabList>
      {tabs.map((tab) => (
        <TabContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabContent>
      ))}
    </Tabs>
  );
};

const meta: Meta<typeof TabsWrapper> = {
  title: 'Navigation/Tabs',
  component: TabsWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Advanced tabbed interface with three sophisticated variants (default, pills, bordered), animated indicators, smooth transitions, and accessibility compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underline', 'bordered'],
      description: 'Visual style variant of the tabs',
    },
    defaultTab: {
      control: 'text',
      description: 'Default active tab',
    },
    onTabChange: {
      action: 'tab-changed',
      description: 'Tab change handler function',
    },
  },
  args: {
    onTabChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Overview Content</h3>
        <p>This is the overview tab content with important information about the project.</p>
      </div>
    ),
  },
  {
    id: 'features',
    label: 'Features',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Features Content</h3>
        <p>Explore the amazing features and capabilities of our system.</p>
      </div>
    ),
  },
  {
    id: 'pricing',
    label: 'Pricing',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Pricing Content</h3>
        <p>Check out our flexible pricing plans designed for every need.</p>
      </div>
    ),
  },
  {
    id: 'support',
    label: 'Support',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Support Content</h3>
        <p>Get help and support from our dedicated team.</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    variant: 'default',
    defaultTab: 'overview',
    tabs: sampleTabs,
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    defaultTab: 'features',
    tabs: sampleTabs,
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    defaultTab: 'pricing',
    tabs: sampleTabs,
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    defaultTab: 'support',
    tabs: sampleTabs,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', minWidth: '600px' }}>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Default Variant</h4>
        <TabsWrapper variant="default" tabs={sampleTabs} defaultTab="overview" />
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Pills Variant</h4>
        <TabsWrapper variant="pills" tabs={sampleTabs} defaultTab="features" />
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Underline Variant</h4>
        <TabsWrapper variant="underline" tabs={sampleTabs} defaultTab="pricing" />
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', color: '#374151' }}>Bordered Variant</h4>
        <TabsWrapper variant="bordered" tabs={sampleTabs} defaultTab="support" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All tab variants displayed together for comparison.',
      },
    },
  },
};

const longTabsList = [
  {
    id: 'tab1',
    label: 'Dashboard',
    content: <div style={{ padding: '20px' }}>Dashboard Content</div>,
  },
  {
    id: 'tab2',
    label: 'Analytics',
    content: <div style={{ padding: '20px' }}>Analytics Content</div>,
  },
  { id: 'tab3', label: 'Reports', content: <div style={{ padding: '20px' }}>Reports Content</div> },
  {
    id: 'tab4',
    label: 'Settings',
    content: <div style={{ padding: '20px' }}>Settings Content</div>,
  },
  { id: 'tab5', label: 'Users', content: <div style={{ padding: '20px' }}>Users Content</div> },
  {
    id: 'tab6',
    label: 'Integrations',
    content: <div style={{ padding: '20px' }}>Integrations Content</div>,
  },
];

export const ManyTabs: Story = {
  args: {
    variant: 'default',
    defaultTab: 'tab1',
    tabs: longTabsList,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with many tabs to demonstrate responsive behavior.',
      },
    },
  },
};

const shortTabsList = [
  {
    id: 'login',
    label: 'Login',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Login Form</h3>
        <p>Enter your credentials to access your account.</p>
      </div>
    ),
  },
  {
    id: 'signup',
    label: 'Sign Up',
    content: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Sign Up Form</h3>
        <p>Create a new account to get started.</p>
      </div>
    ),
  },
];

export const TwoTabs: Story = {
  args: {
    variant: 'pills',
    defaultTab: 'login',
    tabs: shortTabsList,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple two-tab interface commonly used for login/signup forms.',
      },
    },
  },
};

const contentRichTabs = [
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '16px' }}>User Profile</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <strong>Name:</strong> John Doe
          </div>
          <div>
            <strong>Email:</strong> john@example.com
          </div>
          <div>
            <strong>Role:</strong> Developer
          </div>
          <div>
            <strong>Joined:</strong> January 2023
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'preferences',
    label: 'Preferences',
    content: (
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '16px' }}>User Preferences</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" defaultChecked />
            Email notifications
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" />
            SMS notifications
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" defaultChecked />
            Dark mode
          </label>
        </div>
      </div>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    content: (
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '16px' }}>Security Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button
            style={{
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              background: 'white',
            }}
          >
            Change Password
          </button>
          <button
            style={{
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              background: 'white',
            }}
          >
            Enable 2FA
          </button>
          <button
            style={{
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              background: 'white',
            }}
          >
            View Login History
          </button>
        </div>
      </div>
    ),
  },
];

export const ContentRich: Story = {
  args: {
    variant: 'bordered',
    defaultTab: 'profile',
    tabs: contentRichTabs,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with rich content to demonstrate tab panels with complex layouts.',
      },
    },
  },
};
