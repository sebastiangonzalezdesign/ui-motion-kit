import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Button } from '../../components/primitives';
import { Hero } from '../components';
import {
  CursorArrowRaysIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <main className="home page">
      <Hero
        headline="Motion UI Kit Pro v1.0"
        description="Revolutionary Experience System with context-aware components. Full documentation, interactive playground, and comprehensive design system — all open source."
        backgroundColor="brand-gradient"
        borderRadius="lg"
        size="lg"
        actions={
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to="/examples/buttons" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button size="md">Explore Components</Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button
                  size="md"
                  variant="outline"
                >
                  View Documentation
                </Button>
              </Link>
            </motion.div>
          </div>
        }
      />

      <section className="features-grid grid grid-3">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2>Revolutionary Experience System</h2>
          <p>
            Context-aware components that understand user intent and adapt automatically. 
            The future of intelligent UI frameworks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={CursorArrowRaysIcon}>
            <h3>Interactive Buttons</h3>
            <p>Smooth hover animations and click feedback with multiple variants and sizes.</p>
            <Link to="/examples/buttons" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={RectangleStackIcon}>
            <h3>Animated Cards</h3>
            <p>Fade-in effects, hover states, and flexible layouts with loading states.</p>
            <Link to="/examples/cards" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={Squares2X2Icon}>
            <h3>Slide-in Modals</h3>
            <p>Professional modal dialogs with smooth animations and accessibility features.</p>
            <Link to="/examples/modals" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={SparklesIcon}>
            <h3>
              Experience System <span className="new-badge">New</span>
            </h3>
            <p>Components that understand user intent and adapt to context automatically.</p>
            <Link
              to="/examples/experience-demo"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button variant="ghost" size="sm">
                Try Interactive Demo
              </Button>
            </Link>
          </Card>
        </motion.div>
      </section>

      <motion.section
        className="roadmap-preview"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>What's Next: V1.1 Development</h2>
        <p>Follow live development progress as we build the future of adaptive UI frameworks:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          <Card>
            <h4>🧠 Intelligent Forms</h4>
            <p>Adaptive validation and progressive disclosure based on user expertise</p>
          </Card>
          <Card>
            <h4>📊 Smart Data Display</h4>
            <p>Tables and lists that adapt complexity to user needs</p>
          </Card>
          <Card>
            <h4>🤖 ML Integration</h4>
            <p>Machine learning for predictive UI adaptation</p>
          </Card>
        </div>
        <motion.div
          style={{ marginTop: '2rem' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link to="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button variant="outline">
              View Full Roadmap
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="upgrade-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>Want Premium Templates & Advanced Features?</h2>
        <p>Join our waitlist for premium dashboard templates, advanced motion kits, and priority support.</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <a
            href="https://sebastiangonzalez.design/motion-ui-kit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'block',
              maxWidth: '320px',
              margin: '0 auto',
            }}
          >
            <Button size="lg" icon={<SparklesIcon />}>
              Join Pro Waitlist
            </Button>
          </a>
        </motion.div>
        <p style={{ fontSize: '0.875rem', marginTop: '1rem', opacity: 0.7 }}>
          💝 Everything above is free and open source. Pro tier adds premium templates and priority support.
        </p>
      </motion.section>

      <motion.section
        className="github-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{ marginTop: '3rem', textAlign: 'center' }}
      >
        <h3>Open Source & Community Driven</h3>
        <p>This complete Experience System v1.0 is open source. Star us on GitHub and follow v1.1 development!</p>
        <motion.div
          style={{ marginTop: '1.5rem' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <a
            href="https://github.com/sebastiangonzalezdesign/ui-motion-kit-pro"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button variant="outline">
              ⭐ Star on GitHub
            </Button>
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Home;
