import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo({ title, description, path, image = "/logo.jpg", schema }: SeoProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = new URL(path, origin).toString();
    const imageUrl = new URL(image, origin).toString();

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertLink("canonical", canonicalUrl);
  }, [description, image, path, title]);

  return schema ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ) : null;
}
