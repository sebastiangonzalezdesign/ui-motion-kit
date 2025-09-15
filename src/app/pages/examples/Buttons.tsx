import { useState } from 'react';
import { Button } from '../../../components/primitives';
import { SmartButton } from '../../../components/primitives';
import { Toggle } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Card } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';
import { Hero } from '../../components';
import { IconButton } from '../../../components/primitives';
import { Breadcrumb } from '../../../components/navigation';
import './Buttons.scss';
import {
  CheckCircleIcon,
  LightBulbIcon,
  XMarkIcon,
  HeartIcon,
  StarIcon,
  PlayIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [toggleState, setToggleState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <style>{`
        .buttons-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
        }
        
        .link-primary {
          color: var(--text-accent);
          font-weight: var(--font-weight-medium);
          text-decoration: underline;
          transition: color var(--transition-fast), text-decoration-color var(--transition-fast);
        }
        
        .link-primary:hover {
          color: var(--accent-primary-hover);
          text-decoration: none;
        }
        
        /* Grid layouts */
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-4);
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-4);
        }
        
        .grid-2.gap-6 {
          gap: var(--spacing-6);
        }
        
        /* Spacing utilities */
        .mb-4 {
          margin-bottom: var(--spacing-4);
        }
        
        .mt-6 {
          margin-top: var(--spacing-6);
        }
        
        .p-4 {
          padding: var(--spacing-4);
        }
        
        .p-6 {
          padding: var(--spacing-6);
        }
        
        .ml-1 {
          margin-left: var(--spacing-1);
        }
        
        /* Typography */
        .text-lg {
          font-size: var(--font-size-lg);
          line-height: var(--line-height-snug);
        }
        
        .text-sm {
          font-size: var(--font-size-sm);
          line-height: var(--line-height-snug);
        }
        
        .font-semibold {
          font-weight: var(--font-weight-semibold);
        }
        
        /* Tip box styling */
        .tip-box {
          background-color: var(--feedback-info-light);
          color: var(--text-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-4);
        }
        
        [data-theme='dark'] .tip-box {
          background-color: var(--feedback-info-light);
          border-color: var(--border-medium);
        }
        
        /* Muted text */
        .muted-text {
          color: var(--text-tertiary);
          font-size: var(--font-size-sm);
        }
        
        /* Example block */
        .example-block {
          display: block;
          margin-bottom: var(--spacing-2);
          font-weight: var(--font-weight-medium);
        }
      `}</style>
      <Breadcrumb />
      <Hero
        headline="Button Components"
        description="Interactive buttons with smooth hover animations and click feedback."
        backgroundColor="brand-medium"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Interactive Button"
        preview={
          <>
            <Button onClick={() => setIsModalOpen(true)}>Click Me</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="modal-content-center">
                <CheckCircleIcon className="success-icon" />
                <h2 className="modal-title">Button Clicked!</h2>
                <p className="modal-description">
                  You successfully clicked the button! This is a custom modal with smooth
                  animations.
                </p>
                <div className="modal-actions">
                  <Button size="md" onClick={() => setIsModalOpen(false)}>
                    Close Modal
                  </Button>
                </div>
              </div>
            </Modal>
          </>
        }
        code={`// BasicButtonExample.jsx
import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../../../components/primitives';
import { Modal } from '../../../components/feedback';

export default function BasicButtonExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Click Me</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content-center">
          <CheckCircleIcon className="success-icon" />
          <h2 className="modal-title">Button Clicked!</h2>
          <p className="modal-description">You successfully clicked the button! This is a custom modal with smooth animations.</p>
          <div className="modal-actions">
            <Button size="md" onClick={() => setIsModalOpen(false)}>Close Modal</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
`}
      />

      <CodePreview
        title="Counter Button with State"
        preview={<Button onClick={() => setCount(count + 1)}>Count: {count}</Button>}
        code={`import { useState } from 'react';
import { Button } from '../../../components/primitives';

const [count, setCount] = useState(0);

// ...

<Button onClick={() => setCount(count + 1)}>
  Count: {count}
</Button>`}
      />

      <CodePreview
        title="Toggle Switch with Heroicons"
        preview={
          <div className="grid-2">
            <div>
              <span>Status: {toggleState ? 'ON' : 'OFF'}</span>
            </div>
            <div>
              <Toggle initialState={toggleState} onToggle={setToggleState} />
            </div>
          </div>
        }
        code={`// ToggleExample.jsx
import { useState } from 'react';
import { Toggle } from '../../../components/primitives';

export default function ToggleExample() {
  const [state, setState] = useState(false);

  return (
    <div className="grid-2">
      <div>
        <span>Status: {state ? 'ON' : 'OFF'}</span>
      </div>
      <div>
        <Toggle initialState={state} onToggle={setState} />
      </div>
    </div>
  );
}
`}
      />

      <CodePreview
        title="Icon Button Examples"
        preview={
          <div className="grid-2">
            <div>
              <strong>Variants</strong>
              <div className="grid-3">
                <IconButton icon={XMarkIcon} aria-label="Close" />
                <IconButton icon={HeartIcon} variant="outline" aria-label="Like" />
                <IconButton icon={StarIcon} variant="ghost" aria-label="Favorite" />
                <IconButton icon={Cog6ToothIcon} variant="default" aria-label="Settings" />
              </div>
            </div>

            <div>
              <strong>Sizes</strong>
              <div className="grid-3">
                <IconButton icon={PlayIcon} size="sm" aria-label="Play small" />
                <IconButton icon={PlayIcon} size="md" aria-label="Play medium" />
                <IconButton icon={PlayIcon} size="lg" aria-label="Play large" />
              </div>

              <strong className="example-block">States</strong>
              <div>
                <IconButton icon={HeartIcon} aria-label="Like" />
                <span className="muted-text ml-1">Hover & Press</span>
              </div>
            </div>
          </div>
        }
        code={`// IconButtonExample.jsx
import { IconButton } from '../../../components/primitives';
import { XMarkIcon, HeartIcon, StarIcon, Cog6ToothIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function IconButtonExample() {
  return (
    <div className="grid-2">
      {/* Variants */}
      <IconButton icon={XMarkIcon} aria-label="Close" />
      <IconButton icon={HeartIcon} variant="outline" aria-label="Like" />
      <IconButton icon={StarIcon} variant="ghost" aria-label="Favorite" />
      <IconButton icon={Cog6ToothIcon} variant="default" aria-label="Settings" />

      {/* Sizes */}
      <IconButton icon={PlayIcon} size="sm" aria-label="Play small" />
      <IconButton icon={PlayIcon} size="md" aria-label="Play medium" />
      <IconButton icon={PlayIcon} size="lg" aria-label="Play large" />
    </div>
  );
}
`}
      />

      <CodePreview
        title="Experience System - Smart Button"
        preview={
          <div className="p-6">
            <div className="grid-2 gap-6">
              <div>
                <h4 className="mb-4 text-lg font-semibold">Context-Aware Behavior</h4>
                <div className="buttons-group">
                  <SmartButton
                    intent="primary-action"
                    userJourneyStage="discovery"
                    criticality="high"
                  >
                    Get Started
                  </SmartButton>
                  <SmartButton
                    intent="primary-action"
                    userJourneyStage="purchase"
                    criticality="critical"
                  >
                    Complete Purchase
                  </SmartButton>
                  <SmartButton variant="danger" intent="destructive" flowPosition="confirmation">
                    Delete Account
                  </SmartButton>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold">Adaptive Variants</h4>
                <div className="buttons-group">
                  <SmartButton intent="primary-action" criticality="critical" flowPosition="entry">
                    Urgent Action
                  </SmartButton>
                  <SmartButton
                    intent="secondary-action"
                    criticality="low"
                    flowPosition="middle"
                    variant="outline"
                  >
                    Optional Task
                  </SmartButton>
                  <SmartButton
                    intent="navigation"
                    criticality="medium"
                    userJourneyStage="evaluation"
                    variant="outline"
                  >
                    Learn More
                  </SmartButton>
                </div>
                <div className="mt-6 p-4 tip-box">
                  <p className="text-sm">
                    <strong>💡 Pro Tip:</strong> For comprehensive Smart Button examples with
                    adaptive behavior, accessibility features, and real-time configuration, visit
                    the
                    <a href="/examples/experience-demo" className="link-primary">
                      Experience Demo
                    </a>{' '}
                    page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        code={`// SmartButtonExample.jsx
import { SmartButton } from '../../../components/primitives';

export default function SmartButtonExample() {
  return (
    <div>
      {/* Context-aware buttons adapt their appearance and behavior */}
      <SmartButton 
        intent="primary-action" 
        userJourneyStage="discovery"
        criticality="high"
      >
        Get Started
      </SmartButton>
      
      <SmartButton 
        intent="primary-action" 
        userJourneyStage="purchase"
        criticality="critical"
      >
        Complete Purchase
      </SmartButton>
      
      <SmartButton 
        intent="destructive" 
        criticality="high"
        flowPosition="confirmation"
      >
        Delete Account
      </SmartButton>
      
      {/* For comprehensive examples with adaptive behavior, 
          accessibility features, and real-time configuration, 
          visit the Experience Demo page */}
    </div>
  );
}`}
      />

      <Card className="card--highlight ">
        <h3>
          <LightBulbIcon
            style={{
              width: '1.25rem',
              height: '1.25rem',
              display: 'inline',
              marginRight: '0.5rem',
            }}
          />
          Pro Tip
        </h3>
        <p>
          The SmartButton component is part of the revolutionary Experience System - buttons that
          understand user intent and adapt their behavior automatically.
        </p>
      </Card>
    </div>
  );
};

export default Buttons;
