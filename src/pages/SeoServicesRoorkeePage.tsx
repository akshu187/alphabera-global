import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function SeoServicesRoorkeePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="SEO Services in Roorkee | Alphabera Global"
        description="Need SEO services in Roorkee? Alphabera Global helps local businesses improve rankings, visibility, and lead flow with people-first SEO."
        path="/seo-services-roorkee"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "SEO Services in Roorkee",
              url: `${origin}/seo-services-roorkee`,
            },
            createBreadcrumbSchema("SEO Services in Roorkee", "/seo-services-roorkee", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="SEO + Roorkee"
          title="SEO Services in Roorkee"
          description="Alphabera Global helps Roorkee businesses improve their Google visibility with technical SEO, service page optimization, local relevance, and conversion-focused content."
          intro="SEO works best when it matches what people in your market are actually searching for. For Roorkee businesses, that means better service pages, stronger local intent signals, cleaner site structure, and content that answers real customer needs."
          audience="Useful for small businesses, local service providers, clinics, institutes, startups, and brands in Roorkee that want more qualified organic traffic."
          searchTerm="seo services in Roorkee"
          points={[
            "Local SEO improvements for Roorkee-focused searches and service intent.",
            "Service page optimization built around real customer questions and conversions.",
            "Technical SEO cleanup that supports crawlability, relevance, and stronger on-page structure.",
            "Helpful content planning that avoids spam and supports long-term rankings.",
          ]}
          faq={[
            {
              question: "Are these SEO services suitable for small businesses in Roorkee?",
              answer:
                "Yes. The strategy is especially useful for small and growing businesses that need stronger search visibility without wasting effort on broad, low-intent traffic.",
            },
            {
              question: "Do you use keyword stuffing to rank pages?",
              answer:
                "No. We follow people-first SEO principles with useful content, clear structure, local relevance, and technically sound pages.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
