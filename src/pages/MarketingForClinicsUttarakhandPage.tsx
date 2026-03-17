import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function MarketingForClinicsUttarakhandPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Digital Marketing for Clinics in Uttarakhand | Alphabera Global"
        description="Alphabera Global helps clinics in Uttarakhand improve local search visibility, patient trust, and enquiry flow through compliant, helpful digital marketing."
        path="/marketing-for-clinics-uttarakhand"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Digital Marketing for Clinics in Uttarakhand",
              url: `${origin}/marketing-for-clinics-uttarakhand`,
            },
            createBreadcrumbSchema(
              "Digital Marketing for Clinics in Uttarakhand",
              "/marketing-for-clinics-uttarakhand",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="Clinics + Uttarakhand"
          title="Digital Marketing for Clinics in Uttarakhand"
          description="We help clinics across Uttarakhand improve online trust, local visibility, and appointment-focused digital journeys through better websites, search presence, and clear messaging."
          intro="Healthcare marketing depends heavily on trust and clarity. Patients want confidence, easy information, and a friction-free path to contact or appointment booking."
          audience="Useful for clinics, medical practices, specialists, and healthcare providers across Uttarakhand."
          searchTerm="digital marketing for clinics in Uttarakhand"
          points={[
            "Search visibility improvements for local healthcare-related discovery.",
            "Clear website structure that supports trust and appointment enquiries.",
            "Brand and content support that feels professional and patient-friendly.",
            "A measured approach that avoids exaggerated or unsafe promotional messaging.",
          ]}
          faq={[
            {
              question: "Can clinic marketing still stay professional and compliant?",
              answer:
                "Yes. The best approach is clear, helpful, trustworthy information and better digital experience rather than exaggerated claims.",
            },
            {
              question: "Is this only for big healthcare brands?",
              answer:
                "No. Local clinics and individual practices can benefit a lot from stronger trust signals and better local discoverability.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
