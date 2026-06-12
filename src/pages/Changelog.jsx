import { motion } from 'framer-motion';
import PageLayout from './PageLayout';

const releases = [
  { version: '4.2.0', date: 'June 1, 2026', tag: 'Latest', tagColor: 'bg-accent-500', changes: ['Advanced reporting dashboard with custom charts', 'New API endpoints for bulk attendance updates', 'Improved mobile app performance', 'Bug fixes and stability improvements'] },
  { version: '4.1.0', date: 'May 15, 2026', tag: null, tagColor: null, changes: ['Face recognition accuracy improved to 99.5%', 'Slack integration for attendance notifications', 'New leave approval workflow with auto-approve rules', 'Enhanced GPS geo-fencing capabilities'] },
  { version: '4.0.0', date: 'April 28, 2026', tag: 'Major', tagColor: 'bg-primary-500', changes: ['Complete UI redesign with modern interface', 'Real-time attendance tracking', 'Payroll integration module', 'Multi-language support (EN, ES, FR, DE)'] },
  { version: '3.5.0', date: 'March 10, 2026', tag: null, tagColor: null, changes: ['Export reports to CSV and PDF', 'Team calendar view for leave management', 'Custom notification preferences', 'Performance optimizations'] },
  { version: '3.4.0', date: 'February 1, 2026', tag: null, tagColor: null, changes: ['Mobile biometric authentication', 'QR code check-in for events', 'Improved offline mode sync', 'New analytics widgets'] },
];

export default function Changelog() {
  return (
    <PageLayout
      title="Changelog"
      description="Stay up to date with the latest features and improvements."
    >
      <div className="space-y-6">
        {releases.map((release, i) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display text-xl font-bold text-dark">v{release.version}</h3>
              {release.tag && (
                <span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${release.tagColor}`}>
                  {release.tag}
                </span>
              )}
              <span className="text-sm text-gray-400 ml-auto">{release.date}</span>
            </div>
            <ul className="space-y-2">
              {release.changes.map((change, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                  {change}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
