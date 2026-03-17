import PrivacyPolicy from "../components/PrivacyPolicy";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function PrivacyPolicyPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Privacy Policy | Alphabera Global"
        description="Read the Alphabera Global Privacy Policy to understand what information we collect, how we use it, and your privacy rights."
        path="/privacy-policy"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy Policy",
              url: `${origin}/privacy-policy`,
              isPartOf: {
                "@type": "WebSite",
                name: "Alphabera Global",
                url: origin,
              },
            },
            createBreadcrumbSchema("Privacy Policy", "/privacy-policy", origin),
          ],
        }}
      />
      <PageShell>
        <PrivacyPolicy />
      </PageShell>
    </>
  );
}
