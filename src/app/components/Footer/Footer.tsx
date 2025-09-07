import { Button } from '../../../components/primitives';
import { SparklesIcon } from '@heroicons/react/24/outline';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Branding */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg
              width="32"
              height="16"
              viewBox="0 0 48 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-mini"
            >
              <path
                d="M2.4109 4.5C2.4109 3.39543 3.30633 2.5 4.4109 2.5V2.5C5.51547 2.5 6.4109 3.39543 6.4109 4.5V20.5C6.4109 21.6046 5.51547 22.5 4.4109 22.5V22.5C3.30633 22.5 2.4109 21.6046 2.4109 20.5V4.5Z"
                fill="currentColor"
              />
              <path
                d="M28.4109 4.5C28.4109 3.39543 29.3063 2.5 30.4109 2.5V2.5C31.5155 2.5 32.4109 3.39543 32.4109 4.5V20.5C32.4109 21.6046 31.5155 22.5 30.4109 22.5V22.5C29.3063 22.5 28.4109 21.6046 28.4109 20.5V4.5Z"
                fill="currentColor"
              />
              <path
                d="M30.143 14.9641C29.1864 14.4118 28.8586 13.1886 29.4109 12.2321C29.9632 11.2755 31.1864 10.9477 32.143 11.5L43.4109 19.0359C44.3675 19.5882 44.6952 20.8114 44.143 21.7679C43.5907 22.7245 42.3675 23.0523 41.4109 22.5L30.143 14.9641Z"
                fill="currentColor"
              />
              <path
                d="M32.6535 14.3072C31.8725 15.0882 30.6062 15.0882 29.8251 14.3072C29.0441 13.5261 29.0441 12.2598 29.8251 11.4787L40.0206 2.54517C40.8016 1.76412 42.068 1.76412 42.849 2.54517C43.6301 3.32622 43.6301 4.59255 42.849 5.37359L32.6535 14.3072Z"
                fill="currentColor"
              />
              <path
                d="M6.4109 4.5C6.4109 7.16182 9.27879 10.5 14.4109 10.5C19.543 10.5 22.4109 7.16182 22.4109 4.5V4.5C22.4109 3.39543 23.3063 2.5 24.4109 2.5V2.5C25.5155 2.5 26.4109 3.39543 26.4109 4.5V4.5C26.4109 10.0228 21.0383 14.5 14.4109 14.5C7.78349 14.5 2.4109 10.0228 2.4109 4.5V4.5C2.4109 3.39543 3.30633 2.5 4.4109 2.5V2.5C5.51547 2.5 6.4109 3.39543 6.4109 4.5V4.5Z"
                fill="currentColor"
              />
              <circle cx="24.4109" cy="14.5" r="2" fill="currentColor" />
              <path
                d="M26.4109 20.5C26.4109 21.6046 25.5155 22.5 24.4109 22.5V22.5C23.3063 22.5 22.4109 21.6046 22.4109 20.5V17.959C22.9998 18.3002 23.6813 18.5 24.4109 18.5C25.1405 18.5 25.822 18.3002 26.4109 17.959V20.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="footer-tagline">
              UI Motion Kit — micro-interactions built with React, SCSS & Framer Motion
            </span>
          </div>
        </div>

        {/* Center Section - Links */}
        <div className="footer-links">
          <nav className="footer-nav">
            <a
              href="https://github.com/sebastiangonzalezdesign/motion-ui-kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="https://sebastiangonzalez.design/" target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </nav>
        </div>

        {/* Right Section - Upgrade CTA */}
        <div className="footer-cta">
          <a
            href="https://sebastiangonzalez.design/motion-ui-kit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'block',
              maxWidth: '200px',
              margin: '0 auto',
            }}
          >
            <Button size="sm" icon={<SparklesIcon />}>
              Upgrade to Pro
            </Button>
          </a>
          <p className="cta-subtitle">8+ advanced components & motion tokens</p>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="footer-copyright">© 2025 Sebastian González. Made with ❤️ & Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
