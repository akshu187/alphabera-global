import { motion } from "motion/react";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-brand-400" />,
      title: "Discovery & Audit",
      description: "We analyze your current market position, competitors, and target audience to find growth opportunities."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-400" />,
      title: "Strategy Development",
      description: "Crafting a tailored, multi-channel marketing plan designed specifically to hit your revenue goals."
    },
    {
      icon: <Rocket className="w-8 h-8 text-brand-400" />,
      title: "Campaign Execution",
      description: "Launching creative assets, ad campaigns, and SEO initiatives with precision and impact."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-400" />,
      title: "Optimize & Scale",
      description: "Continuous A/B testing and data analysis to maximize ROI and scale winning campaigns."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black relative transition-colors duration-300 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-500/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our Growth Framework
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
            className="text-3xl md:text-5xl font-bold -mt-3 mb-6"
          >
            <span className="text-gradient text-gradient-animated">from audit to scale</span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300"
          >
            A data-driven approach to turning your marketing budget into a predictable revenue engine.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Icon circle */}
                <motion.div 
                  className="w-20 h-20 mx-auto rounded-full bg-gray-50 dark:bg-black border-4 border-white dark:border-black shadow-[0_0_30px_rgba(228,167,46,0.1)] flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_40px_rgba(228,167,46,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5 + index * 0.5, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Number badge */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-500 text-black flex items-center justify-center font-bold text-sm border-4 border-white dark:border-black transition-colors duration-300 group-hover:bg-brand-400"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                
                {/* Text content */}
                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-brand-500/5 -z-10"
                  whileHover={{ backgroundColor: 'rgba(228, 167, 46, 0.1)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
