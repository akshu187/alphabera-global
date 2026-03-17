import { motion } from "motion/react";
import { ArrowRight, BarChart3 } from "lucide-react";

const studies = [
  {
    title: "Roorkee Coaching Growth System",
    summary: "A more structured admissions funnel with location-focused landing pages, trust signals, and stronger enquiry flow.",
    href: "/case-studies/roorkee-coaching-growth",
  },
  {
    title: "Dehradun Real Estate Lead Funnel",
    summary: "A cleaner project journey from ad click to qualified enquiry with better message-to-page alignment.",
    href: "/case-studies/dehradun-real-estate-leads",
  },
  {
    title: "Uttarakhand Clinic Visibility Lift",
    summary: "Improved local discoverability and appointment intent through clearer service pages and patient-friendly website structure.",
    href: "/case-studies/uttarakhand-clinic-visibility",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white py-24 transition-colors duration-300 dark:border-white/5 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
          >
            Case Studies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Strategy examples built around
            <span className="block text-gradient text-gradient-animated">real business situations</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {studies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-gray-200 bg-gray-50 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10">
                <BarChart3 className="h-5 w-5 text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{study.title}</h3>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">{study.summary}</p>
              <a href={study.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-500 hover:text-brand-400">
                View case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
