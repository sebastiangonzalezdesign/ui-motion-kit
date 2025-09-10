import { useState } from 'react';
import { Toggle } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';

const Toggles = () => {
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    basic: false,
    theme: true,
    notification: false,
    visibility: true,
    wifi: false,
    loading: false,
    disabled: false,
  });

  const handleToggle = (key: string) => (state: boolean) => {
    setToggleStates((prev) => ({ ...prev, [key]: state }));
  };

  return (
    <div className="page">
      <Breadcrumb />
      <Hero
        headline="Toggle Components"
        description="Switch toggles with smooth state transitions and morphing animations using Hero Icons."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Toggle"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Toggle initialState={toggleStates.basic} onToggle={handleToggle('basic')} />
            <Toggle
              initialState={toggleStates.basic}
              onToggle={handleToggle('basic')}
              label="Enable feature"
              description="Turn this on to enable the feature"
            />
          </div>
        }
        code={`import { Toggle } from '../../../components/primitives';

function BasicToggleExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Simple toggle */}
      <Toggle 
        initialState={isEnabled}
        onToggle={setIsEnabled}
      />
      
      {/* Toggle with label */}
      <Toggle 
        initialState={isEnabled}
        onToggle={setIsEnabled}
        label="Enable feature"
        description="Turn this on to enable the feature"
      />
    </div>
  );
}`}
      />

      <CodePreview
        title="Icon Variants with Morphing Animations"
        preview={
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}
          >
            <Toggle
              initialState={toggleStates.theme}
              onToggle={handleToggle('theme')}
              iconType="theme"
              label="Dark Mode"
              description="Switch between light and dark themes"
            />
            <Toggle
              initialState={toggleStates.notification}
              onToggle={handleToggle('notification')}
              iconType="notification"
              label="Push Notifications"
              description="Receive notifications for important updates"
            />
            <Toggle
              initialState={toggleStates.visibility}
              onToggle={handleToggle('visibility')}
              iconType="visibility"
              label="Show Password"
              description="Toggle password visibility"
            />
            <Toggle
              initialState={toggleStates.wifi}
              onToggle={handleToggle('wifi')}
              iconType="wifi"
              label="WiFi Connection"
              description="Enable or disable WiFi connectivity"
            />
          </div>
        }
        code={`import { Toggle } from '../../../components/primitives';

function IconToggleExample() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: false,
    showPassword: true,
    wifi: false
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Toggle 
        initialState={settings.darkMode}
        onToggle={(state) => setSettings(prev => ({ ...prev, darkMode: state }))}
        iconType="theme"
        label="Dark Mode"
        description="Switch between light and dark themes"
      />
      
      <Toggle 
        initialState={settings.notifications}
        onToggle={(state) => setSettings(prev => ({ ...prev, notifications: state }))}
        iconType="notification"
        label="Push Notifications"
        description="Receive notifications for important updates"
      />
      
      <Toggle 
        initialState={settings.showPassword}
        onToggle={(state) => setSettings(prev => ({ ...prev, showPassword: state }))}
        iconType="visibility"
        label="Show Password"
        description="Toggle password visibility"
      />
      
      <Toggle 
        initialState={settings.wifi}
        onToggle={(state) => setSettings(prev => ({ ...prev, wifi: state }))}
        iconType="wifi"
        label="WiFi Connection"
        description="Enable or disable WiFi connectivity"
      />
    </div>
  );
}`}
      />

      <CodePreview
        title="Sizes and Variants"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Sizes</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle size="sm" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Small</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle size="md" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Medium
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle size="lg" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Large</span>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Style Variants</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle variant="default" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Default
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle variant="pill" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pill</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Toggle variant="square" iconType="check" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Square
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
        code={`import { Toggle } from '../../../components/primitives';

function ToggleVariantsExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <h4>Sizes</h4>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Toggle size="sm" iconType="check" />
          <Toggle size="md" iconType="check" />
          <Toggle size="lg" iconType="check" />
        </div>
      </div>

      {/* Style Variants */}
      <div>
        <h4>Style Variants</h4>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Toggle variant="default" iconType="check" />
          <Toggle variant="pill" iconType="check" />
          <Toggle variant="square" iconType="check" />
        </div>
      </div>
    </div>
  );
}`}
      />

      <CodePreview
        title="States and Loading"
        preview={
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}
          >
            <Toggle
              label="Loading State"
              description="Toggle is processing your request"
              loading={true}
              disabled={false}
            />
            <Toggle
              label="Disabled State"
              description="This toggle is disabled"
              disabled={true}
              initialState={true}
            />
            <Toggle
              label="Normal State"
              description="This toggle works normally"
              initialState={toggleStates.basic}
              onToggle={handleToggle('basic')}
            />
          </div>
        }
        code={`import { Toggle } from '../../../components/primitives';

function ToggleStatesExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [normalState, setNormalState] = useState(false);

  const handleAsyncToggle = (state: boolean) => {
    setIsLoading(true);
    // Simulate async operation
    setTimeout(() => {
      setNormalState(state);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Toggle 
        label="Loading State"
        description="Toggle is processing your request"
        loading={isLoading}
      />
      
      <Toggle 
        label="Disabled State"
        description="This toggle is disabled"
        disabled={true}
        initialState={true}
      />
      
      <Toggle 
        label="Normal State"
        description="This toggle works normally"
        initialState={normalState}
        onToggle={handleAsyncToggle}
      />
    </div>
  );
}`}
      />

      <CodePreview
        title="Theme Toggle (Currently Used in Site)"
        preview={
          <div style={{ maxWidth: '400px' }}>
            <Toggle
              initialState={true}
              onToggle={(state) => console.log('Theme changed:', state ? 'light' : 'dark')}
              iconType="theme"
              size="lg"
              label="Theme Toggle"
              description="This is the same toggle used in the site's theme switcher"
            />
          </div>
        }
        code={`import { Toggle } from '../../../components/primitives';

function ThemeToggleExample() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (isLight: boolean) => {
    const newTheme = isLight ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Toggle 
      initialState={theme === 'light'}
      onToggle={handleThemeChange}
      iconType="theme"
      size="lg"
      label="Theme Toggle"
      description="Switch between light and dark themes"
    />
  );
}`}
      />
    </div>
  );
};

export default Toggles;
