import { motion } from "motion/react";
import { Bot, Clock3, LineChart, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function Testimonials() {
  const reasons = [
    {
      icon: <Sparkles className="w-6 h-6 text-brand-400" />,
      title: "Strategy Built Around Your Brand",
      description:
        "No recycled campaign templates. We shape each growth plan around your market, customer journey, and business goals."
    },
    {
      icon: <LineChart className="w-6 h-6 text-brand-400" />,
      title: "Performance You Can Measure",
      description:
        "Every move is tied to outcomes that matter, from qualified leads and conversions to retention and revenue visibility."
    },
    {
      icon: <Bot className="w-6 h-6 text-brand-400" />,
      title: "AI With Human Direction",
      description:
        "We use AI to move faster, automate intelligently, and uncover insights, while keeping strategy and creative decisions deliberate."
    },
    {
      icon: <Clock3 className="w-6 h-6 text-brand-400" />,
      title: "Fast Execution",
      description:
        "Ideas do not sit in decks for weeks. We move from planning to launch quickly so momentum is never lost."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-400" />,
      title: "One Team Across Channels",
      description:
        "Brand, content, ads, web, and automation work together under one system instead of pulling in different directions."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-400" />,
      title: "Reliable, Long-Term Partner",
      description:
        "We focus on sustainable growth, clear communication, and decisions that strengthen your business over time."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,167,46,0.12),transparent_35%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-14 items-start">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-brand-500 mb-5"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              A growth partner that combines <span className="text-gradient text-gradient-animated">speed, clarity, and execution</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300"
            >
              We help brands move from scattered marketing efforts to a focused growth system that is creative, data-aware, and built to scale.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="p-7 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_28px_rgba(228,167,46,0.12)] group"
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
