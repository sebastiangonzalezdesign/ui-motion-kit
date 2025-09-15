import React from 'react';
import { CommandPalette, useCommandPalette } from '../../../components/navigation/CommandPalette';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import Hero from '../../components/Hero/Hero';
import {
  MagnifyingGlassIcon,
  HomeIcon,
  Cog6ToothIcon,
  UserIcon,
  DocumentTextIcon,
  BoltIcon,
  ShieldCheckIcon,
  TagIcon,
  FolderIcon,
  KeyIcon,
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
      icon: <HomeIcon />,
      action: () => console.log('Navigate to home'),
    },
    {
      id: 'settings',
      title: 'Open Settings',
      description: 'Configure application settings',
      category: 'Navigation',
      icon: <Cog6ToothIcon />,
      action: () => console.log('Open settings'),
    },
    {
      id: 'profile',
      title: 'View Profile',
      description: 'See your user profile',
      category: 'User',
      icon: <UserIcon />,
      action: () => console.log('View profile'),
    },
    {
      id: 'docs',
      title: 'Open Documentation',
      description: 'Read the component documentation',
      category: 'Help',
      icon: <DocumentTextIcon />,
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
      icon: <MagnifyingGlassIcon />,
      keywords: ['search', 'find', 'components'],
      action: () => console.log('Search components'),
    },
  ];

  return (
    <div className="command-palette-page">
      <Breadcrumb />
      <Hero
        headline="Command Palette"
        description="A searchable command interface that helps users quickly find and execute actions throughout your application. Features fuzzy search, keyboard navigation, and global shortcuts."
        size="md"
        backgroundColor="brand-medium"
        borderRadius="md"
        showIllustrations={false}
      />

      <div className="examples-container">
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
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <MagnifyingGlassIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Fuzzy Search</h4>
                <p className="benefit-description">
                  Find commands even with partial or misspelled queries
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <KeyIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Keyboard Navigation</h4>
                <p className="benefit-description">
                  Full keyboard support for efficient navigation
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FolderIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Categorized Commands</h4>
                <p className="benefit-description">
                  Organize commands by category for better discovery
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <BoltIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Global Shortcuts</h4>
                <p className="benefit-description">
                  Access from anywhere with customizable hotkeys
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <TagIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Keywords & Tags</h4>
                <p className="benefit-description">
                  Add searchable keywords for better findability
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <ShieldCheckIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Accessible</h4>
                <p className="benefit-description">
                  Screen reader friendly with proper ARIA labels
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

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
