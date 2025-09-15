import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Spinner } from '../../../components/primitives';
import { Hero, CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './loaders.scss';

const LoadersPage: React.FC = () => {
  // Configuration state
  const [spinnerSize, setSpinnerSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showSpinnerDemo, setShowSpinnerDemo] = useState(true);
  const [isCardLoading, setIsCardLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="loading-states-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Breadcrumb />

      <motion.div variants={itemVariants}>
        <Hero
          headline="Loading States"
          description="Elegant loading indicators and skeleton screens to enhance user experience during data fetching and processing."
          backgroundColor="brand-soft"
          borderRadius="md"
          size="md"
          showIllustrations={false}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="configuration-section">
        <Card
          title="Interactive Configuration"
          subtitle="Customize loading components in real-time"
        >
          <div className="config-grid">
            {/* Spinner Configuration */}
            <div className="config-group">
              <h4>Spinner Settings</h4>
              <div className="config-controls">
                <div className="config-item">
                  <label>Size</label>
                  <div className="button-group">
                    {(['sm', 'md', 'lg'] as const).map((size) => (
                      <Button
                        key={size}
                        variant={spinnerSize === size ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setSpinnerSize(size)}
                      >
                        {size.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSpinnerDemo(!showSpinnerDemo)}
                >
                  {showSpinnerDemo ? 'Stop' : 'Start'} Loading
                </Button>
              </div>
            </div>

            {/* Card Configuration */}
            <div className="config-group">
              <h4>Card Loading Settings</h4>
              <div className="config-controls">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCardLoading(!isCardLoading)}
                >
                  {isCardLoading ? 'Show' : 'Hide'} Content
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="demos-grid">
        {/* Spinner Demo */}
        <motion.div variants={itemVariants} className="demo-wrapper">
          <Card
            title="Spinner Components"
            subtitle="Elegant loading spinners with smooth animations"
          >
            <div className="demo-content">
              <div className="demo-area">
                {showSpinnerDemo && <Spinner size={spinnerSize} />}
                {!showSpinnerDemo && (
                  <div className="success-state">
                    <span className="success-icon">✓</span>
                    <span>Loaded successfully!</span>
                  </div>
                )}
              </div>
              <CodePreview
                title="Spinner Usage"
                preview={<Spinner size={spinnerSize} />}
                code={`<Spinner size="${spinnerSize}" />`}
              />
            </div>
          </Card>
        </motion.div>

        {/* Card Skeleton Demo */}
        <motion.div variants={itemVariants} className="demo-wrapper">
          <Card title="Skeleton Loading" subtitle="Placeholder content while data loads">
            <div className="demo-content">
              <div className="demo-area">
                <Card
                  title={isCardLoading ? undefined : 'Article Title'}
                  subtitle={isCardLoading ? undefined : 'Published 2 hours ago'}
                  loading={isCardLoading}
                >
                  {!isCardLoading && (
                    <div className="card-content">
                      <p>
                        This is the actual content that appears after loading is complete. The
                        skeleton provides a smooth transition.
                      </p>
                      <div className="card-actions">
                        <Button size="sm">Read More</Button>
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
              <CodePreview
                title="Skeleton Card Usage"
                preview={
                  <Card
                    title={isCardLoading ? undefined : 'Article Title'}
                    subtitle={isCardLoading ? undefined : 'Published 2 hours ago'}
                    loading={isCardLoading}
                  >
                    {!isCardLoading && <p>Content goes here...</p>}
                  </Card>
                }
                code={`<Card
  title="Article Title"
  subtitle="Published 2 hours ago"
  loading={${isCardLoading}}
>
  <p>Content goes here...</p>
</Card>`}
              />
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Features and Guidelines Section */}
      <motion.div variants={itemVariants} className="bottom-sections">
        <div className="features-section">
          <Card title="Loading States Features" subtitle="Built for modern applications">
            <div className="features-grid">
              <div className="feature-item">
                <h4>Smooth Animations</h4>
                <p>Framer Motion powered transitions that feel natural and responsive</p>
              </div>
              <div className="feature-item">
                <h4>Accessible</h4>
                <p>Screen reader support and reduced motion preferences respected</p>
              </div>
              <div className="feature-item">
                <h4>Customizable</h4>
                <p>Multiple sizes and animation options to match your design</p>
              </div>
              <div className="feature-item">
                <h4>Performance</h4>
                <p>Optimized rendering with minimal impact on application performance</p>
              </div>
              <div className="feature-item">
                <h4>Dark Mode</h4>
                <p>Automatic adaptation to light and dark themes</p>
              </div>
              <div className="feature-item">
                <h4>TypeScript</h4>
                <p>Full type safety with comprehensive prop definitions</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="guidelines-section">
          <Card title="Usage Guidelines" subtitle="Best practices for loading states">
            <div className="guidelines-content">
              <div className="guideline-section">
                <h4>When to Use Spinners</h4>
                <ul>
                  <li>Short operations (under 5 seconds)</li>
                  <li>Indeterminate progress</li>
                  <li>Page or component initialization</li>
                  <li>Form submissions</li>
                </ul>
              </div>
              <div className="guideline-section">
                <h4>When to Use Skeletons</h4>
                <ul>
                  <li>Content loading scenarios</li>
                  <li>List or card-based layouts</li>
                  <li>When preserving layout is important</li>
                  <li>Repeated content patterns</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadersPage;
