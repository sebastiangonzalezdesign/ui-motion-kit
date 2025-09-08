import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './toggles.scss';

const TogglesPage: React.FC = () => {
  return (
    <div className="toggles-page">
      <Breadcrumb />
      <Hero
        headline="Toggle Components"
        description="Switch toggles with smooth state transitions and animations."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Toggle Components" subtitle="Various toggle switch implementations">
          <div className="toggle-examples">
            <p>Toggle components are coming soon. This will showcase:</p>
            <ul>
              <li>Basic toggle switches</li>
              <li>Animated state transitions</li>
              <li>Different sizes and variants</li>
              <li>Disabled states</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TogglesPage;
