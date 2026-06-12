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
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-dark/60 lg:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow duration-300">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-light">
              Attendance<span className="text-primary-400">Mitra</span>
            </span>
          </Link>

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
              className="bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 text-light border border-white/10"
            aria-label="Toggle menu"
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
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href.replace('/#', '#') : link.href}
                  onClick={() => handleClick(link.href)}
                  className="block px-4 py-3 rounded-xl text-muted hover:text-light hover:bg-white/5 font-medium transition-all duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/#cta"
                onClick={() => { setIsOpen(false); handleClick('/#cta'); }}
                className="block text-center bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
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
