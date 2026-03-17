import ArticlePage from "../../components/ArticlePage";
import PageShell from "../../components/PageShell";
import Seo from "../../utils/Seo";
import { createBreadcrumbSchema, getOrigin } from "../../utils/seoSchemas";

export default function SeoVsGoogleAdsRoorkeePage() {
  const origin = getOrigin();

  return (
    <>
      <Seo
        title="SEO vs Google Ads for Small Businesses in Roorkee | Alphabera Global"
        description="A practical comparison of SEO vs Google Ads for small businesses in Roorkee, including when to use each and how they work together."
        path="/blog/seo-vs-google-ads-roorkee"
        schema={{
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "SEO vs Google Ads for Small Businesses in Roorkee",
              url: `${origin}/blog/seo-vs-google-ads-roorkee`,
            },
            createBreadcrumbSchema(
              "SEO vs Google Ads for Small Businesses in Roorkee",
              "/blog/seo-vs-google-ads-roorkee",
              origin,
            ),
          ],
        }}
      />
      <PageShell>
        <ArticlePage
          category="SEO vs Ads"
          title="SEO vs Google Ads for Small Businesses in Roorkee"
          description="Both SEO and Google Ads can work well, but they solve different timing and visibility problems."
          sections={[
            {
              heading: "When SEO makes more sense",
              paragraphs: [
                "SEO is often the stronger play when you want sustainable visibility, better long-term trust, and growth that compounds over time.",
              ],
            },
            {
              heading: "When Google Ads makes more sense",
              paragraphs: [
                "Google Ads can be valuable when you need faster traffic, faster testing, or when service searches already show strong buying intent.",
              ],
            },
            {
              heading: "Why the best answer is often both",
              paragraphs: [
                "For many small businesses, SEO builds the base while Google Ads creates short-term momentum. Together they often perform better than either one alone.",
              ],
            },
          ]}
        />
      </PageShell>
    </>
  );
}
