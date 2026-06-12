import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiRocketLaunch,
  HiUsers,
  HiMapPin,
  HiCalendarDays,
  HiChartBar,
  HiCurrencyDollar,
  HiCodeBracket,
  HiShieldCheck,
  HiChevronDown,
  HiBookOpen,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const sections = [
  { icon: HiRocketLaunch, title: 'Getting Started', description: 'Set up your account and configure your first attendance system.', topics: ['Installation', 'Configuration', 'First Steps'], gradient: 'from-primary-500 to-blue-600' },
  { icon: HiUsers, title: 'Employee Management', description: 'Add, import, and manage employees in your organization.', topics: ['Adding Employees', 'Bulk Import', 'Roles & Permissions'], gradient: 'from-accent-500 to-teal-600' },
  { icon: HiMapPin, title: 'Attendance Tracking', description: 'Learn about GPS tracking, face recognition, and manual check-ins.', topics: ['GPS Tracking', 'Face Recognition', 'Manual Check-in', 'Offline Mode'], gradient: 'from-violet-500 to-purple-600' },
  { icon: HiCalendarDays, title: 'Leave Management', description: 'Configure leave types, approval workflows, and policies.', topics: ['Leave Types', 'Approval Workflow', 'Policy Settings'], gradient: 'from-orange-500 to-red-600' },
  { icon: HiChartBar, title: 'Reports & Analytics', description: 'Generate and customize attendance reports and dashboards.', topics: ['Dashboard Overview', 'Custom Reports', 'Export Data'], gradient: 'from-cyan-500 to-blue-600' },
  { icon: HiCurrencyDollar, title: 'Payroll Integration', description: 'Sync attendance data with your payroll system seamlessly.', topics: ['Payroll Sync', 'Error Resolution', 'Scheduled Exports'], gradient: 'from-pink-500 to-rose-600' },
  { icon: HiCodeBracket, title: 'API & Webhooks', description: 'Integrate AttendanceMitra with your existing tools and systems.', topics: ['REST API', 'Webhooks', 'SDKs', 'Rate Limits'], gradient: 'from-primary-500 to-indigo-600' },
  { icon: HiShieldCheck, title: 'Security & Compliance', description: 'Understand our security practices and compliance certifications.', topics: ['Data Encryption', 'SOC 2', 'GDPR', 'Access Control'], gradient: 'from-accent-500 to-emerald-600' },
];

const quickLinks = [
  {
    question: 'How to set up your account and workspace',
    answer: 'Sign up at AttendanceMitra.com, verify your email, and log in. Follow the onboarding wizard to set your organization name, timezone, and work schedule. You can invite team members from the Settings > Team page. Configure leave policies and attendance rules under the Admin panel to match your company requirements.',
  },
  {
    question: 'Adding employees via CSV bulk import',
    answer: 'Navigate to Employees > Import. Download the CSV template, fill in employee details (name, email, role, department), and upload the file. The system validates entries and shows preview before final import. You can assign default shift schedules and access levels during the import process.',
  },
  {
    question: 'Configuring GPS geo-fencing for attendance',
    answer: 'Go to Settings > Attendance > Geo-Fencing. Set your office location on the map and define a radius (recommended: 100-500 meters). Employees must be within this zone to mark attendance via GPS. You can create multiple geo-fences for different office branches or remote work locations.',
  },
  {
    question: 'Setting up leave approval workflows',
    answer: 'Under Admin > Leave Policies, create leave types (sick, casual, annual) with balance limits. Configure approval hierarchy: manager → HR → admin. Employees submit requests via dashboard; approvers receive notifications. Automate carry-forward rules and holiday calendars to streamline leave management.',
  },
  {
    question: 'Integrating payroll with QuickBooks',
    answer: 'From Integrations, select QuickBooks and click Connect. Authorize AttendanceMitra to access your QuickBooks account. Map attendance fields to payroll categories (regular hours, overtime, deductions). Set auto-sync schedule (daily/weekly). Test with sample data before enabling live sync to ensure accuracy.',
  },
  {
    question: 'Understanding attendance analytics reports',
    answer: 'The Reports section offers pre-built dashboards: daily attendance summary, late arrivals, overtime trends, and department-wise comparisons. Use filters to narrow by date range, team, or employee. Export reports as PDF or CSV. Custom report builder lets you select specific metrics and dimensions for tailored insights.',
  },
];

export default function Documentation() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HiBookOpen className="text-sm" />
              Documentation
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              Everything you need to{' '}
              <span className="gradient-text">get started</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Guides, references, and tutorials to help you get the most out of AttendanceMitra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doc Cards Grid */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <HiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light placeholder-muted/50 transition-all duration-200"
              />
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-white/10 relative overflow-hidden cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-[0.07] rounded-bl-full transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <section.icon className="text-white text-xl" />
                </div>

                <h3 className="font-display text-base font-bold text-light mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {section.topics.map((topic) => (
                    <span key={topic} className="text-[11px] bg-white/5 text-muted px-2.5 py-1 rounded-lg border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-medium text-primary-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Explore <HiRocketLaunch className="text-xs" />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links — Accordion */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Quick Links</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-light mt-2 mb-3">
                Popular resources
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Frequently accessed documentation pages to help you get the most out of AttendanceMitra.
              </p>
            </motion.div>

            <div className="lg:col-span-2 space-y-3">
              {quickLinks.map((item, i) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full glass-card rounded-xl border text-left transition-all duration-300 ${
                      openIndex === i
                        ? 'border-primary-500/30 bg-primary-500/5'
                        : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between px-5 py-4">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-xs font-bold text-primary-400">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-light font-medium">
                          {item.question}
                        </span>
                      </div>
                      <HiChevronDown
                        className={`text-muted flex-shrink-0 text-sm transition-transform duration-300 ${
                          openIndex === i ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="glass-card rounded-xl border border-primary-500/20 bg-primary-500/[0.02] mt-1 px-5 py-4 ml-12">
                          <p className="text-sm text-muted leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
