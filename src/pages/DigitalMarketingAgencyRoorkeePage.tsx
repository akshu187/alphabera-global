import ServiceAreaPage from "../components/ServiceAreaPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function DigitalMarketingAgencyRoorkeePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Digital Marketing Agency in Roorkee | Alphabera Global"
        description="Looking for a digital marketing agency in Roorkee? Alphabera Global helps Roorkee businesses with SEO, paid ads, websites, branding, and AI automation."
        path="/digital-marketing-agency-roorkee"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Digital Marketing Agency in Roorkee",
              url: `${origin}/digital-marketing-agency-roorkee`,
              about: {
                "@type": "LocalBusiness",
                name: "Alphabera Global",
                areaServed: {
                  "@type": "City",
                  name: "Roorkee",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can Alphabera Global help a business in Roorkee rank better locally?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We focus on location relevance, stronger website structure, better service pages, and campaigns aligned with local search intent, all in line with Google best practices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of businesses in Roorkee can work with you?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Service businesses, education brands, clinics, ecommerce stores, real estate teams, local startups, and other businesses that want stronger digital visibility and lead generation.",
                  },
                },
              ],
            },
            createBreadcrumbSchema("Digital Marketing Agency in Roorkee", "/digital-marketing-agency-roorkee", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceAreaPage
          eyebrow="Roorkee Service Area"
          title="Digital Marketing Agency in Roorkee"
          description="Alphabera Global works with businesses in Roorkee that want stronger local visibility, more qualified leads, and better website performance through SEO, paid advertising, and conversion-focused creative."
          intro="For many Roorkee businesses, growth does not come from random posting or generic ads. It comes from a clear offer, strong local search visibility, a fast website, and campaigns designed around the real audience in and around Roorkee. That is where we focus."
          locationLabel="Roorkee"
          seoLabel="digital marketing agency in Roorkee"
          points={[
            "SEO strategies for businesses that want to rank better in Roorkee and nearby searches.",
            "Landing pages and websites built to convert visitors into calls, WhatsApp messages, and enquiries.",
            "Paid advertising campaigns that target local intent instead of wasting budget on broad traffic.",
            "Brand messaging and creative systems that make local businesses look more credible online.",
          ]}
          faq={[
            {
              question: "Can Alphabera Global help a business in Roorkee rank better locally?",
              answer:
                "Yes. We focus on location relevance, stronger website structure, better service pages, and campaigns aligned with local search intent, all in line with Google best practices.",
            },
            {
              question: "What kind of businesses in Roorkee can work with you?",
              answer:
                "Service businesses, education brands, clinics, ecommerce stores, real estate teams, local startups, and other businesses that want stronger digital visibility and lead generation.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
