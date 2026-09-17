export default {
  nav: {
    about: 'About',
    expertise: 'Expertise',
    projects: 'Projects',
    experience: 'Experience',
    letsTalk: "Let's Talk"
  },
  hero: {
    greeting: "Hello, I'm",
    subtitle: 'Senior Full-Stack Engineer building scalable products with TypeScript, Node.js, React, and Next.js.',
    viewWork: 'View My Work',
    downloadCv: 'Download CV'
  },
  expertise: {
    badge: 'What I Do',
    title: 'My Expertise',
    subtitle: 'Specialized in building modern, scalable web applications with a focus on performance, quality, and AI-augmented development.',
    items: [
      {
        title: 'Frontend Development',
        description: 'Building responsive, high-performance interfaces with React, Vue.js, Next.js, and TypeScript. Experienced in GraphQL and Core Web Vitals optimization (LCP, INP, CLS).'
      },
      {
        title: 'Backend & Architecture',
        description: 'Designing robust backends with NestJS and Node.js/TypeScript. Experienced in BFF patterns, REST APIs, event-driven architecture with Socket.io and Redis, and multiple databases (PostgreSQL, MySQL, MongoDB).'
      },
      {
        title: 'Quality & AI Engineering',
        description: 'Driving quality with TDD (Jest), E2E tests (Cypress), and CI/CD (GitHub Actions). Using AI in the development cycle (Claude Code, Cursor, and Kiro) with critical review of the output.'
      }
    ]
  },
  projects: {
    badge: 'Portfolio',
    title: 'Featured Projects',
    subtitle: 'A selection of recent projects that showcase my skills and passion for development.',
    items: [
      {
        title: 'ShipSync Hub',
        description: 'A logistics and freight gateway that aggregates carrier quotes, caches results, and processes requests asynchronously. Built with Laravel and Clean Architecture, using AWS (SQS, DLQ, DynamoDB), Redis/Memcached, resilience patterns, and Pest-driven TDD.',
        tagline: 'Shipping quotes gateway · async AWS · resilient carriers',
        source: 'https://github.com/LuisFelipeMod/shipsync_hub',
        image: '/shipsync-hub.png'
      },
      {
        title: 'ModestoLabs',
        description: 'Institutional website for my SaaS laboratory. ModestoLabs creates SaaS products for specific niches — simple on the outside, solid on the inside. Every line of code has a purpose.',
        demo: 'https://modestolabs.up.railway.app/',
        demoText: 'Link',
        image: '/modestolabs.png'
      },
      {
        title: 'Giraa — Landing Page',
        description: 'Landing page presenting a real SaaS product from ModestoLabs. Your salon fully booked, your management simple. Automatic scheduling, client control and reports — all in one app. Built for salons and barbershops that need scheduling, WhatsApp notifications, cash flow control, and business metrics.',
        demo: 'https://giraa-landing-page.up.railway.app/',
        demoText: 'Link',
        image: '/giraa.png'
      },
      {
        title: 'Salão Leila',
        description: 'Fullstack web application for beauty salon booking, with client module and complete admin panel. Backend in NestJS + TypeORM + PostgreSQL with JWT authentication, rate limiting, and Swagger docs. Frontend in Vue 3 + Pinia + Tailwind CSS with 3-step booking flow and an admin dashboard with filterable metrics. Covered by 70 automated tests (unit + E2E).',
        demo: 'https://salao-leila.up.railway.app/',
        source: 'https://github.com/LuisFelipeMod/salao-leila',
        image: '/salao-leila.png'
      },
      {
        title: 'Converge',
        description: 'Real-time collaboration platform (Figma/Miro Lite style) with a shared canvas, presence indicators, and CRDT synchronization (Yjs). Robust architecture natively supporting offline mode and high latency. Built with Vue 3 frontend and NestJS backend via WebSockets and PostgreSQL for incremental persistence.',
        demo: 'https://web-production-5e485.up.railway.app/',
        source: 'https://github.com/LuisFelipeMod/converge-app',
        image: '/converge.png'
      },
      {
        title: 'Service Order API',
        description: 'RESTful API built with Object-Oriented PHP for full management of clients, products, and service orders. Secure architecture with JWT authentication, data validation, logging system, and protection against SQL Injection and XSS — covered by unit and integration tests.',
        source: 'https://github.com/LuisFelipeMod/ordem-servico-api'
      },
      {
        title: 'Automated Testing',
        description: 'API with a full E2E test suite built in pure Node.js, with no external framework dependencies — demonstrating strong language fundamentals and software testing best practices.',
        source: 'https://github.com/LuisFelipeMod/testes-automatizados'
      }
    ],
    liveDemo: 'Link',
    source: 'Source',
    viewAll: 'View all projects',
    expandImage: 'Expand project image',
    closeExpandedImage: 'Close expanded image'
  },
  allProjects: {
    title: 'All Projects',
    subtitle: 'A complete collection of my work — from full-stack applications to testing frameworks.',
    backHome: 'Back to Home',
    items: [
      {
        title: 'ShipSync Hub',
        description: 'A logistics and freight gateway that aggregates carrier quotes, caches results, and processes requests asynchronously. Built with Laravel and Clean Architecture, using AWS (SQS, DLQ, DynamoDB), Redis/Memcached, resilience patterns, and Pest-driven TDD.',
        tagline: 'Shipping quotes gateway · async AWS · resilient carriers',
        source: 'https://github.com/LuisFelipeMod/shipsync_hub',
        image: '/shipsync-hub.png'
      },
      {
        title: 'Converge',
        description: 'Real-time collaboration platform (Figma/Miro Lite style) with a shared canvas, presence indicators, and CRDT synchronization (Yjs). Robust architecture natively supporting offline mode and high latency. Built with Vue 3 frontend and NestJS backend via WebSockets and PostgreSQL for incremental persistence.',
        demo: 'https://web-production-5e485.up.railway.app/',
        source: 'https://github.com/LuisFelipeMod/converge-app',
        image: '/converge.png'
      },
      {
        title: 'Service Order API',
        description: 'RESTful API built with Object-Oriented PHP for full management of clients, products, and service orders. Secure architecture with JWT authentication, data validation, logging system, and protection against SQL Injection and XSS — covered by unit and integration tests.',
        source: 'https://github.com/LuisFelipeMod/ordem-servico-api'
      },
      {
        title: 'Service Order - Front End',
        description: 'Business management interface built with HTML, Bootstrap, and jQuery, integrated with the REST API via AJAX requests. Features complete CRUDs, JWT authentication with LocalStorage persistence, and route-based access control.',
        source: 'https://github.com/LuisFelipeMod/ordem-servico-front'
      },
      {
        title: 'Automated Testing',
        description: 'API with a full E2E test suite built in pure Node.js, with no external framework dependencies — demonstrating strong language fundamentals and software testing best practices.',
        source: 'https://github.com/LuisFelipeMod/testes-automatizados'
      },
      {
        title: 'Portfolio',
        description: 'Personal portfolio website built with Vue 3, Vite and Vue Router. Features dark/light theming, EN/PT internationalization, scroll animations and responsive design with CSS custom properties.',
        source: 'https://github.com/LuisFelipeMod/portfolio-2025'
      },
      {
        title: 'ModestoLabs',
        description: 'Institutional website for my SaaS laboratory. ModestoLabs creates SaaS products for specific niches — simple on the outside, solid on the inside. Every line of code has a purpose.',
        demo: 'https://modestolabs.up.railway.app/',
        demoText: 'Link',
        image: '/modestolabs.png'
      },
      {
        title: 'Giraa — Landing Page',
        description: 'Landing page presenting a real SaaS product from ModestoLabs. Your salon fully booked, your management simple. Automatic scheduling, client control and reports — all in one app. Built for salons and barbershops that need scheduling, WhatsApp notifications, cash flow control, and business metrics.',
        demo: 'https://giraa-landing-page.up.railway.app/',
        demoText: 'Link',
        image: '/giraa.png'
      },
      {
        title: 'Salão Leila',
        description: 'Fullstack web application for beauty salon booking, with client module and complete admin panel. Backend in NestJS + TypeORM + PostgreSQL with JWT authentication, rate limiting, and Swagger docs. Frontend in Vue 3 + Pinia + Tailwind CSS with 3-step booking flow and an admin dashboard with filterable metrics. Covered by 70 automated tests (unit + E2E).',
        demo: 'https://salao-leila.up.railway.app/',
        source: 'https://github.com/LuisFelipeMod/salao-leila',
        image: '/salao-leila.png'
      }
    ]
  },
  journey: {
    badge: 'Career',
    title: 'Professional Journey',
    subtitle: 'My path through the tech industry, building expertise and delivering impactful solutions.',
    roles: [
      {
        title: 'Senior Software Engineer | Full-Stack',
        company: 'Telecontrol — R&D (AI & Innovation)',
        period: 'Nov 2025 - Present',
        description: 'Brought AI into the development cycle (Claude Code, Cursor, and Kiro), speeding up delivery with critical review. Built resilient integrations (REST, Socket.io) and evolved a NestJS/TypeScript BFF across PostgreSQL, MySQL, and MongoDB. Established Docker, Cypress E2E, and Jest TDD in CI/CD, and shipped a real-time flow platform (Yjs/CRDTs) with Meta API (WhatsApp) integrations.'
      },
      {
        title: 'Software Engineer | Full-Stack',
        company: 'Telecontrol',
        period: 'Jul 2025 - Nov 2025',
        description: 'Maintained and evolved critical systems with REST APIs and communication gateways (chatbots/webhooks). Optimized frontend performance with Core Web Vitals (LCP, INP, CLS). Promoted to Senior for reversing critical churn and stabilizing a high-impact product.'
      },
      {
        title: 'Software Engineer',
        company: 'Eficaz Marketing',
        period: 'Jan 2022 - Feb 2025',
        description: 'Built headless e-commerce with React, Next.js, TypeScript, and GraphQL, focused on scalability and performance. Defined the tech stack and project standards, plus a Code Review and mentoring culture. Redesigned Toca Imóveis, which sold 104 apartments in record time.'
      }
    ]
  },
  testimonials: {
    badge: 'Feedback',
    title: 'What People Say',
    subtitle: 'Testimonials from colleagues and clients I\'ve had the pleasure of working with.',
    items: [
      {
        name: 'Gabriel Cesar Ragonha Rodrigues',
        role: 'Full-Stack Developer',
        text: 'I recommend Luis Felipe for any developer position. He is an exemplary professional, dedicated and with fundamental attributes for the tech industry. Luis adds great value to any project because he builds strong relationships and always strives to collaborate with the team. I am convinced he will succeed in any professional challenge he takes on — it is a pleasure to have him on my team.'
      },
      {
        name: 'Victor Turra Florêncio',
        role: 'Full-Stack Developer',
        text: 'Modesto, as we call him on the team, is a very dynamic professional. He adapts to challenges across different technology domains with ease.\nOne thing I can highlight is that he is one of the few professionals focused on time management for productivity, frequently using organizational methods to manage team demands efficiently.\nAnother point worth mentioning is that Modesto is always keeping up with the most in-demand technologies in the market.\nWorking alongside him, I also noticed his ease with squad-based work — he is skilled at managing projects and deliveries with very clear and assertive communication.\nIn his latest project, the Shopify theme where he took the lead, I saw his skills and competencies applied in practice — being responsible for managing, developing, aligning the squad, and maintaining the final quality of the project.'
      }
    ]
  },
  contact: {
    heading1: "Let's build something",
    heading2: 'extraordinary',
    heading3: 'together',
    subtitle: "Have a project in mind? Let's discuss how we can work together to bring your ideas to life.",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email address',
    messagePlaceholder: 'Tell me about your project...',
    submit: 'Send Message',
    sending: 'Sending...',
    success: "Thanks! I'll get back to you soon.",
    error: 'Something went wrong. Please try again.'
  },
  footer: {
    rights: 'All rights reserved.'
  }
}
