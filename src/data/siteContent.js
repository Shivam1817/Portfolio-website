export const navItems = [
  { label: "Artveox", href: "#artveox" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "Next.js", label: "React and TypeScript applications" },
  { value: "FastAPI", label: "Python services and data pipelines" },
  { value: "5 min", label: "Artveox video workflow tested end to end" },
];

export const highlightedCaseStudies = [
  {
    name: "BlogifyX",
    type: "Personal project",
    anchor: "blogifyx",
    problem: "A web app for writing and publishing posts.",
    built:
      "Built the React and TypeScript frontend and a Hono API with authenticated post management and Zod input validation.",
    role: "Designed and implemented the app, API, and database schema.",
    impact:
      "Deployed the API to Cloudflare Workers and used Prisma Accelerate to pool PostgreSQL connections.",
    stack: ["React", "TypeScript", "Hono", "Prisma", "PostgreSQL", "Cloudflare Workers"],
    link: "https://github.com/Shivam1817/BlogifyX",
    linkLabel: "Read the code and setup guide",
    repo: "Public repository",
    image: "/projects/project1.png",
    accent: "255, 146, 74",
    metrics: ["Authenticated publishing", "API deployed to Cloudflare Workers"],
  },
];

export const experienceItems = [
  {
    org: "Trading software project",
    role: "Full-stack engineer · Contract",
    period: "Oct 2025 – Present",
    summary: "Built web interfaces and backend services for a product in development.",
    highlights: [
      "Built a FastAPI economic calendar that ingested multiple data APIs, deduplicated records, refreshed data, and connected to dashboard views using TimescaleDB and Redis.",
      "Built marketplace listing, publishing, and deployment screens and tested the flow internally using test agents and Stripe test mode.",
    ],
  },
  {
    org: "Aiverbalyze Technologies",
    role: "Full-stack engineering intern",
    summary: "Built document collaboration features with React, TypeScript, and FastAPI.",
    highlights: [
      "Implemented document previews, comments, annotations, signatures, and role-based access controls.",
      "Translated Figma designs into React interfaces and containerized the FastAPI backend with Docker.",
    ],
  },
];

export const achievements = [
  "React · Next.js · TypeScript",
  "Python · FastAPI · PostgreSQL",
  "Docker · Cloudflare R2 · Vercel",
];

export const commandItems = [
  { label: "Jump: Artveox", href: "#artveox", shortcut: "A" },
  { label: "Jump: Experience", href: "#experience", shortcut: "E" },
  { label: "Jump: Projects", href: "#projects", shortcut: "P" },
  { label: "Jump: Contact", href: "#contact", shortcut: "C" },
  { label: "Open GitHub", href: "https://github.com/Shivam1817", shortcut: "G" },
];
