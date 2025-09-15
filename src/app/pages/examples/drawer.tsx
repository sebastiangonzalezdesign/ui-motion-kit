import React from 'react';
import { Drawer, useDrawer } from '../../../components/navigation/Drawer';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import Hero from '../../components/Hero/Hero';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  Cog6ToothIcon,
  UserIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowPathIcon,
  SwatchIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';
import './drawer.scss';

const DrawerPage: React.FC = () => {
  const leftDrawer = useDrawer();
  const rightDrawer = useDrawer();
  const topDrawer = useDrawer();
  const bottomDrawer = useDrawer();
  const drawerWithContent = useDrawer();

  const sampleContent = (
    <div className="drawer-content">
      <div className="navigation-item">
        <HomeIcon />
        <span>Home</span>
      </div>
      <div className="navigation-item">
        <UserIcon />
        <span>Profile</span>
      </div>
      <div className="navigation-item">
        <Cog6ToothIcon />
        <span>Settings</span>
      </div>
      <div className="navigation-item">
        <XMarkIcon />
        <span>Close</span>
      </div>
    </div>
  );

  return (
    <div className="drawer-page">
      <Breadcrumb />
      <Hero
        headline="Drawer Components"
        description="Slide-out panels that can be opened from any side of the screen. Features gesture support, multiple sizes, and smooth animations."
        size="md"
        backgroundColor="brand-medium"
        borderRadius="md"
        showIllustrations={false}
      />

      <div className="examples-container">
        <div className="examples-grid">
          <div className="demo-section">
            <Card
              title="Direction Examples"
              subtitle="Try opening drawers from different directions"
            >
              <div className="direction-demos">
                <div className="direction-group">
                  <h3>Horizontal Drawers</h3>
                  <div className="button-group">
                    <Button onClick={leftDrawer.open} variant="outline">
                      <ArrowLeftIcon />
                      Left Drawer
                    </Button>
                    <Button onClick={rightDrawer.open} variant="outline">
                      Right Drawer
                      <ArrowRightIcon />
                    </Button>
                  </div>
                </div>

                <div className="direction-group">
                  <h3>Vertical Drawers</h3>
                  <div className="button-group">
                    <Button onClick={topDrawer.open} variant="outline">
                      <ArrowUpIcon />
                      Top Drawer
                    </Button>
                    <Button onClick={bottomDrawer.open} variant="outline">
                      Bottom Drawer
                      <ArrowDownIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="demo-section">
            <Card
              title="Feature-Rich Example"
              subtitle="Drawer with custom content, header, and footer"
            >
              <div className="feature-demo">
                <Button onClick={drawerWithContent.open}>
                  <Bars3Icon />
                  Open Navigation Drawer
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <ArrowPathIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Multi-Directional</h4>
                <p className="benefit-description">Open from left, right, top, or bottom</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <CursorArrowRaysIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Gesture Support</h4>
                <p className="benefit-description">Drag to close with velocity thresholds</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <SwatchIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Size Variants</h4>
                <p className="benefit-description">Small, medium, large, extra large, or full</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <BoltIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Custom Content</h4>
                <p className="benefit-description">Header, content, and footer sections</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="benefit-item">
              <div className="benefit-icon">
                <ShieldCheckIcon className="benefit-icon-svg" />
              </div>
              <div>
                <h4 className="benefit-title">Keyboard Accessible</h4>
                <p className="benefit-description">Focus management and keyboard navigation</p>
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
                <p className="benefit-description">Adapts to different screen sizes</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Basic Drawers */}
      <Drawer isOpen={leftDrawer.isOpen} onClose={leftDrawer.close} direction="left" size="md">
        <div className="simple-drawer-content">
          <h3>Left Drawer</h3>
          <p>This drawer slides in from the left side.</p>
          <Button onClick={leftDrawer.close} variant="outline">
            Close
          </Button>
        </div>
      </Drawer>

      <Drawer isOpen={rightDrawer.isOpen} onClose={rightDrawer.close} direction="right" size="md">
        <div className="simple-drawer-content">
          <h3>Right Drawer</h3>
          <p>This drawer slides in from the right side.</p>
          <Button onClick={rightDrawer.close} variant="outline">
            Close
          </Button>
        </div>
      </Drawer>

      <Drawer isOpen={topDrawer.isOpen} onClose={topDrawer.close} direction="top" size="md">
        <div className="simple-drawer-content">
          <h3>Top Drawer</h3>
          <p>This drawer slides down from the top.</p>
          <Button onClick={topDrawer.close} variant="outline">
            Close
          </Button>
        </div>
      </Drawer>

      <Drawer
        isOpen={bottomDrawer.isOpen}
        onClose={bottomDrawer.close}
        direction="bottom"
        size="md"
      >
        <div className="simple-drawer-content">
          <h3>Bottom Drawer</h3>
          <p>This drawer slides up from the bottom.</p>
          <Button onClick={bottomDrawer.close} variant="outline">
            Close
          </Button>
        </div>
      </Drawer>

      {/* Feature-rich Drawer */}
      <Drawer
        isOpen={drawerWithContent.isOpen}
        onClose={drawerWithContent.close}
        direction="left"
        size="lg"
        title="Navigation"
        showCloseButton
      >
        <div className="drawer-content-wrapper">
          <div className="navigation-content">
            <h4>Main Navigation</h4>
            {sampleContent}

            <h4>Recent Items</h4>
            <div className="recent-items">
              <div className="recent-item">Project Alpha</div>
              <div className="recent-item">Dashboard Overview</div>
              <div className="recent-item">Team Settings</div>
            </div>
          </div>

          <div className="drawer-footer">
            <Button onClick={drawerWithContent.close} variant="outline" size="sm">
              Close
            </Button>
            <Button size="sm">Save Changes</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerPage;
