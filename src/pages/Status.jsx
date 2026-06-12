import { motion } from 'framer-motion';
import { HiCheckCircle, HiClock, HiExclamationTriangle } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const services = [
  { name: 'Web Application', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
  { name: 'API', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
  { name: 'Mobile App', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
  { name: 'Database', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
  { name: 'File Storage', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
  { name: 'Email Notifications', status: 'Operational', statusColor: 'text-accent-500 bg-accent-50', icon: HiCheckCircle },
];

const incidents = [
  { date: 'May 25, 2026', title: 'Scheduled Maintenance', status: 'Completed', duration: '2 hours' },
  { date: 'April 10, 2026', title: 'Database Optimization', status: 'Completed', duration: '1 hour' },
  { date: 'March 5, 2026', title: 'Infrastructure Upgrade', status: 'Completed', duration: '3 hours' },
];

export default function Status() {
  return (
    <PageLayout
      title="System Status"
      description="Current operational status of AttendPro services."
    >
      <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" />
          <span className="font-display font-bold text-dark text-lg">All Systems Operational</span>
        </div>

        <div className="space-y-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
            >
              <span className="text-sm text-gray-600">{service.name}</span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${service.statusColor}`}>
                <service.icon className="text-sm" />
                {service.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <h3 className="font-display font-bold text-dark mb-4">Past Incidents</h3>
      <div className="space-y-3">
        {incidents.map((incident, i) => (
          <motion.div
            key={incident.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass-card rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-dark">{incident.title}</p>
              <p className="text-xs text-gray-400">{incident.date}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">{incident.status}</span>
              <p className="text-xs text-gray-400 mt-0.5">{incident.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
