import React from 'react';
import { Drawer, useDrawer } from '../../../components/navigation/Drawer';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
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
        <HomeIcon className="w-5 h-5" />
        <span>Home</span>
      </div>
      <div className="navigation-item">
        <UserIcon className="w-5 h-5" />
        <span>Profile</span>
      </div>
      <div className="navigation-item">
        <Cog6ToothIcon className="w-5 h-5" />
        <span>Settings</span>
      </div>
      <div className="navigation-item">
        <XMarkIcon className="w-5 h-5" />
        <span>Close</span>
      </div>
    </div>
  );

  return (
    <div className="drawer-page">
      <Breadcrumb />
      <div className="page-header">
        <h1>Drawer Components</h1>
        <p>
          Slide-out panels that can be opened from any side of the screen. Features gesture support,
          multiple sizes, and smooth animations.
        </p>
      </div>

      <div className="demo-section">
        <Card title="Direction Examples" subtitle="Try opening drawers from different directions">
          <div className="direction-demos">
            <div className="direction-group">
              <h3>Horizontal Drawers</h3>
              <div className="button-group">
                <Button onClick={leftDrawer.open} variant="outline">
                  <ArrowLeftIcon className="w-4 h-4" />
                  Left Drawer
                </Button>
                <Button onClick={rightDrawer.open} variant="outline">
                  Right Drawer
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="direction-group">
              <h3>Vertical Drawers</h3>
              <div className="button-group">
                <Button onClick={topDrawer.open} variant="outline">
                  <ArrowUpIcon className="w-4 h-4" />
                  Top Drawer
                </Button>
                <Button onClick={bottomDrawer.open} variant="outline">
                  Bottom Drawer
                  <ArrowDownIcon className="w-4 h-4" />
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
              <Bars3Icon className="w-4 h-4" />
              Open Navigation Drawer
            </Button>
          </div>
        </Card>
      </div>

      <div className="demo-section">
        <Card title="Features">
          <div className="features-grid">
            <div className="feature">
              <h3>🎯 Multi-Directional</h3>
              <p>Open from left, right, top, or bottom</p>
            </div>
            <div className="feature">
              <h3>👆 Gesture Support</h3>
              <p>Drag to close with velocity thresholds</p>
            </div>
            <div className="feature">
              <h3>📏 Size Variants</h3>
              <p>Small, medium, large, extra large, or full</p>
            </div>
            <div className="feature">
              <h3>🎨 Custom Content</h3>
              <p>Header, content, and footer sections</p>
            </div>
            <div className="feature">
              <h3>⌨️ Keyboard Accessible</h3>
              <p>Focus management and keyboard navigation</p>
            </div>
            <div className="feature">
              <h3>📱 Responsive</h3>
              <p>Adapts to different screen sizes</p>
            </div>
          </div>
        </Card>
      </div>

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

        <div slot="footer" className="drawer-footer">
          <Button onClick={drawerWithContent.close} variant="outline" size="sm">
            Close
          </Button>
          <Button size="sm">Save Changes</Button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerPage;
