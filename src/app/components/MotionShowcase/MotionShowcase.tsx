import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, Button } from '../../../components/primitives';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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
      style={{ padding: '4rem 0' }}
    >
      <div
        className="motion-showcase-content"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}
      >
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
          style={{ marginBottom: '3rem' }}
        >
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Duration Tokens</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {motionTokens.map((token, index) => (
              <div key={token.name} style={{ padding: '1.5rem' }}>
                <Card>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <code
                      style={{
                        background: 'var(--color-background-subtle)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {token.name}
                    </code>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                      {token.duration}ms
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      marginBottom: '1rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {token.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: token.duration / 1000, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      height: '40px',
                      background: `linear-gradient(45deg, hsl(${220 + index * 30}, 70%, 60%), hsl(${240 + index * 30}, 70%, 70%))`,
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '500',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
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
          style={{ marginBottom: '3rem' }}
        >
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Easing Tokens</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {easingTokens.map((token, index) => (
              <div key={token.name} style={{ padding: '1.5rem' }}>
                <Card>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <code
                      style={{
                        background: 'var(--color-background-subtle)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {token.name}
                    </code>
                  </div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      marginBottom: '1rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {token.description}
                  </p>
                  <div
                    style={{
                      width: '100px', // Extended width to contain the movement
                      height: '40px',
                      position: 'relative',
                    }}
                  >
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
                      style={{
                        width: '60px',
                        height: '40px',
                        background: `hsl(${280 + index * 40}, 70%, 60%)`,
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    >
                      →
                    </motion.div>
                  </div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      marginTop: '0.5rem',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    Hover to see easing curve
                  </p>
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
          style={{ textAlign: 'center', marginTop: '2rem' }}
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
