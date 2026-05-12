export const careerLevels = [
  { level: "Beginner", description: "Basic frontend", outcome: "Internship" },
  { level: "Intermediate", description: "Frontend + backend", outcome: "Junior Developer" },
  { level: "Advanced", description: "System design + deployment", outcome: "SDE-1 / Product company" },
  { level: "Expert", description: "Scaling + architecture", outcome: "Senior Developer" },
];

export const salaryExpectations = [
  { role: "Frontend Only", intern: "₹10k–25k", fresher: "₹3–6 LPA", sde1: null },
  { role: "Full Stack", intern: null, fresher: "₹4–10 LPA", sde1: null },
  { role: "Full Stack + Strong DSA", intern: null, fresher: null, sde1: "₹8–20 LPA" },
];

export const roadmapStages = [
  {
    id: 1,
    title: "HTML + CSS + JavaScript",
    icon: "Layout",
    color: "from-orange-500 to-yellow-500",
    shadowColor: "shadow-orange-500/20",
    details: {
      "HTML Depth": "Semantic tags, forms, tables, accessibility, SEO. (Goal: build landing page, portfolio, responsive form).",
      "CSS Depth": "Flexbox, grid, positioning, animations, media queries. (Goal: convert Figma to webpage, mobile responsive).",
      "JavaScript Depth": "Variables, functions, arrays, objects, loops, DOM, events, async/await, promises, fetch API, closures, hoisting, ES6."
    },
    jobChances: [
      { role: "Frontend Intern", min: 50, max: 70 },
      { role: "Web Dev Intern", min: 55, max: 75 },
      { role: "Freelance", min: 40, max: 60 },
    ]
  },
  {
    id: 2,
    title: "React",
    icon: "Atom",
    color: "from-cyan-400 to-blue-500",
    shadowColor: "shadow-cyan-500/20",
    details: {
      "Must Know": "Components, props, state, hooks, useEffect, routing, API handling, forms, context API, reusable components.",
      "Intermediate Depth": "Custom hooks, performance optimization, lazy loading, protected routes.",
      "Goal": "Build auth app, dashboard, CRUD app, API projects without tutorials."
    },
    jobChances: [
      { role: "Frontend Intern", min: 70, max: 85 },
      { role: "Junior React Dev", min: 45, max: 60 },
      { role: "Startup Frontend Dev", min: 40, max: 55 },
    ]
  },
  {
    id: 3,
    title: "Java + Spring Boot (Backend)",
    icon: "Coffee",
    color: "from-red-500 to-orange-600",
    shadowColor: "shadow-red-500/20",
    details: {
      "Core Java Depth": "OOP, inheritance, polymorphism, abstraction, encapsulation, collections, exception handling, multithreading, streams, lambdas.",
      "DSA Depth": "Arrays, strings, hashmap, recursion, stack, queue, linked list, trees, sorting, binary search.",
      "Spring Boot Depth": "REST APIs, CRUD, controllers, services, repositories, JPA/Hibernate, auth, JWT, validation.",
      "Goal": "Build auth backend, blog backend, e-commerce backend."
    },
    jobChances: [
      { role: "Java Backend Intern", min: 65, max: 80 },
      { role: "Java Full Stack Intern", min: 70, max: 85 },
      { role: "Junior Java Dev", min: 50, max: 65 },
    ]
  },
  {
    id: 4,
    title: "Databases",
    icon: "Database",
    color: "from-emerald-400 to-teal-600",
    shadowColor: "shadow-emerald-500/20",
    details: {
      "Must Know": "SQL queries, joins, normalization, indexing, relationships, transactions.",
      "Goal": "Design database for projects, optimize queries, connect backend."
    },
    jobChances: [
      { role: "Full Stack Intern", min: 75, max: 90 },
      { role: "Startup Developer", min: 65, max: 80 },
      { role: "Service Company Fresher", min: 80, max: 90 },
    ]
  },
  {
    id: 5,
    title: "Version Control & Deployment",
    icon: "GitBranch",
    color: "from-gray-400 to-gray-600",
    shadowColor: "shadow-gray-500/20",
    details: {
      "GitHub": "git add, commit, push, branches, pull requests.",
      "Deployment": "Vercel, Netlify, Render, Railway."
    },
    jobChances: []
  },
  {
    id: 6,
    title: "Advanced Skills",
    icon: "Cpu",
    color: "from-purple-500 to-indigo-600",
    shadowColor: "shadow-purple-500/20",
    details: {
      "Skills": "Docker, AWS basics, Redis, WebSockets, CI/CD, System Design."
    },
    jobChances: [
      { role: "Product Company SDE-1", min: 35, max: 55 },
      { role: "Good Startup Developer", min: 70, max: 85 },
      { role: "Remote Developer", min: 40, max: 60 },
    ]
  }
];
