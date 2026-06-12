import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiArrowRight } from 'react-icons/hi2';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started.',
    popular: false,
    features: [
      'Up to 50 employees',
      'GPS attendance tracking',
      'Basic reporting',
      'Email support',
      'Mobile app access',
      'Leave management',
    ],
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Best for growing companies.',
    popular: true,
    features: [
      'Up to 500 employees',
      'Face recognition',
      'Advanced analytics',
      'Priority support',
      'Payroll integration',
      'Custom reports',
      'API access',
      'Team management',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations with custom needs.',
    popular: false,
    features: [
      'Unlimited employees',
      'All Pro features',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      '24/7 phone support',
      'On-premise option',
      'Advanced security',
      'Custom branding',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-deep/30 to-dark pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Pricing</span>
          <h2 className="section-heading mt-3 mb-4">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subheading">Choose the plan that fits your team. No hidden fees.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${!isAnnual ? 'text-light' : 'text-muted'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-primary-500' : 'bg-surface-light'}`}
          >
            <motion.div
              animate={{ x: isAnnual ? 28 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-light' : 'text-muted'}`}>
            Annual <span className="text-accent-400 text-xs">Save 20%</span>
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan) => {
            const price = isAnnual ? Math.round(plan.price * 0.8) : plan.price;
            return (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative glass-card rounded-3xl p-8 flex flex-col border ${
                  plan.popular
                    ? 'border-primary-500/50 shadow-2xl shadow-primary-500/10 scale-105 lg:scale-110'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold px-6 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-light mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-light">${price}</span>
                    <span className="text-muted text-sm">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-muted mt-1">Billed annually (${price * 12}/yr)</p>
                  )}
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <HiCheck className="text-accent-400 flex-shrink-0 text-lg" />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25'
                      : 'bg-surface-light/50 text-light hover:bg-surface-light border border-white/5 hover:border-white/10'
                  }`}
                >
                  Get Started
                  <HiArrowRight />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
