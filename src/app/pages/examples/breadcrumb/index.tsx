import React, { useState } from 'react';
import { Card } from '../../../../components/primitives';
import { Breadcrumb } from '../../../../components/navigation';
import { Button } from '../../../../components/primitives';
import { CodePreview } from '../../../components';
import {
  ArrowPathIcon,
  SwatchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import './breadcrumb.scss';

const BreadcrumbPage: React.FC = () => {
  const [customItems, setCustomItems] = useState([
    { label: 'Home', path: '/' },
    { label: 'Components', path: '/docs/components?category=navigation' },
    { label: 'Navigation', path: '/docs/components?category=navigation' },
    { label: 'Breadcrumbs', path: '/examples/breadcrumbs' },
  ]);

  const basicBreadcrumbCode = `<Breadcrumb />`;

  const customBreadcrumbCode = `<Breadcrumb
  items={[
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Electronics', path: '/products/electronics' },
    { label: 'Laptops', path: '/products/electronics/laptops' },
  ]}
/>`;

  const styledBreadcrumbCode = `<Breadcrumb
  className="custom-breadcrumb"
  items={[
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Users', path: '/dashboard/users' },
    { label: 'Profile', path: '/dashboard/users/profile' },
  ]}
/>`;

  const longBreadcrumbCode = `<Breadcrumb
  items={[
    { label: 'Home', path: '/' },
    { label: 'Documentation', path: '/docs' },
    { label: 'Components', path: '/docs/components' },
    { label: 'Navigation', path: '/docs/components?category=navigation' },
    { label: 'Breadcrumbs', path: '/examples/breadcrumbs' },
    { label: 'Advanced Usage', path: '/examples/breadcrumbs/advanced' },
  ]}
/>`;

  const addBreadcrumbItem = () => {
    const newItem = {
      label: `Item ${customItems.length}`,
      path: `/item-${customItems.length}`,
    };
    setCustomItems([...customItems, newItem]);
  };

  const removeBreadcrumbItem = () => {
    if (customItems.length > 1) {
      setCustomItems(customItems.slice(0, -1));
    }
  };

  return (
    <div className="breadcrumb-page">
      <Breadcrumb />
      <div className="container">
        <header className="page-header">
          <h1>Breadcrumb Component</h1>
          <p className="page-description">
            Hierarchical navigation breadcrumbs with automatic path generation and customizable
            styling. Supports both automatic and manual breadcrumb creation.
          </p>
        </header>

        <section className="demo-section">
          <h2>Interactive Demo</h2>
          <div className="demo-controls">
            <div className="control-group">
              <label>Custom Breadcrumb Items:</label>
              <div className="button-group">
                <Button size="sm" variant="outline" onClick={addBreadcrumbItem}>
                  Add Item
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={customItems.length > 1 ? removeBreadcrumbItem : undefined}
                  className={customItems.length <= 1 ? 'button-disabled' : ''}
                >
                  Remove Item
                </Button>
              </div>
            </div>
          </div>

          <Card className="demo-card">
            <div className="breadcrumb-demo-wrapper">
              <Breadcrumb items={customItems} preventNavigation={true} />
            </div>
          </Card>
        </section>

        <section className="examples-section">
          <h2>Usage Examples</h2>

          <CodePreview
            title="Automatic Breadcrumbs"
            preview={
              <div className="breadcrumb-preview-wrapper">
                <Breadcrumb preventNavigation={true} />
              </div>
            }
            code={basicBreadcrumbCode}
          />

          <CodePreview
            title="Custom Breadcrumbs"
            preview={
              <div className="breadcrumb-preview-wrapper">
                <Breadcrumb
                  preventNavigation={true}
                  items={[
                    { label: 'Home', path: '/' },
                    { label: 'Products', path: '/products' },
                    { label: 'Electronics', path: '/products/electronics' },
                    { label: 'Laptops', path: '/products/electronics/laptops' },
                  ]}
                />
              </div>
            }
            code={customBreadcrumbCode}
          />

          <CodePreview
            title="Styled Breadcrumbs"
            preview={
              <div className="breadcrumb-preview-wrapper">
                <Breadcrumb
                  preventNavigation={true}
                  className="styled-breadcrumb"
                  items={[
                    { label: 'Dashboard', path: '/dashboard' },
                    { label: 'Users', path: '/dashboard/users' },
                    { label: 'Profile', path: '/dashboard/users/profile' },
                  ]}
                />
              </div>
            }
            code={styledBreadcrumbCode}
          />

          <CodePreview
            title="Long Breadcrumb Trail"
            preview={
              <div className="breadcrumb-preview-wrapper">
                <Breadcrumb
                  preventNavigation={true}
                  items={[
                    { label: 'Home', path: '/' },
                    { label: 'Documentation', path: '/docs' },
                    { label: 'Components', path: '/docs/components' },
                    { label: 'Navigation', path: '/docs/components?category=navigation' },
                    { label: 'Breadcrumbs', path: '/examples/breadcrumbs' },
                    { label: 'Advanced Usage', path: '/examples/breadcrumbs/advanced' },
                  ]}
                />
              </div>
            }
            code={longBreadcrumbCode}
          />
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <ArrowPathIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Auto-Generation</h4>
                  <p className="benefit-description">
                    Automatically generates breadcrumbs from current route
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <SwatchIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Customizable</h4>
                  <p className="benefit-description">Custom items, styling, and navigation paths</p>
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
                  <p className="benefit-description">Full ARIA support and keyboard navigation</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <DevicePhoneMobileIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Responsive</h4>
                  <p className="benefit-description">Adapts to different screen sizes gracefully</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <HomeIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Home Icon</h4>
                  <p className="benefit-description">Built-in home icon for the first breadcrumb</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BoltIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">React Router</h4>
                  <p className="benefit-description">Seamless integration with React Router</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BreadcrumbPage;
