import React from 'react';
import { Card } from '../../../components/primitives';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './inputs.scss';

const InputsPage: React.FC = () => {
  return (
    <div className="inputs-page">
      <Breadcrumb />
      <Hero
        headline="Input Components"
        description="Form inputs with validation states and smooth animations."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <div className="demo-section">
        <Card title="Input Components" subtitle="Advanced form input implementations">
          <div className="input-examples">
            <p>Input components are coming soon. This will showcase:</p>
            <ul>
              <li>Text inputs with floating labels</li>
              <li>Validation states and error messages</li>
              <li>Search inputs with icons</li>
              <li>Textarea with auto-resize</li>
              <li>Select dropdowns</li>
              <li>File upload components</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InputsPage;
