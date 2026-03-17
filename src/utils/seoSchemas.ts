const FALLBACK_ORIGIN = "https://alphabera.global";

export function getOrigin() {
  if (typeof window === "undefined") {
    return FALLBACK_ORIGIN;
  }

  return window.location.origin || FALLBACK_ORIGIN;
}

export function getOrganizationSchema(origin = getOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alphabera Global",
    url: origin,
    logo: `${origin}/logo.jpg`,
    email: "alphabera.global@gmail.com",
    sameAs: ["https://www.instagram.com/alphaberaglobal?igsh=MXN4M2tncWludm90Yw=="],
  };
}

export function getSiteSchema(origin = getOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alphabera Global",
    url: origin,
  };
}

export function getLocalBusinessSchema(origin = getOrigin()) {
  return {
    ...getOrganizationSchema(origin),
    "@type": "LocalBusiness",
    areaServed: [
      {
        "@type": "City",
        name: "Roorkee",
      },
      {
        "@type": "City",
        name: "Dehradun",
      },
      {
        "@type": "State",
        name: "Uttarakhand",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roorkee",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  };
}

export function createBreadcrumbSchema(name: string, path: string, origin = getOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: origin,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${origin}${path}`,
      },
    ],
  };
}
