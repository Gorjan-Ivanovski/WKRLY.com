import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://wkrly.com";
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large";

export type SeoEntry = { title: string; description: string; robots?: string };

// Per-route titles + descriptions. Keyed by pathname.
export const PAGE_SEO: Record<string, SeoEntry> = {
  "/": {
    title: "WKRLY Group — We Build, Launch & Operate SaaS Products",
    description:
      "WKRLY Group builds, launches, and operates a focused portfolio of SaaS products and digital properties for ambitious professionals.",
  },
  "/about": {
    title: "About — WKRLY Group",
    description:
      "A product company with 20+ years building and scaling SaaS. We engineer for progress, not attention — built differently, by design.",
  },
  "/what-we-do": {
    title: "What We Do — WKRLY Group",
    description:
      "We build, launch, and operate products end to end — from a validated problem to a live product we run for the long term.",
  },
  "/portfolio": {
    title: "Portfolio — WKRLY Group",
    description:
      "A deliberate collection of SaaS products and digital properties, each built around a validated problem and operated for the long haul.",
  },
  "/careers": {
    title: "Careers — WKRLY Group",
    description:
      "Build things that matter with a small team that holds a high bar. We hire for character, curiosity, and ownership.",
  },
  "/insights": {
    title: "Insights — WKRLY Group",
    description:
      "Perspectives from the WKRLY team on building, launching, and operating software for the long term.",
  },
  "/contact": {
    title: "Contact — WKRLY Group",
    description:
      "Get in touch with WKRLY Group — partnerships, careers, or questions about what we build. Based in Sheridan, Wyoming.",
  },
  "/privacy-policy": {
    title: "Privacy Policy — WKRLY Group",
    description: "How WKRLY Group LLC collects, uses, and protects your information.",
  },
  "/terms-of-use": {
    title: "Terms of Use — WKRLY Group",
    description: "The terms governing your use of the WKRLY Group website.",
  },
  "/cookie-policy": {
    title: "Cookie Policy — WKRLY Group",
    description: "How WKRLY Group LLC uses cookies and similar technologies.",
  },
};

const NOT_FOUND: SeoEntry = {
  title: "Page Not Found — WKRLY Group",
  description: "The page you're looking for could not be found.",
  robots: "noindex, follow",
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Keeps document title + per-page meta in sync with the active route. */
export function SeoManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const known = PAGE_SEO[pathname];
    const entry = known ?? NOT_FOUND;
    const url = known ? `${SITE}${pathname === "/" ? "/" : pathname}` : null;

    document.title = entry.title;
    upsertMeta("name", "description", entry.description);
    upsertMeta("name", "robots", entry.robots ?? DEFAULT_ROBOTS);
    upsertCanonical(url);
    upsertMeta("property", "og:title", entry.title);
    upsertMeta("property", "og:description", entry.description);
    if (url) upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", entry.title);
    upsertMeta("name", "twitter:description", entry.description);
  }, [pathname]);

  return null;
}
