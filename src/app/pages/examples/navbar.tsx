import React, { useState } from 'react';
import { Card } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import Navbar from '../../../components/navigation/Navbar/Navbar';
import { CodePreview } from '../../components';
import { Button } from '../../../components/primitives';
import { Checkbox } from '../../../components/primitives';
import {
  DevicePhoneMobileIcon,
  SwatchIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  HomeIcon,
  CubeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import './navbar.scss';

const NavbarPage: React.FC = () => {
  const [variant, setVariant] = useState<'default' | 'transparent' | 'filled'>('default');
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const basicNavbarCode = `<Navbar
  brand={{ name: 'My App', path: '/' }}
  items={[
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ]}
/>`;

  const navbarWithDropdownCode = `<Navbar
  brand={{ name: 'My App', path: '/' }}
  items={[
    { id: 'home', label: 'Home', path: '/' },
    {
      id: 'products',
      label: 'Products',
      path: '/products',
      children: [
        { id: 'web', label: 'Web Apps', path: '/products/web' },
        { id: 'mobile', label: 'Mobile Apps', path: '/products/mobile' },
        { id: 'desktop', label: 'Desktop Apps', path: '/products/desktop' },
      ],
    },
    { id: 'about', label: 'About', path: '/about' },
  ]}
/>`;

  const navbarWithFeaturesCode = `<Navbar
  brand={{ name: 'My App', path: '/' }}
  variant="filled"
  size="lg"
  showSearch={true}
  showUserMenu={true}
  items={[
    { id: 'home', label: 'Home', path: '/' },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'settings', label: 'Settings', path: '/settings' },
  ]}
/>`;

  const responsiveNavbarCode = `<Navbar
  brand={{ name: 'My App', path: '/' }}
  items={[
    { id: 'home', label: 'Home', path: '/' },
    { id: 'features', label: 'Features', path: '/features' },
    { id: 'pricing', label: 'Pricing', path: '/pricing' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ]}
  showSearch={true}
  showUserMenu={true}
/>`;

  return (
    <div className="navbar-page">
      <Breadcrumb />
      <div className="container">
        <header className="page-header">
          <h1>Navbar Component</h1>
          <p className="page-description">
            Responsive navigation bars with mobile menu, dropdown support, and customizable styling.
            Supports multiple variants, sizes, and feature toggles.
          </p>
        </header>
        <section className="demo-section">
          <h2>Interactive Demo</h2>

          {/* Configuration Panel */}
          <div className="configuration-panel">
            <Card className="card--highlight">
              <h2 className="panel-header">
                <Bars3Icon className="icon" />
                Configuration Panel
              </h2>
              <p className="panel-description">
                Adjust the settings below to see how the navbar adapts its appearance and behavior.
              </p>

              <div className="configuration-grid">
                <div className="config-section">
                  <h4 className="section-header">
                    <SwatchIcon className="icon" />
                    Visual Settings
                  </h4>
                  <div className="form-controls">
                    <div className="control-group">
                      <label className="control-label">Variant:</label>
                      <div className="button-group">
                        <Button
                          variant={variant === 'default' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setVariant('default')}
                        >
                          Default
                        </Button>
                        <Button
                          variant={variant === 'transparent' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setVariant('transparent')}
                        >
                          Transparent
                        </Button>
                        <Button
                          variant={variant === 'filled' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setVariant('filled')}
                        >
                          Filled
                        </Button>
                      </div>
                    </div>

                    <div className="control-group">
                      <label className="control-label">Size:</label>
                      <div className="button-group">
                        <Button
                          variant={size === 'sm' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSize('sm')}
                        >
                          Small
                        </Button>
                        <Button
                          variant={size === 'md' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSize('md')}
                        >
                          Medium
                        </Button>
                        <Button
                          variant={size === 'lg' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSize('lg')}
                        >
                          Large
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="config-section">
                  <h4 className="section-header">
                    <MagnifyingGlassIcon className="icon" />
                    Features
                  </h4>
                  <div className="form-controls">
                    <Checkbox
                      variant="default"
                      size="md"
                      label="Search Bar"
                      description="Show search input in navbar"
                      checked={showSearch}
                      onChange={(e) => setShowSearch(e.target.checked)}
                    />
                    <Checkbox
                      variant="default"
                      size="md"
                      label="User Menu"
                      description="Show user account menu"
                      checked={showUserMenu}
                      onChange={(e) => setShowUserMenu(e.target.checked)}
                    />
                    <Checkbox
                      variant="default"
                      size="md"
                      label="Mobile Menu"
                      description="Show mobile/tablet menu with hamburger animation"
                      checked={showMobileMenu}
                      onChange={(e) => setShowMobileMenu(e.target.checked)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="demo-card">
            <div className="navbar-demo-wrapper">
              <Navbar
                brand={{ name: 'MUIK', path: '#' }}
                variant={variant}
                size={size}
                showSearch={showSearch}
                showUserMenu={showUserMenu}
                showMobileMenu={showMobileMenu}
                items={[
                  {
                    id: 'home',
                    label: 'Home',
                    path: '#',
                    icon: <HomeIcon className="navbar-item-icon" />,
                  },
                  {
                    id: 'components',
                    label: 'Components',
                    path: '#',
                    icon: <CubeIcon className="navbar-item-icon" />,
                    children: [
                      {
                        id: 'ui-basics',
                        label: 'UI Basics',
                        path: '#',
                        icon: <SwatchIcon className="navbar-item-icon" />,
                      },
                      {
                        id: 'navigation',
                        label: 'Navigation',
                        path: '#',
                        icon: <Bars3Icon className="navbar-item-icon" />,
                      },
                      {
                        id: 'feedback',
                        label: 'Feedback',
                        path: '#',
                        icon: <UserIcon className="navbar-item-icon" />,
                      },
                    ],
                  },
                  {
                    id: 'examples',
                    label: 'Examples',
                    path: '#',
                    icon: <SparklesIcon className="navbar-item-icon" />,
                  },
                ]}
              />
            </div>
          </Card>
        </section>{' '}
        <section className="examples-section">
          <h2>Usage Examples</h2>

          <CodePreview
            title="Basic Navbar"
            preview={
              <div className="navbar-preview-wrapper">
                <Navbar
                  brand={{ name: 'My App', path: '#' }}
                  items={[
                    { id: 'home', label: 'Home', path: '#' },
                    { id: 'about', label: 'About', path: '#' },
                    { id: 'contact', label: 'Contact', path: '#' },
                  ]}
                />
              </div>
            }
            code={basicNavbarCode}
          />

          <CodePreview
            title="Navbar with Dropdown"
            preview={
              <div className="navbar-preview-wrapper">
                <Navbar
                  brand={{ name: 'My App', path: '#' }}
                  items={[
                    { id: 'home', label: 'Home', path: '#' },
                    {
                      id: 'products',
                      label: 'Products',
                      path: '#',
                      children: [
                        { id: 'web', label: 'Web Apps', path: '#' },
                        { id: 'mobile', label: 'Mobile Apps', path: '#' },
                        { id: 'desktop', label: 'Desktop Apps', path: '#' },
                      ],
                    },
                    { id: 'about', label: 'About', path: '#' },
                  ]}
                />
              </div>
            }
            code={navbarWithDropdownCode}
          />

          <CodePreview
            title="Feature-Rich Navbar"
            preview={
              <div className="navbar-preview-wrapper">
                <Navbar
                  brand={{ name: 'My App', path: '#' }}
                  variant="filled"
                  size="lg"
                  showSearch={true}
                  showUserMenu={true}
                  items={[
                    { id: 'home', label: 'Home', path: '#' },
                    { id: 'dashboard', label: 'Dashboard', path: '#' },
                    { id: 'settings', label: 'Settings', path: '#' },
                  ]}
                />
              </div>
            }
            code={navbarWithFeaturesCode}
          />

          <CodePreview
            title="Responsive Navbar"
            preview={
              <div className="navbar-preview-wrapper">
                <Navbar
                  brand={{ name: 'My App', path: '#' }}
                  items={[
                    { id: 'home', label: 'Home', path: '#' },
                    { id: 'features', label: 'Features', path: '#' },
                    { id: 'pricing', label: 'Pricing', path: '#' },
                    { id: 'contact', label: 'Contact', path: '#' },
                  ]}
                  showSearch={true}
                  showUserMenu={true}
                />
              </div>
            }
            code={responsiveNavbarCode}
          />
        </section>
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <Card>
              <div className="benefit-item">
                <DevicePhoneMobileIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Responsive Design</h4>
                  <p className="text-secondary margin-0">
                    Automatic mobile menu with hamburger toggle
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <SwatchIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Multiple Variants</h4>
                  <p className="text-secondary margin-0">
                    Default, transparent, and filled variants
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <Bars3Icon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Flexible Sizing</h4>
                  <p className="text-secondary margin-0">Small, medium, and large size options</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <MagnifyingGlassIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Search Integration</h4>
                  <p className="text-secondary margin-0">Built-in search functionality</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <UserIcon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">User Menu</h4>
                  <p className="text-secondary margin-0">Integrated user account menu</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <Bars3Icon className="benefit-icon" />
                <div>
                  <h4 className="heading-sm text-primary mb-2">Dropdown Support</h4>
                  <p className="text-secondary margin-0">Nested navigation with dropdown menus</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavbarPage;
