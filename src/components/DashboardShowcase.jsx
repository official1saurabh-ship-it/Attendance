import { motion } from 'framer-motion';
import { HiChartBar, HiCalendarDays, HiUsers, HiCurrencyDollar } from 'react-icons/hi2';

const panels = [
  {
    icon: HiChartBar,
    title: 'Attendance Analytics',
    color: 'from-primary-500 to-blue-600',
    shadow: 'shadow-primary-500/20',
    stats: [
      { label: 'Avg. Attendance', value: '94.2%', change: '+2.1%', positive: true },
      { label: 'Total Employees', value: '342' },
    ],
  },
  {
    icon: HiCalendarDays,
    title: 'Leave Management',
    color: 'from-accent-500 to-emerald-600',
    shadow: 'shadow-accent-500/20',
    stats: [
      { label: 'Pending Requests', value: '12', change: '+3', positive: false },
      { label: 'Approved Today', value: '8' },
    ],
  },
  {
    icon: HiUsers,
    title: 'Employee Reports',
    color: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-500/20',
    stats: [
      { label: 'Active Employees', value: '328' },
      { label: 'On Leave', value: '14' },
    ],
  },
  {
    icon: HiCurrencyDollar,
    title: 'Payroll Summary',
    color: 'from-orange-500 to-red-600',
    shadow: 'shadow-orange-500/20',
    stats: [
      { label: 'Monthly Payroll', value: '$487K' },
      { label: 'Avg. Salary', value: '$4,850' },
    ],
  },
];

export default function DashboardShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Dashboard
          </span>
          <h2 className="section-heading mt-3 mb-4">
            Powerful{' '}
            <span className="gradient-text">Dashboard</span> at Your Fingertips
          </h2>
          <p className="section-subheading">
            Everything you need to manage attendance in one beautiful interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="glass rounded-3xl p-4 sm:p-8 shadow-2xl shadow-primary-500/10 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 h-8 bg-gray-100 rounded-xl flex items-center px-4">
                <span className="text-sm text-gray-400">dashboard.attendpro.com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { label: 'Total Employees', value: '342', change: '+12 this month', color: 'text-primary-500' },
                { label: 'Present Today', value: '298', change: '87.1%', color: 'text-accent-500' },
                { label: 'On Leave', value: '18', change: '5.3%', color: 'text-orange-500' },
                { label: 'Absent', value: '26', change: '7.6%', color: 'text-red-500' },
              ].map((item) => (
                <div key={item.label} className="bg-white/80 rounded-xl p-3 sm:p-4 border border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className={`font-display text-xl sm:text-2xl font-bold ${item.color}`}>{item.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.change}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-dark">Weekly Attendance Trend</h4>
                <div className="flex gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <div key={day} className="flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${[75, 85, 70, 90, 80][i]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="w-6 sm:w-8 bg-gradient-to-t from-primary-500 to-primary-400 rounded-lg"
                        style={{ height: `${[75, 85, 70, 90, 80][i]}%`, minHeight: '40px' }}
                      />
                      <span className="text-xs text-gray-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${panel.color} flex items-center justify-center shadow-lg ${panel.shadow}`}>
                  <panel.icon className="text-white text-lg" />
                </div>
                <h4 className="font-display font-bold text-dark text-sm">{panel.title}</h4>
              </div>
              <div className="space-y-3">
                {panel.stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-dark text-sm">{stat.value}</span>
                      {stat.change && (
                        <span className={`text-xs font-medium ${stat.positive ? 'text-accent-500' : 'text-red-500'}`}>
                          {stat.change}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
