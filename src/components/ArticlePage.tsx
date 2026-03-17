import { motion } from "motion/react";

type ArticlePageProps = {
  category: string;
  title: string;
  description: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export default function ArticlePage({ category, title, description, sections }: ArticlePageProps) {
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
          {description}
        </motion.p>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </article>
  );
}
