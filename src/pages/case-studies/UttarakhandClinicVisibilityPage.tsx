import CaseStudyPage from "../../components/CaseStudyPage";
import PageShell from "../../components/PageShell";
import Seo from "../../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../../utils/seoSchemas";

export default function UttarakhandClinicVisibilityPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Uttarakhand Clinic Visibility Case Study | Alphabera Global"
        description="A case study-style example of how clinic marketing in Uttarakhand can improve through clearer trust signals, better pages, and stronger local visibility."
        path="/case-studies/uttarakhand-clinic-visibility"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Uttarakhand Clinic Visibility Case Study",
              url: `${origin}/case-studies/uttarakhand-clinic-visibility`,
            },
            createBreadcrumbSchema(
              "Uttarakhand Clinic Visibility Case Study",
              "/case-studies/uttarakhand-clinic-visibility",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <CaseStudyPage
          category="Case Study"
          title="Uttarakhand Clinic Visibility Lift"
          summary="A clinic-focused growth scenario for Uttarakhand showing how trust, clarity, and local discoverability can work together."
          challenge="Healthcare decisions are trust-sensitive. If the website feels unclear or weak, users hesitate even when the business offers the right service."
          approach={[
            "Improve service page clarity and patient-facing website structure.",
            "Strengthen local search relevance without exaggerated medical marketing claims.",
            "Use cleaner trust signals and more helpful contact paths.",
            "Focus on patient experience and ease of action instead of promotional noise.",
          ]}
          outcome={[
            "Better first impression for local search visitors.",
            "Improved visibility potential for clinic-related local intent searches.",
            "A more trustworthy digital path for appointment-oriented actions.",
          ]}
          note="This page is a strategic example meant to demonstrate approach. It avoids fake medical promises and fabricated outcome claims."
        />
      </PageShell>
    </>
  );
}
