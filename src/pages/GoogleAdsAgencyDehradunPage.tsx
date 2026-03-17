import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function GoogleAdsAgencyDehradunPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Google Ads Agency in Dehradun | Alphabera Global"
        description="Looking for a Google Ads agency in Dehradun? Alphabera Global builds performance-focused campaigns designed for higher quality leads and better ROI."
        path="/google-ads-agency-dehradun"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Google Ads Agency in Dehradun",
              url: `${origin}/google-ads-agency-dehradun`,
            },
            createBreadcrumbSchema("Google Ads Agency in Dehradun", "/google-ads-agency-dehradun", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="Google Ads + Dehradun"
          title="Google Ads Agency in Dehradun"
          description="Alphabera Global helps businesses in Dehradun run smarter Google Ads campaigns with sharper targeting, stronger landing pages, and performance-first optimization."
          intro="Google Ads can work fast when the offer, audience, and landing page match. Without that, budget gets wasted. We focus on campaign structure and lead quality instead of vanity metrics."
          audience="Ideal for businesses in Dehradun that want more qualified enquiries through search campaigns, landing pages, and measurable ad optimization."
          searchTerm="Google Ads agency in Dehradun"
          points={[
            "Campaign structures built around intent, not just traffic volume.",
            "Landing page and ad message alignment for stronger conversion rates.",
            "Ongoing optimization based on lead quality, not surface-level clicks.",
            "A performance marketing approach that supports growth without unnecessary waste.",
          ]}
          faq={[
            {
              question: "Will Google Ads work for every business in Dehradun?",
              answer:
                "Not every business will get the same result, but for many service-led or demand-driven businesses, well-structured search campaigns can generate high-intent leads quickly.",
            },
            {
              question: "Do you focus only on clicks?",
              answer:
                "No. We focus on lead quality, conversion flow, and campaign efficiency so the budget supports actual business outcomes.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
