export type Service = {
  slug: string;
  name: string; // used in links and structured data
  navTitle: string; // short label for the home page
  short: string; // one line for the home page
  metaTitle: string; // "| HaidurQureshi Ltd" is added automatically
  metaDescription: string;
  h1: string;
  intro: string;
  offers: { title: string; text: string }[];
  audience: string[];
  approach: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    navTitle: "Custom websites",
    short:
      "Fast, accessible sites built around how your customers actually use them.",
    metaTitle: "Custom Website Developer",
    metaDescription:
      "Looking for a website developer? HaidurQureshi Ltd designs and builds fast, accessible custom websites for businesses, from brochure sites to full web applications.",
    h1: "Custom website development for businesses",
    intro:
      "Looking for a website developer who builds around your customers rather than from a template? We design and build fast, accessible websites that look good on every screen and are easy to keep up to date.",
    offers: [
      {
        title: "Business and brochure websites",
        text: "Clear, professional sites that explain what you do and make it easy for people to contact you.",
      },
      {
        title: "Landing pages and marketing sites",
        text: "Focused pages for a product, service or campaign, built to load quickly and convert visitors.",
      },
      {
        title: "Web applications and portals",
        text: "Sites with logins, dashboards and data behind them, for customers or your own team.",
      },
      {
        title: "Redesigns and rebuilds",
        text: "A fresh start for a site that is slow, dated or hard to edit, keeping what already works.",
      },
    ],
    audience: [
      "Small businesses and start-ups launching their first website",
      "Businesses whose current site is slow, outdated or difficult to update",
      "Teams that need a web application or customer portal, not just a brochure site",
    ],
    approach: [
      {
        title: "Fast by default",
        text: "Quick-loading pages keep visitors on the site and are better for search rankings too.",
      },
      {
        title: "Works on every screen",
        text: "Designed for phones first, then scaled up to tablets, laptops and large monitors.",
      },
      {
        title: "Accessible",
        text: "Readable text, clear contrast and keyboard-friendly navigation, so more people can use your site.",
      },
      {
        title: "Built with search in mind",
        text: "Sensible page titles, descriptions, structured data and a sitemap, set up from the start.",
      },
    ],
    faq: [
      {
        q: "What technology do you use?",
        a: "This website is built with Next.js and served through Cloudflare, so it loads quickly and is easy to maintain. We choose tools to suit each project rather than forcing one approach.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    navTitle: "Mobile apps",
    short: "Apps that feel native on every screen size, from phones to tablets.",
    metaTitle: "Mobile App Developer",
    metaDescription:
      "Need a mobile app developer? HaidurQureshi Ltd designs and builds simple, reliable mobile apps for phones and tablets, from first idea to launch.",
    h1: "Mobile app development",
    intro:
      "Need a mobile app developer who thinks about the people using the app, not just the code? We design and build apps that are simple to use, reliable and a pleasure on phones and tablets.",
    offers: [
      {
        title: "Customer-facing apps",
        text: "Apps your customers will actually want on their home screen.",
      },
      {
        title: "Internal business apps",
        text: "Tools for your staff in the field or on the move, replacing spreadsheets and paperwork.",
      },
      {
        title: "Apps that connect to your systems",
        text: "Mobile front ends for existing databases, services and back-office software.",
      },
      {
        title: "Prototypes and first versions",
        text: "A focused first release so you can test an idea with real users before investing further.",
      },
    ],
    audience: [
      "Businesses that want to reach customers on their phones",
      "Founders turning an idea into a working first version",
      "Teams that need a mobile tool to go with an existing website or system",
    ],
    approach: [
      {
        title: "Designed for small screens",
        text: "Clear layouts, large tap targets and flows that work with one hand.",
      },
      {
        title: "Reliable and well connected",
        text: "Apps that work properly with your back end and handle poor connections gracefully.",
      },
      {
        title: "Respectful of data",
        text: "We collect only what the app needs to do its job, and are upfront about it.",
      },
      {
        title: "Guidance through launch",
        text: "Help with preparing and publishing your app, so release day isn’t a surprise.",
      },
    ],
    faq: [
      {
        q: "Do I need an app, or would a website do?",
        a: "Often a well-built website is enough. If it is, we will say so. An app makes sense when you need things like offline use, notifications or a place on people’s home screens.",
      },
    ],
  },
  {
    slug: "software-development",
    name: "Custom Software Development",
    navTitle: "Software systems",
    short:
      "Larger platforms and internal tools, designed to grow with your business.",
    metaTitle: "Custom Software Development",
    metaDescription:
      "Custom software development for businesses. HaidurQureshi Ltd builds web-based systems, dashboards and internal tools designed around how your team works.",
    h1: "Custom software development",
    intro:
      "When off-the-shelf software doesn’t fit the way you work, we build systems that do: web-based platforms, dashboards and internal tools, designed to grow with your business.",
    offers: [
      {
        title: "Internal tools and dashboards",
        text: "One clear place for your team to see and manage the information they use every day.",
      },
      {
        title: "Customer portals and accounts",
        text: "Secure logins where customers can view, update and manage their own information.",
      },
      {
        title: "Workflow automation and integrations",
        text: "Connect the systems you already use and remove repetitive manual work.",
      },
      {
        title: "Data-driven applications",
        text: "Software that turns entered or imported data into clear, useful views.",
      },
    ],
    audience: [
      "Businesses outgrowing spreadsheets or off-the-shelf tools",
      "Teams with a specific process that standard software handles badly",
      "Founders building a software product from scratch",
    ],
    approach: [
      {
        title: "Designed to grow",
        text: "Sensible structure from the start, so adding features later doesn’t mean starting over.",
      },
      {
        title: "Secure by default",
        text: "Encrypted connections, hashed passwords and minimal data collection as standard practice.",
      },
      {
        title: "Usable, not just functional",
        text: "Software your team will actually enjoy using, because the interface gets as much attention as the logic.",
      },
      {
        title: "Proven on our own product",
        text: "We build and run Ekonos, a budgeting app with user accounts and a dashboard, so we know what it takes to keep a live product running well.",
      },
    ],
    faq: [
      {
        q: "Can you work with software we already have?",
        a: "Yes. We can build tools that connect to your existing systems, or replace the parts that are holding you back. We will talk through what you have first.",
      },
    ],
  },
];

export function getService(slug: string): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
