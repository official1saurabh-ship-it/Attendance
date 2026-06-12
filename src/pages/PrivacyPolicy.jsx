import { motion } from 'framer-motion';
import {
  HiShieldCheck,
  HiInformationCircle,
  HiServer,
  HiClock,
  HiGlobeAlt,
  HiUserGroup,
  HiEnvelope,
  HiLockClosed,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const policies = [
  {
    icon: HiInformationCircle,
    title: 'Information We Collect',
    content: 'We collect information you provide directly to us, including name, email address, company details, and employee data necessary for attendance management.',
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    icon: HiServer,
    title: 'How We Use Your Information',
    content: 'Your information is used to provide and improve our attendance management services, process payroll data, send notifications, and comply with legal obligations.',
    gradient: 'from-accent-500 to-teal-600',
  },
  {
    icon: HiLockClosed,
    title: 'Data Security',
    content: 'We implement industry-standard security measures including AES-256 encryption, TLS 1.3, and regular security audits to protect your data. All biometric data is encrypted and stored separately.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: HiClock,
    title: 'Data Retention',
    content: 'We retain your data for as long as your account is active or as needed to provide services. You can request data deletion at any time.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: HiGlobeAlt,
    title: 'Third-Party Sharing',
    content: 'We do not sell your personal information. We may share data with third-party service providers solely for the purpose of delivering our services (e.g., cloud hosting, email delivery).',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: HiUserGroup,
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal data. You may also request data portability and restrict processing.',
    gradient: 'from-pink-500 to-rose-600',
  },
];

export default function PrivacyPolicy() {
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
              Privacy Policy
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              How We Protect{' '}
              <span className="gradient-text">Your Privacy</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              We take your privacy seriously. Here is how we collect, use, and safeguard your personal data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {policies.map((policy) => (
              <motion.div
                key={policy.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/10 group transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${policy.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <policy.icon className="text-white text-xl" />
                </div>
                <h3 className="font-display text-base font-bold text-light mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {policy.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 sm:p-10 text-center border border-white/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-primary-500/20">
              <HiEnvelope className="text-white text-2xl" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mb-2">
              Privacy Questions?
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              For privacy-related inquiries, contact our Data Protection Officer.
            </p>
            <a
              href="mailto:info@biosoftech.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
            >
              Contact DPO
              <HiEnvelope />
            </a>
            <p className="text-xs text-muted/60 mt-6">
              Last updated: June 1, 2026 &bull; AttendanceMitra &bull; Biosoftech Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
