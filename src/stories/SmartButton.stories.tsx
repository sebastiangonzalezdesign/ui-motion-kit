import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExperienceProvider } from '../utils/experience-context';
import type { UserContext, ExperienceSystemConfig } from '../utils/experience-context';
import { SmartButton, ConfirmationFlow } from '../components/primitives/SmartButton/SmartButton';

const experienceConfig: ExperienceSystemConfig = {
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

const meta: Meta<typeof SmartButton> = {
  title: 'Experience System/Smart Button',
  component: SmartButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Experience System: Smart Button

The SmartButton represents a new paradigm - components that understand **intent**, **context**, and **user behavior**.

## Key Concepts

### 🎯 Intent-Driven Design
Instead of just styling variants, buttons understand their purpose:
- \`primary-action\` - The main thing users want to do
- \`destructive\` - Actions that can't be undone
- \`navigation\` - Moving between sections
- \`secondary-action\` - Supporting actions

### 🧠 Context Awareness
Buttons adapt based on:
- **User Type**: First-time vs power users get different experiences
- **Device**: Mobile vs desktop optimization
- **Accessibility**: Reduced motion, large fonts
- **Journey Stage**: Discovery vs purchase vs usage

### 📈 Learning Behavior
Components track usage patterns and improve over time:
- Frequently misclicked destructive actions become less prominent
- Mobile users get larger touch targets
- Context-aware animations based on user preferences

## Philosophy

Traditional component libraries ask: "How should this look?"
Experience Systems ask: "What is the user trying to do, and how can we help?"
        `,
      },
    },
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary-action', 'secondary-action', 'destructive', 'navigation', 'toggle'],
      description: 'What is the user trying to accomplish?',
    },
    criticality: {
      control: 'select',
      options: ['low', 'medium', 'high', 'critical'],
      description: 'How important is this action?',
    },
    flowPosition: {
      control: 'select',
      options: ['entry', 'middle', 'exit', 'confirmation'],
      description: 'Where in the user journey is this button?',
    },
    userJourneyStage: {
      control: 'select',
      options: ['discovery', 'evaluation', 'purchase', 'usage', 'advocacy'],
      description: 'What stage of the user journey?',
    },
    adaptToUser: {
      control: 'boolean',
      description: 'Should the button adapt to user context?',
    },
    learningEnabled: {
      control: 'boolean',
      description: 'Should the button learn from user behavior?',
    },
    contextAware: {
      control: 'boolean',
      description: 'Should the button respond to device and accessibility context?',
    },
  },
  decorators: [
    (Story) => {
      const userContext: Partial<UserContext> = {
        userType: 'returning',
        device: 'desktop',
        accessibilityNeeds: {
          reducedMotion: false,
          highContrast: false,
          screenReader: false,
          largeFonts: false,
        },
      };

      return (
        <ExperienceProvider config={experienceConfig} initialContext={userContext}>
          <Story />
        </ExperienceProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof SmartButton>;

export const PrimaryAction: Story = {
  args: {
    children: 'Save Document',
    intent: 'primary-action',
    criticality: 'high',
    adaptToUser: true,
    learningEnabled: true,
    contextAware: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Primary Action Button** - The main thing users want to do.

Try changing the toolbar controls above to see how the button adapts:
- 🆕 **First Time User**: Gets larger, more prominent styling
- 📱 **Mobile Device**: Automatically sized for touch
- 🔇 **Reduced Motion**: Removes animations
- 📏 **Large Fonts**: Increases button size

This is **context-aware design** - the same component adapts to user needs.
        `,
      },
    },
  },
};

export const DestructiveAction: Story = {
  args: {
    children: 'Delete Account',
    intent: 'destructive',
    criticality: 'critical',
    adaptToUser: true,
    learningEnabled: true,
    contextAware: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Destructive Action Button** - Actions that can't be undone.

This button demonstrates **behavioral adaptation**:
- First-time users see more prominent warnings
- Power users get streamlined confirmation
- Mobile users get larger touch targets to prevent accidents
- Learning system tracks misclicks and adapts prominence

The button **understands consequences** and adapts accordingly.
        `,
      },
    },
  },
};

export const NavigationAction: Story = {
  args: {
    children: 'Learn More',
    intent: 'navigation',
    criticality: 'low',
    userJourneyStage: 'discovery',
    adaptToUser: true,
    learningEnabled: true,
    contextAware: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Navigation Button** - Moving between sections or learning.

This demonstrates **journey-aware design**:
- Discovery stage users get encouraging, exploratory styling
- Evaluation stage users get more focused, decision-oriented styling
- Usage stage users get quick, efficient navigation

The component **understands where users are** in their journey.
        `,
      },
    },
  },
};

export const ConfirmationWorkflow: StoryObj<typeof ConfirmationFlow> = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h4 style={{ marginBottom: '16px' }}>Delete Account Confirmation</h4>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        This action cannot be undone. All your data will be permanently deleted.
      </p>
      <ConfirmationFlow
        onConfirm={() => alert('Account deleted (demo)')}
        onCancel={() => alert('Cancelled (demo)')}
        confirmText="Yes, Delete Account"
        cancelText="Keep My Account"
        isDestructive={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**Confirmation Flow** - A compound component that understands workflow context.

This demonstrates **workflow intelligence**:
- Cancel button is positioned first (safer default)
- Destructive action uses less prominent styling by default
- Button sizing adapts to device and user type
- Spacing optimized for touch vs mouse interaction

**Experience System = Components that understand user intent in context.**
        `,
      },
    },
  },
};

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '300px' }}>
      <div>
        <h4>Primary Actions (High Impact)</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <SmartButton intent="primary-action" criticality="high">
            Save & Continue
          </SmartButton>
          <SmartButton intent="primary-action" criticality="critical">
            Purchase Now
          </SmartButton>
        </div>
      </div>

      <div>
        <h4>Secondary Actions (Supporting)</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <SmartButton intent="secondary-action" criticality="medium">
            Save Draft
          </SmartButton>
          <SmartButton intent="secondary-action" criticality="low">
            Share
          </SmartButton>
        </div>
      </div>

      <div>
        <h4>Navigation (Movement)</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <SmartButton intent="navigation" criticality="low" userJourneyStage="discovery">
            Learn More
          </SmartButton>
          <SmartButton intent="navigation" criticality="medium">
            View Details
          </SmartButton>
        </div>
      </div>

      <div>
        <h4>Destructive Actions (Irreversible)</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <SmartButton intent="destructive" criticality="high">
            Delete File
          </SmartButton>
          <SmartButton intent="destructive" criticality="critical">
            Delete Account
          </SmartButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
**All Intent Types** - Each button type understands its purpose and adapts accordingly.

Use the toolbar controls to see how each intent type responds differently to:
- User experience level
- Device type  
- Accessibility needs

This is the **Experience System mindset**: 
*Components that understand intent and adapt to context.*
        `,
      },
    },
  },
};
