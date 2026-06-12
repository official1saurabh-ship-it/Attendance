import { motion } from 'framer-motion';
import {
  HiDocumentText,
  HiShieldCheck,
  HiComputerDesktop,
  HiCurrencyDollar,
  HiKey,
  HiExclamationTriangle,
  HiStop,
  HiArrowPath,
  HiScale,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const terms = [
  {
    icon: HiDocumentText,
    title: 'Acceptance of Terms',
    content: 'By accessing or using AttendanceMitra, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    icon: HiShieldCheck,
    title: 'Account Responsibilities',
    content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.',
    gradient: 'from-accent-500 to-teal-600',
  },
  {
    icon: HiComputerDesktop,
    title: 'Service Usage',
    content: 'You agree to use AttendanceMitra in compliance with all applicable laws and regulations. You may not use the service for any unlawful purpose or in violation of any third-party rights.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Payment Terms',
    content: 'Paid plans are billed in advance on a monthly or annual basis. Cancellation is effective at the end of the current billing period. Refunds are provided as outlined in our refund policy.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: HiKey,
    title: 'Data Ownership',
    content: 'You retain full ownership of all data you upload to AttendanceMitra. We claim no intellectual property rights over your data.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: HiExclamationTriangle,
    title: 'Limitation of Liability',
    content: 'AttendanceMitra shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: HiStop,
    title: 'Termination',
    content: 'We may terminate or suspend your account for violation of these terms. Upon termination, you may export your data within 30 days.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: HiArrowPath,
    title: 'Changes to Terms',
    content: 'We reserve the right to modify these terms. We will notify you of material changes via email or through the platform.',
    gradient: 'from-accent-500 to-emerald-600',
  },
];

export default function TermsOfService() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-dark to-dark pointer-events-none" />
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-3xl animate-blob-delayed" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HiScale className="text-sm" />
              Terms of Service
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              Our{' '}
              <span className="gradient-text">Terms</span> of Service
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Please read these terms carefully before using AttendanceMitra. By using our platform, you agree to these conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Cards */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {terms.map((term) => (
              <motion.div
                key={term.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/10 group transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${term.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <term.icon className="text-white text-xl" />
                </div>
                <h3 className="font-display text-base font-bold text-light mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {term.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {term.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-12 sm:py-16 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 inline-block mx-auto">
              <p className="text-xs text-muted/60">
                Last updated: June 1, 2026 &bull; AttendanceMitra &bull; Biosoftech Pvt. Ltd.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
