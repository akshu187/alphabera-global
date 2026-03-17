import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function SocialMediaMarketingRoorkeePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Social Media Marketing in Roorkee | Alphabera Global"
        description="Need social media marketing in Roorkee? Alphabera Global helps businesses improve content consistency, brand visibility and lead generation."
        path="/social-media-marketing-roorkee"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Social Media Marketing in Roorkee",
              url: `${origin}/social-media-marketing-roorkee`,
            },
            createBreadcrumbSchema("Social Media Marketing in Roorkee", "/social-media-marketing-roorkee", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="SMM + Roorkee"
          title="Social Media Marketing in Roorkee"
          description="Alphabera Global helps Roorkee businesses create stronger social media systems with better content direction, branding consistency, and growth-focused campaign support."
          intro="Social media works when it is tied to business goals. That means clearer messaging, stronger creative direction, better consistency, and campaigns that support visibility and enquiries instead of random posting."
          audience="Useful for brands in Roorkee that want stronger Instagram presence, better content systems, and paid or organic social support."
          searchTerm="social media marketing Roorkee"
          points={[
            "Content planning that aligns with your audience and business positioning.",
            "Brand consistency across posts, campaigns, website messaging, and offers.",
            "Support for Instagram marketing, awareness campaigns, and lead generation workflows.",
            "Creative direction that feels intentional instead of generic or repetitive.",
          ]}
          faq={[
            {
              question: "Can social media marketing help local businesses in Roorkee?",
              answer:
                "Yes. For the right business, it improves brand visibility, trust, remarketing performance, and can support local enquiries when integrated with the website and ads.",
            },
            {
              question: "Do you only post content or also help with strategy?",
              answer:
                "We focus on broader strategy too, including messaging, brand direction, paid support, and the connection between content and business growth.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
