import { motion } from 'framer-motion';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiClock,
  HiPaperAirplane,
  HiCheckCircle,
} from 'react-icons/hi2';
import { useState } from 'react';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const contactMethods = [
  { icon: HiEnvelope, label: 'Email', value: 'info@biosoftech.com', action: 'Send us a message', href: 'mailto:info@biosoftech.com', gradient: 'from-primary-500 to-blue-600' },
  { icon: HiPhone, label: 'Phone', value: '+91-6209688930', action: 'Call us anytime', href: 'tel:+916209688930', gradient: 'from-accent-500 to-teal-600' },
  { icon: HiMapPin, label: 'Office', value: 'Lucknow, Uttar Pradesh', action: 'Visit our HQ', gradient: 'from-violet-500 to-purple-600' },
  { icon: HiClock, label: 'Hours', value: '9:00 AM – 7:00 PM', action: 'Mon – Sat', gradient: 'from-orange-500 to-red-600' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <HiEnvelope className="text-sm" />
              Contact Us
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              We'd love to hear{' '}
              <span className="gradient-text">from you</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Have questions about AttendanceMitra? Our team is ready to help you get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 sm:py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.label}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-white/10 group transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <method.icon className="text-white text-xl" />
                </div>
                <h3 className="font-display font-bold text-light mb-1">{method.label}</h3>
                <p className="text-sm text-muted mb-3">{method.value}</p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {method.action}
                  </a>
                ) : (
                  <span className="text-xs font-medium text-primary-400">{method.action}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Get in Touch</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light mt-2 mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-8 sm:p-10 text-center border border-accent-500/20 bg-accent-500/[0.02]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <HiCheckCircle className="text-white text-2xl" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-light mb-2">Thank You!</h3>
                  <p className="text-muted text-sm mb-6">
                    Your message has been sent. We'll reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-surface-light/50 text-light px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-surface-light border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light placeholder-muted/50 transition-all duration-200"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light placeholder-muted/50 transition-all duration-200"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light placeholder-muted/50 transition-all duration-200"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light transition-all duration-200"
                  >
                    <option value="" disabled className="bg-dark">Select a topic</option>
                    <option className="bg-dark">General Inquiry</option>
                    <option className="bg-dark">Sales</option>
                    <option className="bg-dark">Support</option>
                    <option className="bg-dark">Partnership</option>
                  </select>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/10 outline-none text-sm text-light placeholder-muted/50 transition-all duration-200 resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <HiPaperAirplane />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5">
                <h3 className="font-display font-bold text-light mb-4">Why Choose AttendanceMitra?</h3>
                <ul className="space-y-3">
                  {[
                    '500+ companies trust us worldwide',
                    '99.9% platform uptime guarantee',
                    'SOC 2 Type II compliant security',
                    '24-hour response time on inquiries',
                    'Dedicated account managers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5">
                <h3 className="font-display font-bold text-light mb-4">Office Address</h3>
                <div className="flex items-start gap-3 text-sm text-muted mb-4">
                  <HiMapPin className="text-primary-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+Office+No-624/20A,+Kotwali+Rd,+Matiyaari,+Chinhat,+Lucknow,+Uttar+Pradesh-226028"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-light transition-colors break-words"
                  >
                    Biosoftech Pvt. Ltd.<br />
                    3rd Floor, Office No-624/20A, Kotwali Rd, Matiyaari, Chinhat,<br />
                    Lucknow, Uttar Pradesh-226028
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted mb-4">
                  <HiPhone className="text-primary-400 flex-shrink-0" />
                  <a href="tel:+916209688930" className="hover:text-light transition-colors">+91-6209688930</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <HiEnvelope className="text-primary-400 flex-shrink-0" />
                  <a href="mailto:info@biosoftech.com" className="hover:text-light transition-colors">info@biosoftech.com</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
