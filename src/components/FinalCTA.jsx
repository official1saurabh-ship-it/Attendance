import { motion } from 'framer-motion';
import { HiArrowRight, HiShieldCheck } from 'react-icons/hi2';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500" />
      <div className="absolute inset-0 bg-dark/20" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl animate-blob-delayed" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/10">
              <HiShieldCheck className="text-accent-300" />
              No credit card required. Cancel anytime.
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
              Ready to Simplify Your{' '}
              <span className="text-accent-300">Attendance</span> Management?
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join hundreds of businesses already saving time and running payroll with zero errors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://att.biosoftech.in/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
              >
                Start Free Trial
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
