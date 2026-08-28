export const BRAND = {
  name: "Starfix Media Solutions",
  short: "Starfix",
  tagline: "REACH THE RIGHT WAY.",
  description:
    "Helping businesses build their digital presence, increase brand value, and reach the right audience.",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blogs", to: "/blogs" },
] as const;

export type ServiceSummary = {
  id: string;
  index: string;
  title: string;
  blurb: string;
};

export const SERVICES_GLIMPSE: ServiceSummary[] = [
  {
    id: "digital-marketing",
    index: "01",
    title: "Digital Marketing",
    blurb:
      "Strategic digital marketing solutions designed to improve your brand visibility, attract the right audience, and support business growth.",
  },
  {
    id: "social-media",
    index: "02",
    title: "Social Media Management",
    blurb:
      "We help brands build a consistent, engaging, and professional social media presence.",
  },
  {
    id: "meta-ads",
    index: "03",
    title: "Meta Ads",
    blurb:
      "Strategic advertising campaigns designed to help your business reach the people who matter most.",
  },
  {
    id: "web",
    index: "04",
    title: "Website Design & Development",
    blurb:
      "We design modern, responsive, and user-friendly websites that help businesses build trust and create better digital experiences.",
  },
  {
    id: "apps",
    index: "05",
    title: "App Development",
    blurb: "We help transform ideas into practical and user-friendly digital applications.",
  },
  {
    id: "content",
    index: "06",
    title: "Content & Creative Solutions",
    blurb:
      "We create ideas and content that help brands communicate, connect, and stay memorable.",
  },
];

export type ServiceDetail = ServiceSummary & {
  subheading: string;
  items: string[];
  cta: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    ...SERVICES_GLIMPSE[0]!,
    subheading: "Your business is online, but the right people are not discovering it.",
    blurb:
      "We develop digital strategies designed to improve visibility, engagement, audience reach, and business opportunities.",
    items: [
      "Digital strategy",
      "Campaign planning",
      "Audience research",
      "Brand visibility",
      "Lead generation",
      "Growth strategy",
    ],
    cta: "Talk to Us About Digital Marketing",
  },
  {
    ...SERVICES_GLIMPSE[1]!,
    subheading: "Build a Social Presence That Represents Your Brand",
    blurb:
      "We help businesses plan, create, manage, and improve their social media presence.",
    items: [
      "Social media strategy",
      "Content calendars",
      "Content creation",
      "Post and reel ideas",
      "Captions",
      "Creative design",
      "Account management",
      "Performance reporting",
    ],
    cta: "Talk to Us",
  },
  {
    ...SERVICES_GLIMPSE[2]!,
    subheading: "Reach the Right People with the Right Strategy",
    blurb:
      "We plan and manage Meta advertising campaigns designed around your business goals, audience, and objectives. Don't just advertise. Reach the right people at the right time.",
    items: [
      "Campaign strategy",
      "Audience targeting",
      "Lead generation",
      "Traffic campaigns",
      "Awareness campaigns",
      "Ad creative support",
      "Campaign optimization",
      "Performance reporting",
    ],
    cta: "Talk to Us About Meta Ads",
  },
  {
    ...SERVICES_GLIMPSE[3]!,
    subheading: "Your Digital Home Starts Here",
    blurb:
      "We design and develop websites that are modern, responsive, easy to use, and built to support your business goals.",
    items: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
      "Website redesign",
      "Responsive development",
      "Website maintenance",
    ],
    cta: "Build My Website",
  },
  {
    ...SERVICES_GLIMPSE[4]!,
    subheading: "Turn Your Idea Into a Digital Experience",
    blurb:
      "We help businesses and startups explore and develop digital applications designed around user needs and business objectives.",
    items: [
      "Mobile applications",
      "Business applications",
      "MVP development",
      "UI/UX design",
      "App consultation",
    ],
    cta: "Discuss My App",
  },
  {
    ...SERVICES_GLIMPSE[5]!,
    subheading: "Create Content That Connects",
    blurb:
      "Good content helps your audience understand, remember, and connect with your brand.",
    items: [
      "Content strategy",
      "Social media content",
      "Reels and video concepts",
      "Creative campaigns",
      "Graphic creatives",
      "Brand storytelling",
      "Copywriting",
    ],
    cta: "Create With Us",
  },
];

export const COMBO_PLANS = [
  "Starter Growth",
  "Brand Builder",
  "Digital Growth",
  "Complete Growth",
];

export const APPROACH = [
  {
    title: "Creativity with Purpose",
    body: "Every creative idea should have a reason and contribute to a bigger goal.",
  },
  {
    title: "Strategy Before Action",
    body: "We believe understanding the business and audience is the foundation of effective digital growth.",
  },
  {
    title: "Growth Through Connection",
    body: "The goal is not simply to reach more people, but to connect with the right people.",
  },
  {
    title: "Partnership",
    body: "We aim to work alongside businesses as a digital partner supporting their growth journey.",
  },
];

export const STEPS = [
  { index: "01", title: "Understand", body: "We learn about your business, goals, audience, and challenges." },
  { index: "02", title: "Strategize", body: "We create a digital strategy designed around your specific objectives." },
  { index: "03", title: "Create", body: "We develop content, creatives, websites, campaigns, and digital experiences." },
  { index: "04", title: "Reach", body: "We help your brand connect with the right audience through strategic marketing and advertising." },
  { index: "05", title: "Grow", body: "We analyse performance, improve strategies, and focus on continuous growth." },
];

export const WHY_STARFIX = [
  { index: "1", title: "Strategy Meets Creativity", body: "We don't create just for the sake of creating. Every idea should have a purpose." },
  { index: "2", title: "Focus on the Right Audience", body: "Growth is not only about reaching more people — it's about reaching the people who matter to your business." },
  { index: "3", title: "Multiple Digital Solutions", body: "From content and social media to websites, apps, and advertising, you can find multiple digital solutions under one roof." },
  { index: "4", title: "Growth-Focused Approach", body: "Our work is designed to support your brand's visibility, value, and growth." },
  { index: "5", title: "Your Digital Partner", body: "We work to understand your business goals and create solutions that support your long-term digital growth." },
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Websites",
  "Social Media",
  "Content",
  "Advertising",
  "Branding",
  "Apps",
] as const;

export type Project = {
  id: string;
  client: string;
  category: (typeof PORTFOLIO_FILTERS)[number];
  description: string;
  challenge: string;
  strategy: string;
  created: string;
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cafe-social",
    client: "Concept Project — Neighbourhood Café",
    category: "Social Media",
    description: "Sample social media strategy built around footfall and local discovery.",
    challenge: "A local café with loyal walk-ins but almost no digital discovery.",
    strategy: "Local-first content plan built on daily rituals, staff stories and menu moments.",
    created: "Monthly content calendar, reel concepts, creative templates and caption system.",
    outcome: "Concept modelled for increased reach and better engagement.",
  },
  {
    id: "realestate-web",
    client: "Concept Project — Real Estate Company",
    category: "Websites",
    description: "Website concept focused on trust, listings clarity and enquiry flow.",
    challenge: "Listings scattered across portals with no owned digital home.",
    strategy: "Structure the site around buyer intent and a single clear enquiry path.",
    created: "Responsive website concept, listing templates and enquiry funnel design.",
    outcome: "Concept modelled for more website enquiries and improved digital presence.",
  },
  {
    id: "clothing-ads",
    client: "Concept Project — Clothing Brand",
    category: "Advertising",
    description: "Meta advertising concept designed around audience segments and offers.",
    challenge: "Ad spend spread thin across untargeted audiences.",
    strategy: "Segment audiences by intent and build a creative-led testing framework.",
    created: "Campaign structure, audience sets and ad creative concepts.",
    outcome: "Concept modelled for lead generation and stronger brand visibility.",
  },
  {
    id: "startup-creative",
    client: "Concept Project — Early-Stage Startup",
    category: "Content",
    description: "Social media creative concept for a startup finding its voice.",
    challenge: "Strong product, unclear story.",
    strategy: "Translate the product promise into a repeatable content format.",
    created: "Creative direction, content pillars and launch series concepts.",
    outcome: "Concept modelled for better engagement and audience clarity.",
  },
  {
    id: "brand-transformation",
    client: "Concept Project — Brand Transformation",
    category: "Branding",
    description: "A full identity and positioning refresh concept.",
    challenge: "An established business looking dated next to newer competitors.",
    strategy: "Reposition around a clear promise, then rebuild the visual system.",
    created: "Positioning, identity direction and brand messaging framework.",
    outcome: "Concept modelled for improved brand value and visibility.",
  },
  {
    id: "app-concept",
    client: "Concept Project — Service Booking App",
    category: "Apps",
    description: "MVP app concept for a local services business.",
    challenge: "Bookings handled manually over phone and chat.",
    strategy: "Map the booking journey and design the smallest useful product.",
    created: "UI/UX flows, MVP scope and app concept screens.",
    outcome: "Concept modelled for smoother operations and repeat usage.",
  },
];

export const SERVICE_OPTIONS = [
  "Digital Marketing",
  "Social Media Management",
  "Meta Ads",
  "Website Design & Development",
  "App Development",
  "Content & Creative Solutions",
  "Other",
];

export const BLOG_TAGS = [
  "All",
  "Digital Marketing",
  "Social Media",
  "Meta Ads",
  "Websites",
  "Apps",
  "Content",
  "Branding",
  "Business Growth",
] as const;

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: (typeof BLOG_TAGS)[number];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "reach-right-audience",
    title: "Reaching More People Is Easy. Reaching the Right People Isn't.",
    excerpt:
      "Why audience precision beats raw reach, and how to define the people who actually matter to your business.",
    date: "12 Aug 2026",
    tag: "Digital Marketing",
  },
  {
    id: "social-consistency",
    title: "Consistency Is the Most Underrated Social Media Strategy",
    excerpt:
      "A practical look at content calendars, pillars and formats that keep a brand present without burning out.",
    date: "04 Aug 2026",
    tag: "Social Media",
  },
  {
    id: "meta-ads-structure",
    title: "How to Structure a Meta Ads Campaign Around Business Goals",
    excerpt:
      "Objectives, audiences and creative testing — the framework we use before a single rupee is spent.",
    date: "27 Jul 2026",
    tag: "Meta Ads",
  },
  {
    id: "website-trust",
    title: "Your Website Is a Trust Signal Before It Is a Sales Tool",
    excerpt: "What visitors judge in the first five seconds, and how to design for that judgment.",
    date: "19 Jul 2026",
    tag: "Websites",
  },
  {
    id: "mvp-first",
    title: "Start With an MVP, Not the Whole App",
    excerpt: "How to scope a first version that answers your riskiest question fastest.",
    date: "10 Jul 2026",
    tag: "Apps",
  },
  {
    id: "content-that-connects",
    title: "Content That Connects: Writing for Memory, Not Just Clicks",
    excerpt: "Storytelling techniques that make a brand easier to remember and repeat.",
    date: "02 Jul 2026",
    tag: "Content",
  },
];
