import { motion } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiClock } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const contactMethods = [
  { icon: HiEnvelope, label: 'Email', value: 'hello@attendpro.com', action: 'Send us a message' },
  { icon: HiPhone, label: 'Phone', value: '+1 (555) 123-4567', action: 'Call us anytime' },
  { icon: HiMapPin, label: 'Office', value: 'San Francisco, CA', action: 'Visit our HQ' },
  { icon: HiClock, label: 'Hours', value: 'Mon–Fri, 9AM–6PM PST', action: 'We respond fast' },
];

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      description="Have questions? We'd love to hear from you. Get in touch with our team."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, i) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <method.icon className="text-white text-xl" />
            </div>
            <h3 className="font-display font-bold text-dark mb-1">{method.label}</h3>
            <p className="text-gray-500 text-sm mb-2">{method.value}</p>
            <span className="text-xs text-primary-500 font-medium">{method.action}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200" />
            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200" />
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 text-gray-500">
            <option>Select a topic</option>
            <option>General Inquiry</option>
            <option>Sales</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>
          <textarea rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 resize-none" />
          <button type="submit" className="cta-primary">Send Message</button>
        </form>
      </div>
    </PageLayout>
  );
}
