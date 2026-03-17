import { motion } from "motion/react";
import { BadgeCheck, MapPin, Mail, Clock3 } from "lucide-react";

const items = [
  {
    icon: <BadgeCheck className="h-5 w-5 text-brand-400" />,
    title: "Strategy With Clear Execution",
    text: "We focus on practical SEO, paid campaigns, websites, and content systems built around real business goals.",
  },
  {
    icon: <MapPin className="h-5 w-5 text-brand-400" />,
    title: "Serving Real Local Markets",
    text: "Alphabera Global serves Roorkee, Dehradun, and businesses across Uttarakhand with locally relevant digital growth support.",
  },
  {
    icon: <Mail className="h-5 w-5 text-brand-400" />,
    title: "Direct Contact",
    text: "Reach us at alphabera.global@gmail.com or through the website to discuss your business goals and next growth steps.",
  },
  {
    icon: <Clock3 className="h-5 w-5 text-brand-400" />,
    title: "Focused on Long-Term Results",
    text: "We avoid vanity metrics and prioritize visibility, lead quality, and systems that support consistent growth.",
  },
];

export default function TrustSignals() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-20 text-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
          >
            Trust Signals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Clear business information,
            <span className="block text-gradient text-gradient-animated">useful services, and local relevance</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
