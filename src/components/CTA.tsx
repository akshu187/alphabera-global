import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-32 relative bg-white dark:bg-black border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
        <motion.div 
          className="absolute inset-0 bg-brand-600/10 blur-3xl"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Ready to Scale Your <br className="hidden md:block" />
            <span className="text-gradient text-gradient-animated">Revenue?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto transition-colors duration-300"
          >
            Join forward-thinking brands in Roorkee, Uttarakhand and nearby markets that trust Alphabera Global to drive measurable marketing growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.a 
              href="https://www.instagram.com/alphaberaglobal?igsh=MXN4M2tncWludm90Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-black rounded-full font-semibold hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group shadow-[0_0_40px_-10px_rgba(228,167,46,0.5)] btn-premium relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px -5px rgba(228,167,46,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Your Free Audit</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.div>
            </motion.a>

            <motion.button 
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto px-8 py-4 border-2 border-brand-500 text-brand-600 dark:text-brand-400 rounded-full font-semibold hover:bg-brand-500/10 transition-all flex items-center justify-center gap-2 group text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Call</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
