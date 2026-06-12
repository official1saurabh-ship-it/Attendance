import { motion } from 'framer-motion';
import { HiMagnifyingGlass, HiBookOpen, HiPlay, HiQuestionMarkCircle, HiEnvelope, HiChatBubbleLeftRight } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const helpCategories = [
  { icon: HiBookOpen, title: 'Guides & Tutorials', description: 'Step-by-step guides to help you get started.', articles: '24 articles' },
  { icon: HiPlay, title: 'Video Tutorials', description: 'Watch our library of how-to videos.', articles: '18 videos' },
  { icon: HiQuestionMarkCircle, title: 'FAQ', description: 'Answers to the most common questions.', articles: '35 articles' },
  { icon: HiChatBubbleLeftRight, title: 'Community Forum', description: 'Get help from other AttendPro users.', articles: 'Join the conversation' },
  { icon: HiEnvelope, title: 'Email Support', description: 'Reach our support team via email.', articles: 'Response in 2-4 hours' },
  { icon: HiMagnifyingGlass, title: 'Search Docs', description: 'Search our entire knowledge base.', articles: 'Find answers fast' },
];

export default function HelpCenter() {
  return (
    <PageLayout
      title="Help Center"
      description="Find answers, guides, and support resources."
    >
      <div className="relative mb-10">
        <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search for help articles..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-lg transition-all duration-200"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <cat.icon className="text-white text-xl" />
            </div>
            <h3 className="font-display font-bold text-dark mb-2">{cat.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{cat.description}</p>
            <span className="text-xs text-primary-500 font-medium">{cat.articles}</span>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
