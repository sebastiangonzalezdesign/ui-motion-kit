import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Button } from '../../../components/primitives';
import { CodePreview } from '../../components';
import './design-tokens.scss';

const DesignTokens = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'colors' | 'typography' | 'spacing' | 'motion'
  >('colors');

  const categories = [
    { id: 'colors', label: 'Colors', description: 'Semantic & functional color tokens' },
    { id: 'typography', label: 'Typography', description: 'Font scales & responsive rules' },
    { id: 'spacing', label: 'Spacing / Sizes', description: 'Consistent spacing system' },
    { id: 'motion', label: 'Motion Tokens', description: 'Durations, easings & spring presets' },
  ] as const;

  const colorTokens = [
    {
      category: 'Primary',
      tokens: ['--accent-primary', '--accent-secondary', '--accent-tertiary'],
    },
    { category: 'Text', tokens: ['--text-primary', '--text-secondary', '--text-tertiary'] },
    {
      category: 'Surface',
      tokens: ['--surface-primary', '--surface-secondary', '--surface-tertiary'],
    },
    { category: 'Border', tokens: ['--border-primary', '--border-secondary', '--border-tertiary'] },
    {
      category: 'Status',
      tokens: ['--success-primary', '--warning-primary', '--error-primary', '--info-primary'],
    },
  ];

  const typographyTokens = [
    {
      scale: 'Font Sizes',
      tokens: [
        '--text-xs',
        '--text-sm',
        '--text-base',
        '--text-lg',
        '--text-xl',
        '--text-2xl',
        '--text-3xl',
      ],
    },
    {
      scale: 'Font Weights',
      tokens: ['--font-light', '--font-normal', '--font-medium', '--font-semibold', '--font-bold'],
    },
    {
      scale: 'Line Heights',
      tokens: ['--leading-none', '--leading-tight', '--leading-normal', '--leading-relaxed'],
    },
  ];

  const spacingTokens = [
    {
      scale: 'Spacing',
      tokens: [
        '--space-1',
        '--space-2',
        '--space-3',
        '--space-4',
        '--space-5',
        '--space-6',
        '--space-8',
        '--space-10',
        '--space-12',
      ],
    },
    {
      scale: 'Radii',
      tokens: ['--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-full'],
    },
    { scale: 'Shadows', tokens: ['--shadow-sm', '--shadow-md', '--shadow-lg', '--shadow-xl'] },
  ];

  const motionTokens = [
    { category: 'Durations', tokens: ['--duration-fast', '--duration-normal', '--duration-slow'] },
    { category: 'Easings', tokens: ['--ease-linear', '--ease-in', '--ease-out', '--ease-in-out'] },
    {
      category: 'Spring Presets',
      tokens: ['--spring-gentle', '--spring-wobbly', '--spring-stiff'],
    },
  ];

  const colorExampleCode = `// Using semantic color tokens
.component {
  background: var(--surface-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.component--primary {
  background: var(--accent-primary);
  color: var(--accent-contrast);
}

.component--success {
  background: var(--success-primary);
  color: white;
}`;

  const typographyExampleCode = `// Typography scale system
.heading-large {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

.caption {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}`;

  const spacingExampleCode = `// Consistent spacing system
.card {
  padding: var(--space-4);
  margin-bottom: var(--space-3);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.button {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
}

.container {
  gap: var(--space-6);
  padding: var(--space-8);
}`;

  const motionExampleCode = `// Motion token system (Pro feature)
.button {
  transition: all var(--duration-normal) var(--ease-out);
}

.modal {
  animation-duration: var(--duration-slow);
  animation-timing-function: var(--ease-in-out);
}

// Framer Motion with spring presets
const springConfig = {
  type: "spring",
  stiffness: var(--spring-gentle-stiffness),
  damping: var(--spring-gentle-damping)
};`;

  return (
    <div className="design-tokens-page">
      <Hero
        headline="Design Tokens"
        description="The foundation of the design system. Semantic tokens that scale across themes, components, and use cases."
        backgroundColor="brand-soft"
        borderRadius="lg"
        size="lg"
        showIllustrations={false}
      />

      {/* Token Categories Navigation */}
      <section className="token-categories">
        <div className="category-nav">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-label">{category.label}</span>
              <span className="category-description">{category.description}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Colors Section */}
      {selectedCategory === 'colors' && (
        <section className="token-section">
          <h2>Color Tokens</h2>
          <p className="section-description">
            Semantic color system with automatic dark mode support. Colors are organized by purpose,
            not by hue, ensuring consistent meaning across your interface.
          </p>

          <div className="token-grid">
            {colorTokens.map((group) => (
              <Card key={group.category} className="token-card">
                <h3>{group.category}</h3>
                <div className="color-samples">
                  {group.tokens.map((token) => (
                    <div key={token} className="color-sample">
                      <div className="color-swatch" style={{ backgroundColor: `var(${token})` }} />
                      <span className="token-name">{token}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <CodePreview
            title="Using Color Tokens"
            preview={
              <div className="color-examples">
                <div className="example-surface">
                  <h4>Surface Example</h4>
                  <p>Background uses surface tokens, text uses semantic text tokens.</p>
                  <Button size="sm">Primary Action</Button>
                </div>
              </div>
            }
            code={colorExampleCode}
          />
        </section>
      )}

      {/* Typography Section */}
      {selectedCategory === 'typography' && (
        <section className="token-section">
          <h2>Typography Tokens</h2>
          <p className="section-description">
            Modular type scale with responsive font sizes, consistent line heights, and semantic
            font weights.
          </p>

          <div className="token-grid">
            {typographyTokens.map((group) => (
              <Card key={group.scale} className="token-card">
                <h3>{group.scale}</h3>
                <div className="typography-samples">
                  {group.tokens.map((token) => (
                    <div key={token} className="typography-sample">
                      <span className="token-name">{token}</span>
                      <div
                        className="typography-example"
                        style={{
                          fontSize: group.scale === 'Font Sizes' ? `var(${token})` : undefined,
                          fontWeight: group.scale === 'Font Weights' ? `var(${token})` : undefined,
                          lineHeight: group.scale === 'Line Heights' ? `var(${token})` : undefined,
                        }}
                      >
                        Sample Text
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <CodePreview
            title="Typography Scale System"
            preview={
              <div className="typography-examples">
                <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-bold)' }}>
                  Large Heading
                </h1>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-semibold)' }}>
                  Medium Heading
                </h3>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)' }}>
                  Body text with normal leading for optimal readability.
                </p>
                <small style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  Caption text
                </small>
              </div>
            }
            code={typographyExampleCode}
          />
        </section>
      )}

      {/* Spacing Section */}
      {selectedCategory === 'spacing' && (
        <section className="token-section">
          <h2>Spacing & Size Tokens</h2>
          <p className="section-description">
            Consistent spacing system based on a modular scale. Includes padding, margins, border
            radius, and shadow tokens.
          </p>

          <div className="token-grid">
            {spacingTokens.map((group) => (
              <Card key={group.scale} className="token-card">
                <h3>{group.scale}</h3>
                <div className="spacing-samples">
                  {group.tokens.map((token) => (
                    <div key={token} className="spacing-sample">
                      <span className="token-name">{token}</span>
                      <div className="spacing-visual">
                        {group.scale === 'Spacing' && (
                          <div
                            className="spacing-box"
                            style={{ width: `var(${token})`, height: `var(${token})` }}
                          />
                        )}
                        {group.scale === 'Radii' && (
                          <div className="radius-box" style={{ borderRadius: `var(${token})` }} />
                        )}
                        {group.scale === 'Shadows' && (
                          <div className="shadow-box" style={{ boxShadow: `var(${token})` }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <CodePreview
            title="Spacing System Usage"
            preview={
              <div className="spacing-examples">
                <div
                  className="example-card"
                  style={{
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h4 style={{ marginBottom: 'var(--space-2)' }}>Example Card</h4>
                  <p style={{ marginBottom: 'var(--space-3)' }}>
                    Using consistent spacing tokens for padding and margins.
                  </p>
                  <Button size="sm">Action</Button>
                </div>
              </div>
            }
            code={spacingExampleCode}
          />
        </section>
      )}

      {/* Motion Section */}
      {selectedCategory === 'motion' && (
        <section className="token-section">
          <h2>Motion Tokens</h2>
          <div className="pro-badge">Pro Feature</div>
          <p className="section-description">
            Advanced motion system with duration, easing, and spring presets. Create consistent,
            delightful animations across your interface.
          </p>

          <div className="token-grid">
            {motionTokens.map((group) => (
              <Card key={group.category} className="token-card">
                <h3>{group.category}</h3>
                <div className="motion-samples">
                  {group.tokens.map((token) => (
                    <div key={token} className="motion-sample">
                      <span className="token-name">{token}</span>
                      <div className="motion-demo">
                        <div className="motion-element" data-motion={token.replace('--', '')} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <CodePreview
            title="Motion Token System"
            preview={
              <div className="motion-examples">
                <Button
                  size="sm"
                  style={{
                    transition: 'all var(--duration-normal) var(--ease-out)',
                    marginRight: 'var(--space-3)',
                  }}
                >
                  Hover Me
                </Button>
                <div className="motion-card">
                  <p>Card with spring animation on hover</p>
                </div>
              </div>
            }
            code={motionExampleCode}
          />
        </section>
      )}

      {/* Foundation Message */}
      <section className="foundation-message">
        <Card className="card--highlight">
          <h3>🎯 Tokens are the Foundation</h3>
          <p>
            Design tokens ensure consistency across your entire design system. They provide a single
            source of truth for colors, typography, spacing, and motion, making it easy to maintain
            and scale your interface.
          </p>
          <div className="action-buttons">
            <Link to="/components">
              <Button>Explore Components</Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline">Read Documentation</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default DesignTokens;
