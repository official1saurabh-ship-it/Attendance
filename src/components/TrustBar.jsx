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

const metrics = [
  { value: '500+', label: 'Companies', desc: 'Trust AttendPro globally' },
  { value: '50K+', label: 'Employees Managed', desc: 'Across all industries' },
  { value: '99.9%', label: 'System Uptime', desc: 'Enterprise-grade reliability' },
  { value: '80%', label: 'Payroll Time Saved', desc: 'Average HR efficiency gain' },
];

export default function TrustBar() {
  return (
    <section className="py-16 sm:py-20 border-y border-white/5 bg-dark-deep/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-muted mb-10"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center mb-16">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-30 hover:opacity-60 transition-all duration-500"
            >
              <span className="font-display text-xl sm:text-2xl font-bold text-light tracking-tight">
                {company.text}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center group hover:border-primary-500/20"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text">{metric.value}</p>
              <p className="font-semibold text-light mt-2">{metric.label}</p>
              <p className="text-sm text-muted mt-1">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
