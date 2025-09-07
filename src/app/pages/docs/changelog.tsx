import { Link } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button } from '../../../components/primitives';
import './Changelog.scss';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  description: string;
  changes: {
    category: 'added' | 'changed' | 'fixed' | 'removed';
    items: string[];
  }[];
}

const Changelog = () => {
  const entries: ChangelogEntry[] = [
    {
      version: '2.0.0',
      date: '2025-01-15',
      type: 'major',
      description:
        'Complete Pro version transformation with premium components and advanced motion system.',
      changes: [
        {
          category: 'added',
          items: [
            'Advanced Tabs component with lazy loading and animations',
            'Toast notification system with positioning and stacking',
            'Comprehensive design token system',
            'Motion tokens with spring presets',
            'Dark mode support across all components',
            'TypeScript interfaces for all components',
            'Responsive design system',
          ],
        },
        {
          category: 'changed',
          items: [
            'Redesigned navigation structure',
            'Improved component documentation',
            'Enhanced accessibility features',
            'Updated color system with semantic tokens',
          ],
        },
        {
          category: 'fixed',
          items: [
            'Animation performance optimizations',
            'Mobile responsive issues',
            'Theme switching persistence',
          ],
        },
      ],
    },
    {
      version: '1.5.0',
      date: '2024-12-20',
      type: 'minor',
      description: 'Enhanced components and improved developer experience.',
      changes: [
        {
          category: 'added',
          items: [
            'New Card component with ratings and badges',
            'Enhanced Button variants',
            'Improved Modal animations',
            'Code preview components',
          ],
        },
        {
          category: 'changed',
          items: [
            'Simplified component APIs',
            'Better TypeScript support',
            'Improved documentation',
          ],
        },
        {
          category: 'fixed',
          items: ['Button focus states', 'Modal backdrop clicks', 'Animation timing issues'],
        },
      ],
    },
    {
      version: '1.0.0',
      date: '2024-11-15',
      type: 'major',
      description: 'Initial release of Motion UI Kit with core components.',
      changes: [
        {
          category: 'added',
          items: [
            'Button component with hover animations',
            'Modal component with slide transitions',
            'Basic theme system',
            'Framer Motion integration',
            'Core SCSS architecture',
          ],
        },
      ],
    },
  ];

  const getVersionBadge = (type: ChangelogEntry['type']) => {
    switch (type) {
      case 'major':
        return <span className="version-badge version-badge--major">Major</span>;
      case 'minor':
        return <span className="version-badge version-badge--minor">Minor</span>;
      case 'patch':
        return <span className="version-badge version-badge--patch">Patch</span>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'added':
        return '✨';
      case 'changed':
        return '🔄';
      case 'fixed':
        return '🐛';
      case 'removed':
        return '🗑️';
      default:
        return '📝';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'added':
        return 'success';
      case 'changed':
        return 'info';
      case 'fixed':
        return 'warning';
      case 'removed':
        return 'error';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="changelog-page">
      <Hero
        headline="Changelog"
        description="Stay up to date with new features, improvements, and bug fixes. See what's new in each version."
        backgroundColor="brand-gradient"
        borderRadius="lg"
        size="lg"
        showIllustrations={false}
      />

      {/* Current Version Highlight */}
      <section className="current-version">
        <Card className="card--highlight current-version-card">
          <div className="current-version-header">
            <div className="version-info">
              <h2>v{entries[0].version}</h2>
              {getVersionBadge(entries[0].type)}
            </div>
            <div className="version-actions">
              <Button
                size="sm"
                onClick={() =>
                  window.open('https://sebastiangonzalez.design/motion-ui-kit', '_blank')
                }
              >
                Download Latest
              </Button>
            </div>
          </div>
          <p className="current-version-description">{entries[0].description}</p>
          <div className="release-stats">
            <div className="stat">
              <span className="stat-number">
                {entries[0].changes.reduce((total, change) => total + change.items.length, 0)}
              </span>
              <span className="stat-label">Changes</span>
            </div>
            <div className="stat">
              <span className="stat-number">{formatDate(entries[0].date)}</span>
              <span className="stat-label">Released</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Changelog Entries */}
      <section className="changelog-entries">
        <h2>Release History</h2>
        <div className="entries-list">
          {entries.map((entry, index) => (
            <Card key={entry.version} className={`changelog-entry ${index === 0 ? 'latest' : ''}`}>
              <div className="entry-header">
                <div className="version-info">
                  <h3>v{entry.version}</h3>
                  {getVersionBadge(entry.type)}
                  <span className="entry-date">{formatDate(entry.date)}</span>
                </div>
              </div>

              <p className="entry-description">{entry.description}</p>

              <div className="entry-changes">
                {entry.changes.map((changeGroup, changeIndex) => (
                  <div key={changeIndex} className="change-group">
                    <h4
                      className={`change-category change-category--${getCategoryColor(changeGroup.category)}`}
                    >
                      {getCategoryIcon(changeGroup.category)}{' '}
                      {changeGroup.category.charAt(0).toUpperCase() + changeGroup.category.slice(1)}
                    </h4>
                    <ul className="change-list">
                      {changeGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="change-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pro Version Benefits */}
      <section className="pro-benefits">
        <Card className="card--highlight">
          <h3>🚀 Pro Version Benefits</h3>
          <p>
            Pro buyers get access to all updates and new components as they're released. Your
            purchase includes lifetime updates and priority support.
          </p>
          <div className="benefits-list">
            <div className="benefit">
              <strong>Lifetime Updates:</strong> Get all future versions at no extra cost
            </div>
            <div className="benefit">
              <strong>Priority Support:</strong> Get help directly from the creator
            </div>
            <div className="benefit">
              <strong>Advanced Components:</strong> Access to premium motion components
            </div>
            <div className="benefit">
              <strong>Source Code:</strong> Full access to component source and examples
            </div>
          </div>
          <div className="pro-actions">
            <Button
              onClick={() =>
                window.open('https://sebastiangonzalez.design/motion-ui-kit', '_blank')
              }
            >
              Upgrade to Pro
            </Button>
            <Link to="/components">
              <Button variant="outline">View Components</Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* Version Navigation */}
      <section className="version-navigation">
        <h3>Looking for Something Specific?</h3>
        <div className="nav-grid">
          <Card>
            <h4>🎨 Design Tokens</h4>
            <p>See the complete token system</p>
            <Link to="/design-tokens">
              <Button size="sm" variant="outline">
                View Tokens
              </Button>
            </Link>
          </Card>
          <Card>
            <h4>📚 Documentation</h4>
            <p>Learn how to use and customize</p>
            <Link to="/docs">
              <Button size="sm" variant="outline">
                Read Docs
              </Button>
            </Link>
          </Card>
          <Card>
            <h4>🧩 Components</h4>
            <p>Browse all components</p>
            <Link to="/components">
              <Button size="sm" variant="outline">
                View Components
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Changelog;
