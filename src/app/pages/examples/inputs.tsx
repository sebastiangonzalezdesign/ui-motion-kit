import { useState } from 'react';
import { Input } from '../../../components/primitives';
import { CodePreview } from '../../components';
import { Hero } from '../../components';
import { Breadcrumb } from '../../../components/navigation';

const Inputs = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    search: '',
    phone: '',
    name: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (formData.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handlePasswordBlur = () => {
    if (formData.password && formData.password.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }));
    } else if (formData.password) {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const simulateAsyncValidation = (field: string) => {
    setLoading((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [field]: false }));
      if (field === 'email' && formData.email === 'test@example.com') {
        setErrors((prev) => ({ ...prev, email: 'This email is already taken' }));
      } else if (field === 'email' && formData.email && validateEmail(formData.email)) {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }, 1500);
  };

  return (
    <div className="page">
      <Breadcrumb />
      <Hero
        headline="Input Components"
        description="Form inputs with validation states, animations, and accessibility features."
        backgroundColor="brand-soft"
        borderRadius="md"
        size="md"
        showIllustrations={false}
      />

      <CodePreview
        title="Basic Input with Label"
        preview={
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange('name')}
              hint="This will be displayed on your profile"
            />
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function BasicInputExample() {
  const [name, setName] = useState('');

  return (
    <Input
      label="Full Name"
      placeholder="Enter your full name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      hint="This will be displayed on your profile"
    />
  );
}`}
      />

      <CodePreview
        title="Input with Icons"
        preview={
          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input
              label="Email Address"
              type="email"
              icon="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onBlur={handleEmailBlur}
              error={errors.email}
              loading={loading.email}
            />
            <Input
              label="Phone Number"
              type="tel"
              icon="phone"
              value={formData.phone}
              onChange={handleInputChange('phone')}
            />
            <Input
              label="Search"
              type="search"
              icon="search"
              value={formData.search}
              onChange={handleInputChange('search')}
              clearable
              onClear={() => setFormData((prev) => ({ ...prev, search: '' }))}
            />
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function IconInputExample() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    search: ''
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input
        label="Email Address"
        type="email"
        icon="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
      <Input
        label="Phone Number"
        type="tel"
        icon="phone"
        placeholder="+1 (555) 123-4567"
        value={formData.phone}
        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
      />
      <Input
        label="Search"
        type="search"
        icon="search"
        placeholder="Search for anything..."
        value={formData.search}
        onChange={(e) => setFormData(prev => ({ ...prev, search: e.target.value }))}
        clearable
        onClear={() => setFormData(prev => ({ ...prev, search: '' }))}
      />
    </div>
  );
}`}
      />

      <CodePreview
        title="Label Variants"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Floating Labels (MUI-style)
              </h4>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
              >
                <Input
                  label="Email Address"
                  labelVariant="floating"
                  variant="outlined"
                  type="email"
                  icon="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />
                <Input
                  label="Full Name"
                  labelVariant="floating"
                  variant="filled"
                  icon="user"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />
                <Input
                  label="Search"
                  labelVariant="floating"
                  variant="default"
                  icon="search"
                  value={formData.search}
                  onChange={handleInputChange('search')}
                />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Fixed Labels</h4>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
              >
                <Input
                  label="Email Address"
                  labelVariant="fixed"
                  variant="outlined"
                  type="email"
                  icon="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />
                <Input
                  label="Phone Number"
                  labelVariant="fixed"
                  variant="filled"
                  icon="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                />
              </div>
            </div>
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function LabelVariantsExample() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    search: '',
    phone: ''
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Floating Labels (MUI-style) */}
      <div>
        <h4>Floating Labels</h4>
        <Input
          label="Email Address"
          labelVariant="floating"
          variant="outlined"
          type="email"
          icon="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          label="Full Name"
          labelVariant="floating"
          variant="filled"
          icon="user"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      {/* Fixed Labels */}
      <div>
        <h4>Fixed Labels</h4>
        <Input
          label="Email Address"
          labelVariant="fixed"
          variant="outlined"
          type="email"
          icon="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          label="Phone Number"
          labelVariant="fixed"
          variant="filled"
          icon="phone"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>
    </div>
  );
}`}
      />

      <CodePreview
        title="Password Input with Validation"
        preview={
          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input
              label="Password"
              type="password"
              icon="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              onBlur={handlePasswordBlur}
              error={errors.password}
              hint="Password must be at least 8 characters"
            />
            <Input
              label="Confirm Password"
              type="password"
              icon="password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              error={
                formData.confirmPassword && formData.password !== formData.confirmPassword
                  ? 'Passwords do not match'
                  : ''
              }
              success={
                formData.confirmPassword && formData.password === formData.confirmPassword
                  ? 'Passwords match!'
                  : ''
              }
            />
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function PasswordInputExample() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordBlur = () => {
    if (password && password.length < 8) {
      setError('Password must be at least 8 characters');
    } else {
      setError('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input
        label="Password"
        type="password"
        icon="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePasswordBlur}
        error={error}
        hint="Password must be at least 8 characters"
      />
      <Input
        label="Confirm Password"
        type="password"
        icon="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={
          confirmPassword && password !== confirmPassword
            ? 'Passwords do not match'
            : ''
        }
        success={
          confirmPassword && password === confirmPassword
            ? 'Passwords match!'
            : ''
        }
      />
    </div>
  );
}`}
      />

      <CodePreview
        title="Input Sizes and Variants"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Sizes</h4>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
              >
                <Input label="Small Input" size="sm" icon="user" />
                <Input label="Medium Input (Default)" size="md" icon="user" />
                <Input label="Large Input" size="lg" icon="user" />
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Variants</h4>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
              >
                <Input label="Default Variant" variant="default" />
                <Input label="Outlined Variant" variant="outlined" />
                <Input label="Filled Variant" variant="filled" />
              </div>
            </div>
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function InputVariantsExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <h4>Sizes</h4>
        <Input size="sm" label="Small Input" placeholder="Small size" />
        <Input size="md" label="Medium Input" placeholder="Medium size" />
        <Input size="lg" label="Large Input" placeholder="Large size" />
      </div>

      {/* Variants */}
      <div>
        <h4>Variants</h4>
        <Input variant="default" label="Default" placeholder="Default style" />
        <Input variant="outlined" label="Outlined" placeholder="Outlined style" />
        <Input variant="filled" label="Filled" placeholder="Filled style" />
      </div>
    </div>
  );
}`}
      />

      <CodePreview
        title="Async Validation and Loading States"
        preview={
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Email Address"
              type="email"
              icon="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onBlur={() => simulateAsyncValidation('email')}
              error={errors.email}
              loading={loading.email}
              hint="Try entering 'test@example.com' to see error state"
            />
          </div>
        }
        code={`import { Input } from '../../../components/primitives';

function AsyncValidationExample() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsyncValidation = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com') {
        setError('This email is already taken');
      } else {
        setError('');
      }
    }, 1500);
  };

  return (
    <Input
      label="Email Address"
      type="email"
      icon="email"
      placeholder="Try: test@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onBlur={handleAsyncValidation}
      error={error}
      loading={loading}
      hint="Try entering 'test@example.com' to see error state"
    />
  );
}`}
      />
    </div>
  );
};

export default Inputs;
