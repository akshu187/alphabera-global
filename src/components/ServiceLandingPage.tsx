import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MapPin, Search, Target } from "lucide-react";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  audience: string;
  searchTerm: string;
  points: string[];
  faq: Array<{ question: string; answer: string }>;
};

export default function ServiceLandingPage({
  eyebrow,
  title,
  description,
  intro,
  audience,
  searchTerm,
  points,
  faq,
}: ServiceLandingPageProps) {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,167,46,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.95))]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.22em] text-brand-300 uppercase"
          >
            <MapPin className="h-4 w-4" />
            <span>{eyebrow}</span>
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
            className="mt-6 max-w-3xl text-lg leading-8 text-gray-300"
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-semibold text-white">Who this page helps</h2>
            <p className="mt-4 leading-8 text-gray-300">{intro}</p>

            <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <p className="text-sm leading-7 text-gray-200">{audience}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-gray-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-brand-400" />
                    <span>{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-white">
              <Search className="h-5 w-5 text-brand-400" />
              <h2 className="text-xl font-semibold">Search intent</h2>
            </div>
            <p className="mt-4 leading-7 text-gray-300">
              This page is written for people searching terms like <span className="text-brand-300">{searchTerm}</span>
              , with clear service details instead of keyword stuffing.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <div className="flex items-center gap-3 text-white">
                <Target className="h-5 w-5 text-brand-300" />
                <h3 className="font-semibold">Best next step</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                If this matches your business need, the fastest next step is a quick audit of your current website,
                visibility, and conversion flow.
              </p>
              <a
                href="/#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-brand-400"
              >
                Request an Audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.aside>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {faq.map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-black/25 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 leading-7 text-gray-300">{item.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
