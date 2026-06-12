import { motion } from 'framer-motion';
import { HiUserCircle, HiCheckCircle, HiClipboardDocumentList, HiDocumentText } from 'react-icons/hi2';

const steps = [
  {
    icon: HiUserCircle,
    step: '01',
    title: 'Employee Login',
    description: 'Employees log in securely using their credentials or biometric authentication.',
  },
  {
    icon: HiCheckCircle,
    step: '02',
    title: 'Mark Attendance',
    description: 'One-tap attendance with GPS verification and face recognition for accuracy.',
  },
  {
    icon: HiClipboardDocumentList,
    step: '03',
    title: 'Approval Workflow',
    description: 'Managers review and approve attendance records, leaves, and exceptions.',
  },
  {
    icon: HiDocumentText,
    step: '04',
    title: 'Reports & Payroll',
    description: 'Automated reports sync with payroll for seamless processing every cycle.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            How It Works
          </span>
          <h2 className="section-heading mt-3 mb-4">
            Simple <span className="gradient-text">4-Step</span> Process
          </h2>
          <p className="section-subheading">
            Get started in minutes with our intuitive workflow.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-500 to-accent-500" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-xl shadow-primary-500/20 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-500">
                  <step.icon className="text-white text-3xl" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-primary-500 shadow-md">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
