import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A comprehensive input component with floating/fixed labels, validation states, password toggle, search optimization, icon support, and accessibility compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url'],
      description: 'Input type',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
      description: 'Visual style variant',
    },
    labelVariant: {
      control: 'select',
      options: ['floating', 'fixed'],
      description: 'Label style variant',
    },
    label: {
      control: 'text',
      description: 'Input label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    success: {
      control: 'text',
      description: 'Success message',
    },
    hint: {
      control: 'text',
      description: 'Helper text below input',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the input is loading',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether the input is clearable',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    icon: {
      control: 'select',
      options: ['user', 'email', 'phone', 'search', 'password'],
      description: 'Predefined icon type',
    },
    onChange: {
      action: 'changed',
      description: 'Change handler function',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your full name',
  },
};

export const FloatingLabel: Story = {
  args: {
    labelVariant: 'floating',
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const FixedLabel: Story = {
  args: {
    labelVariant: 'fixed',
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    placeholder: 'Enter username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    placeholder: 'Enter your email',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    value: 'john@example.com',
    success: 'Email address is valid',
    placeholder: 'Enter your email',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hint: 'Must be at least 8 characters with numbers and special characters',
    placeholder: 'Enter your password',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'john_doe',
    disabled: true,
    placeholder: 'Enter username',
  },
};

export const Loading: Story = {
  args: {
    label: 'Processing',
    loading: true,
    placeholder: 'Loading...',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    clearable: true,
    placeholder: 'Type to search...',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for anything...',
  },
};

export const WithUserIcon: Story = {
  args: {
    label: 'Username',
    icon: 'user',
    placeholder: 'Enter username',
  },
};

export const WithEmailIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    icon: 'email',
    placeholder: 'Enter email',
  },
};

export const WithSearchIcon: Story = {
  args: {
    label: 'Search users',
    type: 'search',
    icon: 'search',
    placeholder: 'Search users...',
  },
};

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'sm',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium input',
    size: 'md',
    placeholder: 'Medium size',
  },
};

export const Large: Story = {
  args: {
    label: 'Large input',
    size: 'lg',
    placeholder: 'Large size',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
      <Input label="Default variant" variant="default" placeholder="Default style" />
      <Input label="Outlined variant" variant="outlined" placeholder="Outlined style" />
      <Input label="Filled variant" variant="filled" placeholder="Filled style" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input variants displayed together for comparison.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
      <Input label="Small input" size="sm" placeholder="Small size" />
      <Input label="Medium input" size="md" placeholder="Medium size" />
      <Input label="Large input" size="lg" placeholder="Large size" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input sizes displayed together for comparison.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '350px' }}>
      <Input label="Full name" placeholder="Enter your full name" required icon="user" />
      <Input
        label="Email address"
        type="email"
        placeholder="Enter your email"
        required
        icon="email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        required
        hint="Must be at least 8 characters"
        icon="password"
      />
      <Input label="Search" type="search" placeholder="Search anything..." icon="search" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example form showcasing different input types and configurations.',
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '350px' }}>
      <Input
        label="Valid input"
        value="john@example.com"
        success="Email address is valid"
        placeholder="Enter email"
      />
      <Input
        label="Invalid input"
        value="invalid-email"
        error="Please enter a valid email address"
        placeholder="Enter email"
      />
      <Input label="With hint text" hint="This field is optional" placeholder="Enter value" />
      <Input label="Required field" required placeholder="This field is required" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation states and helper text configurations.',
      },
    },
  },
};
