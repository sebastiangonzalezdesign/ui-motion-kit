import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Button } from '../../components/primitives';
import { Hero, MotionShowcase } from '../components';
import ProBadge from '../../components/ProBadge';
import { featureFlags, getProCTAText, getProCTALink } from '../../utils/featureFlags';
import {
  CursorArrowRaysIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import './Home.scss';

const Home = () => {
  return (
    <main className="home page">
      <Hero
        headline="Motion UI Kit Pro v1.0"
        description="Context-aware components, motion-first tokens, and adaptive UI patterns — with interactive docs and examples."
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
                <Button size="md" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </motion.div>
          </div>
        }
      />

      {/* Motion-First Philosophy Section */}
      <motion.section
        className="motion-philosophy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-xl">Motion as a First-Class Design Token</h2>
          <p className="text-body-lg">
            Every interaction is powered by carefully crafted timing, easing, and transitions that
            scale across your entire system. Consistent motion scales across every component — no
            more ad-hoc animations.
          </p>
        </motion.div>

        {/* Interactive Motion Token Demo */}
        <div className="motion-demo-chips">
          <motion.div
            className="motion-demo-chip"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            motion-fast (150ms)
          </motion.div>
          <motion.div
            className="motion-demo-chip"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            motion-normal (300ms)
          </motion.div>
          <motion.div
            className="motion-demo-chip"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            ease-spring
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/docs/design-tokens" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button variant="outline">Explore Motion Tokens</Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.div
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-heading-xl">Revolutionary Experience System</h2>
        <p className="text-body-lg">
          Context-aware components that understand user intent and adapt automatically. The future
          of intelligent UI frameworks.
        </p>
      </motion.div>

      <section className="feature-cards-grid grid grid-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={CursorArrowRaysIcon}>
            <h3>Smart Motion Buttons</h3>
            <p>Context-aware animations with intelligent timing based on action criticality.</p>
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
            <h3>Motion-First Cards</h3>
            <p>Sophisticated stagger animations and micro-interactions that feel alive.</p>
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
            <h3>Intelligent Modals</h3>
            <p>Context-aware modal animations that adapt timing based on content complexity.</p>
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
            <p>Revolutionary context-aware components with adaptive intelligence.</p>
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

      {/* Motion Token Showcase */}
      <MotionShowcase />

      <motion.section
        className="roadmap-preview"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="section-header">
          <h2 className="text-heading-xl">
            What's Next: V1.1 Development <span className="roadmap-date">(Q4 2025)</span>
          </h2>
          <p className="text-body-lg">
            Follow live development progress as we build the future of adaptive UI frameworks:
          </p>
        </div>
        <div className="roadmap-cards">
          <Card>
            <h4>
              Intelligent Forms <ProBadge variant="premium" />
            </h4>
            <p>Adaptive validation and progressive disclosure based on user expertise</p>
            <div className="roadmap-date">Oct 2025</div>
          </Card>
          <Card>
            <h4>
              Smart Data Display <ProBadge variant="premium" />
            </h4>
            <p>Tables and lists that adapt complexity to user needs</p>
            <div className="roadmap-date">Nov 2025</div>
          </Card>
          <Card>
            <h4>
              ML Integration <ProBadge variant="premium" />
            </h4>
            <p>Machine learning for predictive UI adaptation</p>
            <div className="roadmap-date">Q1 2026</div>
          </Card>
        </div>
        <motion.div
          className="roadmap-cta"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link to="/docs/changelog" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button variant="outline" icon={<ArrowRightIcon />}>
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
        <h2 className="text-heading-lg">Want Premium Templates & Advanced Features?</h2>
        <p className="text-body-md">
          Join our waitlist for premium dashboard templates, advanced motion kits, and priority
          support.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <a
            href={getProCTALink()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <Button size="lg" icon={<SparklesIcon />}>
              {getProCTAText()}
            </Button>
          </a>
        </motion.div>
        <p className="disclaimer">
          <HeartIcon className="heart-icon" />
          Everything above is free and open source. Pro tier adds premium templates and priority
          support.
        </p>
      </motion.section>

      {/* Pro-only content section */}
      {featureFlags.enableProFeatures && (
        <motion.section
          className="pro-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-lg">
            🎉 Welcome Pro User! <ProBadge variant="premium" />
          </h2>
          <p className="text-body-md">
            You have access to exclusive premium templates, advanced components, and priority
            support.
          </p>
          <div>
            <Button variant="outline">Access Pro Dashboard</Button>
          </div>
        </motion.section>
      )}

      <motion.section
        className="github-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3>Open Source & Community Driven</h3>
        <p>
          Built by Sebastian González, used by designers & developers experimenting with
          motion-driven UIs.
        </p>
        <p>
          This complete Experience System v1.0 is open source. Star us on GitHub and follow v1.1
          development!
        </p>
        <motion.div
          className="github-button"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <a
            href="https://github.com/sebastiangonzalezdesign/ui-motion-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <Button variant="outline" icon={<StarIcon />}>
              Star on GitHub
            </Button>
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Home;
