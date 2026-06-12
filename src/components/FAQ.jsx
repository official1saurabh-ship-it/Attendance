import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi2';

const faqs = [
  { question: 'How does GPS attendance tracking work?', answer: 'Employees check in using the mobile app, which captures their GPS location. You can set geofenced zones so attendance is only valid at designated locations.' },
  { question: 'Is face recognition secure?', answer: 'Absolutely. Our AI uses liveness detection to prevent spoofing, with 99.5% accuracy in any lighting. All biometric data is encrypted and kept secure.' },
  { question: 'Can I integrate with my payroll system?', answer: 'Yes. AttendanceMitra integrates with ADP, Gusto, QuickBooks, and more. Our open API also supports custom payroll integrations.' },
  { question: 'What if an employee does not have a smartphone?', answer: 'No problem. Employees can mark attendance via the web portal, biometric devices, or a shared kiosk tablet at the workplace.' },
  { question: 'How long does setup take?', answer: 'Most teams go live in 1–2 business days. Our onboarding team handles employee import, configuration, and testing for you.' },
  { question: 'Is my data safe?', answer: 'Security is our top priority. We use AES-256 encryption, TLS 1.3, and are SOC 2 Type II compliant and GDPR-ready. Data is backed up daily.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-14 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deep/20 to-dark pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">FAQ</span>
          <h2 className="section-heading mt-3 mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subheading">Everything you need to know about AttendanceMitra.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-display font-bold text-light pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface-light/50 flex items-center justify-center"
                >
                  <HiChevronDown className="text-muted" />
                </motion.div>
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
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-muted leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
