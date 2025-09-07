import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button } from '../../../components/primitives';
import './Components.scss';

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  status: 'available' | 'pro' | 'coming-soon';
  path: string;
}

interface ComponentCategory {
  id: string;
  name: string;
  description: string;
  components: ComponentItem[];
}

const Components = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('ui-basics');

  const categories: ComponentCategory[] = [
    {
      id: 'ui-basics',
      name: 'UI Basics',
      description: 'Essential interactive elements',
      components: [
        {
          id: 'buttons',
          name: 'Buttons',
          description: 'Interactive buttons with hover animations and click feedback',
          status: 'available',
          path: '/components/buttons',
        },
        {
          id: 'inputs',
          name: 'Inputs',
          description: 'Form inputs with validation states and animations',
          status: 'pro',
          path: '/components/inputs',
        },
        {
          id: 'toggles',
          name: 'Toggles',
          description: 'Switch toggles with smooth state transitions',
          status: 'available',
          path: '/components/toggles',
        },
        {
          id: 'cards',
          name: 'Cards',
          description: 'Versatile cards with images, ratings, and badges',
          status: 'available',
          path: '/components/cards',
        },
      ],
    },
    {
      id: 'navigation',
      name: 'Navigation',
      description: 'Components for user navigation',
      components: [
        {
          id: 'tabs',
          name: 'Tabs',
          description: 'Advanced tabbed interfaces with animations and lazy loading',
          status: 'pro',
          path: '/components/tabs',
        },
        {
          id: 'navbar',
          name: 'Navbar',
          description: 'Responsive navigation with mobile menu',
          status: 'available',
          path: '/components/navbar',
        },
        {
          id: 'sidebar',
          name: 'Sidebar',
          description: 'Collapsible sidebar navigation',
          status: 'pro',
          path: '/components/sidebar',
        },
        {
          id: 'breadcrumbs',
          name: 'Breadcrumbs',
          description: 'Hierarchical navigation breadcrumbs',
          status: 'coming-soon',
          path: '/components/breadcrumbs',
        },
      ],
    },
    {
      id: 'feedback',
      name: 'Feedback',
      description: 'User feedback and status components',
      components: [
        {
          id: 'modals',
          name: 'Modals',
          description: 'Slide-in modals with backdrop and animations',
          status: 'available',
          path: '/components/modals',
        },
        {
          id: 'toasts',
          name: 'Toast Notifications',
          description: 'Stackable toast notifications with auto-dismiss',
          status: 'pro',
          path: '/components/toasts',
        },
        {
          id: 'alerts',
          name: 'Alerts',
          description: 'Contextual alerts and banners',
          status: 'coming-soon',
          path: '/components/alerts',
        },
        {
          id: 'loaders',
          name: 'Loading States',
          description: 'Spinners, skeleton screens, and progress indicators',
          status: 'pro',
          path: '/components/loaders',
        },
      ],
    },
    {
      id: 'motion',
      name: 'Motion Components',
      description: 'Advanced animation and interaction components',
      components: [
        {
          id: 'drawer',
          name: 'Drawer',
          description: 'Multi-directional sliding drawers with gestures',
          status: 'pro',
          path: '/components/drawer',
        },
        {
          id: 'command-palette',
          name: 'Command Palette',
          description: 'Advanced search interface with keyboard shortcuts',
          status: 'pro',
          path: '/components/command-palette',
        },
        {
          id: 'micro-interactions',
          name: 'Micro-interactions',
          description: 'Delightful micro-animations and hover effects',
          status: 'pro',
          path: '/components/micro-interactions',
        },
        {
          id: 'page-transitions',
          name: 'Page Transitions',
          description: 'Smooth page and route transition animations',
          status: 'pro',
          path: '/components/page-transitions',
        },
      ],
    },
  ];

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  const getStatusBadge = (status: ComponentItem['status']) => {
    switch (status) {
      case 'available':
        return <span className="status-badge status-badge--available">Free</span>;
      case 'pro':
        return <span className="status-badge status-badge--pro">Pro</span>;
      case 'coming-soon':
        return <span className="status-badge status-badge--coming-soon">Coming Soon</span>;
      default:
        return null;
    }
  };

  const handleComponentClick = (component: ComponentItem) => {
    if (component.status === 'available' || component.status === 'pro') {
      navigate(component.path);
    }
  };

  return (
    <div className="components-page">
      <Hero
        headline="Component Library"
        description="Explore our comprehensive collection of UI components, organized by category and use case."
        backgroundColor="brand-light"
        borderRadius="lg"
        size="lg"
        showIllustrations={false}
      />

      <div className="components-layout">
        {/* Sidebar Navigation */}
        <aside className="components-sidebar">
          <div className="sidebar-header">
            <h3>Categories</h3>
          </div>
          <nav className="sidebar-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`sidebar-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="sidebar-item-content">
                  <span className="sidebar-item-name">{category.name}</span>
                  <span className="sidebar-item-description">{category.description}</span>
                  <span className="sidebar-item-count">
                    {category.components.length} components
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="components-main">
          {selectedCategoryData && (
            <>
              <div className="category-header">
                <h2>{selectedCategoryData.name}</h2>
                <p className="category-description">{selectedCategoryData.description}</p>
              </div>

              <div className="components-grid">
                {selectedCategoryData.components.map((component) => (
                  <div
                    key={component.id}
                    className={`component-card-wrapper ${component.status === 'coming-soon' ? 'disabled' : ''}`}
                    onClick={() => handleComponentClick(component)}
                  >
                    <Card className="component-card">
                      <div className="component-header">
                        <h3>{component.name}</h3>
                        {getStatusBadge(component.status)}
                      </div>
                      <p className="component-description">{component.description}</p>

                      <div className="component-actions">
                        {component.status === 'available' && (
                          <Button size="sm" variant="outline">
                            View Component
                          </Button>
                        )}
                        {component.status === 'pro' && (
                          <div className="pro-actions">
                            <Button size="sm" variant="primary">
                              View in Pro
                            </Button>
                            <Link
                              to="https://sebastiangonzalez.design/motion-ui-kit"
                              target="_blank"
                              className="upgrade-link"
                            >
                              Upgrade to unlock
                            </Link>
                          </div>
                        )}
                        {component.status === 'coming-soon' && (
                          <Button size="sm" variant="outline">
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Pro Value Proposition */}
              {selectedCategory === 'motion' && (
                <div className="pro-showcase">
                  <Card className="card--highlight">
                    <h3>🚀 Motion Components - Pro Differentiator</h3>
                    <p>
                      Advanced motion components set the Pro version apart with sophisticated
                      animations, gesture support, and delightful micro-interactions that elevate
                      user experience.
                    </p>
                    <div className="pro-features">
                      <div className="pro-feature">
                        <strong>Spring Physics:</strong> Natural, bouncy animations that feel
                        responsive
                      </div>
                      <div className="pro-feature">
                        <strong>Gesture Support:</strong> Touch and drag interactions for mobile
                      </div>
                      <div className="pro-feature">
                        <strong>Micro-interactions:</strong> Delightful details that users love
                      </div>
                      <div className="pro-feature">
                        <strong>Performance:</strong> Optimized animations that run at 60fps
                      </div>
                    </div>
                    <Button
                      onClick={() =>
                        window.open('https://sebastiangonzalez.design/motion-ui-kit', '_blank')
                      }
                    >
                      Upgrade to Pro
                    </Button>
                  </Card>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Component Overview */}
      <section className="component-overview">
        <h2>Component Philosophy</h2>
        <div className="philosophy-grid">
          <Card>
            <h3>🎯 Token-Based</h3>
            <p>Every component uses design tokens for consistent styling and easy customization.</p>
          </Card>
          <Card>
            <h3>♿ Accessible</h3>
            <p>
              Built with accessibility in mind, including ARIA attributes and keyboard navigation.
            </p>
          </Card>
          <Card>
            <h3>📱 Responsive</h3>
            <p>Mobile-first design ensures components work beautifully on all screen sizes.</p>
          </Card>
          <Card>
            <h3>🎨 Customizable</h3>
            <p>Easy to theme and customize using CSS custom properties and SCSS variables.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Components;
