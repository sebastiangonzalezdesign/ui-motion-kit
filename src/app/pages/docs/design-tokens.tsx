import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button, SearchInput, CopyButton, ColorSwatch } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import { CodePreview } from '../../components';
import type { SearchableItem } from '../../../components/primitives';
import {
  ViewfinderCircleIcon,
  BoltIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  EyeIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  // Sidebar navigation icons
  PaintBrushIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  PlayIcon,
  CheckCircleIcon,
  // Benefits section icons
  CogIcon,
  RectangleGroupIcon,
  UserIcon,
  // Spacing benefits icons
  CalculatorIcon,
} from '@heroicons/react/24/outline';
import './design-tokens.scss';

type CategoryId = 'colors' | 'typography' | 'spacing' | 'motion' | 'status';

const DesignTokens = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(
    (searchParams.get('category') as CategoryId) || 'colors'
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);

  // Refs for scrolling to sections
  const colorsRef = useRef<HTMLElement>(null);
  const typographyRef = useRef<HTMLElement>(null);
  const spacingRef = useRef<HTMLElement>(null);
  const motionRef = useRef<HTMLElement>(null);
  const statusRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(
    () => ({
      colors: colorsRef,
      typography: typographyRef,
      spacing: spacingRef,
      motion: motionRef,
      status: statusRef,
    }),
    [colorsRef, typographyRef, spacingRef, motionRef, statusRef]
  );

  // Scroll to section when category changes
  const scrollToSection = useCallback(
    (categoryId: CategoryId) => {
      const sectionRef = sectionRefs[categoryId];
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    },
    [sectionRefs]
  );

  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('category', selectedCategory);
    setSearchParams(params);

    // Only auto-scroll when explicitly requested (not on initial page load)
    if (shouldAutoScroll) {
      // Small delay to ensure DOM is updated before scrolling
      setTimeout(() => scrollToSection(selectedCategory), 100);
      setShouldAutoScroll(false); // Reset the flag
    }
  }, [selectedCategory, searchParams, setSearchParams, scrollToSection, shouldAutoScroll]);

  // Function to change category with auto-scroll
  const changeCategoryWithScroll = (categoryId: CategoryId) => {
    setShouldAutoScroll(true);
    setSelectedCategory(categoryId);
  };

  const categories = useMemo(
    () => [
      {
        id: 'colors' as const,
        label: 'Colors',
        description: 'Semantic & functional color tokens',
        icon: <PaintBrushIcon width="16" height="16" />,
      },
      {
        id: 'typography' as const,
        label: 'Typography',
        description: 'Font scales & responsive rules',
        icon: <DocumentTextIcon width="16" height="16" />,
      },
      {
        id: 'spacing' as const,
        label: 'Spacing',
        description: 'Consistent spacing system',
        icon: <ArrowsPointingOutIcon width="16" height="16" />,
      },
      {
        id: 'motion' as const,
        label: 'Motion Tokens',
        description: 'Durations, easings & spring presets',
        icon: <PlayIcon width="16" height="16" />,
        isPro: true,
      },
      {
        id: 'status' as const,
        label: 'Status Tokens',
        description: 'Success, error, warning states',
        icon: <CheckCircleIcon width="16" height="16" />,
        isPro: true,
      },
    ],
    []
  );

  // Enhanced color tokens with actual values and swatches
  const colorTokens = useMemo(
    () => [
      {
        category: 'Primary Brand',
        description: 'Core brand colors - consistent across all themes',
        tokens: [
          {
            name: '--color-primary',
            value: 'rgb(99, 102, 241)',
            hex: '#6366f1',
            description: 'Primary brand color',
          },
          {
            name: '--color-secondary',
            value: 'rgb(244, 63, 94)',
            hex: '#f43f5e',
            description: 'Secondary accent color',
          },
        ],
      },
      {
        category: 'Contextual Text',
        description: 'Text colors that adapt to theme',
        tokens: [
          {
            name: '--text-primary',
            value: 'var(--gray-900)',
            hex: '#111827',
            description: 'Primary text color',
          },
          {
            name: '--text-secondary',
            value: 'var(--gray-600)',
            hex: '#6b7280',
            description: 'Secondary text color',
          },
          {
            name: '--text-tertiary',
            value: 'var(--gray-400)',
            hex: '#9ca3af',
            description: 'Tertiary text color',
          },
        ],
      },
      {
        category: 'Contextual Surfaces',
        description: 'Background colors that adapt to theme',
        tokens: [
          {
            name: '--background-primary',
            value: 'var(--gray-50)',
            hex: '#f9fafb',
            description: 'Primary background',
          },
          {
            name: '--background-secondary',
            value: 'var(--gray-100)',
            hex: '#f3f4f6',
            description: 'Secondary background',
          },
          {
            name: '--background-tertiary',
            value: 'var(--gray-200)',
            hex: '#e5e7eb',
            description: 'Tertiary background',
          },
        ],
      },
      {
        category: 'Contextual Borders',
        description: 'Border colors that adapt to theme',
        tokens: [
          {
            name: '--border-primary',
            value: 'var(--gray-200)',
            hex: '#e5e7eb',
            description: 'Primary borders',
          },
          {
            name: '--border-secondary',
            value: 'var(--gray-300)',
            hex: '#d1d5db',
            description: 'Secondary borders',
          },
        ],
      },
    ],
    []
  );

  const statusTokens = useMemo(
    () => [
      {
        category: 'Success States',
        tokens: [
          {
            name: '--success-primary',
            value: 'rgb(16, 185, 129)',
            hex: '#10b981',
            description: 'Success color',
          },
          {
            name: '--success-background',
            value: 'rgba(16, 185, 129, 0.1)',
            hex: '#10b9811a',
            description: 'Success background',
          },
        ],
      },
      {
        category: 'Error States',
        tokens: [
          {
            name: '--error-primary',
            value: 'rgb(239, 68, 68)',
            hex: '#ef4444',
            description: 'Error color',
          },
          {
            name: '--error-background',
            value: 'rgba(239, 68, 68, 0.1)',
            hex: '#ef44441a',
            description: 'Error background',
          },
        ],
      },
      {
        category: 'Warning States',
        tokens: [
          {
            name: '--warning-primary',
            value: 'rgb(245, 158, 11)',
            hex: '#f59e0b',
            description: 'Warning color',
          },
          {
            name: '--warning-background',
            value: 'rgba(245, 158, 11, 0.1)',
            hex: '#f59e0b1a',
            description: 'Warning background',
          },
        ],
      },
      {
        category: 'Info States',
        tokens: [
          {
            name: '--info-primary',
            value: 'rgb(59, 130, 246)',
            hex: '#3b82f6',
            description: 'Info color',
          },
          {
            name: '--info-background',
            value: 'rgba(59, 130, 246, 0.1)',
            hex: '#3b82f61a',
            description: 'Info background',
          },
        ],
      },
    ],
    []
  );

  // Searchable data for the search component
  const searchableData = useMemo(() => {
    const allData: SearchableItem[] = [];

    // Add categories
    categories.forEach((cat) => {
      allData.push({
        label: cat.label,
        description: cat.description,
        type: 'category',
        category: cat.id,
      });
    });

    // Add color tokens
    colorTokens.forEach((group) => {
      group.tokens.forEach((token) => {
        allData.push({
          label: token.name,
          name: token.name,
          description: token.description,
          type: 'token',
          category: 'colors',
          value: token.value,
        });
      });
    });

    // Add status tokens
    statusTokens.forEach((group) => {
      group.tokens.forEach((token) => {
        allData.push({
          label: token.name,
          name: token.name,
          description: token.description,
          type: 'token',
          category: 'status',
          value: token.value,
        });
      });
    });

    return allData;
  }, [categories, colorTokens, statusTokens]);

  const handleSearchResultClick = (item: SearchableItem) => {
    if (item.type === 'category') {
      changeCategoryWithScroll(item.category as CategoryId);
    } else if (item.type === 'token') {
      changeCategoryWithScroll(item.category as CategoryId);
    }
  };

  // Enhanced code examples
  const colorExampleCode = `// Using the Button component with semantic tokens
import { Button } from '@motion-ui-kit/primitives';

<Button variant="primary" size="md">
  Primary Button
</Button>

/* Component styles automatically use theme tokens */
.button {
  background: var(--background-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
  
  /* Brand colors remain consistent across themes */
  &--primary {
    background: var(--accent-primary);
    color: white;
    
    &:hover {
      background: var(--accent-primary-hover);
    }
  }
}`;

  // Enhanced motion demo component using real components
  const MotionDemo = ({ type }: { type: string }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimate = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1200);
    };

    // Map motion types to appropriate component demos
    const getDemoContent = () => {
      switch (type) {
        case 'instant':
          return (
            <Button
              size="sm"
              variant="outline"
              onClick={handleAnimate}
              style={{
                transition: `all 50ms linear`,
                transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              Instant (50ms)
            </Button>
          );
        case 'fast':
          return (
            <Button
              size="sm"
              variant="primary"
              onClick={handleAnimate}
              style={{
                transition: `all 150ms ease-out`,
                transform: isAnimating ? 'translateX(20px)' : 'translateX(0)',
              }}
            >
              Fast (150ms)
            </Button>
          );
        case 'normal':
          return (
            <Button
              size="sm"
              variant={isAnimating ? 'primary' : 'outline'}
              onClick={handleAnimate}
              style={{
                transition: `all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              Normal (300ms)
            </Button>
          );
        case 'slow':
          return (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleAnimate}
              style={{
                transition: `all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                transform: isAnimating
                  ? 'translateY(-10px) rotate(5deg)'
                  : 'translateY(0) rotate(0)',
              }}
            >
              Slow (500ms)
            </Button>
          );
        case 'slower':
          return (
            <Button
              size="sm"
              variant={isAnimating ? 'primary' : 'ghost'}
              onClick={handleAnimate}
              style={{
                transition: `all 700ms ease-in-out`,
                transform: isAnimating ? 'scale(1.1) translateX(30px)' : 'scale(1) translateX(0)',
              }}
            >
              Slower (700ms)
            </Button>
          );
        case 'slowest':
          return (
            <Button
              size="sm"
              variant="outline"
              onClick={handleAnimate}
              style={{
                transition: `all 1000ms cubic-bezier(0.2, 0.0, 0.0, 1)`,
                transform: isAnimating ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0)',
              }}
            >
              Slowest (1s)
            </Button>
          );
        // Easing curve demos
        case 'ease-standard':
          return (
            <Button
              size="sm"
              variant="primary"
              onClick={handleAnimate}
              style={{
                transition: `all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                transform: isAnimating ? 'translateX(40px)' : 'translateX(0)',
              }}
            >
              Standard Ease
            </Button>
          );
        case 'ease-decelerate':
          return (
            <Button
              size="sm"
              variant={isAnimating ? 'primary' : 'outline'}
              onClick={handleAnimate}
              style={{
                transition: `all 500ms cubic-bezier(0.0, 0.0, 0.2, 1)`,
                opacity: isAnimating ? 1 : 0.7,
                transform: isAnimating ? 'scale(1.1) translateY(-5px)' : 'scale(1) translateY(0)',
              }}
            >
              Decelerate
            </Button>
          );
        case 'ease-accelerate':
          return (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleAnimate}
              style={{
                transition: `all 350ms cubic-bezier(0.4, 0.0, 1, 1)`,
                transform: isAnimating ? 'translateX(-20px) scale(0.95)' : 'translateX(0) scale(1)',
                opacity: isAnimating ? 0.5 : 1,
              }}
            >
              Accelerate
            </Button>
          );
        case 'ease-spring':
          return (
            <Button
              size="sm"
              variant="primary"
              onClick={handleAnimate}
              style={{
                transition: `all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                transform: isAnimating ? 'scale(1.15) rotate(10deg)' : 'scale(1) rotate(0)',
              }}
            >
              Spring
            </Button>
          );
        case 'ease-emphasized':
          return (
            <Button
              size="sm"
              variant={isAnimating ? 'primary' : 'ghost'}
              onClick={handleAnimate}
              style={{
                transition: `all 450ms cubic-bezier(0.2, 0.0, 0.0, 1)`,
                transform: isAnimating ? 'scale(1.2) translateY(-10px)' : 'scale(1) translateY(0)',
                filter: isAnimating
                  ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                  : 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
              }}
            >
              Emphasized
            </Button>
          );
        case 'ease-out':
          return (
            <Button
              size="sm"
              variant="outline"
              onClick={handleAnimate}
              style={{
                transition: `all 300ms ease-out`,
                transform: isAnimating ? 'translateX(25px) scale(1.05)' : 'translateX(0) scale(1)',
              }}
            >
              Ease Out
            </Button>
          );
        default:
          return (
            <Button size="sm" onClick={handleAnimate}>
              Click to test
            </Button>
          );
      }
    };

    return <div className="motion-demo">{getDemoContent()}</div>;
  };

  return (
    <div className="design-tokens-page">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Design Tokens', path: '/docs/design-tokens' },
        ]}
        className="design-tokens-breadcrumb"
      />

      <Hero
        headline="Design Tokens"
        description="Enterprise-grade design token system with centralized theme configuration. Raw palettes, semantic tokens, and automatic theme generation."
        backgroundColor="brand-light"
        size="md"
        showIllustrations={false}
      />

      <div className="design-tokens-layout">
        {/* Enhanced Sidebar with Search */}
        <aside className={`design-tokens-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <div className="sidebar-header">
            <h3>Design System</h3>
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {sidebarCollapsed ? (
                  // Menu icon when collapsed
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                ) : (
                  // X icon when expanded
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {!sidebarCollapsed && (
            <>
              <div className="sidebar-search">
                <SearchInput
                  placeholder="Search tokens..."
                  data={searchableData}
                  searchKeys={['label', 'description', 'name']}
                  onResultClick={handleSearchResultClick}
                  renderResult={(item) => (
                    <div className="search-result-custom">
                      <span className="result-name">{item.label}</span>
                      <span className="result-type">{String(item.type)}</span>
                      {item.description && <span className="result-desc">{item.description}</span>}
                    </div>
                  )}
                />
              </div>

              <nav className="sidebar-nav" role="navigation">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => changeCategoryWithScroll(category.id)}
                    className={`sidebar-nav-item ${selectedCategory === category.id ? 'active' : ''}`}
                    aria-current={selectedCategory === category.id ? 'page' : undefined}
                  >
                    <span className="nav-icon">{category.icon}</span>
                    <span className="nav-label">{category.label}</span>
                    {category.isPro && <span className="pro-badge">Pro</span>}
                  </button>
                ))}
              </nav>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main className="design-tokens-content">
          {selectedCategory === 'colors' && (
            <section ref={colorsRef} className="token-section">
              <div className="section-header">
                <h2>Color System</h2>
                <p>
                  Centralized theme configuration with fixed brand colors and contextual tokens that
                  adapt to each theme variant.
                </p>
              </div>

              {/* Architecture Cards */}
              <div className="architecture-cards">
                <Card className="architecture-card">
                  <h3>
                    <ViewfinderCircleIcon className="architecture-icon" /> Centralized Configuration
                  </h3>
                  <p>
                    All themes defined in single <code>$themes</code> map
                  </p>
                  <div className="code-snippet">
                    <CopyButton
                      text="$themes: (light: (...), dark: (...))"
                      size="sm"
                      className="code-copy"
                    />
                    <code>$themes: (light: (...), dark: (...))</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <BoltIcon className="architecture-icon" /> Automatic Generation
                  </h3>
                  <p>SCSS loops eliminate manual duplication</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="@each $theme-name, $config in $themes"
                      size="sm"
                      className="code-copy"
                    />
                    <code>@each $theme-name, $config in $themes</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <SwatchIcon className="architecture-icon" /> Fixed vs Contextual
                  </h3>
                  <p>Brand colors stay consistent, UI adapts</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="--color-primary: fixed | --background-primary: contextual"
                      size="sm"
                      className="code-copy"
                    />
                    <code>fixed | contextual</code>
                  </div>
                </Card>
              </div>

              {/* Color Token Groups */}
              {colorTokens.map((group) => (
                <div key={group.category} className="token-group">
                  <h3>{group.category}</h3>
                  <p className="group-description">{group.description}</p>

                  <div className="color-swatches-grid">
                    {group.tokens.map((token) => (
                      <ColorSwatch
                        key={token.name}
                        color={token.hex}
                        name={token.name}
                        value={token.value}
                        description={token.description}
                        size="md"
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="code-example">
                <h3>Usage Example</h3>
                <CodePreview
                  preview={
                    <div
                      style={{
                        background: 'var(--background-primary)',
                        padding: '24px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <Button variant="primary" size="md">
                        Primary Button
                      </Button>
                      <Button variant="outline" size="md">
                        Outline Button
                      </Button>
                      <Button variant="ghost" size="md">
                        Ghost Button
                      </Button>
                    </div>
                  }
                  code={colorExampleCode}
                />
              </div>
            </section>
          )}

          {selectedCategory === 'status' && (
            <section ref={statusRef} className="token-section">
              <div className="section-header">
                <h2>
                  Status Tokens <span className="pro-badge">Pro</span>
                </h2>
                <p>Semantic status colors for success, error, warning, and info states.</p>
              </div>

              {statusTokens.map((group) => (
                <div key={group.category} className="token-group">
                  <h3>{group.category}</h3>

                  <div className="color-swatches-grid">
                    {group.tokens.map((token) => (
                      <ColorSwatch
                        key={token.name}
                        color={token.hex}
                        name={token.name}
                        value={token.value}
                        description={token.description}
                        size="md"
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="pro-feature-cta">
                <Card className="cta-card" variant="icon" icon={CheckCircleIcon}>
                  <h3>Unlock Pro Features</h3>
                  <p>
                    Get access to complete status token system, advanced motion tokens, and
                    enterprise-ready design patterns.
                  </p>
                  <div className="cta-actions">
                    <Button variant="primary" size="md">
                      Upgrade to Pro →
                    </Button>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {selectedCategory === 'motion' && (
            <section ref={motionRef} className="token-section">
              <div className="section-header">
                <h2>
                  Motion System <span className="pro-badge">Pro</span>
                </h2>
                <p>
                  Professional animation system with semantic motion tokens, accessibility-first
                  approach, and performance-optimized easing curves. Built for modern UI
                  interactions.
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="architecture-cards">
                <Card className="architecture-card">
                  <h3>
                    <ViewfinderCircleIcon className="architecture-icon" /> Semantic Motion
                  </h3>
                  <p>Meaningful motion names for UI patterns</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="@include motion('interaction'); // Button hovers"
                      size="sm"
                      className="code-copy"
                    />
                    <code>@include motion('interaction'); // Button hovers</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <BoltIcon className="architecture-icon" /> Performance Optimized
                  </h3>
                  <p>Curated easing curves for smooth animations</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="cubic-bezier(0.34, 1.56, 0.64, 1) // spring"
                      size="sm"
                      className="code-copy"
                    />
                    <code>cubic-bezier(0.34, 1.56, 0.64, 1) // spring</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <EyeIcon className="architecture-icon" /> Accessibility First
                  </h3>
                  <p>Respects user motion preferences</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="@include reduced-motion { transition: none; }"
                      size="sm"
                      className="code-copy"
                    />
                    <code>@include reduced-motion {`{ transition: none; }`}</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <BuildingOffice2Icon className="architecture-icon" /> Centralized System
                  </h3>
                  <p>All motion tokens in `_tokens.scss` and `_motion.scss`</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="$motion-duration-normal: 300ms;"
                      size="sm"
                      className="code-copy"
                    />
                    <code>$motion-duration-normal: 300ms;</code>
                  </div>
                </Card>
              </div>

              {/* Duration Scale */}
              <div className="motion-system">
                <h3>Duration Scale</h3>
                <p>Consistent timing values for different types of interactions:</p>

                <div className="duration-examples">
                  {[
                    { name: 'instant', value: '0ms', use: 'Immediate feedback' },
                    { name: 'fast', value: '150ms', use: 'Quick interactions' },
                    { name: 'normal', value: '300ms', use: 'Standard transitions' },
                    { name: 'slow', value: '500ms', use: 'Complex animations' },
                    { name: 'slower', value: '700ms', use: 'Dramatic effects' },
                    { name: 'slowest', value: '1000ms', use: 'Page transitions' },
                  ].map((item) => (
                    <div key={item.name} className="duration-item">
                      <div className="duration-info">
                        <span className="duration-name">motion-duration('{item.name}')</span>
                        <span className="duration-value">{item.value}</span>
                        <span className="duration-use">{item.use} - Click to test</span>
                      </div>
                      <div className="duration-demo">
                        <MotionDemo type={item.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easing Functions */}
              <div className="easing-system">
                <h3>UX-Focused Easing Functions</h3>
                <p>Professional easing curves mapped to specific UI intents:</p>

                <div className="easing-examples">
                  {[
                    {
                      name: 'ease-standard',
                      curve: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      description: 'General UI transitions',
                    },
                    {
                      name: 'ease-decelerate',
                      curve: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
                      description: 'Entrances, reveals',
                    },
                    {
                      name: 'ease-accelerate',
                      curve: 'cubic-bezier(0.4, 0.0, 1, 1)',
                      description: 'Exits, dismissals',
                    },
                    {
                      name: 'ease-spring',
                      curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      description: 'Playful, bouncy interactions',
                    },
                    {
                      name: 'ease-emphasized',
                      curve: 'cubic-bezier(0.2, 0.0, 0.0, 1)',
                      description: 'Strong emphasis, attention',
                    },
                    { name: 'ease-out', curve: 'ease-out', description: 'Natural deceleration' },
                  ].map((item) => (
                    <div key={item.name} className="easing-item">
                      <div className="easing-info">
                        <span className="easing-name">motion-easing('{item.name}')</span>
                        <span className="easing-description">
                          {item.description} - Click to test
                        </span>
                        <code className="easing-curve">{item.curve}</code>
                      </div>
                      <div className="easing-demo">
                        <MotionDemo type={item.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semantic Motion Tokens */}
              <div className="semantic-motion">
                <h3>Semantic Motion Tokens</h3>
                <p>Motion patterns mapped to common UI interactions:</p>

                <div className="semantic-motion-examples">
                  <div className="semantic-motion-item">
                    <h4>Interaction Motion</h4>
                    <p>
                      <code>motion-semantic('interaction')</code> - Button hovers, clicks, focus
                      states - Hover to see effect
                    </p>
                    <div className="motion-demo-container">
                      <div
                        onMouseEnter={(e) => {
                          const button = e.currentTarget.querySelector('button');
                          if (button) button.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          const button = e.currentTarget.querySelector('button');
                          if (button) button.style.transform = 'scale(1)';
                        }}
                        style={{
                          display: 'inline-block',
                          transition: 'all 150ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        }}
                      >
                        <Button variant="primary" size="md">
                          Hover for micro-interaction
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="semantic-motion-item">
                    <h4>Navigation Motion</h4>
                    <p>
                      <code>motion-semantic('navigation')</code> - Page transitions, drawer opens,
                      route changes - Hover to see effect
                    </p>
                    <div className="motion-demo-container">
                      <div
                        onMouseEnter={(e: React.MouseEvent) => {
                          const card = e.currentTarget.querySelector('.card') as HTMLElement;
                          if (card) card.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e: React.MouseEvent) => {
                          const card = e.currentTarget.querySelector('.card') as HTMLElement;
                          if (card) card.style.transform = 'translateX(0)';
                        }}
                        style={{
                          transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                      >
                        <Card variant="default" className="navigation-motion-demo">
                          📄 Navigation panel - Hover to slide
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="semantic-motion-item">
                    <h4>Feedback Motion</h4>
                    <p>
                      <code>motion-semantic('feedback')</code> - Modals, toasts, alerts,
                      confirmations - Click to see effect
                    </p>
                    <div className="motion-demo-container">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          // Create toast-like feedback animation
                          const button = document.activeElement as HTMLButtonElement;
                          const originalText = button.textContent;
                          const originalStyle = {
                            background: button.style.background,
                            color: button.style.color,
                            borderColor: button.style.borderColor,
                          };

                          button.style.background = 'var(--feedback-success)';
                          button.style.color = 'white';
                          button.style.borderColor = 'var(--feedback-success)';
                          button.textContent = '✓ Success!';

                          setTimeout(() => {
                            button.style.background = originalStyle.background;
                            button.style.color = originalStyle.color;
                            button.style.borderColor = originalStyle.borderColor;
                            button.textContent = originalText;
                          }, 2000);
                        }}
                        style={{
                          transition: 'all 300ms ease-out',
                        }}
                      >
                        Click for feedback
                      </Button>
                    </div>
                  </div>

                  <div className="semantic-motion-item">
                    <h4>Content Motion</h4>
                    <p>
                      <code>motion-semantic('content')</code> - Accordions, content reveals,
                      progressive disclosure - Hover to see effect
                    </p>
                    <div className="motion-demo-container">
                      <div
                        onMouseEnter={(e: React.MouseEvent) => {
                          const card = e.currentTarget.querySelector('.card') as HTMLElement;
                          if (card) {
                            card.style.borderColor = 'var(--accent-primary)';
                            card.style.transform = 'scale(1.02)';
                            card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                          }
                        }}
                        onMouseLeave={(e: React.MouseEvent) => {
                          const card = e.currentTarget.querySelector('.card') as HTMLElement;
                          if (card) {
                            card.style.borderColor = 'var(--border-primary)';
                            card.style.transform = 'scale(1)';
                            card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                          }
                        }}
                        style={{
                          transition: 'all 250ms ease-in-out',
                        }}
                      >
                        <Card variant="default" className="content-motion-demo">
                          📝 Content card - Hover to reveal
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="implementation-guide">
                <h3>Implementation Guide</h3>

                <div className="file-structure">
                  <div className="file-item">
                    <h4>📄 _tokens.scss</h4>
                    <p>Base motion tokens with consistent timing:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// Motion duration tokens
$motion-duration-fast: 150ms;
$motion-duration-normal: 300ms;
$motion-duration-slow: 500ms;

// Motion easing tokens
$motion-easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
$motion-easing-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// Motion duration tokens
$motion-duration-fast: 150ms;
$motion-duration-normal: 300ms;
$motion-duration-slow: 500ms;

// Motion easing tokens
$motion-easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
$motion-easing-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="file-item">
                    <h4>📄 _motion.scss</h4>
                    <p>Semantic motion system with utility functions:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// Semantic motion mapping
$motion-semantic: (
  'interaction': map.get($motion-presets, 'scale'),
  'navigation': map.get($motion-presets, 'slide'),
  'feedback': map.get($motion-presets, 'fade'),
  'content': map.get($motion-presets, 'gentle'),
);

@mixin motion($preset) {
  // Apply semantic motion
}

@mixin reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// Semantic motion mapping
$motion-semantic: (
  'interaction': map.get($motion-presets, 'scale'),
  'navigation': map.get($motion-presets, 'slide'),
  'feedback': map.get($motion-presets, 'fade'),
  'content': map.get($motion-presets, 'gentle'),
);

@mixin motion($preset) {
  // Apply semantic motion
}

@mixin reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="code-example">
                <h3>Usage Examples</h3>
                <CodePreview
                  preview={
                    <div
                      style={{
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                          Interaction:
                        </span>
                        <div
                          onMouseEnter={(e: React.MouseEvent) => {
                            const button = e.currentTarget.querySelector('button');
                            if (button) button.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e: React.MouseEvent) => {
                            const button = e.currentTarget.querySelector('button');
                            if (button) button.style.transform = 'scale(1)';
                          }}
                          style={{ transition: 'transform 150ms ease-out' }}
                        >
                          <Button variant="primary" size="sm">
                            Hover me
                          </Button>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                          Navigation:
                        </span>
                        <div
                          onMouseEnter={(e: React.MouseEvent) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateX(8px)';
                          }}
                          onMouseLeave={(e: React.MouseEvent) => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                          }}
                          style={{
                            transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                            cursor: 'pointer',
                          }}
                        >
                          <Card variant="default">
                            <div style={{ padding: '8px 16px', fontSize: '14px' }}>Panel slide</div>
                          </Card>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                          Feedback:
                        </span>
                        <div
                          onClick={(e: React.MouseEvent) => {
                            const button = e.currentTarget.querySelector(
                              'button'
                            ) as HTMLButtonElement;
                            if (button) {
                              const originalText = button.textContent;
                              button.style.background = 'var(--feedback-success)';
                              button.style.color = 'white';
                              button.style.borderColor = 'var(--feedback-success)';
                              button.textContent = '✓ Done';
                              setTimeout(() => {
                                button.style.background = '';
                                button.style.color = '';
                                button.style.borderColor = '';
                                button.textContent = originalText || 'Click me';
                              }, 1500);
                            }
                          }}
                          style={{ transition: 'all 300ms ease-out' }}
                        >
                          <Button variant="outline" size="sm">
                            Click me
                          </Button>
                        </div>
                      </div>
                    </div>
                  }
                  code={`/* SCSS with semantic motion */
.button {
  @include motion('interaction');
  
  &:hover {
    transform: scale(1.05);
  }
}

.modal {
  @include motion('feedback');
  
  &.entering {
    opacity: 1;
    transform: scale(1);
  }
}

.drawer {
  @include motion('navigation');
  
  &.open {
    transform: translateX(0);
  }
}

/* Accessibility-aware motion */
.animated-element {
  @include motion-safe {
    @include motion('content');
  }
  
  @include reduced-motion {
    transition: none;
  }
}`}
                />
              </div>

              {/* Pro Features CTA */}
              <div className="pro-feature-cta">
                <Card className="cta-card" variant="icon" icon={SparklesIcon}>
                  <h3>Professional Motion System</h3>
                  <p>
                    Unlock advanced motion tokens, Framer Motion presets, gesture-based
                    interactions, and performance-optimized animation patterns.
                  </p>
                  <div className="cta-actions">
                    <Button variant="primary" size="md">
                      Get Motion System →
                    </Button>
                  </div>
                </Card>
              </div>
            </section>
          )}

          {selectedCategory === 'typography' && (
            <section ref={typographyRef} className="token-section">
              <div className="section-header">
                <h2>Typography System</h2>
                <p>
                  Enterprise-grade typography architecture with centralized tokens, semantic utility
                  classes, and automatic theme-aware generation. Built on `_typography.scss` and
                  `_tokens.scss` for maximum scalability.
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="architecture-cards">
                <Card className="architecture-card">
                  <h3>
                    <BuildingOffice2Icon className="architecture-icon" /> Centralized Token System
                  </h3>
                  <p>All typography tokens defined in `_tokens.scss`</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="$font-family-ui, $font-size-*, $font-weight-*"
                      size="sm"
                      className="code-copy"
                    />
                    <code>$font-family-ui, $font-size-*, $font-weight-*</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <BoltIcon className="architecture-icon" /> Auto-Generated Utilities
                  </h3>
                  <p>SCSS loops create `.text-*` classes automatically</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="@each $style, $properties in $typography-scale"
                      size="sm"
                      className="code-copy"
                    />
                    <code>@each $style, $properties in $typography-scale</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <SwatchIcon className="architecture-icon" /> Theme-Aware Colors
                  </h3>
                  <p>Typography colors automatically adapt to theme</p>
                  <div className="code-snippet">
                    <CopyButton text="color: var(--text-primary)" size="sm" className="code-copy" />
                    <code>color: var(--text-primary)</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <DevicePhoneMobileIcon className="architecture-icon" /> Responsive by Default
                  </h3>
                  <p>All styles use `clamp()` for fluid responsiveness</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="clamp(1.5rem, 2.5vw, 1.875rem)"
                      size="sm"
                      className="code-copy"
                    />
                    <code>clamp(1.5rem, 2.5vw, 1.875rem)</code>
                  </div>
                </Card>
              </div>

              {/* Typography Scale System */}
              <div className="typography-architecture">
                <h3>Typography Scale Architecture</h3>
                <p>Our typography system uses a three-tier approach with consistent naming:</p>

                <div className="tier-explanation">
                  <div className="tier-item">
                    <h4>Display Styles</h4>
                    <p>For hero sections and large marketing copy</p>
                    <code>.text-display-xxl, .text-display-xl, .text-display-lg</code>
                  </div>
                  <div className="tier-item">
                    <h4>Heading Styles</h4>
                    <p>For page and section headings</p>
                    <code>
                      .text-heading-xl, .text-heading-lg, .text-heading-md, .text-heading-sm
                    </code>
                  </div>
                  <div className="tier-item">
                    <h4>Body Styles</h4>
                    <p>For content and interface text</p>
                    <code>.text-body-xl, .text-body-lg, .text-body-md, .text-body-sm</code>
                  </div>
                </div>
              </div>

              {/* Live Typography Scale */}
              <div className="typography-scale">
                <h3>Live Typography Scale</h3>
                <div className="scale-examples">
                  {/* Display Styles */}
                  <div className="scale-category">
                    <h4>Display Styles</h4>
                    <div className="scale-item scale-item--display">
                      <span className="scale-label">.text-display-xxl</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(3.5rem, 5vw, 4.5rem)',
                          fontWeight: '800',
                          lineHeight: '1.1',
                        }}
                      >
                        Hero Display Text
                      </span>
                    </div>
                    <div className="scale-item scale-item--display">
                      <span className="scale-label">.text-display-xl</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                          fontWeight: '700',
                          lineHeight: '1.2',
                        }}
                      >
                        Large Display Text
                      </span>
                    </div>
                    <div className="scale-item scale-item--display">
                      <span className="scale-label">.text-display-lg</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(2rem, 3vw, 3rem)',
                          fontWeight: '700',
                          lineHeight: '1.2',
                        }}
                      >
                        Medium Display Text
                      </span>
                    </div>
                  </div>

                  {/* Heading Styles */}
                  <div className="scale-category">
                    <h4>Heading Styles</h4>
                    <div className="scale-item">
                      <span className="scale-label">.text-heading-xl</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
                          fontWeight: '600',
                          lineHeight: '1.3',
                        }}
                      >
                        Extra Large Heading
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-heading-lg</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
                          fontWeight: '600',
                          lineHeight: '1.4',
                        }}
                      >
                        Large Heading
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-heading-md</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                          fontWeight: '600',
                          lineHeight: '1.4',
                        }}
                      >
                        Medium Heading
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-heading-sm</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                          fontWeight: '600',
                          lineHeight: '1.5',
                        }}
                      >
                        Small Heading
                      </span>
                    </div>
                  </div>

                  {/* Body Styles */}
                  <div className="scale-category">
                    <h4>Body Styles</h4>
                    <div className="scale-item">
                      <span className="scale-label">.text-body-xl</span>
                      <span
                        className="scale-text"
                        style={{ fontSize: 'var(--font-size-xl)', lineHeight: '1.6' }}
                      >
                        Extra large body text for prominent content
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-body-lg</span>
                      <span
                        className="scale-text"
                        style={{ fontSize: 'var(--font-size-lg)', lineHeight: '1.6' }}
                      >
                        Large body text for lead paragraphs
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-body-md</span>
                      <span
                        className="scale-text"
                        style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.5' }}
                      >
                        Standard body text for regular content
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-body-sm</span>
                      <span
                        className="scale-text"
                        style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.5' }}
                      >
                        Small body text for secondary information
                      </span>
                    </div>
                  </div>

                  {/* Specialized Styles */}
                  <div className="scale-category">
                    <h4>Specialized Styles</h4>
                    <div className="scale-item">
                      <span className="scale-label">.text-caption</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          lineHeight: '1.4',
                          fontWeight: '500',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Caption text with secondary color
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-overline</span>
                      <span
                        className="scale-text"
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          lineHeight: '1.2',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}
                      >
                        OVERLINE TEXT
                      </span>
                    </div>
                    <div className="scale-item">
                      <span className="scale-label">.text-code</span>
                      <span
                        className="scale-text"
                        style={{
                          fontFamily: 'var(--font-family-code)',
                          fontSize: 'var(--font-size-sm)',
                          lineHeight: '1.4',
                          fontWeight: '500',
                        }}
                      >
                        Code text with monospace font
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="implementation-guide">
                <h3>How It Works: File Architecture</h3>

                <div className="file-structure">
                  <div className="file-item">
                    <h4>📄 _tokens.scss</h4>
                    <p>Central repository for all typography tokens:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// Font families
$font-family-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-code: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;

// Font sizes (0.75rem to 6rem scale)
$font-size-xs: 0.75rem;  // 12px
$font-size-sm: 0.875rem; // 14px
$font-size-base: 1rem;   // 16px (base)
// ... etc

// Font weights (100-900)
$font-weight-thin: 100;
$font-weight-light: 300;
$font-weight-normal: 400;
// ... etc`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// Font families
$font-family-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-code: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;

// Font sizes (0.75rem to 6rem scale)
$font-size-xs: 0.75rem;  // 12px
$font-size-sm: 0.875rem; // 14px
$font-size-base: 1rem;   // 16px (base)
// ... etc

// Font weights (100-900)
$font-weight-thin: 100;
$font-weight-light: 300;
$font-weight-normal: 400;
// ... etc`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="file-item">
                    <h4>📄 _typography.scss</h4>
                    <p>Semantic typography system with auto-generated utilities:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// Typography scale with consistent naming
$typography-scale: (
  'display-xxl': (
    'font-size': clamp(3.5rem, 5vw, 4.5rem),
    'line-height': 1.1,
    'font-weight': 800,
    'letter-spacing': -0.02em,
    'font-family': $font-stack-display,
  ),
  'heading-lg': (
    'font-size': clamp(1.5rem, 2.5vw, 1.875rem),
    'line-height': 1.4,
    'font-weight': 600,
    'font-family': $font-stack-ui,
  ),
  // ... etc
);

// Auto-generate utility classes
@each $style, $properties in $typography-scale {
  .text-#{$style} {
    @include typography($style);
  }
}`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// Typography scale with consistent naming
$typography-scale: (
  'display-xxl': (
    'font-size': clamp(3.5rem, 5vw, 4.5rem),
    'line-height': 1.1,
    'font-weight': 800,
    'letter-spacing': -0.02em,
    'font-family': $font-stack-display,
  ),
  'heading-lg': (
    'font-size': clamp(1.5rem, 2.5vw, 1.875rem),
    'line-height': 1.4,
    'font-weight': 600,
    'font-family': $font-stack-ui,
  ),
  // ... etc
);

// Auto-generate utility classes
@each $style, $properties in $typography-scale {
  .text-#{$style} {
    @include typography($style);
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="code-example">
                <h3>Usage Examples</h3>
                <CodePreview
                  preview={
                    <div style={{ padding: '16px' }}>
                      <h1
                        style={{
                          fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
                          fontWeight: '600',
                          lineHeight: '1.3',
                          margin: '0 0 16px 0',
                          color: 'var(--text-primary)',
                        }}
                      >
                        Using Typography Classes
                      </h1>
                      <p
                        style={{
                          fontSize: 'var(--font-size-lg)',
                          lineHeight: '1.6',
                          margin: '0 0 12px 0',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        This paragraph uses .text-body-lg for lead content
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--font-size-base)',
                          lineHeight: '1.5',
                          margin: '0 0 12px 0',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        This is regular body text using .text-body-md
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          lineHeight: '1.4',
                          fontWeight: '500',
                          color: 'var(--text-secondary)',
                          margin: '0',
                        }}
                      >
                        Caption text with .text-caption styling
                      </p>
                    </div>
                  }
                  code={`<!-- HTML with utility classes -->
<h1 class="text-heading-xl">Page Title</h1>
<p class="text-body-lg">Lead paragraph with larger text</p>
<p class="text-body-md">Regular paragraph text</p>
<span class="text-caption">Caption or helper text</span>

/* SCSS with mixins */
.hero-title {
  @include typography('display-xl');
  color: var(--text-primary); // Theme-aware
}

.article-content {
  @include typography('body-md');
  color: var(--text-secondary);
  
  h2 {
    @include typography('heading-lg');
    color: var(--text-primary);
  }
}`}
                />
              </div>

              {/* Benefits Section */}
              <div className="benefits-section">
                <h3>System Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <h4>
                      <CogIcon className="benefit-icon" /> Maintainable
                    </h4>
                    <p>Change base tokens, all styles update automatically</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <RectangleGroupIcon className="benefit-icon" /> Consistent
                    </h4>
                    <p>Mathematical scale ensures visual harmony</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <UserIcon className="benefit-icon" /> Accessible
                    </h4>
                    <p>Optimized line heights and contrast ratios</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <DevicePhoneMobileIcon className="benefit-icon" /> Responsive
                    </h4>
                    <p>Fluid scaling with clamp() functions</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <SwatchIcon className="benefit-icon" /> Theme-Aware
                    </h4>
                    <p>Colors automatically adapt to theme context</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <BoltIcon className="benefit-icon" /> Performance
                    </h4>
                    <p>CSS generated at build time, zero runtime overhead</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {selectedCategory === 'spacing' && (
            <section ref={spacingRef} className="token-section">
              <div className="section-header">
                <h2>Spacing System</h2>
                <p>
                  Mathematical spacing system built on an 8px grid with semantic tokens and
                  responsive scaling. Consistent spatial relationships across all components and
                  layouts.
                </p>
              </div>

              {/* Architecture Overview */}
              <div className="architecture-cards">
                <Card className="architecture-card">
                  <h3>
                    <Squares2X2Icon className="architecture-icon" /> 8px Grid System
                  </h3>
                  <p>Mathematical spacing scale based on 8px increments</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="space('4') // 16px | space('8') // 32px"
                      size="sm"
                      className="code-copy"
                    />
                    <code>space('4') // 16px | space('8') // 32px</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <ViewfinderCircleIcon className="architecture-icon" /> Semantic Tokens
                  </h3>
                  <p>Meaningful spacing names for consistent usage</p>
                  <div className="code-snippet">
                    <CopyButton
                      text="space-semantic('section'), space-semantic('component')"
                      size="sm"
                      className="code-copy"
                    />
                    <code>space-semantic('section'), space-semantic('component')</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <DevicePhoneMobileIcon className="architecture-icon" /> Responsive Scaling
                  </h3>
                  <p>Fluid spacing with clamp() functions</p>
                  <div className="code-snippet">
                    <CopyButton text="clamp(1.5rem, 4vw, 2.5rem)" size="sm" className="code-copy" />
                    <code>clamp(1.5rem, 4vw, 2.5rem)</code>
                  </div>
                </Card>

                <Card className="architecture-card">
                  <h3>
                    <WrenchScrewdriverIcon className="architecture-icon" /> Centralized System
                  </h3>
                  <p>All spacing tokens defined in `_tokens.scss`</p>
                  <div className="code-snippet">
                    <CopyButton text="$space-4: 1rem; // 16px" size="sm" className="code-copy" />
                    <code>$space-4: 1rem; // 16px</code>
                  </div>
                </Card>
              </div>

              {/* Spacing Scale Visualization */}
              <div className="spacing-system">
                <h3>Spacing Scale Visualization</h3>
                <p>
                  Visual representation of the 8px grid system with consistent mathematical
                  progression:
                </p>

                <div className="spacing-scale-grid">
                  {[
                    { token: '0', value: '0px', rem: '0' },
                    { token: '1', value: '4px', rem: '0.25rem' },
                    { token: '2', value: '8px', rem: '0.5rem' },
                    { token: '3', value: '12px', rem: '0.75rem' },
                    { token: '4', value: '16px', rem: '1rem' },
                    { token: '6', value: '24px', rem: '1.5rem' },
                    { token: '8', value: '32px', rem: '2rem' },
                    { token: '10', value: '40px', rem: '2.5rem' },
                    { token: '12', value: '48px', rem: '3rem' },
                    { token: '16', value: '64px', rem: '4rem' },
                    { token: '20', value: '80px', rem: '5rem' },
                    { token: '24', value: '96px', rem: '6rem' },
                  ].map((item) => (
                    <div key={item.token} className="spacing-item">
                      <div className="spacing-info">
                        <span className="token-name">space('{item.token}')</span>
                        <span className="token-value">{item.value}</span>
                        <span className="token-rem">{item.rem}</span>
                      </div>
                      <div
                        className="spacing-visual"
                        style={{
                          width: `${parseInt(item.value)}px`,
                          height: '20px',
                          maxWidth: '200px',
                          backgroundColor: 'var(--accent-primary)',
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Semantic Spacing */}
              <div className="semantic-spacing">
                <h3>Semantic Spacing Tokens</h3>
                <p>Meaningful spacing names that adapt to context and viewport:</p>

                <div className="semantic-examples">
                  <div className="semantic-example">
                    <h4>Section Spacing</h4>
                    <p>
                      <code>space-semantic('section')</code> - Large spacing between major sections
                    </p>
                    <div
                      className="spacing-demo"
                      style={{
                        padding: 'var(--space-20)',
                        backgroundColor: 'var(--background-secondary)',
                        border: '2px dashed var(--border-primary)',
                        borderRadius: '8px',
                        margin: '1rem 0',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--background-tertiary)',
                          padding: 'var(--space-4)',
                          borderRadius: '4px',
                        }}
                      >
                        Section content with large spacing
                      </div>
                    </div>
                  </div>

                  <div className="semantic-example">
                    <h4>Component Spacing</h4>
                    <p>
                      <code>space-semantic('component')</code> - Internal component spacing
                    </p>
                    <div
                      className="spacing-demo"
                      style={{
                        padding: 'var(--space-8)',
                        backgroundColor: 'var(--background-secondary)',
                        border: '2px dashed var(--border-primary)',
                        borderRadius: '8px',
                        margin: '1rem 0',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--background-tertiary)',
                          padding: 'var(--space-4)',
                          borderRadius: '4px',
                        }}
                      >
                        Component with medium spacing
                      </div>
                    </div>
                  </div>

                  <div className="semantic-example">
                    <h4>Element Spacing</h4>
                    <p>
                      <code>space-semantic('element')</code> - Spacing between related elements
                    </p>
                    <div
                      className="spacing-demo"
                      style={{
                        padding: 'var(--space-4)',
                        backgroundColor: 'var(--background-secondary)',
                        border: '2px dashed var(--border-primary)',
                        borderRadius: '8px',
                        margin: '1rem 0',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--background-tertiary)',
                          padding: 'var(--space-2)',
                          borderRadius: '4px',
                        }}
                      >
                        Element with standard spacing
                      </div>
                    </div>
                  </div>

                  <div className="semantic-example">
                    <h4>Inline Spacing</h4>
                    <p>
                      <code>space-semantic('inline')</code> - Small spacing for inline elements
                    </p>
                    <div
                      className="spacing-demo"
                      style={{
                        padding: 'var(--space-2)',
                        backgroundColor: 'var(--background-secondary)',
                        border: '2px dashed var(--border-primary)',
                        borderRadius: '8px',
                        margin: '1rem 0',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--background-tertiary)',
                          padding: 'var(--space-1)',
                          borderRadius: '4px',
                        }}
                      >
                        Inline with tight spacing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="implementation-guide">
                <h3>Implementation Guide</h3>

                <div className="file-structure">
                  <div className="file-item">
                    <h4>📄 _tokens.scss</h4>
                    <p>Centralized spacing tokens with consistent 8px grid:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// 8px grid spacing system
$space-0: 0;
$space-1: 0.25rem;  // 4px
$space-2: 0.5rem;   // 8px
$space-4: 1rem;     // 16px
$space-8: 2rem;     // 32px
$space-16: 4rem;    // 64px
// ... continues to $space-96`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// 8px grid spacing system
$space-0: 0;
$space-1: 0.25rem;  // 4px
$space-2: 0.5rem;   // 8px
$space-4: 1rem;     // 16px
$space-8: 2rem;     // 32px
$space-16: 4rem;    // 64px
// ... continues to $space-96`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="file-item">
                    <h4>📄 _spacing.scss</h4>
                    <p>Semantic spacing system with utility functions:</p>
                    <div className="code-snippet">
                      <CopyButton
                        text={`// Semantic spacing tokens
$spacing-semantic: (
  'section': clamp(2.5rem, 6vw, 4rem),
  'component': 2rem,
  'element': 1rem,
  'inline': 0.5rem,
);

@function space-semantic($key) {
  @return map.get($spacing-semantic, $key);
}`}
                        size="sm"
                        className="code-copy"
                      />
                      <pre>
                        <code>{`// Semantic spacing tokens
$spacing-semantic: (
  'section': clamp(2.5rem, 6vw, 4rem),
  'component': 2rem,
  'element': 1rem,
  'inline': 0.5rem,
);

@function space-semantic($key) {
  @return map.get($spacing-semantic, $key);
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Examples */}
              <div className="code-example">
                <h3>Usage Examples</h3>
                <CodePreview
                  preview={
                    <div
                      className="spacing-demo-container"
                      style={{
                        width: '100%',
                        padding: 'var(--space-4)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-6)',
                        backgroundColor: 'var(--background-tertiary)',
                        borderRadius: '8px',
                        alignSelf: 'stretch',
                        minHeight: 'auto',
                      }}
                    >
                      {/* Single Card Demo with proper actions gap */}
                      <div className="demo-section">
                        <Card
                          title="Spacing Token Demo"
                          subtitle="Using semantic spacing tokens with card__actions gap"
                          badge="Example"
                          badgeColor="primary"
                          showImagePlaceholder
                          actions={
                            <>
                              <Button variant="primary" size="sm">
                                Primary Action
                              </Button>
                              <Button variant="outline" size="sm">
                                Secondary
                              </Button>
                            </>
                          }
                        >
                          This card demonstrates the spacing system with proper gaps between
                          elements. Notice the <code>card__actions</code> automatically has gap
                          between buttons.
                        </Card>
                      </div>

                      {/* Grid Layout Demo with different card sizes */}
                      <div className="demo-section">
                        <div className="demo-section__grid-cards-wrapper">
                          <Card
                            title="Compact Card"
                            badge="Small"
                            badgeColor="success"
                            variant="default"
                            actions={
                              <Button variant="ghost" size="sm">
                                Small Action
                              </Button>
                            }
                          >
                            This is a smaller card with minimal content showing compact spacing.
                          </Card>
                          <Card
                            title="Standard Card"
                            subtitle="More content here"
                            badge="Medium"
                            badgeColor="warning"
                            variant="highlight"
                            showImagePlaceholder
                            actions={
                              <>
                                <Button variant="primary" size="md">
                                  Primary
                                </Button>
                                <Button variant="outline" size="md">
                                  Secondary
                                </Button>
                              </>
                            }
                          >
                            This card has more content, subtitle, image placeholder, and larger
                            buttons to demonstrate how spacing scales with content size.
                          </Card>
                        </div>
                      </div>
                    </div>
                  }
                  code={`// Using Card component with spacing tokens
import { Card, Button } from '@motion-ui-kit/primitives';

// Single card with automatic actions gap
<Card
  title="Spacing Token Demo"
  subtitle="Using semantic spacing tokens"
  badge="Example"
  badgeColor="primary"
  showImagePlaceholder
  actions={
    <>
      <Button variant="primary" size="sm">Primary Action</Button>
      <Button variant="outline" size="sm">Secondary</Button>
    </>
  }
>
  Content with proper spacing using semantic tokens
</Card>

// Grid layout with different card sizes
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
  gap: 'var(--space-4)' 
}}>
  <Card
    title="Compact Card"
    badge="Small"
    variant="default"
    actions={<Button variant="ghost" size="sm">Action</Button>}
  >
    Minimal content
  </Card>
  <Card
    title="Standard Card"
    subtitle="More content"
    badge="Medium" 
    variant="highlight"
    showImagePlaceholder
    actions={
      <>
        <Button variant="primary" size="md">Primary</Button>
        <Button variant="outline" size="md">Secondary</Button>
      </>
    }
  >
    More content and features
  </Card>
</div>

/* SCSS with spacing functions */
.card {
  margin-bottom: space('8');        // Direct scale access
  padding: space-semantic('component'); // Semantic usage
  
  .card__actions {
    gap: $space-sm;                 // Built-in gap for actions
  }
}

/* CSS custom properties */
.component {
  padding: var(--space-4);
  margin: var(--space-8) 0;
  gap: var(--space-2);
}`}
                />
              </div>

              {/* Benefits Section */}
              <div className="benefits-section">
                <h3>System Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <h4>
                      <CalculatorIcon className="benefit-icon" /> Mathematical Consistency
                    </h4>
                    <p>8px grid ensures visual harmony and alignment</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <ViewfinderCircleIcon className="benefit-icon" /> Semantic Clarity
                    </h4>
                    <p>Meaningful names improve developer experience</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <DevicePhoneMobileIcon className="benefit-icon" /> Responsive Design
                    </h4>
                    <p>Fluid scaling with viewport-aware spacing</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <WrenchScrewdriverIcon className="benefit-icon" /> Easy Maintenance
                    </h4>
                    <p>Centralized tokens enable system-wide updates</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <BoltIcon className="benefit-icon" /> Performance
                    </h4>
                    <p>Optimized CSS with minimal redundancy</p>
                  </div>
                  <div className="benefit-item">
                    <h4>
                      <UserIcon className="benefit-icon" /> Accessibility
                    </h4>
                    <p>Consistent spacing improves usability</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default DesignTokens;
