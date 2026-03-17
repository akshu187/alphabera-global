import { motion } from "motion/react";
import AnimatedCounter from "../utils/AnimatedCounter";

export default function Stats() {
  const stats = [
    { label: "Ad Spend Managed", value: 100, suffix: "K+", duration: 2 },
    { label: "Average ROI", value: 220, suffix: "%", duration: 2 },
    { label: "Leads Generated", value: 150, suffix: "+", duration: 2 },
    { label: "Active Campaigns", value: 20, suffix: "+", duration: 2 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-50 dark:bg-black border-t border-brand-100 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-brand-500/5 mix-blend-multiply dark:mix-blend-overlay"></div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-brand-100 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/10 dark:hover:bg-white/10 group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-900 dark:text-white mb-2 font-display tracking-tight transition-colors duration-300 group-hover:text-brand-500">
                <AnimatedCounter 
                  from={0} 
                  to={stat.value} 
                  duration={stat.duration} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-brand-600 dark:text-brand-300 font-medium text-sm uppercase tracking-wider transition-colors duration-300">
                {stat.label}
              </p>
              
              {/* Animated underline on hover */}
              <motion.div
                className="h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full mt-4"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
