import { motion } from "motion/react";
import { Target, Search, Megaphone, PenTool, TrendingUp, Sparkles, Code, Users, Bot } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-brand-400" />,
      title: "SEO & Organic Growth",
      description: "Dominate search rankings and drive high-intent organic traffic to your website."
    },
    {
      icon: <Target className="w-6 h-6 text-brand-400" />,
      title: "Paid Advertising",
      description: "Highly targeted PPC and social ad campaigns designed to maximize your ROI."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-brand-400" />,
      title: "Social Media Management",
      description: "Build a loyal community and amplify your brand voice across all major platforms."
    },
    {
      icon: <PenTool className="w-6 h-6 text-brand-400" />,
      title: "Content Strategy",
      description: "Compelling storytelling and valuable content that converts readers into customers."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-400" />,
      title: "Data Analytics",
      description: "Deep insights and performance tracking to continuously optimize your campaigns."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-400" />,
      title: "Brand Identity",
      description: "Crafting memorable brand experiences that resonate with your target audience."
    },
    {
      icon: <Code className="w-6 h-6 text-brand-400" />,
      title: "Build High Converting Websites",
      description: "Building fast, responsive, and conversion-optimized websites that serve as your digital storefront."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-400" />,
      title: "Influencer Marketing",
      description: "Partner with industry creators to build authentic brand awareness and drive sales."
    },
    {
      icon: <Bot className="w-6 h-6 text-brand-400" />,
      title: "AI Automation",
      description: "Streamline operations and enhance customer experiences with cutting-edge AI solutions."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500/5 via-transparent to-brand-500/5"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            AI Powered <span className="text-gradient text-gradient-animated">Digital Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300"
          >
            For Modern Businesses. We engineer comprehensive marketing ecosystems that drive sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(228,167,46,0.15)] hover:border-brand-500/50 group relative overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-500/20 transition-all duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors relative z-10">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 relative z-10">
                {feature.description}
              </p>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-brand-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
