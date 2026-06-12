import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const roles = [
  { title: 'Senior React Engineer', department: 'Engineering', location: 'San Francisco, CA / Remote', type: 'Full-time' },
  { title: 'Product Designer', department: 'Design', location: 'San Francisco, CA', type: 'Full-time' },
  { title: 'Customer Success Manager', department: 'Customer Success', location: 'Remote (US)', type: 'Full-time' },
  { title: 'Sales Development Representative', department: 'Sales', location: 'Remote (US)', type: 'Full-time' },
  { title: 'Data Scientist', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time' },
  { title: 'Marketing Manager', department: 'Marketing', location: 'Remote (Global)', type: 'Full-time' },
];

const perks = [
  'Competitive salary and equity package',
  'Comprehensive health, dental, and vision insurance',
  'Flexible PTO policy',
  'Remote-first culture',
  'Annual learning & development budget',
  'Home office setup stipend',
  'Regular team retreats and events',
  '401(k) matching',
];

export default function Careers() {
  return (
    <PageLayout
      title="Careers"
      description="Join our mission to simplify attendance management for teams worldwide."
    >
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-display text-2xl font-bold text-dark mb-4">Why Join AttendPro?</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            We're building the future of workforce management, and we're looking for talented individuals 
            who share our passion for innovation, design, and creating exceptional user experiences.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="font-display font-bold text-dark mb-4">Don't See a Role?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            We're always looking for great talent. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@attendpro.com" className="cta-primary text-sm inline-flex">
            Send Your Resume
            <HiArrowRight />
          </a>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold text-dark mb-6">Open Positions</h2>
      <div className="space-y-4">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="font-display font-bold text-dark">{role.title}</h3>
              <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-400">
                <span>{role.department}</span>
                <span>&bull;</span>
                <span>{role.location}</span>
                <span>&bull;</span>
                <span>{role.type}</span>
              </div>
            </div>
            <span className="text-primary-500 font-medium text-sm hover:gap-1 transition-all inline-flex items-center gap-0.5">
              Apply Now <HiArrowRight />
            </span>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
