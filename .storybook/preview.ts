import type { Preview, Decorator } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import '../src/styles/main.scss';

// Theme wrapper component
const ThemeWrapper: React.FC<{ theme: string; children: React.ReactNode }> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Remove any existing theme classes
    htmlElement.classList.remove('theme-light', 'theme-dark');

    // Add the current theme class
    htmlElement.classList.add(`theme-${theme}`);

    // Also set the data attribute for CSS custom properties
    htmlElement.setAttribute('data-theme', theme);
  }, [theme]);

  return React.createElement('div', { className: `theme-${theme}` }, children);
};

// Theme decorator to apply theme classes to the story container
const withTheme: Decorator = (Story, context) => {
  const { theme } = context.globals;

  return React.createElement(ThemeWrapper, { theme, children: React.createElement(Story) });
};

const preview: Preview = {
  decorators: [withTheme],
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
