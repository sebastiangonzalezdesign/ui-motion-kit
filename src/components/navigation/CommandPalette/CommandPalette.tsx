import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowRightIcon,
  CommandLineIcon,
  HomeIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import './CommandPalette.scss';

export interface Command {
  id: string;
  title: string;
  description?: string;
  category: string;
  icon?: React.ReactNode;
  action: () => void;
  keywords?: string[];
  shortcut?: string;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: Command[];
  placeholder?: string;
  maxResults?: number;
  className?: string;
}

const defaultCommands: Command[] = [
  {
    id: 'home',
    title: 'Go to Home',
    description: 'Navigate to the homepage',
    category: 'Navigation',
    icon: <HomeIcon className="command-icon" />,
    action: () => (window.location.href = '/'),
    keywords: ['home', 'main', 'start'],
    shortcut: '⌘ H',
  },
  {
    id: 'components',
    title: 'View Components',
    description: 'Browse the component library',
    category: 'Navigation',
    icon: <CodeBracketIcon className="command-icon" />,
    action: () => (window.location.href = '/docs/components'),
    keywords: ['components', 'library', 'ui'],
    shortcut: '⌘ C',
  },
  {
    id: 'tokens',
    title: 'Design Tokens',
    description: 'View design system tokens',
    category: 'Navigation',
    icon: <Cog6ToothIcon className="command-icon" />,
    action: () => (window.location.href = '/docs/design-tokens'),
    keywords: ['tokens', 'design', 'system', 'colors'],
    shortcut: '⌘ T',
  },
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Read the documentation',
    category: 'Navigation',
    icon: <DocumentTextIcon className="command-icon" />,
    action: () => (window.location.href = '/docs'),
    keywords: ['docs', 'documentation', 'guide', 'help'],
    shortcut: '⌘ D',
  },
];

// Fuzzy search function
function fuzzySearch(query: string, text: string): number {
  if (!query) return 1;

  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  // Exact match gets highest score
  if (textLower.includes(queryLower)) {
    return 0.9;
  }

  // Fuzzy matching
  let score = 0;
  let queryIndex = 0;

  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      score += 1;
      queryIndex++;
    }
  }

  return queryIndex === queryLower.length ? score / queryLower.length : 0;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  commands = defaultCommands,
  placeholder = 'Type a command or search...',
  maxResults = 10,
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredCommands, setFilteredCommands] = useState<Command[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter and sort commands based on query
  useEffect(() => {
    if (!query.trim()) {
      setFilteredCommands(commands.slice(0, maxResults));
    } else {
      const results = commands
        .map((command) => {
          const titleScore = fuzzySearch(query, command.title);
          const descScore = command.description ? fuzzySearch(query, command.description) : 0;
          const keywordScore = command.keywords
            ? Math.max(...command.keywords.map((k) => fuzzySearch(query, k)))
            : 0;

          const score = Math.max(titleScore, descScore, keywordScore);

          return { command, score };
        })
        .filter(({ score }) => score > 0.1)
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults)
        .map(({ command }) => command);

      setFilteredCommands(results);
    }
  }, [query, commands, maxResults]);

  // Reset state when opening/closing
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      // Focus input after a brief delay to ensure portal is mounted
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < filteredCommands.length - 1 ? prev + 1 : 0));
          break;

        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredCommands.length - 1));
          break;

        case 'Enter':
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
            onClose();
          }
          break;

        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    },
    [isOpen, filteredCommands, selectedIndex, onClose]
  );

  // Global keyboard shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Open command palette with Cmd+K or Cmd+P
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'p')) {
        e.preventDefault();
        if (!isOpen) {
          setQuery('');
          setSelectedIndex(0);
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen]);

  // Add keyboard event listener when open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        duration: 0.3,
        bounce: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Group commands by category
  const groupedCommands = filteredCommands.reduce(
    (groups, command, index) => {
      const category = command.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push({ command, index });
      return groups;
    },
    {} as Record<string, Array<{ command: Command; index: number }>>
  );

  return createPortal(
    <AnimatePresence>
      <motion.div
        className={`command-palette-backdrop ${className}`}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="command-palette"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with search input */}
          <div className="command-palette__header">
            <div className="command-palette__search">
              <MagnifyingGlassIcon className="search-icon" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="search-input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button onClick={onClose} className="close-button" aria-label="Close command palette">
                <XMarkIcon />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="command-palette__content">
            {filteredCommands.length > 0 ? (
              <div ref={listRef} className="command-list">
                {Object.entries(groupedCommands).map(([category, commands]) => (
                  <div key={category} className="command-group">
                    <div className="command-group__header">{category}</div>
                    {commands.map(({ command, index }) => (
                      <button
                        key={command.id}
                        className={`command-item ${
                          selectedIndex === index ? 'command-item--selected' : ''
                        }`}
                        onClick={() => {
                          command.action();
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="command-item__content">
                          <div className="command-item__main">
                            {command.icon && (
                              <div className="command-item__icon">{command.icon}</div>
                            )}
                            <div className="command-item__text">
                              <div className="command-item__title">{command.title}</div>
                              {command.description && (
                                <div className="command-item__description">
                                  {command.description}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="command-item__meta">
                            {command.shortcut && (
                              <div className="command-item__shortcut">{command.shortcut}</div>
                            )}
                            <ArrowRightIcon className="command-item__arrow" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="command-palette__empty">
                <CommandLineIcon className="empty-icon" />
                <div className="empty-text">
                  {query ? `No commands found for "${query}"` : 'No commands available'}
                </div>
                <div className="empty-hint">Try searching for something else</div>
              </div>
            )}
          </div>

          {/* Footer with hints */}
          <div className="command-palette__footer">
            <div className="keyboard-hints">
              <span className="hint">
                <kbd>↑↓</kbd> Navigate
              </span>
              <span className="hint">
                <kbd>↵</kbd> Select
              </span>
              <span className="hint">
                <kbd>ESC</kbd> Close
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default CommandPalette;
