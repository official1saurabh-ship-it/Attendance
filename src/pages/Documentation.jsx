import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const sections = [
  { title: 'Getting Started', description: 'Set up your account and configure your first attendance system.', topics: 'Installation, Configuration, First Steps' },
  { title: 'Employee Management', description: 'Add, import, and manage employees in your organization.', topics: 'Adding Employees, Bulk Import, Roles & Permissions' },
  { title: 'Attendance Tracking', description: 'Learn about GPS tracking, face recognition, and manual check-ins.', topics: 'GPS Tracking, Face Recognition, Manual Check-in, Offline Mode' },
  { title: 'Leave Management', description: 'Configure leave types, approval workflows, and policies.', topics: 'Leave Types, Approval Workflow, Policy Settings' },
  { title: 'Reports & Analytics', description: 'Generate and customize attendance reports and dashboards.', topics: 'Dashboard Overview, Custom Reports, Export Data' },
  { title: 'Payroll Integration', description: 'Sync attendance data with your payroll system.', topics: 'Payroll Sync, Error Resolution, Scheduled Exports' },
  { title: 'API & Webhooks', description: 'Integrate AttendPro with your existing tools and systems.', topics: 'REST API, Webhooks, SDKs, Rate Limits' },
  { title: 'Security & Compliance', description: 'Understand our security practices and compliance certifications.', topics: 'Data Encryption, SOC 2, GDPR, Access Control' },
];

export default function Documentation() {
  return (
    <PageLayout
      title="Documentation"
      description="Everything you need to get the most out of AttendPro."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 group cursor-pointer"
          >
            <h3 className="font-display font-bold text-dark mb-2 group-hover:text-primary-500 transition-colors duration-300">{section.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{section.description}</p>
            <p className="text-xs text-gray-400 mb-4">{section.topics}</p>
            <span className="text-sm font-medium text-primary-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              Explore <HiArrowRight />
            </span>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
