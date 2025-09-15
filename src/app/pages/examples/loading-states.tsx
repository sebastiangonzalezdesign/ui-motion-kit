import React, { useState } from 'react';
import { Button } from '../../../components/primitives';
import { Card } from '../../../components/primitives';
import { Spinner } from '../../../components/primitives';
import { Input } from '../../../components/primitives';
import { Checkbox } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Breadcrumb } from '../../../components/navigation';
import { PlayIcon, ArrowPathIcon, Bars3Icon, ChartBarIcon } from '@heroicons/react/24/outline';
import './loading-states.scss';

const LoadingStatesPage: React.FC = () => {
  const [spinnerSize, setSpinnerSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [cardLoading, setCardLoading] = useState(true);
  const [progressValue, setProgressValue] = useState(65);
  const [progressAnimated, setProgressAnimated] = useState(true);
  const [progressType, setProgressType] = useState<'linear' | 'circular' | 'stepped'>('linear');

  const basicSpinnerCode = `import { Spinner } from '../../../components/primitives';

function MyComponent() {
  return (
    <div>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}`;

  const cardSkeletonCode = `import { Card } from '../../../components/primitives';

function MyComponent() {
  return (
    <Card
      loading={true}
      title="Loading Card"
      subtitle="This card is in loading state"
    />
  );
}`;

  const progressIndicatorCode = `import { ProgressIndicator } from '../../../components/primitives';

function MyComponent() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <ProgressIndicator 
        value={75} 
        type="linear" 
        animated={true}
      />
      <ProgressIndicator 
        value={50} 
        type="circular" 
        animated={true}
      />
    </div>
  );
}`;

  const advancedLoadingCode = `import { Spinner, Card, ProgressIndicator } from '../../../components/primitives';

function LoadingDemo() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAsyncOperation = async () => {
    setLoading(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setLoading(false);
  };

  return (
    <div>
      {loading && <Spinner size="lg" />}
      <ProgressIndicator value={progress} animated={loading} />
      <Button onClick={handleAsyncOperation}>
        Start Process
      </Button>
    </div>
  );
}`;

  return (
    <div className="loading-states-page">
      <Breadcrumb />
      <div className="container">
        <header className="page-header">
          <h1>Loading States</h1>
          <p className="page-description">
            Spinners, skeleton screens, and progress indicators with smooth animations. Perfect for
            providing visual feedback during loading operations.
          </p>
        </header>

        <section className="demo-section">
          <h2>Interactive Demo</h2>

          {/* Configuration Panel */}
          <div className="configuration-panel">
            <Card className="card--highlight">
              <h2 className="panel-header">
                <Bars3Icon className="icon" />
                Loading Configuration
              </h2>
              <p className="panel-description">
                Customize loading components and see them in action.
              </p>

              <div className="configuration-grid">
                <div className="config-section">
                  <h4 className="section-header">
                    <ArrowPathIcon className="icon" />
                    Spinner Settings
                  </h4>
                  <div className="form-controls">
                    <div className="control-group">
                      <label className="control-label">Size:</label>
                      <div className="button-group">
                        <Button
                          variant={spinnerSize === 'sm' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSpinnerSize('sm')}
                        >
                          Small
                        </Button>
                        <Button
                          variant={spinnerSize === 'md' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSpinnerSize('md')}
                        >
                          Medium
                        </Button>
                        <Button
                          variant={spinnerSize === 'lg' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSpinnerSize('lg')}
                        >
                          Large
                        </Button>
                      </div>
                    </div>

                    <Checkbox
                      label="Card Loading State"
                      description="Show skeleton loading in card"
                      checked={cardLoading}
                      onChange={(e) => setCardLoading(e.target.checked)}
                      size="md"
                    />
                  </div>
                </div>

                <div className="config-section">
                  <h4 className="section-header">
                    <ChartBarIcon className="icon" />
                    Progress Settings
                  </h4>
                  <div className="form-controls">
                    <Input
                      label="Progress Value (%)"
                      type="number"
                      value={progressValue}
                      onChange={(e) => setProgressValue(Number(e.target.value))}
                      min="0"
                      max="100"
                      size="md"
                    />

                    <div className="control-group">
                      <label className="control-label">Type:</label>
                      <div className="button-group">
                        <Button
                          variant={progressType === 'linear' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setProgressType('linear')}
                        >
                          Linear
                        </Button>
                        <Button
                          variant={progressType === 'circular' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setProgressType('circular')}
                        >
                          Circular
                        </Button>
                        <Button
                          variant={progressType === 'stepped' ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setProgressType('stepped')}
                        >
                          Stepped
                        </Button>
                      </div>
                    </div>

                    <Checkbox
                      label="Animated Progress"
                      description="Enable smooth progress animations"
                      checked={progressAnimated}
                      onChange={(e) => setProgressAnimated(e.target.checked)}
                      size="md"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="demo-card">
            <div className="loading-demo-wrapper">
              <div className="demo-grid">
                <div className="demo-item">
                  <h3>Spinner</h3>
                  <Spinner size={spinnerSize} />
                </div>

                <div className="demo-item">
                  <h3>Card Skeleton</h3>
                  <Card
                    loading={cardLoading}
                    title="Sample Card"
                    subtitle="Card with loading state"
                    badge="Demo"
                    showImagePlaceholder={true}
                  />
                </div>

                <div className="demo-item">
                  <h3>Progress Indicator</h3>
                  <div className="progress-demo">
                    {progressType === 'linear' && (
                      <div className="progress-linear">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${progressValue}%`,
                            transition: progressAnimated ? 'width 0.3s ease' : 'none',
                          }}
                        />
                      </div>
                    )}

                    {progressType === 'circular' && (
                      <div className="progress-circular">
                        <svg width="60" height="60" viewBox="0 0 60 60">
                          <circle
                            cx="30"
                            cy="30"
                            r="25"
                            stroke="var(--border-light)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <circle
                            cx="30"
                            cy="30"
                            r="25"
                            stroke="var(--accent-primary)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 25}`}
                            strokeDashoffset={`${2 * Math.PI * 25 * (1 - progressValue / 100)}`}
                            style={{
                              transition: progressAnimated ? 'stroke-dashoffset 0.3s ease' : 'none',
                            }}
                          />
                        </svg>
                        <span className="progress-text">{progressValue}%</span>
                      </div>
                    )}

                    {progressType === 'stepped' && (
                      <div className="progress-stepped">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`step ${i < progressValue / 20 ? 'completed' : ''}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="examples-section">
          <h2>Usage Examples</h2>

          <CodePreview
            title="Basic Spinners"
            preview={
              <div className="spinner-preview-wrapper">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            }
            code={basicSpinnerCode}
          />

          <CodePreview
            title="Card Skeleton Loading"
            preview={
              <div className="card-preview-wrapper">
                <Card
                  loading={true}
                  title="Loading Card"
                  subtitle="This card shows skeleton state"
                  showImagePlaceholder={true}
                />
              </div>
            }
            code={cardSkeletonCode}
          />

          <CodePreview
            title="Progress Indicators"
            preview={
              <div className="progress-preview-wrapper">
                <div className="progress-item">
                  <h4>Linear Progress</h4>
                  <div className="progress-linear">
                    <div className="progress-bar" style={{ width: '75%' }} />
                  </div>
                </div>

                <div className="progress-item">
                  <h4>Circular Progress</h4>
                  <div className="progress-circular">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        stroke="var(--border-light)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="30"
                        cy="30"
                        r="25"
                        stroke="var(--accent-primary)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 25}`}
                        strokeDashoffset={`${2 * Math.PI * 25 * (1 - 0.6)}`}
                      />
                    </svg>
                    <span className="progress-text">60%</span>
                  </div>
                </div>
              </div>
            }
            code={progressIndicatorCode}
          />

          <CodePreview
            title="Advanced Loading Example"
            preview={
              <div className="advanced-loading-wrapper">
                <p>Combining multiple loading states for complex operations</p>
              </div>
            }
            code={advancedLoadingCode}
          />
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <ArrowPathIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Smooth Animations</h4>
                  <p className="benefit-description">
                    All loading states use smooth CSS animations for better UX
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <ChartBarIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Multiple Types</h4>
                  <p className="benefit-description">
                    Spinners, skeletons, and progress indicators for different scenarios
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <PlayIcon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Customizable</h4>
                  <p className="benefit-description">
                    Size variants and configurable progress indicators
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Bars3Icon className="benefit-icon-svg" />
                </div>
                <div>
                  <h4 className="benefit-title">Accessible</h4>
                  <p className="benefit-description">ARIA attributes and reduced motion support</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingStatesPage;
