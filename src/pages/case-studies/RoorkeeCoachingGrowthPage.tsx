import CaseStudyPage from "../../components/CaseStudyPage";
import PageShell from "../../components/PageShell";
import Seo from "../../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../../utils/seoSchemas";

export default function RoorkeeCoachingGrowthPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Roorkee Coaching Growth Case Study | Alphabera Global"
        description="See how a Roorkee coaching growth strategy can improve admissions visibility with better pages, trust signals, and enquiry flow."
        path="/case-studies/roorkee-coaching-growth"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Roorkee Coaching Growth Case Study",
              url: `${origin}/case-studies/roorkee-coaching-growth`,
            },
            createBreadcrumbSchema("Roorkee Coaching Growth Case Study", "/case-studies/roorkee-coaching-growth", origin),
          ],
        }}
      />
      <PageShell>
        <CaseStudyPage
          category="Case Study"
          title="Roorkee Coaching Growth System"
          summary="A coaching brand in Roorkee needed a clearer admissions journey, stronger local visibility, and a better path from search or ad click to enquiry."
          challenge="The typical problem was fragmented visibility. The business had demand, but the digital journey did not clearly explain value, reinforce trust, or make conversion easy."
          approach={[
            "Build focused pages around admissions intent and course-level interest.",
            "Strengthen local SEO signals for Roorkee and related education searches.",
            "Improve trust messaging for students and parents comparing options quickly.",
            "Tighten enquiry flow so interested visitors had a simpler next step.",
          ]}
          outcome={[
            "Stronger local relevance for coaching-related search terms.",
            "Better conversion readiness through clearer information architecture.",
            "Higher trust potential from users landing on the website for the first time.",
          ]}
          note="This case study is written as a realistic growth scenario to show approach and expected outcomes, not as a fabricated client result."
        />
      </PageShell>
    </>
  );
}
