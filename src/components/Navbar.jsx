import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '#');
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLink = (link) => {
    if (isHome && link.href.startsWith('/#')) {
      const id = link.href.replace('/#', '#');
      return (
        <a
          key={id}
          href={id}
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-dark font-medium transition-colors duration-200 relative group"
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => handleNavClick(link.href)}
        className="text-gray-600 hover:text-dark font-medium transition-colors duration-200 relative group"
      >
        {link.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
      </Link>
    );
  };

  const renderMobileLink = (link) => {
    if (isHome && link.href.startsWith('/#')) {
      const id = link.href.replace('/#', '#');
      return (
        <a
          key={id}
          href={id}
          onClick={() => setIsOpen(false)}
          className="block text-gray-600 hover:text-dark font-medium py-2 transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => handleNavClick(link.href)}
        className="block text-gray-600 hover:text-dark font-medium py-2 transition-colors duration-200"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-dark">
              Attend<span className="text-primary-500">Pro</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => renderLink(link))}
            <Link
              to="/#cta"
              onClick={() => {
                if (isHome) {
                  const el = document.querySelector('#cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => renderMobileLink(link))}
              <Link
                to="/#cta"
                onClick={() => {
                  setIsOpen(false);
                  if (isHome) {
                    const el = document.querySelector('#cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-center bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
