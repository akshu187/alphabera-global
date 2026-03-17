import { motion } from "motion/react";
import { Lock, Mail, Shield } from "lucide-react";

const privacySections = [
  {
    title: "1. Information We Collect",
    items: [
      "Name, email, phone number.",
      "Business details.",
      "Website usage data, including cookies and analytics.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      "Provide services.",
      "Improve user experience.",
      "Run marketing campaigns.",
      "Communicate updates and offers.",
    ],
  },
  {
    title: "3. Cookies & Tracking",
    items: [
      "We use cookies and tools like Google Analytics to track website performance and user behavior.",
    ],
  },
  {
    title: "4. Data Sharing",
    items: [
      "We do not sell your data.",
      "We may share data with advertising platforms such as Google and Meta.",
      "We may share data with analytics tools and CRM systems.",
    ],
  },
  {
    title: "5. Data Security",
    items: [
      "We implement security measures to protect your data, but no system is 100% secure.",
    ],
  },
  {
    title: "6. Your Rights",
    items: [
      "Request access to your data.",
      "Ask for corrections or deletion.",
      "Opt out of marketing communications.",
    ],
  },
  {
    title: "7. Third-Party Links",
    items: [
      "Our website may contain links to other platforms. We are not responsible for their privacy policies.",
    ],
  },
  {
    title: "8. Updates to Policy",
    items: [
      "We may update this policy from time to time.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-t border-white/10 bg-black py-28 text-gray-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(228,167,46,0.1),transparent_24%),radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.015),rgba(0,0,0,0.96))]" />
      <motion.div
        className="absolute right-10 top-14 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl"
        animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.12, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 left-10 h-52 w-52 rounded-full bg-cyan-400/8 blur-3xl"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.04, 0.94, 1.04] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/5 px-4 py-2 text-sm font-medium text-brand-300 backdrop-blur-md">
            <Lock className="h-4 w-4" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Privacy that supports
            <span className="block text-gradient text-gradient-animated">trusted growth</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Last Updated: March 17, 2026
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            At Alphabera Global, we respect your privacy and are committed to protecting your data.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {privacySections.map((section, index) => (
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

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 text-white">
              <Shield className="h-5 w-5 text-brand-400" />
              <h3 className="text-lg font-semibold">What this means</h3>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-gray-300">
              <li>We collect only the information needed to operate, improve, and market our services.</li>
              <li>Your data is not sold to third parties.</li>
              <li>You can ask to access, correct, delete, or limit marketing use of your information.</li>
              <li>Third-party services linked from this site follow their own privacy practices.</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-5 w-5 text-brand-300" />
                <h4 className="font-semibold">Privacy Contact</h4>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                For privacy-related concerns, email{" "}
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
        </div>
      </div>
    </section>
  );
}
