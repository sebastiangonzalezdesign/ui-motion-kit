import { useState } from 'react';
import './CopyButton.scss';

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md';
  variant?: 'default' | 'minimal';
}

const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  className = '',
  size = 'md',
  variant = 'default',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-button copy-button--${size} copy-button--${variant} ${className}`}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="copy-icon copy-icon--success"
        >
          <polyline points="20,6 9,17 4,12" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="copy-icon"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      )}
      {variant === 'default' && <span className="copy-text">{copied ? 'Copied!' : 'Copy'}</span>}
    </button>
  );
};

export default CopyButton;
