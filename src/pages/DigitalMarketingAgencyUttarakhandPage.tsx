import ServiceAreaPage from "../components/ServiceAreaPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function DigitalMarketingAgencyUttarakhandPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Digital Marketing Agency in Uttarakhand | Alphabera Global"
        description="Alphabera Global supports businesses across Uttarakhand with SEO, paid advertising, website development, branding, and AI automation."
        path="/digital-marketing-agency-uttarakhand"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Digital Marketing Agency in Uttarakhand",
              url: `${origin}/digital-marketing-agency-uttarakhand`,
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
                  name: "Can Alphabera Global support businesses across Uttarakhand?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Alphabera Global supports businesses in Roorkee, Dehradun, and other Uttarakhand markets with SEO, paid ads, websites, branding, and growth systems designed for local and regional visibility.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why have a dedicated Uttarakhand page?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A dedicated Uttarakhand page helps users understand the areas served, the services offered, and the type of businesses Alphabera Global works with, which is more helpful than relying on vague or hidden location mentions.",
                  },
                },
              ],
            },
            createBreadcrumbSchema("Digital Marketing Agency in Uttarakhand", "/digital-marketing-agency-uttarakhand", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceAreaPage
          eyebrow="Uttarakhand Service Area"
          title="Digital Marketing Agency in Uttarakhand"
          description="Alphabera Global helps businesses across Uttarakhand strengthen their SEO, paid advertising, websites, branding, and growth systems with clear, performance-focused digital strategy."
          intro="Not every business wants an agency limited to one neighborhood. Many businesses in Uttarakhand want a team that understands local search behavior while also helping them compete across bigger regional and national channels. That is the role Alphabera Global is positioned to play."
          locationLabel="Uttarakhand"
          seoLabel="digital marketing agency in Uttarakhand"
          points={[
            "Website and local SEO improvements for businesses across Uttarakhand.",
            "Clear service positioning that helps businesses stand out in competitive local search results.",
            "Paid campaigns and creative systems that work for both local discovery and broader reach.",
            "Support for businesses in Roorkee, Dehradun, and surrounding Uttarakhand markets.",
          ]}
          faq={[
            {
              question: "Can Alphabera Global support businesses across Uttarakhand?",
              answer:
                "Yes. Alphabera Global supports businesses in Roorkee, Dehradun, and other Uttarakhand markets with SEO, paid ads, websites, branding, and growth systems designed for local and regional visibility.",
            },
            {
              question: "Why have a dedicated Uttarakhand page?",
              answer:
                "A dedicated Uttarakhand page helps users understand the areas served, the services offered, and the type of businesses Alphabera Global works with, which is more helpful than relying on vague or hidden location mentions.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
