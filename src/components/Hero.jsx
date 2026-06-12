import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const badges = [
  { label: '99.9% Uptime', x: '5%', y: '20%', delay: 1.2 },
  { label: '10K+ Users', x: '72%', y: '15%', delay: 1.4 },
  { label: 'AI Powered', x: '8%', y: '65%', delay: 1.6 },
  { label: 'Real-time Sync', x: '70%', y: '70%', delay: 1.8 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white pointer-events-none" />

      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-blob-delayed" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Trusted by 500+ Companies
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-balance mb-6"
            >
              Smart Attendance{' '}
              <span className="gradient-text">Management</span>{' '}
              for Modern Teams
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Streamline your workforce with AI-powered attendance tracking, GPS verification, and real-time analytics. Save hours every week.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#cta" className="cta-primary group text-base sm:text-lg">
                Start Free Trial
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#demo" className="cta-secondary text-base sm:text-lg">
                <HiPlay size={20} />
                Watch Demo
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="visible"
              className="text-sm text-gray-400 mt-6"
            >
              No credit card required &bull; Free 14-day trial
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-white to-accent-500/5 rounded-3xl" />

              <div className="relative w-full h-full glass rounded-3xl p-4 sm:p-6 shadow-2xl shadow-primary-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 h-6 bg-gray-100 rounded-lg flex items-center px-3">
                    <span className="text-xs text-gray-400">attendance.app/dashboard</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/80 rounded-xl p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">Present Today</p>
                    <p className="font-display text-2xl font-bold text-accent-500">247</p>
                    <div className="flex items-center gap-1 text-xs text-accent-500">
                      <span>+12%</span>
                    </div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">On Leave</p>
                    <p className="font-display text-2xl font-bold text-orange-500">18</p>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">Late Arrivals</p>
                    <p className="font-display text-2xl font-bold text-red-500">7</p>
                  </div>
                  <div className="bg-white/80 rounded-xl p-3 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">Unpaid Leave</p>
                    <p className="font-display text-2xl font-bold text-yellow-500">3</p>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-600">Today's Attendance</span>
                    <span className="text-xs text-primary-500 font-medium">View All</span>
                  </div>
                  {[
                    { name: 'Sarah Johnson', status: 'Present', time: '09:02 AM', statusColor: 'text-accent-500 bg-accent-50' },
                    { name: 'Michael Chen', status: 'Present', time: '08:55 AM', statusColor: 'text-accent-500 bg-accent-50' },
                    { name: 'Emily Davis', status: 'Late', time: '09:32 AM', statusColor: 'text-orange-500 bg-orange-50' },
                    { name: 'James Wilson', status: 'Leave', time: 'Approved', statusColor: 'text-yellow-500 bg-yellow-50' },
                  ].map((emp, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-semibold">
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">{emp.name}</p>
                          <p className="text-xs text-gray-400">{emp.time}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${emp.statusColor}`}>
                        {emp.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {badges.map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: badge.delay, type: 'spring' }}
                  className="absolute hidden lg:flex items-center gap-2 glass px-4 py-2 rounded-xl shadow-lg"
                  style={{ left: badge.x, top: badge.y }}
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full" />
                  <span className="text-sm font-medium text-dark whitespace-nowrap">{badge.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 -right-8 w-32 h-32 border border-primary-200/50 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '500+', label: 'Companies' },
            { value: '99.9%', label: 'Uptime' },
            { value: '4.9★', label: 'User Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-dark">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
