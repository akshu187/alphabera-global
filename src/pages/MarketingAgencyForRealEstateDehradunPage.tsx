import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function MarketingAgencyForRealEstateDehradunPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Marketing Agency for Real Estate in Dehradun | Alphabera Global"
        description="Alphabera Global helps real estate businesses in Dehradun with lead generation, landing pages, paid campaigns, and stronger digital positioning."
        path="/marketing-agency-for-real-estate-dehradun"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Marketing Agency for Real Estate in Dehradun",
              url: `${origin}/marketing-agency-for-real-estate-dehradun`,
            },
            createBreadcrumbSchema(
              "Marketing Agency for Real Estate in Dehradun",
              "/marketing-agency-for-real-estate-dehradun",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="Real Estate + Dehradun"
          title="Marketing Agency for Real Estate in Dehradun"
          description="We help real estate brands and property teams in Dehradun improve lead quality through performance campaigns, project pages, brand trust, and follow-up friendly digital systems."
          intro="Real estate marketing is not just about impressions. It needs trust, clear project communication, good landing pages, and lead capture systems that support actual follow-up and sales conversations."
          audience="Designed for builders, property consultants, developers, and real estate marketing teams in Dehradun."
          searchTerm="marketing agency for real estate in Dehradun"
          points={[
            "Lead-focused landing pages for projects, inventory, and location-based campaigns.",
            "Paid media strategy built around enquiries, lead intent, and campaign efficiency.",
            "Stronger brand presentation for premium and trust-sensitive real estate decisions.",
            "A clearer digital journey from click to enquiry to sales follow-up.",
          ]}
          faq={[
            {
              question: "Can paid ads work for real estate in Dehradun?",
              answer:
                "Yes, when the offer, project page, targeting, and lead follow-up system are aligned properly.",
            },
            {
              question: "Do you help only with ads?",
              answer:
                "No. We look at the full flow, including pages, messaging, trust, and conversion structure.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
