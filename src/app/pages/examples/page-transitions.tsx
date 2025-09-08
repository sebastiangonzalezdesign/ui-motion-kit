import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './page-transitions.scss';

const PageTransitionsPage: React.FC = () => {
  return (
    <div className="page-transitions-page">
      <Breadcrumb />
      <Hero
        headline="Page Transitions"
        description="Smooth page and route transition animations for seamless navigation."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Page Transitions" subtitle="Smooth navigation experiences">
          <div className="transition-examples">
            <p>Page transition components are coming soon. This will showcase:</p>
            <ul>
              <li>Fade in/out transitions</li>
              <li>Slide transitions (left, right, up, down)</li>
              <li>Scale and zoom effects</li>
              <li>Morphing transitions</li>
              <li>Stagger animations</li>
              <li>Custom easing curves</li>
              <li>Loading state transitions</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PageTransitionsPage;
