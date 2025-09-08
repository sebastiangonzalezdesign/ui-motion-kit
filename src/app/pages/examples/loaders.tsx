import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './loaders.scss';

const LoadersPage: React.FC = () => {
  return (
    <div className="loaders-page">
      <Breadcrumb />
      <Hero
        headline="Loader Components"
        description="Spinners, skeleton screens, and progress indicators with smooth animations."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Loading States" subtitle="Various loading and progress indicators">
          <div className="loader-examples">
            <p>Loading components are coming soon. This will showcase:</p>
            <ul>
              <li>Spinning loading indicators</li>
              <li>Skeleton loading screens</li>
              <li>Progress bars and circles</li>
              <li>Pulse animations</li>
              <li>Loading overlays</li>
              <li>Shimmer effects</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoadersPage;
