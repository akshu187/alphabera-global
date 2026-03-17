import ServiceAreaPage from "../components/ServiceAreaPage";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../utils/seoSchemas";

export default function DigitalMarketingAgencyDehradunPage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="Digital Marketing Agency in Dehradun | Alphabera Global"
        description="Looking for a digital marketing agency in Dehradun? Alphabera Global helps Dehradun businesses with SEO, paid ads, websites, branding, and AI automation."
        path="/digital-marketing-agency-dehradun"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Digital Marketing Agency in Dehradun",
              url: `${origin}/digital-marketing-agency-dehradun`,
              about: {
                "@type": "LocalBusiness",
                name: "Alphabera Global",
                areaServed: {
                  "@type": "City",
                  name: "Dehradun",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do you only work in Dehradun?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. We work with businesses in Dehradun, Roorkee, across Uttarakhand, and with brands that want broader digital growth beyond one city.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this page written only for SEO?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. It is intended to help users understand that Alphabera Global serves Dehradun and what services are actually available, which aligns with Google's people-first guidance.",
                  },
                },
              ],
            },
            createBreadcrumbSchema("Digital Marketing Agency in Dehradun", "/digital-marketing-agency-dehradun", origin),
          ],
        }}
      />
      <PageShell>
        <ServiceAreaPage
          eyebrow="Dehradun Service Area"
          title="Digital Marketing Agency in Dehradun"
          description="Alphabera Global supports businesses in Dehradun with SEO, performance marketing, website development, branding, and AI automation built for sustainable local and regional growth."
          intro="Dehradun businesses often need a digital presence that feels professional, shows up for relevant searches, and turns traffic into enquiries. We help build that foundation with useful content, strong technical structure, and campaigns that support long-term visibility."
          locationLabel="Dehradun"
          seoLabel="digital marketing agency in Dehradun"
          points={[
            "Local SEO improvements for businesses that want better search presence in Dehradun.",
            "Paid campaigns built around lead quality, not just clicks.",
            "High-converting business websites for service-led and modern brands.",
            "Brand and content systems that support consistency across search, ads, and social media.",
          ]}
          faq={[
            {
              question: "Do you only work in Dehradun?",
              answer:
                "No. We work with businesses in Dehradun, Roorkee, across Uttarakhand, and with brands that want broader digital growth beyond one city.",
            },
            {
              question: "Is this page written only for SEO?",
              answer:
                "No. It is intended to help users understand that Alphabera Global serves Dehradun and what services are actually available, which aligns with Google's people-first guidance.",
            },
          ]}
        />
      </PageShell>
    </>
  );
}
