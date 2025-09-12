import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button, SearchInput } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import type { SearchableItem } from '../../../components/primitives';
import {
  // Category icons
  CubeIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  PlayIcon,
  SparklesIcon,
  // Philosophy icons
  SwatchIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  // Toggle icon
  Bars3Icon,
} from '@heroicons/react/24/outline';
import './design-tokens.scss';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('experience-system');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Initialize category from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const categories: ComponentCategory[] = useMemo(
    () => [
      {
        id: 'experience-system',
        name: 'Experience System',
        description: 'Context-aware, adaptive components that understand user intent',
        components: [
          {
            id: 'smart-button',
            name: 'Smart Button',
            description: 'Intent-driven buttons that adapt to user context and behavior',
            status: 'available',
            path: '/examples/buttons',
          },
          {
            id: 'confirmation-flow',
            name: 'Confirmation Flow',
            description: 'Intelligent confirmation dialogs that adapt to user expertise',
            status: 'available',
            path: '/examples/modals',
          },
          {
            id: 'adaptive-forms',
            name: 'Adaptive Forms',
            description: 'Forms that adapt validation and guidance based on user behavior',
            status: 'coming-soon',
            path: '/examples/adaptive-forms',
          },
        ],
      },
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
            path: '/examples/buttons',
          },
          {
            id: 'inputs',
            name: 'Inputs',
            description: 'Form inputs with validation states and animations',
            status: 'available',
            path: '/examples/inputs',
          },
          {
            id: 'toggles',
            name: 'Toggles',
            description: 'Switch toggles with smooth state transitions',
            status: 'available',
            path: '/examples/toggles',
          },
          {
            id: 'cards',
            name: 'Cards',
            description: 'Versatile cards with images, ratings, and badges',
            status: 'available',
            path: '/examples/cards',
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
            status: 'available',
            path: '/examples/tabs',
          },
          {
            id: 'navbar',
            name: 'Navbar',
            description: 'Responsive navigation with mobile menu',
            status: 'available',
            path: '/examples/navbar',
          },
          {
            id: 'sidebar',
            name: 'Sidebar',
            description: 'Collapsible sidebar navigation',
            status: 'pro',
            path: '/examples/sidebar',
          },
          {
            id: 'breadcrumbs',
            name: 'Breadcrumbs',
            description: 'Hierarchical navigation breadcrumbs',
            status: 'available',
            path: '/examples/breadcrumbs',
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
            path: '/examples/modals',
          },
          {
            id: 'toasts',
            name: 'Toast Notifications',
            description: 'Stackable toast notifications with auto-dismiss',
            status: 'available',
            path: '/examples/toast',
          },
          {
            id: 'alerts',
            name: 'Alerts',
            description: 'Contextual alerts and banners',
            status: 'coming-soon',
            path: '/examples/alerts',
          },
          {
            id: 'loaders',
            name: 'Loading States',
            description: 'Spinners, skeleton screens, and progress indicators',
            status: 'available',
            path: '/examples/buttons',
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
            status: 'available',
            path: '/examples/drawer',
          },
          {
            id: 'command-palette',
            name: 'Command Palette',
            description: 'Advanced search interface with keyboard shortcuts',
            status: 'available',
            path: '/examples/command-palette',
          },
          {
            id: 'micro-interactions',
            name: 'Micro-interactions',
            description: 'Delightful micro-animations and hover effects',
            status: 'pro',
            path: '/examples/micro-interactions',
          },
          {
            id: 'page-transitions',
            name: 'Page Transitions',
            description: 'Smooth page and route transition animations',
            status: 'pro',
            path: '/examples/page-transitions',
          },
        ],
      },
    ],
    []
  );

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  // Sidebar items with icons
  const sidebarItems = useMemo(
    () => [
      {
        id: 'experience-system',
        label: 'Experience System',
        description: 'Context-aware, adaptive components',
        icon: <SparklesIcon width="16" height="16" />,
        isPro: true,
        isNew: true,
        count: categories.find((cat) => cat.id === 'experience-system')?.components.length,
      },
      {
        id: 'ui-basics',
        label: 'UI Basics',
        description: 'Essential interactive elements',
        icon: <CubeIcon width="16" height="16" />,
        count: categories.find((cat) => cat.id === 'ui-basics')?.components.length,
      },
      {
        id: 'navigation',
        label: 'Navigation',
        description: 'Components for user navigation',
        icon: <MapIcon width="16" height="16" />,
        count: categories.find((cat) => cat.id === 'navigation')?.components.length,
      },
      {
        id: 'feedback',
        label: 'Feedback',
        description: 'User feedback and status components',
        icon: <ChatBubbleBottomCenterTextIcon width="16" height="16" />,
        count: categories.find((cat) => cat.id === 'feedback')?.components.length,
      },
      {
        id: 'motion',
        label: 'Motion Components',
        description: 'Advanced animation and interaction components',
        icon: <PlayIcon width="16" height="16" />,
        isPro: true,
        count: categories.find((cat) => cat.id === 'motion')?.components.length,
      },
    ],
    [categories]
  );

  // Searchable data for the search component
  const searchableData = useMemo(() => {
    const allData: SearchableItem[] = [];

    // Add categories
    categories.forEach((cat) => {
      allData.push({
        label: cat.name,
        description: cat.description,
        type: 'category',
        category: cat.id,
      });
    });

    // Add components
    categories.forEach((cat) => {
      cat.components.forEach((component) => {
        allData.push({
          label: component.name,
          name: component.name,
          description: component.description,
          type: 'component',
          category: cat.id,
          status: component.status,
        });
      });
    });

    return allData;
  }, [categories]);

  const handleSearchResultClick = (item: SearchableItem) => {
    if (item.type === 'category') {
      handleCategoryChange(item.category as string);
    } else if (item.type === 'component') {
      handleCategoryChange(item.category as string);
    }
  };

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
    <div className="design-tokens-page">
      {/* Changed from components-page to design-tokens-page */}
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Components', path: '/docs/components' },
        ]}
        className="components-breadcrumb"
      />

      <Hero
        headline="Component Library"
        description="Explore our comprehensive collection of UI components, featuring the new Experience System that creates context-aware, adaptive interfaces."
        backgroundColor="brand-light"
        borderRadius="lg"
        size="md"
        showIllustrations={false}
      />

      <div className={`design-tokens-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Enhanced Sidebar with Search */}
        <aside className={`design-tokens-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h3>Categories</h3>
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <Bars3Icon width="16" height="16" />
            </button>
          </div>

          {!sidebarCollapsed && (
            <>
              <div className="sidebar-search">
                <SearchInput
                  placeholder="Search components..."
                  data={searchableData}
                  searchKeys={['label', 'description', 'name']}
                  onResultClick={handleSearchResultClick}
                  renderResult={(item: SearchableItem) => (
                    <div className="search-result-custom">
                      <span className="result-name">{item.label}</span>
                      <span className="result-type">{String(item.type)}</span>
                      {item.description && <span className="result-desc">{item.description}</span>}
                    </div>
                  )}
                />
              </div>

              <nav className="sidebar-nav" role="navigation">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryChange(item.id)}
                    className={`sidebar-nav-item ${selectedCategory === item.id ? 'active' : ''}`}
                    aria-current={selectedCategory === item.id ? 'page' : undefined}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {item.isPro && <span className="pro-badge">Pro</span>}
                  </button>
                ))}
              </nav>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main className="design-tokens-content">
          {selectedCategoryData && (
            <section className="token-section">
              <div className="section-header">
                <h2>{selectedCategoryData.name}</h2>
                <p>{selectedCategoryData.description}</p>
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
                          <>
                            <Button size="sm" variant="primary">
                              View Component
                            </Button>
                            <Button size="sm" variant="outline">
                              View Code
                            </Button>
                          </>
                        )}
                        {component.status === 'pro' && (
                          <div className="pro-actions">
                            <Button size="sm" variant="primary">
                              View in Pro
                            </Button>
                            <Button size="sm" variant="outline">
                              Preview
                            </Button>
                          </div>
                        )}
                        {component.status === 'coming-soon' && (
                          <Button size="sm" variant="ghost">
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
                  </Card>
                </div>
              )}
            </section>
          )}
        </main>
      </div>

      {/* Component Overview */}
      <section className="component-overview token-section">
        <div className="section-header">
          <h2>Component Philosophy</h2>
          <p>Our design system principles and component approach</p>
        </div>
        <div className="philosophy-grid">
          <Card>
            <h3>
              <SwatchIcon width="20" height="20" />
              Token-Based
            </h3>
            <p>Every component uses design tokens for consistent styling and easy customization.</p>
          </Card>
          <Card>
            <h3>
              <UserGroupIcon width="20" height="20" />
              Accessible
            </h3>
            <p>
              Built with accessibility in mind, including ARIA attributes and keyboard navigation.
            </p>
          </Card>
          <Card>
            <h3>
              <DevicePhoneMobileIcon width="20" height="20" />
              Responsive
            </h3>
            <p>Mobile-first design ensures components work beautifully on all screen sizes.</p>
          </Card>
          <Card>
            <h3>
              <PaintBrushIcon width="20" height="20" />
              Customizable
            </h3>
            <p>Easy to theme and customize using CSS custom properties and SCSS variables.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Components;
