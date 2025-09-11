import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Primitives/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An animated toggle switch component with morphing Hero Icons, state-based colors, and smooth spring physics. Features accessibility compliance and responsive design.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    initialState: {
      control: 'boolean',
      description: 'Initial state of the toggle',
    },
    onToggle: {
      action: 'toggled',
      description: 'Toggle change handler function',
    },
    label: {
      control: 'text',
      description: 'Toggle label text',
    },
    description: {
      control: 'text',
      description: 'Toggle description text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle',
    },
    variant: {
      control: 'select',
      options: ['default', 'pill', 'square'],
      description: 'Visual style variant of the toggle',
    },
    iconType: {
      control: 'select',
      options: ['check', 'theme', 'notification', 'visibility', 'wifi'],
      description: 'Type of morphing icons to display',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the toggle is in loading state',
    },
  },
  args: {
    onToggle: fn(),
    label: 'Toggle label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: false,
    label: 'Enable feature',
  },
};

export const Checked: Story = {
  args: {
    initialState: true,
    label: 'Feature enabled',
  },
};

export const WithDescription: Story = {
  args: {
    initialState: false,
    label: 'Enable notifications',
    description: 'Receive push notifications for important updates',
  },
};

export const Small: Story = {
  args: {
    initialState: false,
    size: 'sm',
    label: 'Small toggle',
  },
};

export const Medium: Story = {
  args: {
    initialState: false,
    size: 'md',
    label: 'Medium toggle',
  },
};

export const Large: Story = {
  args: {
    initialState: false,
    size: 'lg',
    label: 'Large toggle',
  },
};

export const ThemeToggle: Story = {
  args: {
    initialState: false,
    iconType: 'theme',
    label: 'Dark mode',
    description: 'Switch between light and dark themes',
  },
};

export const NotificationToggle: Story = {
  args: {
    initialState: true,
    iconType: 'notification',
    label: 'Push notifications',
    description: 'Enable push notifications',
  },
};

export const VisibilityToggle: Story = {
  args: {
    initialState: false,
    iconType: 'visibility',
    label: 'Show password',
    description: 'Toggle password visibility',
  },
};

export const WifiToggle: Story = {
  args: {
    initialState: true,
    iconType: 'wifi',
    label: 'WiFi connection',
    description: 'Enable WiFi connectivity',
  },
};

export const Disabled: Story = {
  args: {
    initialState: false,
    disabled: true,
    label: 'Disabled toggle',
    description: 'This toggle is disabled',
  },
};

export const Loading: Story = {
  args: {
    initialState: false,
    loading: true,
    label: 'Loading toggle',
    description: 'This toggle is in loading state',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Toggle variant="default" label="Default variant" />
      <Toggle variant="pill" label="Pill variant" />
      <Toggle variant="square" label="Square variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All toggle variants displayed together for comparison.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle size="sm" label="Small toggle" />
      <Toggle size="md" label="Medium toggle" />
      <Toggle size="lg" label="Large toggle" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All toggle sizes displayed together for comparison.',
      },
    },
  },
};

export const AllIconTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Toggle iconType="check" label="Check icons" />
      <Toggle iconType="theme" label="Theme icons" />
      <Toggle iconType="notification" label="Notification icons" />
      <Toggle iconType="visibility" label="Visibility icons" />
      <Toggle iconType="wifi" label="WiFi icons" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available icon types for morphing animations.',
      },
    },
  },
};
