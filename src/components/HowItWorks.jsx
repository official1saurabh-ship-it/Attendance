import { motion } from 'framer-motion';
import { HiUserCircle, HiCheckCircle, HiClipboardDocumentList, HiDocumentText } from 'react-icons/hi2';

const steps = [
  { icon: HiUserCircle, step: '01', title: 'Employee Login', description: 'Team members log in securely using their credentials, fingerprint, or face recognition.', gradient: 'from-primary-500 to-blue-600' },
  { icon: HiCheckCircle, step: '02', title: 'Mark Attendance', description: 'One tap to check in. GPS verifies the location, and AI confirms identity — no more manual registers.', gradient: 'from-accent-500 to-teal-600' },
  { icon: HiClipboardDocumentList, step: '03', title: 'Manager Approval', description: 'Managers review attendance, approve leave requests, and handle exceptions in real time from any device.', gradient: 'from-violet-500 to-purple-600' },
  { icon: HiDocumentText, step: '04', title: 'Automated Reports', description: 'Attendance syncs straight to payroll. Detailed reports give you insights without the spreadsheet headaches.', gradient: 'from-orange-500 to-red-600' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deep/20 to-dark pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">How It Works</span>
          <h2 className="section-heading mt-3 mb-4">
            Simple <span className="gradient-text">4-Step</span> Process
          </h2>
          <p className="section-subheading">From login to report — get your team up and running in minutes.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-500/20 via-primary-500 to-accent-500/20" />

          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 group transition-all duration-500"
              >
                {/* Number badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <span className={`font-display text-4xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300`}>
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-light mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
