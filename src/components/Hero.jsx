import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi2';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '247', label: 'Present Today', color: 'text-accent-400', change: '+12%' },
  { value: '18', label: 'On Leave', color: 'text-yellow-400' },
  { value: '94.2%', label: 'Attendance Rate', color: 'text-primary-400', change: '+2.1%' },
];

const employees = [
  { name: 'Sarah Johnson', status: 'Present', time: '09:02 AM', color: 'text-accent-400' },
  { name: 'Michael Chen', status: 'Present', time: '08:55 AM', color: 'text-accent-400' },
  { name: 'Emily Davis', status: 'Late', time: '09:32 AM', color: 'text-orange-400' },
  { name: 'James Wilson', status: 'Leave', time: 'Approved', color: 'text-yellow-400' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-deep pointer-events-none" />

      <div className="absolute top-20 -left-32 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-blob-delayed" />
      <div className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Smart Attendance Platform for Modern Teams
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance mb-6"
            >
              Never Miss a Mark.<br />
              <span className="gradient-text">Manage Smarter</span>,<br />
              Work Better.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Track attendance, manage leaves, integrate payroll, and analyse workforce data — all from one powerful, easy-to-use platform.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="https://att.biosoftech.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-500 text-white px-12 py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 w-full sm:w-auto justify-center">
                Try It Free
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm text-muted/60 mt-6"
            >
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-surface/50 to-accent-500/5 rounded-3xl" />

              <div className="relative glass rounded-3xl p-3 sm:p-6 shadow-2xl shadow-primary-500/10 border border-white/5">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-500/80" />
                  </div>
                  <div className="flex-1 h-5 sm:h-6 bg-surface-light/50 rounded-lg flex items-center px-2 sm:px-3">
                    <span className="text-[10px] sm:text-xs text-muted truncate">dashboard.AttendanceMitra.com</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-2 sm:mb-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-surface/80 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/5">
                      <p className="text-[10px] sm:text-xs text-muted mb-0.5 sm:mb-1">{stat.label}</p>
                      <p className={`font-display text-sm sm:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      {stat.change && (
                        <span className="text-[10px] sm:text-xs text-accent-400">{stat.change}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-surface/80 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/5">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-semibold text-light">Today's Activity</span>
                    <span className="text-[10px] sm:text-xs text-primary-400 font-medium">View All</span>
                  </div>
                  {employees.map((emp, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 sm:py-2 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold shrink-0">
                          {emp.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-light truncate">{emp.name}</p>
                          <p className="text-[10px] sm:text-xs text-muted">{emp.time}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] sm:text-xs font-medium shrink-0 ${emp.color}`}>{emp.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-500/30 hidden lg:flex"
              >
                <span className="text-white text-center">
                  <span className="block text-lg font-bold">98%</span>
                  <span className="text-[8px] opacity-80">Accuracy</span>
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-12 glass rounded-xl flex items-center justify-center gap-2 px-3 shadow-xl hidden lg:flex"
              >
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <span className="text-xs text-light font-medium">Live</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 lg:mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10+', label: 'Trusted Companies' },
              { value: '20+', label: 'Employees Onboarded' },
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '4.9\u2605', label: 'Average Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 glass-card rounded-xl">
                <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
