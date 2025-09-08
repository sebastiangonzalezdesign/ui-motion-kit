import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './micro-interactions.scss';

const MicroInteractionsPage: React.FC = () => {
  return (
    <div className="micro-interactions-page">
      <Breadcrumb />
      <Hero
        headline="Micro-interactions"
        description="Delightful micro-animations and hover effects that enhance user experience."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Micro-interactions" subtitle="Small animations with big impact">
          <div className="micro-examples">
            <p>Micro-interaction components are coming soon. This will showcase:</p>
            <ul>
              <li>Button hover and click animations</li>
              <li>Icon transitions and morphing</li>
              <li>Loading state micro-animations</li>
              <li>Form input focus effects</li>
              <li>Card hover interactions</li>
              <li>Scroll-triggered animations</li>
              <li>Success/error feedback animations</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MicroInteractionsPage;
