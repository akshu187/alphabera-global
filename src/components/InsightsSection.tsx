import { motion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";

const posts = [
  {
    title: "How to Get More Leads for Local Business in Uttarakhand",
    description: "A practical breakdown of search visibility, trust signals, landing pages, and paid support for local lead generation.",
    href: "/blog/get-more-leads-local-business-uttarakhand",
  },
  {
    title: "SEO vs Google Ads for Small Businesses in Roorkee",
    description: "When to choose SEO, when to use Google Ads, and how both can work together without wasting budget.",
    href: "/blog/seo-vs-google-ads-roorkee",
  },
  {
    title: "Best Marketing Strategies for Coaching Institutes in Dehradun",
    description: "Clear ideas for admissions-driven campaigns, landing pages, local SEO, and social proof.",
    href: "/blog/marketing-strategies-coaching-institutes-dehradun",
  },
];

export default function InsightsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 text-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-brand-500"
          >
            Insights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-5xl"
          >
            Helpful content built around
            <span className="block text-gradient text-gradient-animated">real search questions</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10">
                <FileText className="h-5 w-5 text-brand-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{post.description}</p>
              <a href={post.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 hover:text-brand-300">
                Read article
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
