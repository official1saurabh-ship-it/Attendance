import { motion } from 'framer-motion';

export default function PageLayout({ children, title, description }) {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-1 pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-500/5 via-dark to-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-lg sm:text-xl text-muted leading-relaxed">{description}</p>
              )}
            </motion.div>
          </div>
        </section>
        <section className="py-12 sm:py-16 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
