import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onSectionClick: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (section: string) => {
    onSectionClick(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer flex items-center gap-2"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div> */}
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-black' : 'text-black'
            }`}>
              Superiors
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-900 hover:text-gray-600'
                      : 'text-black hover:text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* <motion.button
              onClick={() => handleNavClick('login')}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition border border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Log in
            </motion.button> */}
            <motion.button
              onClick={() => handleNavClick('signup')}
              className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-900' : 'text-black'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 py-4 space-y-4">
              {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-900 hover:text-gray-600 font-medium"
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {/* <motion.button
                  onClick={() => handleNavClick('login')}
                  className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 font-medium"
                  whileTap={{ scale: 0.95 }}
                >
                  Log in
                </motion.button> */}
                <motion.button
                  onClick={() => handleNavClick('signup')}
                  className="block w-full bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
