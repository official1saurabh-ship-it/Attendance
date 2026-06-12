import { motion } from 'framer-motion';
import {
  HiRocketLaunch,
  HiLightBulb,
  HiShieldCheck,
  HiHeart,
  HiChartBar,
  HiArrowRight,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const storyMilestones = [
  { year: '2020', title: 'The Beginning', description: 'AttendanceMitra was born from a simple idea: make attendance management effortless for every organization.' },
  { year: '2021', title: 'First 100 Customers', description: 'Hit our first 100 customers and launched GPS-based attendance tracking.' },
  { year: '2023', title: 'AI-Powered Platform', description: 'Introduced face recognition and AI analytics, processing over 500K records monthly.' },
  { year: '2025', title: 'Enterprise Scale', description: 'Crossed 500 customers, launched payroll integrations, and achieved SOC 2 compliance.' },
  { year: '2026', title: 'Global Expansion', description: 'Expanded to 15+ countries, 1M+ monthly attendance records, and a team of 50+.' },
];

const values = [
  { icon: HiLightBulb, title: 'Innovation', description: 'We push boundaries to deliver AI-powered attendance solutions that make work easier for everyone.', gradient: 'from-primary-500 to-primary-700' },
  { icon: HiShieldCheck, title: 'Reliability', description: '99.9% uptime ensures your attendance data is always available when and where you need it.', gradient: 'from-accent-500 to-emerald-600' },
  { icon: HiHeart, title: 'Customer Success', description: 'Your success drives us. We provide hands-on support to help you get the most from AttendanceMitra.', gradient: 'from-rose-500 to-pink-600' },
  { icon: HiChartBar, title: 'Data-Driven', description: 'Every feature we build is guided by real data, so we solve problems that actually matter to our users.', gradient: 'from-violet-500 to-purple-600' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-dark to-dark pointer-events-none" />
        <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl animate-blob-delayed" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              About AttendanceMitra
            </motion.div>
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-light leading-[1.1] mb-4">
              We are on a Mission to Simplify{' '}
              <span className="gradient-text">Attendance</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Empowering modern teams with AI-driven workforce management, trusted by 500+ companies worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story with Milestones */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-dark to-dark-deep/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-light mt-3 mb-6 leading-tight">
                From a Simple Idea to a{' '}
                <span className="gradient-text">Trusted Platform</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  AttendanceMitra was founded in 2020 with a clear mission: make attendance management effortless for every organization.
                  What began as a small tool for a handful of companies has grown into a platform trusted by over 500 businesses worldwide.
                </p>
                <p>
                  Our team of 50+ dedicated professionals works tirelessly to ensure the platform evolves with the needs of modern
                  workplaces. From GPS tracking to AI-powered face recognition, we are committed to delivering the most complete
                  attendance management solution on the market.
                </p>
                <p>
                  Today, AttendanceMitra processes over 1 million attendance records every month, helping HR teams save thousands of hours
                  and reduce payroll errors by 98%. We are proud to be the trusted choice for companies of all sizes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden sm:block" />

              <div className="space-y-8">
                {storyMilestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative pl-0 sm:pl-16"
                  >
                    <div className="absolute left-4 sm:left-4 top-1 w-5 h-5 rounded-full bg-dark border-4 border-primary-500 hidden sm:block" />
                    <div className="glass-card rounded-2xl p-5 sm:p-6">
                      <span className="inline-block font-display text-sm font-bold text-primary-500 mb-1">{milestone.year}</span>
                      <h4 className="font-display font-bold text-light mb-1">{milestone.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 sm:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">Values</span>
            <h2 className="section-heading mt-3 mb-4">
              What <span className="gradient-text">Drives</span> Us
            </h2>
            <p className="section-subheading">
              Our core values shape every decision we make and every product we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-display text-xl font-bold text-light mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-3xl animate-blob" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Want to Be Part of Our{' '}
              <span className="text-accent-400">Journey</span>?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Join 500+ companies already using AttendanceMitra. Start your free trial today.
            </p>
            <a
              href="https://att.biosoftech.in/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
            >
              Get Started Free
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
