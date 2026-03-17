import { motion } from "motion/react";

type CaseStudyPageProps = {
  category: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  note: string;
};

export default function CaseStudyPage({
  category,
  title,
  summary,
  challenge,
  approach,
  outcome,
  note,
}: CaseStudyPageProps) {
  return (
    <article className="relative overflow-hidden bg-black py-24 text-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,167,46,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.96))]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
        >
          {category}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-lg leading-8 text-gray-300"
        >
          {summary}
        </motion.p>

        <div className="mt-12 grid gap-6">
          <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">The challenge</h2>
            <p className="mt-4 leading-8 text-gray-300">{challenge}</p>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">The approach</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              {approach.map((item) => (
                <li key={item} className="leading-8">{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Expected outcome</h2>
            <ul className="mt-4 space-y-3 text-gray-300">
              {outcome.map((item) => (
                <li key={item} className="leading-8">{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.75rem] border border-brand-500/20 bg-brand-500/10 p-7">
            <h2 className="text-2xl font-semibold text-white">Note</h2>
            <p className="mt-4 leading-8 text-gray-200">{note}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
