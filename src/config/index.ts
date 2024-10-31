import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alexander Kenney — Software Engineer",
  author: "Alexander Kenney",
  description:
    "Developer based in Detroit, MI  specializing in web and full-stack application development.",
  lang: "en",
  siteLogo: "",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "",
  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alexander Kenney",
    specialty: "Software Engineer",
    summary:
      "Developer based in Detroit, MI  specializing in web and full-stack application development.",
    email: "ackenney@gmail.com",
  },
  experience: [
    {
      company: "MFGx, LLC",
      position: "Solutions Engineer",
      startDate: "March 2022",
      endDate: "November 2022",
      summary: [
        "Worked directly with clients to develop custom enterprise software solutions on the Fuuz platform using JavaScript, RestAPIs, and MongoDB, focusing on feature development and MES tools.",
        "Designed data flow diagrams, database schemas, and workflow tailored to meet client requirements, ensuring smooth system integration and functionality.",
        "Developed and deployed new data source whitelisting features for the Fuuz platform, ensuring fast and reliable data access.",
        "Responsible for troubleshooting, debugging new Fuuz features, and providing technical support to clients on the Fuzz platform's MES integration and low-code functionality.",
        "Wrote specification documents for new client projects and maintained existing documentation of previous projects and Fuuz platform features."
      ],
    },
  
  ],

  education: [
    {
      school: "University of Michigan — Dearborn",
      degree: "Bachelor of Science in Software Engineering",
      endDate: "April 2021",
    }
  
  ],

  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
  skills: [
    {
      summary: [
        "Programming Languages: C++, Python, Java, Dart, JavaScript, SQL",
        "Technologies/Frameworks: RestAPIs, Flutter, jQuery, Node.Js, MongoDB, GraphQL, Pygame",
        "Development Tools: Git, Postman, Docker, UML, JIRA, Agile, Node-Red, Linux, CI/CD"
      ],
    },
    
  
  ],
  
  about: {
    description: `
      I am a Software Engineer with practical experience developing real-world applications. Proficient in C++, Python, JavaScript, and low-code development. I am an open-source software enthusiast and a quick learner, and I love to explore new technologies and leverage them to solve real-life problems and bring new ideas to life.
Currently looking for roles in Software Development and Engineering, Programming, Full Stack Development, and web/mobile application Development.
    `,
    image: "",
  },
};

// #5755ff
