import { motion } from "motion/react";
import { FileText, ShieldCheck, Mail } from "lucide-react";

const termsSections = [
  {
    title: "1. Services",
    items: [
      "Alphabera Global provides digital marketing services including SEO, paid advertising, website development, branding, and AI automation.",
    ],
  },
  {
    title: "2. User Responsibilities",
    items: [
      "Provide accurate information.",
      "Not misuse our services.",
      "Not engage in illegal activities through our services.",
    ],
  },
  {
    title: "3. Payments & Billing",
    items: [
      "All payments must be made as agreed in the contract.",
      "No refunds unless explicitly stated.",
      "Delayed payments may result in service suspension.",
    ],
  },
  {
    title: "4. Intellectual Property",
    items: [
      "All content, designs, and strategies created by Alphabera Global remain our intellectual property until full payment is received.",
      "Clients get usage rights after payment completion.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    items: [
      "We are not liable for business losses due to market conditions.",
      "We are not liable for platform changes such as Google or Meta updates.",
      "We are not liable for indirect or incidental damages.",
    ],
  },
  {
    title: "6. Third-Party Platforms",
    items: [
      "We may use third-party tools such as Google Ads, Meta Ads, and analytics platforms. We are not responsible for their policies or changes.",
    ],
  },
  {
    title: "7. Termination",
    items: [
      "We reserve the right to terminate services if terms are violated or payments are not made.",
    ],
  },
  {
    title: "8. Changes to Terms",
    items: [
      "We may update these terms at any time. Continued use of our website or services means acceptance of the latest version.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <section
      id="terms"
      className="relative overflow-hidden border-t border-white/10 bg-black py-28 text-gray-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(228,167,46,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.92))]" />
      <motion.div
        className="absolute left-8 top-16 h-44 w-44 rounded-full bg-brand-500/10 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-8 h-56 w-56 rounded-full bg-red-600/10 blur-3xl"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/5 px-4 py-2 text-sm font-medium text-brand-300 backdrop-blur-md">
            <FileText className="h-4 w-4" />
            <span>Terms of Service</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Clear terms for every client partnership
          </h1>
          <div className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-gradient text-gradient-animated">clear expectations and protection</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Last Updated: March 17, 2026
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Welcome to Alphabera Global. By accessing or using our website and services, you agree to the following terms.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="h-5 w-5 text-brand-400" />
              <h3 className="text-lg font-semibold">At a glance</h3>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-300">
              <li>Use of our services requires accurate information and lawful conduct.</li>
              <li>Payment terms follow the signed contract, and late payment can pause service.</li>
              <li>Intellectual property transfers for use after full payment is completed.</li>
              <li>Third-party platform policies remain outside our control.</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-5 w-5 text-brand-300" />
                <h4 className="font-semibold">Contact</h4>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                For any questions, contact us at{" "}
                <a
                  href="mailto:alphabera.global@gmail.com"
                  className="text-brand-300 underline decoration-brand-500/40 underline-offset-4 hover:text-brand-200"
                >
                  alphabera.global@gmail.com
                </a>
                .
              </p>
            </div>
          </motion.aside>

          <div className="space-y-5">
            {termsSections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">{section.title}</h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
