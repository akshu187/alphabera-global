import { motion } from "motion/react";
import { MapPin, Building2, SearchCheck, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: <MapPin className="h-5 w-5 text-brand-400" />,
    title: "Roorkee, Dehradun and Nearby Areas",
    description:
      "We work with businesses in Roorkee, Dehradun, Uttarakhand and nearby cities that want stronger visibility, better leads, and measurable growth.",
  },
  {
    icon: <Building2 className="h-5 w-5 text-brand-400" />,
    title: "Built for Local Businesses",
    description:
      "From coaching centres and clinics to real estate, education, ecommerce, and service businesses, we build marketing systems that match local demand.",
  },
  {
    icon: <SearchCheck className="h-5 w-5 text-brand-400" />,
    title: "Local SEO + Performance Marketing",
    description:
      "We combine SEO, paid ads, high-converting websites, and branding so businesses in Uttarakhand can compete for both local and wider searches.",
  },
];

export default function LocalPresence() {
  return (
    <section
      id="local-seo"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-300 dark:border-white/5 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,167,46,0.1),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
          >
            Local Growth Focus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Digital marketing agency support for Roorkee, Dehradun and Uttarakhand businesses
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            <span className="text-gradient text-gradient-animated">Roorkee, Dehradun and Uttarakhand businesses</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 transition-colors duration-300 dark:text-gray-400"
          >
            If someone is searching for a marketing agency in Roorkee, Dehradun, or nearby, your website should clearly show
            what you do, who you help, and which locations you serve. That local clarity improves trust for both users and
            search engines.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600 transition-colors duration-300 dark:text-gray-400">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/digital-marketing-agency-roorkee"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-black transition-all hover:bg-brand-400"
          >
            Roorkee Page
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/digital-marketing-agency-dehradun"
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 px-6 py-3 font-semibold text-brand-400 transition-all hover:bg-brand-500/10"
          >
            Dehradun Page
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/digital-marketing-agency-uttarakhand"
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 px-6 py-3 font-semibold text-brand-400 transition-all hover:bg-brand-500/10"
          >
            Uttarakhand Page
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
