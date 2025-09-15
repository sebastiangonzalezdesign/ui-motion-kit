import React, { useState } from 'react';
import { Tabs, TabList, TabTrigger, TabContent } from '../../../components/navigation';
import { Button, Card } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './tabs.scss';
import {
  BoltIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  MoonIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const TabsPage: React.FC = () => {
  const [variant, setVariant] = useState<'default' | 'pills' | 'underline' | 'bordered'>('default');

  const basicTabsCode = `<Tabs defaultValue="overview">
  <TabList aria-label="Product Information">
    <TabTrigger value="overview">Overview</TabTrigger>
    <TabTrigger value="specs">Specifications</TabTrigger>
    <TabTrigger value="reviews">Reviews</TabTrigger>
  </TabList>

  <TabContent value="overview">
    <h3>Product Overview</h3>
    <p>Detailed product information...</p>
  </TabContent>
  
  <TabContent value="specs">
    <h3>Technical Specifications</h3>
    <p>Technical details...</p>
  </TabContent>
  
  <TabContent value="reviews">
    <h3>Customer Reviews</h3>
    <p>User feedback...</p>
  </TabContent>
</Tabs>`;

  const lazyTabsCode = `<Tabs defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Immediate</TabTrigger>
    <TabTrigger value="tab2">Lazy Loaded</TabTrigger>
    <TabTrigger value="tab3">Also Lazy</TabTrigger>
  </TabList>

  <TabContent value="tab1">
    Always rendered content
  </TabContent>
  
  <TabContent value="tab2" lazy>
    Only rendered when first accessed
  </TabContent>
  
  <TabContent value="tab3" lazy>
    Also lazy loaded for performance
  </TabContent>
</Tabs>`;

  const variantsCode = `// Pills variant
<Tabs defaultValue="tab1" variant="pills">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  {/* Content */}
</Tabs>

// Underline variant
<Tabs defaultValue="tab1" variant="underline">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  {/* Content */}
</Tabs>

// Bordered variant
<Tabs defaultValue="tab1" variant="bordered">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
  </TabList>
  {/* Content */}
</Tabs>`;

  return (
    <div className="tabs-demo-page">
      <Breadcrumb />
      <div className="container">
        <header className="page-header">
          <h1>Tabs Component</h1>
          <p className="page-description">
            A sophisticated tabbed interface with animated indicators, keyboard navigation, and
            responsive behavior. Supports multiple variants and lazy loading.
          </p>
        </header>

        <section className="demo-section">
          <h2>Interactive Demo</h2>
          <div className="demo-controls">
            <div className="control-group">
              <label>Variant:</label>
              <div className="button-group">
                <Button
                  variant={variant === 'default' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('default')}
                >
                  Default
                </Button>
                <Button
                  variant={variant === 'pills' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('pills')}
                >
                  Pills
                </Button>
                <Button
                  variant={variant === 'underline' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('underline')}
                >
                  Underline
                </Button>
                <Button
                  variant={variant === 'bordered' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('bordered')}
                >
                  Bordered
                </Button>
              </div>
            </div>
          </div>

          <Card className="demo-card">
            <Tabs defaultValue="overview" variant={variant}>
              <TabList aria-label="Product Information">
                <TabTrigger value="overview">Overview</TabTrigger>
                <TabTrigger value="features">Features</TabTrigger>
                <TabTrigger value="specs">Specifications</TabTrigger>
                <TabTrigger value="reviews">Reviews</TabTrigger>
                <TabTrigger value="support" disabled>
                  Support
                </TabTrigger>
              </TabList>

              <TabContent value="overview">
                <div className="tab-demo-content">
                  <h3>Product Overview</h3>
                  <p>
                    This is a comprehensive overview of our premium product. It includes detailed
                    information about the main features, benefits, and use cases.
                  </p>
                  <ul>
                    <li>High-quality materials and construction</li>
                    <li>User-friendly interface and design</li>
                    <li>Comprehensive warranty and support</li>
                    <li>Sustainable and eco-friendly approach</li>
                  </ul>
                </div>
              </TabContent>

              <TabContent value="features" lazy>
                <div className="tab-demo-content">
                  <h3>Key Features</h3>
                  <p>Explore the innovative features that make this product stand out:</p>
                  <div className="feature-grid">
                    <Card>
                      <div className="benefit-item">
                        <BoltIcon className="benefit-icon" />
                        <div>
                          <h4 className="heading-sm text-primary mb-2">Performance</h4>
                          <p className="text-secondary margin-0">
                            Optimized for speed and efficiency
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="benefit-item">
                        <PaintBrushIcon className="benefit-icon" />
                        <div>
                          <h4 className="heading-sm text-primary mb-2">Design</h4>
                          <p className="text-secondary margin-0">
                            Beautiful and intuitive user interface
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="benefit-item">
                        <Cog6ToothIcon className="benefit-icon" />
                        <div>
                          <h4 className="heading-sm text-primary mb-2">Customization</h4>
                          <p className="text-secondary margin-0">
                            Highly configurable and adaptable
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="benefit-item">
                        <DevicePhoneMobileIcon className="benefit-icon" />
                        <div>
                          <h4 className="heading-sm text-primary mb-2">Responsive</h4>
                          <p className="text-secondary margin-0">Works perfectly on all devices</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabContent>

              <TabContent value="specs" lazy>
                <div className="tab-demo-content">
                  <h3>Technical Specifications</h3>
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Dimensions</strong>
                        </td>
                        <td>300 × 200 × 50 mm</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Weight</strong>
                        </td>
                        <td>1.2 kg</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Material</strong>
                        </td>
                        <td>Aerospace-grade aluminum</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Connectivity</strong>
                        </td>
                        <td>USB-C, Bluetooth 5.0, Wi-Fi 6</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Battery Life</strong>
                        </td>
                        <td>Up to 12 hours</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Operating System</strong>
                        </td>
                        <td>Cross-platform compatible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabContent>

              <TabContent value="reviews" lazy>
                <div className="tab-demo-content">
                  <h3>Customer Reviews</h3>
                  <div className="reviews-container">
                    <div className="review-item">
                      <div className="review-header">
                        <span className="review-author">Sarah Johnson</span>
                        <span className="review-rating">⭐⭐⭐⭐⭐</span>
                      </div>
                      <p>
                        "Absolutely fantastic product! The quality exceeded my expectations and the
                        customer service was exceptional."
                      </p>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="review-author">Mike Chen</span>
                        <span className="review-rating">⭐⭐⭐⭐⭐</span>
                      </div>
                      <p>
                        "Easy to use and very reliable. Would definitely recommend to others looking
                        for a quality solution."
                      </p>
                    </div>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="review-author">Emily Davis</span>
                        <span className="review-rating">⭐⭐⭐⭐</span>
                      </div>
                      <p>
                        "Great value for money. The features are comprehensive and the performance
                        is solid."
                      </p>
                    </div>
                  </div>
                </div>
              </TabContent>
            </Tabs>
          </Card>
        </section>

        <section className="examples-section">
          <h2>Usage Examples</h2>

          <CodePreview
            title="Basic Tabs"
            preview={
              <Tabs defaultValue="overview">
                <TabList>
                  <TabTrigger value="overview">Overview</TabTrigger>
                  <TabTrigger value="features">Features</TabTrigger>
                  <TabTrigger value="documentation">Documentation</TabTrigger>
                </TabList>
                <TabContent value="overview">
                  <div className="tab-example-content">
                    <h4>Project Overview</h4>
                    <p>This is the overview tab content.</p>
                  </div>
                </TabContent>
                <TabContent value="features">
                  <div className="tab-example-content">
                    <h4>Key Features</h4>
                    <ul>
                      <li>Feature one</li>
                      <li>Feature two</li>
                    </ul>
                  </div>
                </TabContent>
                <TabContent value="documentation">
                  <div className="tab-example-content">
                    <h4>Documentation</h4>
                    <p>Read our comprehensive documentation.</p>
                  </div>
                </TabContent>
              </Tabs>
            }
            code={basicTabsCode}
          />

          <CodePreview
            title="Lazy Loading"
            preview={
              <Tabs defaultValue="tab1">
                <TabList>
                  <TabTrigger value="tab1">Tab 1</TabTrigger>
                  <TabTrigger value="tab2">Tab 2 (Lazy)</TabTrigger>
                  <TabTrigger value="tab3">Tab 3 (Lazy)</TabTrigger>
                </TabList>
                <TabContent value="tab1">
                  <div className="tab-example-content">
                    <p>This content is always loaded.</p>
                  </div>
                </TabContent>
                <TabContent value="tab2" lazy>
                  <div className="tab-example-content">
                    <p>This content loads only when tab is activated.</p>
                  </div>
                </TabContent>
                <TabContent value="tab3" lazy>
                  <div className="tab-example-content">
                    <p>Another lazy-loaded tab content.</p>
                  </div>
                </TabContent>
              </Tabs>
            }
            code={lazyTabsCode}
          />

          <CodePreview
            title="Visual Variants"
            preview={
              <div className="variants-showcase">
                <div className="variant-section">
                  <h5>Pills Variant</h5>
                  <Tabs defaultValue="tab1" variant="pills">
                    <TabList>
                      <TabTrigger value="tab1">Home</TabTrigger>
                      <TabTrigger value="tab2">About</TabTrigger>
                      <TabTrigger value="tab3">Contact</TabTrigger>
                    </TabList>
                  </Tabs>
                </div>
                <div className="variant-section">
                  <h5>Underline Variant</h5>
                  <Tabs defaultValue="tab1" variant="underline">
                    <TabList>
                      <TabTrigger value="tab1">Home</TabTrigger>
                      <TabTrigger value="tab2">About</TabTrigger>
                      <TabTrigger value="tab3">Contact</TabTrigger>
                    </TabList>
                  </Tabs>
                </div>
              </div>
            }
            code={variantsCode}
          />
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <Card>
              <div className="benefit-item">
                <EyeIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Accessible</h4>
                  <p className="text-secondary margin-0">
                    Full keyboard navigation, ARIA support, and WCAG 2.1 AA compliance
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <PaintBrushIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Customizable</h4>
                  <p className="text-secondary margin-0">
                    Multiple variants and orientation options to fit any design
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <BoltIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Performance</h4>
                  <p className="text-secondary margin-0">
                    Lazy loading support and optimized animations for smooth interactions
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <DevicePhoneMobileIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Responsive</h4>
                  <p className="text-secondary margin-0">
                    Automatic stacking on mobile and touch-friendly interactions
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <MoonIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Theme Support</h4>
                  <p className="text-secondary margin-0">
                    Seamless light and dark mode integration
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <SparklesIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Animated</h4>
                  <p className="text-secondary margin-0">
                    Smooth transitions with Framer Motion and spring physics
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TabsPage;
