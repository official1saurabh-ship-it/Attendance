import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const integrations = [
  { name: 'ADP', description: 'Sync attendance data directly with ADP Workforce Now for seamless payroll processing.' },
  { name: 'Gusto', description: 'Connect AttendanceMitra with Gusto and automate your payroll workflow.' },
  { name: 'QuickBooks', description: 'Export attendance records to QuickBooks with zero manual entry.' },
  { name: 'Slack', description: 'Receive attendance notifications, alerts, and daily summaries in Slack.' },
  { name: 'Microsoft Teams', description: 'Mark attendance and get reminders right inside Microsoft Teams.' },
  { name: 'Google Workspace', description: 'Sync attendance with Google Calendar and manage your team schedule.' },
  { name: 'SAP SuccessFactors', description: 'Enterprise-grade integration with SAP SuccessFactors HR platform.' },
  { name: 'Oracle HCM', description: 'Connect AttendanceMitra with Oracle Human Capital Management for unified HR data.' },
  { name: 'Workday', description: 'Bi-directional sync with Workday HR platform for real-time data exchange.' },
  { name: 'BambooHR', description: 'Automatic employee data synchronization with BambooHR.' },
  { name: 'Zapier', description: 'Connect with 3000+ apps and automate workflows through Zapier.' },
  { name: 'API Access', description: 'Build custom integrations using our comprehensive REST API.' },
];

export default function Integrations() {
  return (
    <PageLayout
      title="Integrations"
      description="Connect AttendanceMitra with the tools your team already uses."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 flex items-start gap-4"
          >
            <HiCheckCircle className="text-accent-500 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-dark">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
