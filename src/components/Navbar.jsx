import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3 as HiMenu, HiXMark as HiX } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '#');
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu on link click
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] isolate transition-all duration-500 ${scrolled
        ? 'bg-dark/95 backdrop-blur-2xl shadow-lg shadow-black/30 border-b border-white/10'
        : 'bg-dark/95 lg:bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="hidden lg:inline font-display text-2xl sm:text-xl font-bold text-light">
              Attendance<span className="text-primary-400">Mitra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href.replace('/#', '#') : link.href}
                onClick={() => handleClick(link.href)}
                className="text-muted hover:text-light font-medium transition-colors duration-200 relative group text-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Link
              to="/#cta"
              onClick={() => handleClick('/#cta')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center size-12 rounded-2xl bg-dark/90 border border-white/20 text-white active:scale-95 transition-transform duration-150"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block px-5 py-4 rounded-2xl text-muted hover:text-light hover:bg-white/5 font-medium text-base transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#cta"
                onClick={() => handleClick('/#cta')}
                className="block mt-6 text-center bg-gradient-to-r from-primary-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-xl shadow-primary-500/30"
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}