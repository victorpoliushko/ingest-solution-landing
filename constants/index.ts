// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },

  { href: "#products", key: "products ", label: "Products" },
  { href: "#services", key: "services", label: "Services" },
  { href: "#team", key: "services", label: "Our team" },
  { href: "/", key: "charity", label: "Charity" }
];

export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Discover the Core Problem",
    icon: "/glass.png",
    variant: "blue",
    description:
      "We dive deep to understand your unique challenges and goals, uncovering the root of the problem to ensure our solutions are perfectly aligned with your business needs. This foundational step guarantees we build the right product, not just any product.",
  },
  {
    title: "Strategize with the Right Tools",
    icon: "/tool.png",
    variant: "blue",
    description:
      "Leveraging our expertise, we meticulously select the optimal technologies, frameworks, and methodologies. This ensures a robust, scalable, and efficient architecture that propels your project forward and stands the test of time.",
  },
  {
    title: "Agile & Efficient Development",
    icon: "/laptop.png",
    variant: "blue",
    description:
      "Our expert team transforms concepts into reality through agile development cycles. We prioritize clean code, best practices, and continuous integration, delivering high-quality, fully functional solutions on schedule and within budget.",
  },
  {
    title: "Ongoing Support & Maintenance",
    icon: "/shield.png",
    variant: "green",
    description:
      "Our commitment extends beyond launch. We provide comprehensive post-development support, including regular updates, performance monitoring, and rapid issue resolution, ensuring your software remains secure, efficient, and up-to-date with evolving demands.",
  },
];

// OUR TEAM
export const TEAM = [
  {
    id: 1,
    name: "Viktor Poliushko",
    title: "Main developer",
    icon: "/photo-glasses.jpg",
  },
  {
    id: 0,
    name: "Become a team member",
    title: "send a CV",
    icon: "/circle-plus-white.svg",
    clickable: true,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { title: "About Ingest Solution", href: "/about" },
      { title: "Privacy Policy", href: "/policies" }
    ],
  },
  {
    title: "Our Community",
    links: [
      { title: "lorem", href: "lorem" },
      { title: "ipsum", href: "ipsum" },
      { title: "dolor", href: "dolor" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Phone number", value: "+380974763051" },
    { label: "Email", value: "ingest.solution@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/linkedin.svg",
    "/instagram.svg",
    // "/twitter.svg",
    "/youtube.svg",
    // "/wordpress.svg",
  ],
};
