import { motion } from "motion/react";
import { Globe, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Twitter, label: "Instagram", href: "https://www.instagram.com/alphaberaglobal?igsh=MXN4M2tncWludm90Yw==" },
    { Icon: Linkedin, label: "Email", href: "mailto:alphabera.global@gmail.com" },
    { Icon: Github, label: "Contact", href: "/#contact" },
  ];

  const serviceLinks = [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "Social Media Management",
    "Branding & Design",
    "AI Automation",
  ];

  const companyLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Case Studies", href: "/#testimonials" },
    { label: "Roorkee Marketing", href: "/digital-marketing-agency-roorkee" },
    { label: "Dehradun Marketing", href: "/digital-marketing-agency-dehradun" },
    { label: "Uttarakhand Marketing", href: "/digital-marketing-agency-uttarakhand" },
    { label: "SEO Roorkee", href: "/seo-services-roorkee" },
    { label: "Website Dehradun", href: "/website-development-dehradun" },
    { label: "SMM Roorkee", href: "/social-media-marketing-roorkee" },
    { label: "Google Ads Dehradun", href: "/google-ads-agency-dehradun" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Globe className="h-8 w-8 text-brand-500 dark:text-brand-400" />
              </motion.div>
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                Alphabera<span className="text-brand-500 dark:text-brand-400">.</span>
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed mb-6 transition-colors duration-300">
              A data-driven marketing agency helping businesses in Roorkee, Dehradun, and Uttarakhand grow through SEO, paid advertising, websites, and creative strategy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h4 
              className="text-gray-900 dark:text-white font-semibold mb-4 uppercase tracking-wider text-sm transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:translate-x-1">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <motion.h4 
              className="text-gray-900 dark:text-white font-semibold mb-4 uppercase tracking-wider text-sm transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Company
            </motion.h4>
            <ul className="space-y-3">
              {companyLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.05 }}
                >
                  <a href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:translate-x-1">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Alphabera Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <motion.a 
              href="/privacy-policy" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms-of-service" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ x: 2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

