import { motion } from 'framer-motion';
import {
  HiShieldCheck,
  HiLockClosed,
  HiDocumentText,
  HiUserGroup,
  HiGlobeAlt,
  HiServer,
  HiKey,
  HiEnvelope,
  HiCheckCircle,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const sections = [
  {
    icon: HiShieldCheck,
    title: 'Our Commitment',
    content: 'AttendanceMitra is fully committed to GDPR compliance. We have implemented comprehensive measures to protect the personal data of individuals in the European Economic Area (EEA) and beyond.',
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    icon: HiDocumentText,
    title: 'Data Processing Agreement',
    content: 'We provide a Data Processing Agreement (DPA) to all our customers, outlining the terms and conditions of data processing in compliance with GDPR Article 28.',
    gradient: 'from-accent-500 to-teal-600',
  },
  {
    icon: HiUserGroup,
    title: 'Data Protection Officer',
    content: 'We have appointed a dedicated Data Protection Officer who oversees our GDPR compliance program and data protection practices.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: HiGlobeAlt,
    title: 'Data Transfers',
    content: 'We ensure appropriate safeguards for any transfer of personal data outside the EEA, including Standard Contractual Clauses (SCCs) and adequacy decisions.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: HiServer,
    title: 'Security Measures',
    content: 'We implement robust technical and organizational measures including AES-256 encryption, TLS 1.3, access controls, and regular security assessments.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: HiKey,
    title: 'Subprocessors',
    content: 'We maintain an up-to-date list of all subprocessors. You can request a complete copy by contacting our Data Protection Officer.',
    gradient: 'from-pink-500 to-rose-600',
  },
];

const rights = [
  'Right to Access — request a copy of your personal data',
  'Right to Rectification — correct inaccurate or incomplete data',
  'Right to Erasure — request deletion of your data (right to be forgotten)',
  'Right to Restrict Processing — limit how your data is used',
  'Right to Data Portability — receive your data in a machine-readable format',
  'Right to Object — object to processing for specific purposes',
];

export default function GDPR() {
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
              <HiShieldCheck className="text-sm" />
              Security & Compliance
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              Your Data is{' '}
              <span className="gradient-text">Protected</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              We take security seriously. Here is how we protect your data and ensure compliance with global privacy standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Cards */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/10 group transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <section.icon className="text-white text-xl" />
                </div>
                <h3 className="font-display text-base font-bold text-light mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Your Rights</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mt-2 mb-3">
                Rights Under{' '}
                <span className="gradient-text">GDPR</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                The GDPR gives you control over your personal data. Here is a summary of your rights and how we support them.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {rights.map((right) => (
                <motion.div
                  key={right}
                  variants={fadeUp}
                  className="glass-card rounded-xl px-5 py-4 border border-white/5 flex items-start gap-3"
                >
                  <HiCheckCircle className="text-accent-400 text-lg flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted leading-relaxed">{right}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-16 sm:py-20 bg-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 sm:p-12 text-center border border-white/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-500/20">
              <HiEnvelope className="text-white text-2xl" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mb-3">
              Have Security Questions?
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              For GDPR or security-related inquiries, reach out to our Data Protection Officer.
            </p>
            <a
              href="mailto:info@biosoftech.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
            >
              Contact DPO
              <HiEnvelope />
            </a>
            <p className="text-xs text-muted/60 mt-4">
              Last updated: June 1, 2026 &bull; AttendanceMitra &bull; Biosoftech Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
