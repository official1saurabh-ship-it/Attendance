import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiClock,
} from 'react-icons/hi2';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const solutionLinks = [
  { label: 'Attendance Tracking', to: '/#features' },
  { label: 'GPS Attendance', to: '/#features' },
  { label: 'Face Recognition', to: '/#features' },
  { label: 'Shift Management', to: '/#features' },
  { label: 'Leave Management', to: '/#features' },
  { label: 'Overtime Tracking', to: '/#features' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Partners', to: '/contact' },
];

const supportLinks = [
  { label: 'Help Center', to: '/help' },
  { label: 'FAQs', to: '/help' },
  { label: 'Documentation', to: '/docs' },

  { label: 'System Status', to: '/status' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
  { label: 'Security', to: '/gdpr' },
];

const socialLinks = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: '#' },
];

function FooterLink({ to, label }) {
  if (to.startsWith('/#')) {
    return (
      <a href={to} className="text-sm text-muted hover:text-light transition-colors duration-300 relative group">
        {label}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
      </a>
    );
  }
  return (
    <Link to={to} className="text-sm text-muted hover:text-light transition-colors duration-300 relative group">
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function FooterColumn({ title, links }) {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <h4 className="font-display text-sm font-bold text-light uppercase tracking-wider">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink to={link.to} label={link.label} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-deep" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative"
      >
        {/* Main Footer Columns */}
        <motion.section
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-display text-xl font-bold text-light">
                  Attend<span className="text-primary-400">Pro</span>
                </span>
              </Link>
              <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
                Smart attendance and workforce management software designed for modern businesses. Track attendance, manage shifts, automate payroll, and boost productivity.
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </motion.div>

            <FooterColumn title="Solutions" links={solutionLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Support" links={supportLinks} />

            {/* Contact */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-display text-sm font-bold text-light uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3.5">
                <li>
                  <a href="mailto:info@biosoftech.com" className="flex items-center gap-3 text-sm text-muted hover:text-light transition-colors duration-300 group">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-all">
                      <HiEnvelope className="text-sm" />
                    </span>
                    info@biosoftech.com
                  </a>
                </li>
                <li>
                  <a href="tel:+916209688930" className="flex items-center gap-3 text-sm text-muted hover:text-light transition-colors duration-300 group">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-all">
                      <HiPhone className="text-sm" />
                    </span>
                    +91-6209688930
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted">
                      <HiMapPin className="text-sm" />
                    </span>
                    Lucknow, India
                  </span>
                </li>
                <li className="pt-1">
                  <span className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted flex-shrink-0 mt-0.5">
                      <HiClock className="text-sm" />
                    </span>
                    <span>
                      <span className="block text-light font-medium">Business Hours</span>
                      <span className="block text-muted">9:00 AM – 7:00 PM</span>
                    </span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Bottom Bar */}
        <motion.section variants={itemVariants} className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-muted/60">&copy; {new Date().getFullYear()} AttendPro. All rights reserved.</p>
              <div className="flex items-center gap-0">
                {legalLinks.map((link, i) => (
                  <span key={link.label} className="flex items-center">
                    <Link to={link.to} className="text-xs sm:text-sm text-muted/60 hover:text-light transition-colors duration-300">{link.label}</Link>
                    {i < legalLinks.length - 1 && <span className="mx-2.5 sm:mx-3 text-muted/20">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </footer>
  );
}
