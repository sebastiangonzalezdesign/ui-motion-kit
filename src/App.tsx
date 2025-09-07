import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants, pageTransition } from './utils/motion';
import { Navbar, Footer } from './app/components';
import { ScrollToTop } from './components/layout';
import {
  Home,
  DesignTokens,
  Components,
  Documentation,
  Changelog,
  Buttons,
  Cards,
  Modals,
  TabsPage,
  ToastPage,
} from './app/pages';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/docs/design-tokens"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <DesignTokens />
            </motion.div>
          }
        />
        <Route
          path="/docs/components"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Components />
            </motion.div>
          }
        />
        <Route
          path="/docs"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Documentation />
            </motion.div>
          }
        />
        <Route
          path="/docs/changelog"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Changelog />
            </motion.div>
          }
        />
        {/* Component example routes */}
        <Route
          path="/examples/buttons"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Buttons />
            </motion.div>
          }
        />
        <Route
          path="/examples/cards"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Cards />
            </motion.div>
          }
        />
        <Route
          path="/examples/modals"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Modals />
            </motion.div>
          }
        />
        <Route
          path="/examples/tabs"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TabsPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/toasts"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ToastPage />
            </motion.div>
          }
        />
        {/* Legacy routes for backward compatibility */}
        <Route
          path="/buttons"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Buttons />
            </motion.div>
          }
        />
        <Route
          path="/cards"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Cards />
            </motion.div>
          }
        />
        <Route
          path="/modals"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Modals />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="container">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
