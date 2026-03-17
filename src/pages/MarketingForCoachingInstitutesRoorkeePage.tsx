import ServiceLandingPage from "../components/ServiceLandingPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function MarketingForCoachingInstitutesRoorkeePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Marketing for Coaching Institutes in Roorkee"
        description="Alphabera Global helps coaching institutes in Roorkee with admissions-focused websites, SEO, ads, and lead generation systems."
        path="/marketing-for-coaching-institutes-roorkee"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Digital Marketing for Coaching Institutes in Roorkee",
              url: `${origin}/marketing-for-coaching-institutes-roorkee`,
            },
            createBreadcrumbSchema(
              "Digital Marketing for Coaching Institutes in Roorkee",
              "/marketing-for-coaching-institutes-roorkee",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <ServiceLandingPage
          eyebrow="Education + Roorkee"
          title="Digital Marketing for Coaching Institutes in Roorkee"
          description="We help coaching institutes in Roorkee improve admissions visibility through SEO, high-converting landing pages, paid campaigns, and trust-building digital content."
          intro="Education marketing needs clarity, trust, and timing. Parents and students often compare multiple options quickly, so your website, ad strategy, and service pages need to communicate value fast."
          audience="Best for coaching institutes, tuition centres, test-prep brands, and education businesses in Roorkee."
          searchTerm="digital marketing services for coaching institutes Roorkee"
          points={[
            "Landing pages designed around admissions enquiries and course interest.",
            "SEO support for course, location, and local-intent education searches.",
            "Campaign strategy aligned with seasonality, admissions cycles, and lead quality.",
            "Clear messaging that improves trust for students and parents researching options.",
          ]}
          faq={[
            {
              question: "Why does a coaching institute need digital marketing?",
              answer:
                "Because students and parents now compare options online first. Better visibility and stronger landing pages can improve enquiries and admissions quality.",
            },
            {
              question: "Can this work for smaller institutes too?",
              answer:
                "Yes. Smaller institutes often benefit the most from focused local visibility and clear conversion paths.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
