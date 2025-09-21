import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../../components/primitives';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import './MotionShowcase.scss';

const MotionShowcase = () => {
  const motionTokens = [
    { name: '--motion-fast', duration: 150, description: 'Quick feedback' },
    { name: '--motion-normal', duration: 300, description: 'Standard transitions' },
    { name: '--motion-slow', duration: 500, description: 'Complex animations' },
  ];

  const easingTokens = [
    {
      name: '--ease-standard',
      curve: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      description: 'General UI',
    },
    {
      name: '--ease-spring',
      curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      description: 'Playful bounce',
    },
    {
      name: '--ease-emphasized',
      curve: 'cubic-bezier(0.2, 0, 0, 1)',
      description: 'Strong emphasis',
    },
  ];

  return (
    <motion.section
      className="motion-showcase"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="motion-showcase-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="text-heading-xl">Motion Tokens in Action</h2>
          <p className="text-body-lg">
            Systematized motion design with semantic timing and easing tokens
          </p>
        </motion.div>

        {/* Duration Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="duration-tokens-section"
        >
          <h3>Duration Tokens</h3>
          <div className="duration-tokens-grid">
            {motionTokens.map((token, index) => (
              <div key={token.name} className="duration-token-card">
                <Card>
                  <div className="token-header">
                    <code className="token-name">{token.name}</code>
                    <span className="token-duration">{token.duration}ms</span>
                  </div>
                  <p className="token-description">{token.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: token.duration / 1000, ease: 'easeOut' }}
                    className="duration-demo"
                    style={{
                      background: `linear-gradient(45deg, hsl(${220 + index * 30}, 70%, 60%), hsl(${240 + index * 30}, 70%, 70%))`,
                    }}
                  >
                    Hover to test {token.duration}ms
                  </motion.div>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Easing Tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="easing-tokens-section"
        >
          <h3>Easing Tokens</h3>
          <div className="easing-tokens-grid">
            {easingTokens.map((token, index) => (
              <div key={token.name} className="easing-token-card">
                <Card>
                  <div className="token-header">
                    <code className="token-name">{token.name}</code>
                  </div>
                  <p className="token-description">{token.description}</p>
                  <div className="easing-demo-container">
                    <motion.div
                      whileHover={{ x: 40 }}
                      transition={{
                        duration: 0.6,
                        ease:
                          token.curve === 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                            ? [0.34, 1.56, 0.64, 1]
                            : token.curve === 'cubic-bezier(0.2, 0, 0, 1)'
                              ? [0.2, 0, 0, 1]
                              : [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="easing-demo"
                      style={{
                        background: `hsl(${280 + index * 40}, 70%, 60%)`,
                      }}
                    >
                      →
                    </motion.div>
                    <div className="easing-demo-hover-area" />
                  </div>
                  <p className="easing-instruction">Hover to see easing curve</p>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="motion-cta-section"
        >
          <Link to="/docs/design-tokens" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button variant="outline" size="md" icon={<ArrowRightIcon />}>
              Explore Full Motion System
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MotionShowcase;
