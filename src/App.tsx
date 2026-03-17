/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect, useState, type LazyExoticComponent, type ReactNode } from "react";
import Navbar from "./components/Navbar";
import ScrollProgressIndicator from "./utils/ScrollProgressIndicator";

type RouteComponent = LazyExoticComponent<() => ReactNode>;

const HomePage = lazy(() => import("./pages/HomePage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const DigitalMarketingAgencyRoorkeePage = lazy(() => import("./pages/DigitalMarketingAgencyRoorkeePage"));
const DigitalMarketingAgencyDehradunPage = lazy(() => import("./pages/DigitalMarketingAgencyDehradunPage"));
const DigitalMarketingAgencyUttarakhandPage = lazy(() => import("./pages/DigitalMarketingAgencyUttarakhandPage"));
const SeoServicesRoorkeePage = lazy(() => import("./pages/SeoServicesRoorkeePage"));
const WebsiteDevelopmentDehradunPage = lazy(() => import("./pages/WebsiteDevelopmentDehradunPage"));
const SocialMediaMarketingRoorkeePage = lazy(() => import("./pages/SocialMediaMarketingRoorkeePage"));
const GoogleAdsAgencyDehradunPage = lazy(() => import("./pages/GoogleAdsAgencyDehradunPage"));
const MarketingForCoachingInstitutesRoorkeePage = lazy(
  () => import("./pages/MarketingForCoachingInstitutesRoorkeePage"),
);
const MarketingAgencyForRealEstateDehradunPage = lazy(
  () => import("./pages/MarketingAgencyForRealEstateDehradunPage"),
);
const MarketingForClinicsUttarakhandPage = lazy(() => import("./pages/MarketingForClinicsUttarakhandPage"));
const GetMoreLeadsLocalBusinessUttarakhandPage = lazy(
  () => import("./pages/blog/GetMoreLeadsLocalBusinessUttarakhandPage"),
);
const SeoVsGoogleAdsRoorkeePage = lazy(() => import("./pages/blog/SeoVsGoogleAdsRoorkeePage"));
const MarketingStrategiesCoachingInstitutesDehradunPage = lazy(
  () => import("./pages/blog/MarketingStrategiesCoachingInstitutesDehradunPage"),
);
const RoorkeeCoachingGrowthPage = lazy(() => import("./pages/case-studies/RoorkeeCoachingGrowthPage"));
const DehradunRealEstateLeadsPage = lazy(() => import("./pages/case-studies/DehradunRealEstateLeadsPage"));
const UttarakhandClinicVisibilityPage = lazy(() => import("./pages/case-studies/UttarakhandClinicVisibilityPage"));

const routes: Record<string, RouteComponent> = {
  "/": HomePage,
  "/privacy-policy": PrivacyPolicyPage,
  "/terms-of-service": TermsOfServicePage,
  "/digital-marketing-agency-roorkee": DigitalMarketingAgencyRoorkeePage,
  "/digital-marketing-agency-dehradun": DigitalMarketingAgencyDehradunPage,
  "/digital-marketing-agency-uttarakhand": DigitalMarketingAgencyUttarakhandPage,
  "/seo-services-roorkee": SeoServicesRoorkeePage,
  "/website-development-dehradun": WebsiteDevelopmentDehradunPage,
  "/social-media-marketing-roorkee": SocialMediaMarketingRoorkeePage,
  "/google-ads-agency-dehradun": GoogleAdsAgencyDehradunPage,
  "/marketing-for-coaching-institutes-roorkee": MarketingForCoachingInstitutesRoorkeePage,
  "/marketing-agency-for-real-estate-dehradun": MarketingAgencyForRealEstateDehradunPage,
  "/marketing-for-clinics-uttarakhand": MarketingForClinicsUttarakhandPage,
  "/blog/get-more-leads-local-business-uttarakhand": GetMoreLeadsLocalBusinessUttarakhandPage,
  "/blog/seo-vs-google-ads-roorkee": SeoVsGoogleAdsRoorkeePage,
  "/blog/marketing-strategies-coaching-institutes-dehradun":
    MarketingStrategiesCoachingInstitutesDehradunPage,
  "/case-studies/roorkee-coaching-growth": RoorkeeCoachingGrowthPage,
  "/case-studies/dehradun-real-estate-leads": DehradunRealEstateLeadsPage,
  "/case-studies/uttarakhand-clinic-visibility": UttarakhandClinicVisibilityPage,
};

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function RouteFallback() {
  return (
    <main className="pt-20">
      <section className="flex min-h-[60vh] items-center justify-center px-4 text-center text-gray-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-500">Loading</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Preparing your page</h1>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const syncPathname = () => setPathname(getPathname());
    window.addEventListener("popstate", syncPathname);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      syncPathname();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      syncPathname();
    };

    return () => {
      window.removeEventListener("popstate", syncPathname);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  const Page = routes[pathname] ?? HomePage;

  return (
    <div className="min-h-screen bg-black text-gray-50 font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <ScrollProgressIndicator />
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
        <Page />
      </Suspense>
    </div>
  );
}
