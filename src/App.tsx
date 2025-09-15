import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants, pageTransition } from './utils/motion';
import { ExperienceProvider, type ExperienceSystemConfig } from './utils/experience-context';
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
  ExperienceDemo,
  ConfirmationFlow,
  TabsPage,
  ToastPage,
  CommandPalettePage,
  DrawerPage,
  InputsPage,
  TogglesPage,
  NavbarPage,
  SidebarPage,
  LoadersPage,
  MicroInteractionsPage,
  PageTransitionsPage,
  BreadcrumbPage,
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
          path="/examples/experience-demo"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ExperienceDemo />
            </motion.div>
          }
        />
        <Route
          path="/examples/confirmation-flow"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ConfirmationFlow />
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
          path="/examples/toast"
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
        <Route
          path="/examples/command-palette"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CommandPalettePage />
            </motion.div>
          }
        />
        <Route
          path="/examples/drawer"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <DrawerPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/inputs"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <InputsPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/toggles"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TogglesPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/navbar"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <NavbarPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/sidebar"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SidebarPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/loaders"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <LoadersPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/micro-interactions"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <MicroInteractionsPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/page-transitions"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <PageTransitionsPage />
            </motion.div>
          }
        />
        <Route
          path="/examples/breadcrumb"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BreadcrumbPage />
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

// Basic Experience System configuration
const experienceConfig: ExperienceSystemConfig = {
  adaptationRules: [
    {
      condition: (context) => context.device === 'mobile',
      adaptations: [
        {
          componentType: 'button',
          adaptations: {
            layout: 'spacious',
            motion: 'standard',
          },
        },
      ],
    },
  ],
  enableUsageTracking: true,
  enableAutomaticAdaptation: true,
  enablePredictiveLoading: false,
  enableSmartBatching: false,
};

function App() {
  return (
    <ExperienceProvider config={experienceConfig}>
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
    </ExperienceProvider>
  );
}

export default App;
