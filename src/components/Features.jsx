import { motion } from 'framer-motion';
import {
  HiMapPin,
  HiCamera,
  HiCalendarDays,
  HiCurrencyDollar,
  HiChartBar,
  HiDevicePhoneMobile,
} from 'react-icons/hi2';

const features = [
  {
    icon: HiMapPin,
    title: 'GPS Attendance',
    description: 'Track employee attendance with real-time GPS verification. Ensure accurate location-based check-ins with geo-fencing.',
    gradient: 'from-primary-500 to-blue-600',
    border: 'hover:border-primary-500/30',
    glow: 'shadow-primary-500/10',
  },
  {
    icon: HiCamera,
    title: 'Face Recognition',
    description: 'AI-powered facial recognition for secure and contactless attendance marking with 99.5% accuracy in any lighting.',
    gradient: 'from-accent-500 to-teal-600',
    border: 'hover:border-accent-500/30',
    glow: 'shadow-accent-500/10',
  },
  {
    icon: HiCalendarDays,
    title: 'Leave Management',
    description: 'Streamlined leave requests with automated approvals, balance tracking, and team calendar visibility.',
    gradient: 'from-violet-500 to-purple-600',
    border: 'hover:border-violet-500/30',
    glow: 'shadow-violet-500/10',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Payroll Integration',
    description: 'Seamless payroll sync with automatic calculations based on attendance, overtime, and leave data.',
    gradient: 'from-orange-500 to-red-600',
    border: 'hover:border-orange-500/30',
    glow: 'shadow-orange-500/10',
  },
  {
    icon: HiChartBar,
    title: 'Real-Time Reports',
    description: 'Dynamic dashboards with real-time analytics, custom reports, and actionable workforce insights.',
    gradient: 'from-cyan-500 to-blue-600',
    border: 'hover:border-cyan-500/30',
    glow: 'shadow-cyan-500/10',
  },
  {
    icon: HiDevicePhoneMobile,
    title: 'Mobile Attendance',
    description: 'Full-featured mobile app for attendance on the go. Works offline with automatic sync when connected.',
    gradient: 'from-pink-500 to-rose-600',
    border: 'hover:border-pink-500/30',
    glow: 'shadow-pink-500/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deep/50 to-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Features</span>
          <h2 className="section-heading mt-3 mb-4">
            Everything You Need for{' '}
            <span className="gradient-text">Attendance</span>
          </h2>
          <p className="section-subheading">
            Powerful tools to manage attendance, streamline workflows, and boost productivity across your organization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group glass-card rounded-2xl p-6 sm:p-8 cursor-default border border-white/5 ${feature.border} transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg ${feature.glow} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <feature.icon className="text-white text-2xl" />
              </div>

              <h3 className="font-display text-xl font-bold text-light mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {feature.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
