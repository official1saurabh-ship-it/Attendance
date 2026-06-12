import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const endpoints = [
  { method: 'GET', path: '/api/v1/attendance', description: 'Retrieve attendance records', auth: 'Required' },
  { method: 'POST', path: '/api/v1/attendance', description: 'Create a new attendance record', auth: 'Required' },
  { method: 'GET', path: '/api/v1/employees', description: 'List all employees', auth: 'Required' },
  { method: 'POST', path: '/api/v1/employees', description: 'Add a new employee', auth: 'Admin' },
  { method: 'GET', path: '/api/v1/leaves', description: 'Get leave requests', auth: 'Required' },
  { method: 'POST', path: '/api/v1/leaves', description: 'Submit a leave request', auth: 'Required' },
  { method: 'PUT', path: '/api/v1/leaves/:id', description: 'Approve or reject leave', auth: 'Admin' },
  { method: 'GET', path: '/api/v1/reports', description: 'Generate attendance reports', auth: 'Admin' },
];

export default function ApiReference() {
  return (
    <PageLayout
      title="API Reference"
      description="Build custom integrations with our RESTful API."
    >
      <div className="prose max-w-none mb-8">
        <p className="text-gray-500">
          Our REST API allows you to integrate AttendPro with your existing tools and workflows. 
          All API requests require authentication using an API key. Base URL: <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">https://api.attendpro.com</code>
        </p>
      </div>

      <div className="space-y-3">
        {endpoints.map((ep, i) => (
          <motion.div
            key={ep.path}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass-card rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <span className={`text-xs font-bold px-3 py-1.5 rounded-lg uppercase ${
              ep.method === 'GET' ? 'bg-accent-50 text-accent-600' :
              ep.method === 'POST' ? 'bg-primary-50 text-primary-600' :
              'bg-orange-50 text-orange-600'
            }`}>
              {ep.method}
            </span>
            <code className="text-sm font-mono text-dark flex-1">{ep.path}</code>
            <span className="text-sm text-gray-500 flex-1">{ep.description}</span>
            <span className={`text-xs font-medium ${
              ep.auth === 'Admin' ? 'text-orange-500' : 'text-gray-400'
            }`}>
              {ep.auth}
            </span>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
