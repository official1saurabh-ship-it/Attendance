import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'HR Director',
    company: 'TechFlow Inc.',
    initials: 'SM',
    rating: 5,
    text: 'AttendanceMitra transformed how we manage attendance. The face recognition feature alone saved us hours every week. Payroll errors are a thing of the past.',
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    name: 'James Rodriguez',
    role: 'CEO',
    company: 'NovaCore Solutions',
    initials: 'JR',
    rating: 5,
    text: 'GPS attendance tracking is a game-changer for our field teams. We always know who is where, and the real-time reports give us complete visibility.',
    gradient: 'from-accent-500 to-teal-600',
  },
  {
    name: 'Emily Chang',
    role: 'Operations Manager',
    company: 'ApexDigital',
    initials: 'EC',
    rating: 5,
    text: 'Setup was incredibly smooth. The AttendanceMitra team guided us through every step. Our employees love the mobile app and we love the admin dashboard.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Michael Torres',
    role: 'CTO',
    company: 'CloudPeak Systems',
    initials: 'MT',
    rating: 4,
    text: 'Integrating with our existing payroll was seamless. The analytics dashboard gives us insights we never had before. Highly recommended for any growing team.',
    gradient: 'from-orange-500 to-red-600',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const next = () => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  return (
    <section id="testimonials" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/30 via-dark to-dark-deep/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Testimonials</span>
          <h2 className="section-heading mt-3 mb-4">
            Loved by{' '}
            <span className="gradient-text">Teams Worldwide</span>
          </h2>
          <p className="section-subheading">See why teams around the world love AttendanceMitra.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-white/5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <span className="text-white text-xl font-bold">{testimonials[current].initials}</span>
                  </div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className={`${i < testimonials[current].rating ? 'text-yellow-400' : 'text-surface-light'} text-xl`} />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-muted leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  <div>
                    <p className="font-display font-bold text-light text-lg">{testimonials[current].name}</p>
                    <p className="text-sm text-muted">{testimonials[current].role} &bull; {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:shadow-lg transition-all duration-300">
              <HiChevronLeft className="text-light text-xl" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary-500 w-8' : 'bg-surface-light hover:bg-muted'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:shadow-lg transition-all duration-300">
              <HiChevronRight className="text-light text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
