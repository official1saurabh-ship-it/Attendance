import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';

const benefits = [
  { title: 'Reduce Manual Work', description: 'Automate attendance tracking and eliminate paperwork, saving HR teams 15+ hours per week.' },
  { title: 'Increase Accuracy', description: 'AI-powered verification reduces errors and prevents buddy punching with face recognition technology.' },
  { title: 'Save Time & Resources', description: 'Streamlined processes mean HR teams spend 70% less time on attendance management tasks.' },
  { title: 'Better Workforce Management', description: 'Real-time insights into attendance patterns help optimize workforce planning and scheduling.' },
  { title: 'Faster Payroll Processing', description: 'Auto-sync attendance data with payroll systems for error-free, same-day processing every cycle.' },
];

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deep/40 to-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Benefits</span>
            <h2 className="section-heading mt-3 mb-6">
              Why Teams Choose{' '}
              <span className="gradient-text">AttendPro</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8 text-lg">
              Join thousands of companies that have transformed their attendance management with our platform.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors duration-300">
                    <HiCheckCircle className="text-accent-400 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-light mb-1">{benefit.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-surface/50 to-accent-500/10 rounded-3xl" />

              <div className="relative w-full h-full glass rounded-3xl p-6 shadow-2xl border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-display font-bold text-light">Attendance Overview</h4>
                  <span className="text-xs text-accent-400 bg-accent-500/10 px-3 py-1 rounded-full font-medium border border-accent-500/20">Live</span>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { label: 'Present', value: 87, color: 'bg-accent-500' },
                    { label: 'Late', value: 8, color: 'bg-orange-500' },
                    { label: 'Absent', value: 5, color: 'bg-red-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted">{item.label}</span>
                        <span className="font-semibold text-light">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-surface-light/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-surface/80 rounded-xl p-4 border border-white/5">
                  <p className="text-sm font-semibold text-light mb-3">Quick Actions</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Mark Attendance', 'Apply Leave', 'View Reports', 'Approve Requests'].map((action) => (
                      <div key={action} className="text-xs text-muted bg-surface-light/30 rounded-lg px-3 py-2 text-center hover:bg-primary-500/10 hover:text-primary-400 transition-colors duration-200 cursor-pointer border border-white/5">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-accent-500/30 hidden lg:flex"
              >
                <p className="text-white text-center">
                  <span className="block text-2xl font-bold">98%</span>
                  <span className="text-[10px] opacity-80">Accuracy</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
