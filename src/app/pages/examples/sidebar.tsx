import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './sidebar.scss';

const SidebarPage: React.FC = () => {
  return (
    <div className="sidebar-page">
      <Breadcrumb />
      <Hero
        headline="Sidebar Components"
        description="Collapsible sidebar navigation with smooth animations and responsive behavior."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="component-section">
        <Card className="example-card">
          <div className="example-placeholder">
            <h3>Sidebar Coming Soon</h3>
            <p>
              Collapsible sidebar navigation components with smooth animations, responsive behavior,
              and mobile-friendly interactions will be available in this section.
            </p>
          </div>
        </Card>

        <Card className="example-card">
          <div className="example-placeholder">
            <h3>Features Preview</h3>
            <ul>
              <li>• Collapsible sidebar with smooth animations</li>
              <li>• Responsive behavior for mobile and desktop</li>
              <li>• Multiple sidebar positions (left, right)</li>
              <li>• Nested navigation support</li>
              <li>• Keyboard navigation and accessibility</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SidebarPage;
