import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiMagnifyingGlass,
  HiBookOpen,
  HiPlay,
  HiQuestionMarkCircle,
  HiEnvelope,
  HiChatBubbleLeftEllipsis,
  HiArrowRight,
} from 'react-icons/hi2';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const helpCategories = [
  { icon: HiBookOpen, title: 'Guides & Tutorials', description: 'Step-by-step guides to help you set up and use AttendanceMitra.', articles: '24 articles', gradient: 'from-primary-500 to-blue-600' },
  { icon: HiPlay, title: 'Video Tutorials', description: 'Watch our library of how-to videos with walkthroughs and tips.', articles: '18 videos', gradient: 'from-accent-500 to-teal-600' },
  { icon: HiQuestionMarkCircle, title: 'FAQ', description: 'Quick answers to the most common questions from our users.', articles: '35 articles', gradient: 'from-violet-500 to-purple-600' },
  { icon: HiChatBubbleLeftEllipsis, title: 'Community Forum', description: 'Connect with other AttendanceMitra users and share best practices.', articles: 'Join the conversation', gradient: 'from-orange-500 to-red-600' },
  { icon: HiEnvelope, title: 'Email Support', description: 'Reach our team directly. We typically respond within 2-4 hours.', articles: 'Response in 2-4 hours', gradient: 'from-pink-500 to-rose-600' },
  { icon: HiMagnifyingGlass, title: 'Search Docs', description: 'Search our entire knowledge base to find answers fast.', articles: 'Find answers fast', gradient: 'from-cyan-500 to-blue-600' },
];

const popularArticles = [
  'How to set up GPS attendance tracking',
  'Adding employees via bulk import',
  'Understanding attendance reports',
  'Configuring leave approval workflow',
  'Integrating with payroll systems',
];

export default function HelpCenter() {
  const [search, setSearch] = useState('');

  const filtered = helpCategories.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.description.toLowerCase().includes(search.toLowerCase())
  );

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
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Help Center
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light leading-[1.1] mb-4">
              How can we{' '}
              <span className="gradient-text">help</span> you?
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto mb-8">
              Search our knowledge base or browse categories below.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-muted text-xl" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for help articles..."
                className="w-full pl-14 pr-6 py-4 sm:py-5 rounded-2xl bg-surface/80 border border-white/10 focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 outline-none text-base sm:text-lg text-light placeholder-muted/50 transition-all duration-300 shadow-xl shadow-black/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-2xl bg-surface/80 flex items-center justify-center mx-auto mb-5 border border-white/5">
                <HiMagnifyingGlass className="text-3xl text-muted/40" />
              </div>
              <p className="text-lg text-light font-medium mb-2">No results found</p>
              <p className="text-sm text-muted mb-4">No articles match &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => setSearch('')}
                className="text-sm text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
              >
                Clear search & browse all
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filtered.map((cat) => (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 relative overflow-hidden cursor-pointer"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.07] rounded-bl-full transition-opacity duration-500`} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <cat.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-light mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary-400 font-medium">{cat.articles}</span>
                    <HiArrowRight className="text-muted group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 sm:py-20 bg-dark-deep/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary-400">Popular</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-light mt-2 mb-3">
                Most asked questions
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Quick answers to the topics our users ask about most. Browse our full documentation for more details.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-3"
            >
              {popularArticles.map((article, i) => (
                <motion.div
                  key={article}
                  variants={fadeUp}
                  className="glass-card rounded-xl px-5 py-4 border border-white/5 hover:border-white/10 group cursor-pointer flex items-center justify-between transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center text-xs font-bold text-primary-400">
                      {i + 1}
                    </span>
                    <span className="text-sm text-light group-hover:text-primary-400 transition-colors duration-300">
                      {article}
                    </span>
                  </div>
                  <HiArrowRight className="text-muted group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300 text-sm flex-shrink-0" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="py-16 sm:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-light mb-3">
              Still need help?
            </h2>
            <p className="text-muted text-sm mb-8 max-w-md mx-auto">
              Our support team typically responds within 2–4 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@biosoftech.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                <HiEnvelope className="text-lg" />
                Email Support
              </a>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
