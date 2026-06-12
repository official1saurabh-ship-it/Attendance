import { motion } from 'framer-motion';
import PageLayout from './PageLayout';

const stats = [
  { value: '2020', label: 'Founded' },
  { value: '500+', label: 'Companies' },
  { value: '50+', label: 'Team Members' },
  { value: '4.9★', label: 'Customer Rating' },
];

const values = [
  { title: 'Innovation', description: 'We continuously push boundaries to deliver cutting-edge attendance solutions powered by AI and machine learning.' },
  { title: 'Reliability', description: 'Our platform maintains 99.9% uptime, ensuring your attendance data is always available when you need it.' },
  { title: 'Security', description: 'We protect your data with enterprise-grade encryption and comply with global security standards.' },
  { title: 'Customer Success', description: 'Your success is our success. We provide dedicated support to help you get the most out of AttendPro.' },
];

export default function About() {
  return (
    <PageLayout
      title="About AttendPro"
      description="We're on a mission to simplify attendance management for modern teams worldwide."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="prose max-w-none mb-16">
        <h2 className="font-display text-2xl font-bold text-dark mb-4">Our Story</h2>
        <p className="text-gray-500 leading-relaxed mb-4">
          AttendPro was founded in 2020 with a simple vision: make attendance management effortless for every organization. 
          What started as a small solution for a handful of companies has grown into a platform trusted by over 500 businesses worldwide.
        </p>
        <p className="text-gray-500 leading-relaxed mb-4">
          Our team of 50+ dedicated professionals works tirelessly to ensure our platform evolves with the needs of modern 
          workplaces. From GPS tracking to AI-powered face recognition, we're committed to providing the most comprehensive 
          attendance management solution on the market.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Today, AttendPro processes over 1 million attendance records monthly, helping HR teams save thousands of hours 
          and reduce payroll errors by 98%. We're proud to be the trusted choice for companies of all sizes.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold text-dark mb-6">Our Values</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display font-bold text-dark mb-2">{value.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
