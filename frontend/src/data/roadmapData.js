export const roadmapData = {
  name: "Full Stack Roadmap",
  children: [
    {
      name: "LEARNING STRATEGY",
      children: [
        { name: "Beginners", details: "Focus on 'what technology to learn'." },
        { name: "Industry", details: "Cares about 'how deeply you know them'. Depth determines roles: internship, freelance, startup, product company, high salary." }
      ]
    },
    {
      name: "CAREER LEVELS",
      children: [
        { name: "Beginner", details: "Basic frontend -> Internship." },
        { name: "Intermediate", details: "Frontend + backend -> Junior Developer." },
        { name: "Advanced", details: "System design + deployment -> SDE-1 / Product company." },
        { name: "Expert", details: "Scaling + architecture -> Senior Developer." }
      ]
    },
    {
      name: "THE 6-STAGE ROADMAP",
      children: [
        {
          name: "STAGE 1: HTML + CSS + JavaScript",
          children: [
            {
              name: "Depth Required",
              children: [
                { name: "HTML", details: "Semantic tags, forms, tables, accessibility, SEO." },
                { name: "CSS", details: "Flexbox, grid, positioning, animations, media queries." },
                { name: "JavaScript", details: "(Very Important) Variables, functions, arrays, objects, loops, DOM, events, async/await, promises, fetch API, closures, hoisting, ES6." }
              ]
            },
            {
              name: "Enough Depth? (Goals)",
              children: [
                { name: "HTML", details: "Build landing page, portfolio, responsive form." },
                { name: "CSS", details: "Convert Figma to webpage, mobile responsive." },
                { name: "JS", details: "Interactive pages, call APIs, small projects." }
              ]
            },
            {
              name: "Jobs After Stage 1",
              children: [
                { name: "Frontend Intern", details: "50–70%" },
                { name: "Web Development Intern", details: "55–75%" },
                { name: "Freelancing Small Work", details: "40–60%" }
              ]
            }
          ]
        },
        {
          name: "STAGE 2: REACT",
          children: [
            {
              name: "What Depth Needed?",
              children: [
                { name: "Core", details: "Components, props, state, hooks, useEffect, routing, API handling, forms, context API, reusable components." },
                { name: "Intermediate Depth", details: "Custom hooks, performance optimization, lazy loading, protected routes." }
              ]
            },
            {
              name: "Enough Depth For Job?",
              children: [
                { name: "Goals", details: "Build auth app, dashboard, CRUD app, API projects WITHOUT tutorials." }
              ]
            },
            {
              name: "Jobs After React",
              children: [
                { name: "Frontend Developer Intern", details: "70–85%" },
                { name: "Junior React Developer", details: "45–60%" },
                { name: "Startup Frontend Developer", details: "40–55%" }
              ]
            }
          ]
        },
        {
          name: "STAGE 3: JAVA + SPRING BOOT",
          children: [
            {
              name: "Depth Needed",
              children: [
                { name: "Core Java", details: "OOP, inheritance, polymorphism, collections, exception handling, multithreading, streams, lambda expressions." },
                { name: "DSA", details: "Arrays, strings, hashmap, recursion, stack, queue, linked list, trees, sorting, binary search." },
                { name: "Spring Boot", details: "REST APIs, CRUD, controllers, services, repositories, JPA/Hibernate, auth, JWT, exception handling, validation." }
              ]
            },
            {
              name: "Enough Depth For Job?",
              children: [
                { name: "Goals", details: "Build auth backend, blog backend, e-commerce backend, role-based login system." }
              ]
            },
            {
              name: "Jobs After Backend",
              children: [
                { name: "Java Backend Intern", details: "65–80%" },
                { name: "Java Full Stack Intern", details: "70–85%" },
                { name: "Junior Java Developer", details: "50–65%" }
              ]
            }
          ]
        },
        {
          name: "STAGE 4: DATABASES",
          children: [
            {
              name: "Must Know",
              details: "SQL queries, joins, normalization, indexing, relationships, transactions."
            },
            {
              name: "Depth Needed",
              details: "Design DB for projects, optimize simple queries, connect backend."
            },
            {
              name: "Jobs After Database + Backend",
              children: [
                { name: "Full Stack Intern", details: "75–90%" },
                { name: "Startup Developer", details: "65–80%" },
                { name: "Service Company Fresher", details: "80–90%" }
              ]
            }
          ]
        },
        {
          name: "STAGE 5: GITHUB + DEPLOYMENT",
          children: [
            {
              name: "GitHub",
              details: "git add, commit, push, branches, pull requests."
            },
            {
              name: "Deployment",
              details: "Vercel, Netlify, Render, Railway."
            },
            {
              name: "Why Important?",
              details: "Beginners skip this, companies reject for no live projects or copied work."
            }
          ]
        },
        {
          name: "STAGE 6: ADVANCED SKILLS",
          children: [
            {
              name: "Learn",
              details: "Docker, AWS basics, Redis, WebSockets, CI/CD, System Design basics."
            },
            {
              name: "Jobs After Advanced Skills",
              children: [
                { name: "Product Company SDE-1", details: "35–55%" },
                { name: "Good Startup Developer", details: "70–85%" },
                { name: "Remote Developer", details: "40–60%" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "REALISTIC EXPECTATIONS",
      children: [
        {
          name: "If You Learn Only Frontend",
          children: [
            { name: "Jobs", details: "Frontend intern, UI developer, web intern." },
            { name: "Salary (India)", details: "₹10k–25k (internship), ₹3–6 LPA (fresher)." }
          ]
        },
        {
          name: "If You Learn Full Stack Properly",
          children: [
            { name: "Jobs", details: "Full stack developer, Java developer, backend developer, React developer." },
            { name: "Salary (India)", details: "₹4–10 LPA (fresher). Startups may give higher." }
          ]
        },
        {
          name: "If You Also Become Strong In DSA",
          children: [
            { name: "Jobs", details: "SDE-1, product companies, better startups." },
            { name: "Salary (India)", details: "₹8–20 LPA possible." }
          ]
        }
      ]
    },
    {
      name: "EXACT DEPTH CHECK",
      children: [
        { name: "Build responsive UI", details: "Frontend ready" },
        { name: "Build API", details: "Backend ready" },
        { name: "Authentication system", details: "Intermediate" },
        { name: "Deploy full stack app", details: "Job ready" },
        { name: "Solve medium LeetCode", details: "Interview ready" },
        { name: "Explain projects confidently", details: "Industry ready" }
      ]
    },
    {
      name: "BEST PROJECTS FOR RESUME",
      children: [
        { name: "Beginner", details: "Weather app, Todo app, Calculator, Portfolio." },
        { name: "Intermediate", details: "Blog website, Authentication app, Notes app, Movie app." },
        { name: "Advanced", details: "E-commerce, Chat app, LinkedIn clone, Learning platform, Realtime collaboration app." }
      ]
    }
  ]
};
