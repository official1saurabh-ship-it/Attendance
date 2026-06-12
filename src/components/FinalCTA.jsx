import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-[#0B132B]" />
      <div className="absolute top-0 -left-32 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-3xl animate-blob-delayed" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-4 text-balance">
            Ready to Simplify Attendance Management?
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Automate attendance tracking, leave management, and payroll workflows with one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
            >
              Book Free Demo
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/90 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
