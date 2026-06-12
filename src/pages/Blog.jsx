import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import PageLayout from './PageLayout';

const posts = [
  { title: 'How AI is Changing Attendance Management in 2026', category: 'Technology', date: 'Jun 5, 2026', readTime: '5 min read', excerpt: 'Artificial intelligence is reshaping how companies track and manage attendance. Here is what you need to know.' },
  { title: '10 Ways to Reduce Payroll Errors with Automated Attendance', category: 'Best Practices', date: 'May 22, 2026', readTime: '7 min read', excerpt: 'Manual attendance tracking leads to costly payroll mistakes. Learn how automation can save your team time and money.' },
  { title: 'Hybrid Work Attendance Solutions for Remote Teams', category: 'Workplace', date: 'May 8, 2026', readTime: '6 min read', excerpt: 'As hybrid work becomes the norm, companies need attendance systems that work for everyone — in-office and remote.' },
  { title: 'Face Recognition vs. Traditional Check-In: Which Is Better?', category: 'Technology', date: 'Apr 20, 2026', readTime: '4 min read', excerpt: 'We compare accuracy, security, and convenience of face recognition against traditional attendance methods.' },
  { title: 'Getting Started with AttendanceMitra: A Step-by-Step Guide', category: 'Tutorial', date: 'Apr 10, 2026', readTime: '8 min read', excerpt: 'New to AttendanceMitra? Follow our guide to set up your attendance system and get your team on board in minutes.' },
];

export default function Blog() {
  return (
    <PageLayout
      title="Blog"
      description="Insights, tips, and updates about attendance management and the future of work."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
              <span className="font-display text-4xl text-primary-300 font-bold group-hover:scale-110 transition-transform duration-300">
                {post.category.charAt(0)}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span className="text-primary-500 font-medium">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-dark mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm font-medium text-primary-500 inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Read More <HiArrowRight />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
}
