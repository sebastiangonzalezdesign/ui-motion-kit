import { Link } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import {
  BugAntIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  TrashIcon,
  DocumentTextIcon,
  GiftIcon,
  ShieldCheckIcon,
  CubeIcon,
  CodeBracketIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';
import './changelog.scss';

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
      version: '1.0.0',
      date: '2025-09-14',
      type: 'major',
      description:
        'Initial release of Motion UI Kit Pro with comprehensive component library and design system.',
      changes: [
        {
          category: 'added',
          items: [
            'Complete component library (Button, Card, Modal, Tabs, Toast)',
            'Advanced motion system with spring animations',
            'Comprehensive design token system',
            'Hero component with animations and illustrations',
            'ThemeToggle with smooth transitions',
            'Dark mode support across all components',
            'TypeScript interfaces for all components',
            'Experience System with SmartButton',
            'Responsive design system with breakpoints',
            'SCSS architecture with design tokens',
            'Navigation components (Navbar, Breadcrumb, Drawer)',
            'Documentation site with interactive examples',
          ],
        },
        {
          category: 'changed',
          items: [
            'Migrated from Tailwind to custom design system',
            'Enhanced accessibility features',
            'Improved component APIs',
            'Updated color system with semantic tokens',
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
        return <SparklesIcon className="category-icon" />;
      case 'changed':
        return <ArrowPathIcon className="category-icon" />;
      case 'fixed':
        return <BugAntIcon className="category-icon" />;
      case 'removed':
        return <TrashIcon className="category-icon" />;
      default:
        return <DocumentTextIcon className="category-icon" />;
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
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Changelog', path: '/docs/changelog' },
        ]}
        className="changelog-breadcrumb"
      />

      <Hero
        headline="Changelog & Roadmap"
        description="Track our development journey and see what's coming next. Follow new features, improvements, and the evolution of Motion UI Kit Pro."
        backgroundColor="brand-medium"
        borderRadius="lg"
        size="md"
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
        <h2 className="section-heading">Upcoming Roadmap</h2>
        <div className="entries-list">
          <Card className="roadmap-item upcoming">
            <div className="entry-header">
              <div className="version-info">
                <h3>v1.1.0</h3>
                <span className="version-badge version-badge--minor">Minor</span>
                <span className="entry-date">Q4 2025</span>
              </div>
            </div>
            <p className="entry-description">
              Enhanced components and improved developer experience
            </p>
            <div className="entry-changes">
              <div className="change-group">
                <h4 className="change-category change-category--success">
                  <RocketLaunchIcon className="category-icon" />
                  Planned Features
                </h4>
                <ul className="change-list">
                  <li>Command Palette component improvements</li>
                  <li>Enhanced drawer animations and positioning</li>
                  <li>Advanced input components (Select, Autocomplete)</li>
                  <li>Form validation system</li>
                  <li>NPM package distribution</li>
                  <li>Storybook documentation</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="roadmap-item future">
            <div className="entry-header">
              <div className="version-info">
                <h3>v1.2.0</h3>
                <span className="version-badge version-badge--minor">Minor</span>
                <span className="entry-date">Q1 2026</span>
              </div>
            </div>
            <p className="entry-description">
              Advanced Experience System and AI-powered adaptations
            </p>
            <div className="entry-changes">
              <div className="change-group">
                <h4 className="change-category change-category--info">
                  <SparklesIcon className="category-icon" />
                  Future Vision
                </h4>
                <ul className="change-list">
                  <li>Enhanced Experience System with machine learning</li>
                  <li>Predictive UI adaptation</li>
                  <li>Advanced analytics and insights</li>
                  <li>A/B testing framework integration</li>
                  <li>Performance optimization tools</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <h2 className="section-heading">Release History</h2>
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
          <div className="benefit-header">
            <RocketLaunchIcon className="benefit-header-icon" />
            <h3>Pro Version Benefits</h3>
          </div>
          <p>
            Pro buyers get access to all updates and new components as they're released. Your
            purchase includes lifetime updates and priority support.
          </p>
          <div className="benefits-list">
            <div className="benefit">
              <GiftIcon className="benefit-icon" />
              <div>
                <strong>Lifetime Updates:</strong> Get all future versions at no extra cost
              </div>
            </div>
            <div className="benefit">
              <ShieldCheckIcon className="benefit-icon" />
              <div>
                <strong>Priority Support:</strong> Get help directly from the creator
              </div>
            </div>
            <div className="benefit">
              <CubeIcon className="benefit-icon" />
              <div>
                <strong>Advanced Components:</strong> Access to premium motion components
              </div>
            </div>
            <div className="benefit">
              <CodeBracketIcon className="benefit-icon" />
              <div>
                <strong>Source Code:</strong> Full access to component source and examples
              </div>
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
            <Link to="/docs/components">
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
            <div className="nav-card-header">
              <PaintBrushIcon className="nav-card-icon" />
              <h4>Design Tokens</h4>
            </div>
            <p>See the complete token system</p>
            <Link to="/docs/design-tokens">
              <Button size="sm" variant="outline">
                View Tokens
              </Button>
            </Link>
          </Card>
          <Card>
            <div className="nav-card-header">
              <DocumentTextIcon className="nav-card-icon" />
              <h4>Documentation</h4>
            </div>
            <p>Learn how to use and customize</p>
            <Link to="/docs/documentation">
              <Button size="sm" variant="outline">
                Read Docs
              </Button>
            </Link>
          </Card>
          <Card>
            <div className="nav-card-header">
              <CubeIcon className="nav-card-icon" />
              <h4>Components</h4>
            </div>
            <p>Browse all components</p>
            <Link to="/docs/components">
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
