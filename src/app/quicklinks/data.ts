export type QuickLink =
  | { label: string; slug: string; type: "external"; url: string }
  | { label: string; slug: string; type: "internal"; path: string }
  | { label: string; slug: string; type: "placeholder" };

export const QUICK_LINKS: QuickLink[] = [
  //
  {
    label: "Backoffice",
    slug: "backoffice",
    type: "external",
    url: "https://backoffice.futuremultiverse.com/",
  },
  {
    label: "LaunchPad",
    slug: "launchpad",
    type: "external",
    url: "https://launchpad.futuremultiverse.dev/",
  },
  {
    label: "Marketplace",
    slug: "marketplace",
    type: "external",
    url: "https://marketplace.futuremultiverse.dev/",
  },
  {
    label: "Enter & Experience",
    slug: "enter-and-experience",
    type: "external",
    url: "https://futuremultiverse.dev/enter_and_experience",
  },
  {
    label: "Connect / Onboard",
    slug: "connect-onboard",
    type: "external",
    url: "https://auth.futuremultiverse.com/",
  },
];

export const QUICK_LINKS_BY_SLUG = new Map(QUICK_LINKS.map((x) => [x.slug, x]));
