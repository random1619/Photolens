import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GalleryProvider } from './context/GalleryContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalleryModal from './components/GalleryModal';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Page transition wrapper
const PageTransition = ({ children }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Motion.div>
  );
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <GalleryProvider>
        <Router>
          <AnimatePresence>
            {isLoading && (
              <Preloader onLoadComplete={() => setIsLoading(false)} />
            )}
          </AnimatePresence>
          
          {!isLoading && (
            <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] transition-colors duration-300">
              <ScrollProgress />
              <CustomCursor />
              <Navbar />
              <AnimatedRoutes />
              <Footer />
              <GalleryModal />
              <ScrollToTop />
            </div>
          )}
        </Router>
      </GalleryProvider>
    </ThemeProvider>
  );
}

export default App


