import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const integrations = [
  { name: 'ADP', description: 'Sync attendance data directly with ADP Workforce Now.' },
  { name: 'Gusto', description: 'Seamless integration with Gusto payroll processing.' },
  { name: 'QuickBooks', description: 'Export attendance records to QuickBooks effortlessly.' },
  { name: 'Slack', description: 'Receive attendance notifications and alerts in Slack.' },
  { name: 'Microsoft Teams', description: 'Mark attendance and get reminders within Teams.' },
  { name: 'Google Workspace', description: 'Integrate with Google Calendar and G Suite.' },
  { name: 'SAP SuccessFactors', description: 'Enterprise-grade integration with SAP HR.' },
  { name: 'Oracle HCM', description: 'Connect AttendPro with Oracle Human Capital Management.' },
  { name: 'Workday', description: 'Bi-directional sync with Workday HR platform.' },
  { name: 'BambooHR', description: 'Automatic employee data synchronization.' },
  { name: 'Zapier', description: 'Connect with 3000+ apps through Zapier.' },
  { name: 'API Access', description: 'Custom integrations using our REST API.' },
];

export default function Integrations() {
  return (
    <PageLayout
      title="Integrations"
      description="Connect AttendPro with your favorite tools and platforms."
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
