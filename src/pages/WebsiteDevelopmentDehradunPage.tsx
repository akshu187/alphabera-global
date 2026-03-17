import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function WebsiteDevelopmentDehradunPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Website Development Company in Dehradun | Alphabera Global"
        description="Looking for website development in Dehradun? Alphabera Global builds fast, modern, conversion-focused websites for local businesses and growing brands."
        path="/website-development-dehradun"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Website Development Company in Dehradun",
              url: `${origin}/website-development-dehradun`,
            },
            createBreadcrumbSchema("Website Development Company in Dehradun", "/website-development-dehradun", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="Web Development + Dehradun"
          title="Website Development Company in Dehradun"
          description="Alphabera Global builds websites for Dehradun businesses that want faster load times, better trust, and stronger lead generation from their online presence."
          intro="A business website should do more than look good. It should explain your offer clearly, load well on mobile, support SEO, and make it easier for customers to contact or buy from you. That is the standard we build for."
          audience="A strong fit for service businesses, education brands, clinics, real estate, startups, and modern local brands in Dehradun."
          searchTerm="website development company in Dehradun"
          points={[
            "Conversion-focused website structure that supports enquiries and lead generation.",
            "Mobile-friendly design that works better for local search traffic and user trust.",
            "SEO-aware builds with clean hierarchy, metadata, and performance-conscious implementation.",
            "Brand presentation that makes businesses look more professional and credible online.",
          ]}
          faq={[
            {
              question: "Can this help local Dehradun businesses get more leads?",
              answer:
                "Yes. A clearer, faster, better-structured website usually improves both trust and conversion rate when paired with SEO or paid campaigns.",
            },
            {
              question: "Do you build websites only for Dehradun clients?",
              answer:
                "No. We work across Dehradun, Roorkee, Uttarakhand, and with businesses that want broader digital growth too.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
