import React from 'react';
import { CommandPalette, useCommandPalette } from '../../../components/navigation/CommandPalette';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import {
  MagnifyingGlassIcon,
  HomeIcon,
  Cog6ToothIcon,
  UserIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import './command-palette.scss';

const CommandPalettePage: React.FC = () => {
  const commandPalette = useCommandPalette();

  // Example commands
  const commands = [
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Navigate to the home page',
      category: 'Navigation',
      icon: <HomeIcon className="w-4 h-4" />,
      action: () => console.log('Navigate to home'),
    },
    {
      id: 'settings',
      title: 'Open Settings',
      description: 'Configure application settings',
      category: 'Navigation',
      icon: <Cog6ToothIcon className="w-4 h-4" />,
      action: () => console.log('Open settings'),
    },
    {
      id: 'profile',
      title: 'View Profile',
      description: 'See your user profile',
      category: 'User',
      icon: <UserIcon className="w-4 h-4" />,
      action: () => console.log('View profile'),
    },
    {
      id: 'docs',
      title: 'Open Documentation',
      description: 'Read the component documentation',
      category: 'Help',
      icon: <DocumentTextIcon className="w-4 h-4" />,
      action: () => console.log('Open docs'),
    },
    {
      id: 'create-button',
      title: 'Create New Button',
      description: 'Add a new button component',
      category: 'Components',
      keywords: ['button', 'component', 'new'],
      action: () => console.log('Create button'),
    },
    {
      id: 'create-card',
      title: 'Create New Card',
      description: 'Add a new card component',
      category: 'Components',
      keywords: ['card', 'component', 'new'],
      action: () => console.log('Create card'),
    },
    {
      id: 'search-components',
      title: 'Search Components',
      description: 'Find available components',
      category: 'Search',
      icon: <MagnifyingGlassIcon className="w-4 h-4" />,
      keywords: ['search', 'find', 'components'],
      action: () => console.log('Search components'),
    },
  ];

  return (
    <div className="command-palette-page">
      <Breadcrumb />
      <div className="page-header">
        <h1>Command Palette</h1>
        <p>
          A searchable command interface that helps users quickly find and execute actions
          throughout your application. Features fuzzy search, keyboard navigation, and global
          shortcuts.
        </p>
      </div>

      <div className="demo-section">
        <Card
          title="Interactive Demo"
          subtitle="Try opening the command palette with different methods"
        >
          <div className="demo-controls">
            <Button onClick={commandPalette.open}>Open Command Palette</Button>
            <div className="keyboard-shortcuts">
              <p>Keyboard shortcuts:</p>
              <ul>
                <li>
                  <kbd>⌘</kbd> + <kbd>K</kbd> - Open command palette
                </li>
                <li>
                  <kbd>⌘</kbd> + <kbd>P</kbd> - Open command palette (alternative)
                </li>
                <li>
                  <kbd>↑</kbd>/<kbd>↓</kbd> - Navigate commands
                </li>
                <li>
                  <kbd>Enter</kbd> - Execute selected command
                </li>
                <li>
                  <kbd>Escape</kbd> - Close palette
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="demo-section">
        <Card title="Features">
          <div className="features-grid">
            <div className="feature">
              <h3>🔍 Fuzzy Search</h3>
              <p>Find commands even with partial or misspelled queries</p>
            </div>
            <div className="feature">
              <h3>⌨️ Keyboard Navigation</h3>
              <p>Full keyboard support for efficient navigation</p>
            </div>
            <div className="feature">
              <h3>📂 Categorized Commands</h3>
              <p>Organize commands by category for better discovery</p>
            </div>
            <div className="feature">
              <h3>🎯 Global Shortcuts</h3>
              <p>Access from anywhere with customizable hotkeys</p>
            </div>
            <div className="feature">
              <h3>🏷️ Keywords & Tags</h3>
              <p>Add searchable keywords for better findability</p>
            </div>
            <div className="feature">
              <h3>♿ Accessible</h3>
              <p>Screen reader friendly with proper ARIA labels</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="demo-section">
        <Card title="Available Commands" subtitle="Preview of commands available in this demo">
          <div className="commands-preview">
            {commands.map((command) => (
              <div key={command.id} className="command-item">
                <div className="command-icon">
                  {command.icon || <div className="placeholder-icon" />}
                </div>
                <div className="command-content">
                  <div className="command-label">{command.title}</div>
                  <div className="command-description">{command.description}</div>
                  <div className="command-category">{command.category}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <CommandPalette
        isOpen={commandPalette.isOpen}
        onClose={commandPalette.close}
        commands={commands}
        placeholder="Search commands..."
      />
    </div>
  );
};

export default CommandPalettePage;
