import TermsOfService from "../components/TermsOfService";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function TermsOfServicePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Terms of Service | Alphabera Global"
        description="Read the Alphabera Global Terms of Service covering services, billing, intellectual property, liability, and termination."
        path="/terms-of-service"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms of Service",
              url: `${origin}/terms-of-service`,
              isPartOf: {
                "@type": "WebSite",
                name: "Alphabera Global",
                url: origin,
              },
            },
            createBreadcrumbSchema("Terms of Service", "/terms-of-service", origin),
          ],
        }}
      />
      <PageShell>
        <TermsOfService />
      </PageShell>
    </>
  );
}
