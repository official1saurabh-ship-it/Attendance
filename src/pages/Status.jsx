import { motion } from 'framer-motion';
import { HiCheckCircle, HiClock, HiExclamationTriangle } from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const services = [
  { name: 'Web Application', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.99%' },
  { name: 'API', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.97%' },
  { name: 'Mobile App', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.95%' },
  { name: 'Database', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.99%' },
  { name: 'File Storage', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.99%' },
  { name: 'Email Notifications', status: 'Operational', statusColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20', icon: HiCheckCircle, uptime: '99.90%' },
];

const incidents = [
  { date: 'May 25, 2026', title: 'Scheduled Maintenance', status: 'Completed', duration: '2 hours', tagColor: 'text-accent-400 bg-accent-500/10' },
  { date: 'April 10, 2026', title: 'Database Optimization', status: 'Completed', duration: '1 hour', tagColor: 'text-accent-400 bg-accent-500/10' },
  { date: 'March 5, 2026', title: 'Infrastructure Upgrade', status: 'Completed', duration: '3 hours', tagColor: 'text-accent-400 bg-accent-500/10' },
];

export default function Status() {
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
            <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              All Systems Operational
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              System <span className="gradient-text">Status</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Current operational status of all AttendanceMitra services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" />
                <span className="font-display font-bold text-light text-lg">Service Status</span>
              </div>
              <span className="text-xs text-muted bg-surface-light/30 px-3 py-1.5 rounded-lg">Last checked: 2 min ago</span>
            </div>

            <div className="space-y-1">
              {services.map((service, i) => (
                <motion.div
                  key={service.name}
                  variants={fadeUp}
                  className="flex items-center justify-between py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${service.status === 'Operational' ? 'bg-accent-500' : 'bg-yellow-400'}`} />
                    <span className="text-sm text-light">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs text-muted hidden sm:block">{service.uptime} uptime</span>
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 border ${service.statusColor}`}>
                      <service.icon className="text-sm" />
                      {service.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Uptime summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
          >
            {[
              { label: 'Current Uptime', value: '99.97%', color: 'text-accent-400' },
              { label: 'Response Time', value: '< 120ms', color: 'text-primary-400' },
              { label: 'Incidents (30d)', value: '0', color: 'text-accent-400' },
              { label: 'Avg. Resolution', value: '< 1hr', color: 'text-primary-400' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center border border-white/5">
                <p className={`font-display text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Incidents */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-light mb-6">Past Incidents</h2>
            <div className="space-y-3">
              {incidents.length === 0 ? (
                <div className="text-center py-12 glass-card rounded-2xl border border-white/5">
                  <HiCheckCircle className="text-4xl text-accent-400 mx-auto mb-3" />
                  <p className="text-light font-medium">No incidents reported</p>
                  <p className="text-sm text-muted mt-1">All services have been running smoothly.</p>
                </div>
              ) : (
                incidents.map((incident, i) => (
                  <motion.div
                    key={incident.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-surface-light/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiClock className="text-muted text-sm" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-light">{incident.title}</p>
                        <p className="text-xs text-muted mt-0.5">{incident.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-shrink-0">
                      <span className="text-xs text-muted">{incident.duration}</span>
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${incident.tagColor}`}>
                        {incident.status}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
