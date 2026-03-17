import { motion } from "motion/react";
import { GraduationCap, Building2, Stethoscope, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: <GraduationCap className="h-5 w-5 text-brand-400" />,
    title: "Coaching Institutes in Roorkee",
    description: "Lead generation, admissions-focused landing pages, and local SEO support for coaching and education brands.",
    href: "/marketing-for-coaching-institutes-roorkee",
  },
  {
    icon: <Building2 className="h-5 w-5 text-brand-400" />,
    title: "Real Estate in Dehradun",
    description: "Performance campaigns, lead funnels, and visibility systems for builders, agents, and property teams.",
    href: "/marketing-agency-for-real-estate-dehradun",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-brand-400" />,
    title: "Clinics Across Uttarakhand",
    description: "Trust-driven websites, search visibility, and patient-friendly digital positioning for clinics and healthcare practices.",
    href: "/marketing-for-clinics-uttarakhand",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-gray-50 py-24 transition-colors duration-300 dark:border-white/5 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
          >
            Industry Pages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Growth strategies shaped for
            <span className="block text-gradient text-gradient-animated">the businesses we serve most</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">{industry.description}</p>
              <a
                href={industry.href}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-500 hover:text-brand-400"
              >
                Explore page
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
