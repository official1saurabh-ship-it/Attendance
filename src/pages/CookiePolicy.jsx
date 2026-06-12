import { motion } from 'framer-motion';
import {
  HiCircleStack,
  HiShieldCheck,
  HiChartBar,
  HiAdjustmentsHorizontal,
  HiGlobeAlt,
  HiCog6Tooth,
  HiArrowPath,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cookieTypes = [
  {
    icon: HiShieldCheck,
    title: 'Essential Cookies',
    description: 'Required for the platform to function properly. These include authentication cookies and security tokens.',
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    icon: HiChartBar,
    title: 'Analytics Cookies',
    description: 'Help us understand how users interact with our platform, so we can continuously improve features and performance.',
    gradient: 'from-accent-500 to-teal-600',
  },
  {
    icon: HiAdjustmentsHorizontal,
    title: 'Preference Cookies',
    description: 'Remember your settings and preferences to deliver a personalized experience every time you visit.',
    gradient: 'from-violet-500 to-purple-600',
  },
];

export default function CookiePolicy() {
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
              <HiCircleStack className="text-sm" />
              Cookie Policy
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              How We Use{' '}
              <span className="gradient-text">Cookies</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              We use cookies and similar technologies to provide, improve, and personalize your experience on AttendanceMitra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-12 sm:py-16 bg-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Overview</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mt-2 mb-3">
                What Are{' '}
                <span className="gradient-text">Cookies</span>?
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, analyze usage patterns, and deliver a better experience.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {cookieTypes.map((type) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-5 sm:p-6 border border-white/5 flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <type.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-light mb-1">{type.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Party + Managing */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                <HiGlobeAlt className="text-white text-lg" />
              </div>
              <h3 className="font-display text-lg font-bold text-light mb-2">Third-Party Cookies</h3>
              <p className="text-sm text-muted leading-relaxed">
                We use trusted third-party services, such as analytics providers, that may set their own cookies. These cookies are governed by the respective third-party privacy policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                <HiCog6Tooth className="text-white text-lg" />
              </div>
              <h3 className="font-display text-lg font-bold text-light mb-2">Managing Cookies</h3>
              <p className="text-sm text-muted leading-relaxed">
                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16 sm:py-20 bg-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 sm:p-10 text-center border border-white/5"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-primary-500/20">
              <HiArrowPath className="text-white text-2xl" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mb-2">
              Policy Updates
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed">
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
            <p className="text-xs text-muted/60 mt-6">
              Last updated: June 1, 2026 &bull; AttendanceMitra &bull; Biosoftech Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
