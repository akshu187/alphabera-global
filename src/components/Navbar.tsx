import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../utils/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="/#home"
              className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-transparent"
            >
              <img 
                src="/logo.svg" 
                alt="Alphabera Logo" 
                width="56"
                height="56"
                className="w-full h-full object-contain"
              />
            </motion.a>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-gray-900 dark:text-white transition-colors duration-300 leading-tight">
                Alphabera
              </span>
              <span className="font-semibold text-xs tracking-widest text-brand-500 dark:text-brand-400 uppercase">
                Global
              </span>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                className="bg-brand-500 hover:bg-brand-600 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform btn-premium hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
        id="mobile-navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-black/95 backdrop-blur-md">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="/#contact"
            className="w-full mt-4 bg-brand-500 hover:bg-brand-600 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
}
