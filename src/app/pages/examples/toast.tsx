import React, { useState } from 'react';
import { useToast } from '../../../components/feedback';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import './toast.scss';

const ToastPage: React.FC = () => {
  const { toast, success, error, warning, info, setPosition, dismissAll, state } = useToast();
  const [selectedType, setSelectedType] = useState<'success' | 'error' | 'warning' | 'info'>(
    'success'
  );
  const [selectedPosition, setSelectedPosition] = useState(state.position);
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('This is a toast notification');
  const [duration, setDuration] = useState(5000);
  const [dismissible, setDismissible] = useState(true);

  const handleShowToast = () => {
    const options = {
      title: customTitle || undefined,
      duration,
      dismissible,
      position: selectedPosition,
    };

    switch (selectedType) {
      case 'success':
        success(customMessage, options);
        break;
      case 'error':
        error(customMessage, options);
        break;
      case 'warning':
        warning(customMessage, options);
        break;
      case 'info':
        info(customMessage, options);
        break;
    }
  };

  const handleShowWithAction = () => {
    toast(customMessage, {
      type: selectedType,
      title: customTitle || undefined,
      duration: 0, // Don't auto-dismiss
      dismissible: true,
      action: {
        label: 'Undo',
        onClick: () => {
          success('Action completed!');
        },
      },
    });
  };

  const handleChangePosition = (position: typeof selectedPosition) => {
    setSelectedPosition(position);
    setPosition(position);
  };

  // Code examples
  const basicUsageCode = `import { useToast } from '../../../components/feedback';

function MyComponent() {
  const { success, error, warning, info } = useToast();

  const handleSuccess = () => {
    success('Operation completed successfully!');
  };

  const handleError = () => {
    error('Something went wrong!');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  );
}`;

  const advancedUsageCode = `import { useToast } from '../../../components/feedback';

function MyComponent() {
  const { toast } = useToast();

  const handleWithAction = () => {
    toast('File deleted successfully', {
      type: 'success',
      title: 'File Management',
      duration: 0, // Don't auto-dismiss
      action: {
        label: 'Undo',
        onClick: () => {
          // Restore file logic
          toast('File restored!', { type: 'info' });
        }
      }
    });
  };

  return <button onClick={handleWithAction}>Delete File</button>;
}`;

  const providerSetupCode = `import { ToastProvider } from '../../../components/feedback';

function App() {
  return (
    <ToastProvider defaultPosition="top-right" maxToasts={5}>
      <YourAppContent />
    </ToastProvider>
  );
}`;

  return (
    <div className="toast-page">
      <Breadcrumb />
      <h1>Toast Notifications</h1>
      <p className="page-description">
        A flexible toast notification system with multiple types, positions, auto-dismiss, custom
        actions, and smooth animations. Perfect for user feedback and status updates.
      </p>

      {/* Interactive Demo */}
      <section className="interactive-demo">
        <h2>Interactive Demo</h2>

        <div className="demo-controls">
          <h3>Toast Configuration</h3>

          <div className="control-group">
            <label>Toast Type</label>
            <div className="button-group">
              {(['success', 'error', 'warning', 'info'] as const).map((type) => (
                <button
                  key={type}
                  className={selectedType === type ? 'active' : ''}
                  onClick={() => setSelectedType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>Position</label>
            <div className="button-group">
              {(
                [
                  'top-left',
                  'top-center',
                  'top-right',
                  'bottom-left',
                  'bottom-center',
                  'bottom-right',
                ] as const
              ).map((position) => (
                <button
                  key={position}
                  className={selectedPosition === position ? 'active' : ''}
                  onClick={() => handleChangePosition(position)}
                >
                  {position.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label htmlFor="title">Custom Title (optional)</label>
            <input
              id="title"
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="Enter toast title..."
            />
          </div>

          <div className="control-group">
            <label htmlFor="message">Message</label>
            <input
              id="message"
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Enter toast message..."
            />
          </div>

          <div className="control-group">
            <label htmlFor="duration">Auto-dismiss Duration (ms)</label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min="0"
              step="1000"
            />
            <small>Set to 0 to disable auto-dismiss</small>
          </div>

          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={dismissible}
                onChange={(e) => setDismissible(e.target.checked)}
              />
              Show dismiss button
            </label>
          </div>
        </div>

        <div className="demo-actions">
          <Button onClick={handleShowToast} variant="primary">
            Show Toast
          </Button>
          <Button onClick={handleShowWithAction} variant="outline">
            Toast with Action
          </Button>
          <Button onClick={dismissAll} variant="outline">
            Dismiss All ({state.toasts.length})
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <Card>
            <h3>Multiple Types</h3>
            <p>Success, error, warning, and info variants with distinct styling and icons.</p>
          </Card>

          <Card>
            <h3>Flexible Positioning</h3>
            <p>Six position options: top/bottom × left/center/right combinations.</p>
          </Card>

          <Card>
            <h3>Auto-dismiss</h3>
            <p>Configurable auto-dismiss timing with manual override options.</p>
          </Card>

          <Card>
            <h3>Custom Actions</h3>
            <p>Add action buttons for user interactions like undo operations.</p>
          </Card>

          <Card>
            <h3>Stack Management</h3>
            <p>Intelligent stacking with configurable maximum limits.</p>
          </Card>

          <Card>
            <h3>Accessibility</h3>
            <p>ARIA live regions, keyboard navigation, and screen reader support.</p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section className="code-examples">
        <h2>Usage Examples</h2>

        <CodePreview
          title="Provider Setup"
          preview={
            <div className="code-example">
              <p>Wrap your app with ToastProvider to enable toast notifications:</p>
            </div>
          }
          code={providerSetupCode}
        />

        <CodePreview
          title="Basic Usage"
          preview={
            <div className="toast-demo-basic">
              <Button
                onClick={() => success('Success message!')}
                variant="primary"
                style={{ marginRight: '0.5rem' }}
              >
                Success
              </Button>
              <Button
                onClick={() => error('Error message!')}
                variant="outline"
                style={{ marginRight: '0.5rem' }}
              >
                Error
              </Button>
              <Button
                onClick={() => warning('Warning message!')}
                variant="outline"
                style={{ marginRight: '0.5rem' }}
              >
                Warning
              </Button>
              <Button onClick={() => info('Info message!')} variant="outline">
                Info
              </Button>
            </div>
          }
          code={basicUsageCode}
        />

        <CodePreview
          title="Advanced Features"
          preview={
            <div className="toast-demo-advanced">
              <Button
                onClick={() =>
                  toast('Task completed!', {
                    type: 'success',
                    title: 'Operation Status',
                    action: {
                      label: 'View Details',
                      onClick: () => info('Details opened!'),
                    },
                  })
                }
                variant="primary"
              >
                Toast with Action
              </Button>
            </div>
          }
          code={advancedUsageCode}
        />
      </section>

      {/* API Reference */}
      <section className="api-reference">
        <h2>API Reference</h2>

        <div className="api-section">
          <h3>useToast Hook</h3>
          <div className="api-table">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>success</code>
                  </td>
                  <td>
                    <code>(message, options?)</code>
                  </td>
                  <td>Show success toast</td>
                </tr>
                <tr>
                  <td>
                    <code>error</code>
                  </td>
                  <td>
                    <code>(message, options?)</code>
                  </td>
                  <td>Show error toast</td>
                </tr>
                <tr>
                  <td>
                    <code>warning</code>
                  </td>
                  <td>
                    <code>(message, options?)</code>
                  </td>
                  <td>Show warning toast</td>
                </tr>
                <tr>
                  <td>
                    <code>info</code>
                  </td>
                  <td>
                    <code>(message, options?)</code>
                  </td>
                  <td>Show info toast</td>
                </tr>
                <tr>
                  <td>
                    <code>dismiss</code>
                  </td>
                  <td>
                    <code>(id)</code>
                  </td>
                  <td>Dismiss specific toast</td>
                </tr>
                <tr>
                  <td>
                    <code>dismissAll</code>
                  </td>
                  <td>
                    <code>()</code>
                  </td>
                  <td>Dismiss all toasts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="api-section">
          <h3>Toast Options</h3>
          <div className="api-table">
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>title</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>
                    <code>undefined</code>
                  </td>
                  <td>Optional toast title</td>
                </tr>
                <tr>
                  <td>
                    <code>duration</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>
                    <code>5000</code>
                  </td>
                  <td>Auto-dismiss duration in ms</td>
                </tr>
                <tr>
                  <td>
                    <code>dismissible</code>
                  </td>
                  <td>
                    <code>boolean</code>
                  </td>
                  <td>
                    <code>true</code>
                  </td>
                  <td>Show dismiss button</td>
                </tr>
                <tr>
                  <td>
                    <code>action</code>
                  </td>
                  <td>
                    <code>object</code>
                  </td>
                  <td>
                    <code>undefined</code>
                  </td>
                  <td>Action button configuration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToastPage;
