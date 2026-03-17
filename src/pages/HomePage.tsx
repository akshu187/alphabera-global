import Hero from "../components/Hero";
import Features from "../components/Features";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import LocalPresence from "../components/LocalPresence";
import TrustSignals from "../components/TrustSignals";
import IndustrySolutions from "../components/IndustrySolutions";
import InsightsSection from "../components/InsightsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import PageShell from "../components/PageShell";
import Seo from "../utils/Seo";
import { getLocalBusinessSchema, getSiteSchema } from "../utils/seoSchemas";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Alphabera Global | Digital Marketing, SEO, Websites, and AI Automation"
        description="Alphabera Global is a digital marketing agency serving Roorkee, Uttarakhand and nearby areas with SEO, paid advertising, website development, branding, and AI automation."
        path="/"
        schema={[getLocalBusinessSchema(), getSiteSchema()]}
      />
      <PageShell paddedTop={false}>
        <Hero />
        <Features />
        <Process />
        <Stats />
        <TrustSignals />
        <LocalPresence />
        <IndustrySolutions />
        <CaseStudiesSection />
        <Testimonials />
        <InsightsSection />
        <CTA />
      </PageShell>
    </>
  );
}
