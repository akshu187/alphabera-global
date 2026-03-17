import CaseStudyPage from "../../components/CaseStudyPage";
import PageShell from "../../components/PageShell";
import Seo from "../../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../../utils/seoSchemas";

export default function DehradunRealEstateLeadsPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Dehradun Real Estate Lead Funnel Case Study | Alphabera Global"
        description="A case study-style example of how real estate marketing in Dehradun can improve with better pages, targeting, and conversion flow."
        path="/case-studies/dehradun-real-estate-leads"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Dehradun Real Estate Lead Funnel Case Study",
              url: `${origin}/case-studies/dehradun-real-estate-leads`,
            },
            createBreadcrumbSchema(
              "Dehradun Real Estate Lead Funnel Case Study",
              "/case-studies/dehradun-real-estate-leads",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <CaseStudyPage
          category="Case Study"
          title="Dehradun Real Estate Lead Funnel"
          summary="A Dehradun real estate business needed stronger lead quality, better message-to-page alignment, and a less wasteful paid traffic flow."
          challenge="The issue was not just traffic. It was weak landing experience, inconsistent messaging, and a digital path that did not support strong lead qualification."
          approach={[
            "Refine campaign messaging around property intent and project clarity.",
            "Build cleaner landing pages with stronger trust and clearer next steps.",
            "Reduce friction in enquiry capture and align the page with campaign promise.",
            "Support follow-up readiness with better lead context and structure.",
          ]}
          outcome={[
            "Higher chance of attracting better-fit enquiries.",
            "Improved alignment between ad spend and lead quality.",
            "Stronger trust for a category where users compare carefully before responding.",
          ]}
          note="This example is used to demonstrate strategic approach and likely outcomes, not to present invented client metrics."
        />
      </PageShell>
    </>
  );
}
