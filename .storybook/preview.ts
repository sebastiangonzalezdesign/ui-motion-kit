import type { Preview } from '@storybook/react-vite';
import '../src/styles/main.scss';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'Primitives', 'Navigation', '*'],
      },
    },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#111827',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '768px' },
        },
        wide: {
          name: 'Wide',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
