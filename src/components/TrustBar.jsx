import { motion } from 'framer-motion';

const companies = [
  { name: 'TechFlow', text: 'TECHFLOW' },
  { name: 'NovaCore', text: 'NOVACORE' },
  { name: 'ApexDigital', text: 'APEX' },
  { name: 'CloudPeak', text: 'CLOUDPEAK' },
  { name: 'MatrixLabs', text: 'MATRIX' },
  { name: 'FusionX', text: 'FUSIONX' },
  { name: 'OrbitSys', text: 'ORBIT' },
  { name: 'Zenith', text: 'ZENITH' },
];

export default function TrustBar() {
  return (
    <section className="py-16 sm:py-20 border-y border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
            >
              <span className="font-display text-xl sm:text-2xl font-bold text-dark tracking-tight">
                {company.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '1M+', label: 'Attendance Records', desc: 'Processed monthly' },
            { value: '50K+', label: 'Hours Saved', desc: 'For HR teams' },
            { value: '98.5%', label: 'Accuracy Rate', desc: 'AI-powered tracking' },
            { value: '4.9/5', label: 'Customer Rating', desc: 'From 2,000+ reviews' },
          ].map((metric, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold gradient-text">{metric.value}</p>
              <p className="font-semibold text-dark mt-1">{metric.label}</p>
              <p className="text-sm text-gray-400 mt-0.5">{metric.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
