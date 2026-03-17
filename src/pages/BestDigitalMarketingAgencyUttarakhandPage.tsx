import ServiceAreaPage from "../components/ServiceAreaPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function BestDigitalMarketingAgencyUttarakhandPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Best Digital Marketing Agency in Uttarakhand"
        description="Looking for the best digital marketing agency in Uttarakhand? Alphabera Global helps businesses grow through SEO, websites, paid ads and clear local strategy."
        path="/best-digital-marketing-agency-uttarakhand"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Best Digital Marketing Agency in Uttarakhand",
              url: `${origin}/best-digital-marketing-agency-uttarakhand`,
              about: {
                "@type": "LocalBusiness",
                name: "Alphabera Global",
                areaServed: {
                  "@type": "State",
                  name: "Uttarakhand",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What should businesses look for in the best digital marketing agency in Uttarakhand?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Businesses should look for clear strategy, strong local relevance, honest communication, helpful service pages, SEO and ads expertise, and realistic growth planning instead of exaggerated promises.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Alphabera Global work only in one city?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Alphabera Global supports businesses in Roorkee, Dehradun, and other Uttarakhand markets with SEO, websites, paid advertising, branding, and growth-focused digital strategy.",
                  },
                },
              ],
            },
            createBreadcrumbSchema(
              "Best Digital Marketing Agency in Uttarakhand",
              "/best-digital-marketing-agency-uttarakhand",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <ServiceAreaPage
          eyebrow="Best Agency Intent + Uttarakhand"
          title="Best Digital Marketing Agency in Uttarakhand"
          description="Alphabera Global helps businesses across Uttarakhand grow with SEO, paid advertising, website development, branding, and digital systems built around clear local intent and measurable business outcomes."
          intro="When people search for the best digital marketing agency in Uttarakhand, they usually want a team that understands local markets, communicates clearly, builds trustworthy websites, and focuses on real growth instead of vague marketing promises. That is the standard we aim to meet."
          locationLabel="Uttarakhand"
          seoLabel="best digital marketing agency in Uttarakhand"
          points={[
            "SEO and local visibility work designed for Roorkee, Dehradun, and Uttarakhand search intent.",
            "Paid ads and landing pages built around lead quality, not vanity traffic.",
            "Website and messaging systems that help new and growing brands look more credible online.",
            "A practical growth approach that fits businesses that want clarity, speed, and measurable improvement.",
          ]}
          faq={[
            {
              question: "What should businesses look for in the best digital marketing agency in Uttarakhand?",
              answer:
                "Businesses should look for clear strategy, strong local relevance, honest communication, helpful service pages, SEO and ads expertise, and realistic growth planning instead of exaggerated promises.",
            },
            {
              question: "Does Alphabera Global work only in one city?",
              answer:
                "No. Alphabera Global supports businesses in Roorkee, Dehradun, and other Uttarakhand markets with SEO, websites, paid advertising, branding, and growth-focused digital strategy.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
