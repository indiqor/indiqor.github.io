/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Project,
  Service,
  FAQ,
  TrainingCourse,
  InternshipTrack,
  Testimonial,
  TrustedBrand,
  ProcessStep,
  PricingPlan,
  VerifiedCertificate
} from "../types";

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Scope",
    description: "Collaborative consultation covering business rules, database structures, and platform specifications."
  },
  {
    step: "02",
    title: "System Architecture",
    description: "Designing database schemas, Cloud RUN setups, microservice interfaces, and API wireframes."
  },
  {
    step: "03",
    title: "UI/UX Fine-Tuning",
    description: "Crafting beautiful high-contrast wireframes, custom dashboards, and user flow animations in Figma."
  },
  {
    step: "04",
    title: "Agile Development",
    description: "Weekly sprint executions compiling production-ready React frontends with Spring Boot or Node backends."
  },
  {
    step: "05",
    title: "Diagnostics & Testing",
    description: "Comprehensive unit testing, load testing, security audits, and sandbox validation across key browsers."
  },
  {
    step: "06",
    title: "Cloud Deployment",
    description: "Launching on high-availability AWS or Cloud Run containers with automated CI/CD pipelines in place."
  }
];

export const FAQ_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "What core consulting services does INDIQOR Technologies provide?",
    answer: "We specialize in full-stack custom software development, high-traffic web apps, enterprise systems (Java, Spring Boot, React), cloud migrations, DevOps automation, and specialized IT support models for startups and businesses."
  },
  {
    id: "faq-2",
    question: "Are INDIQOR professional training certificates verifiable?",
    answer: "Yes, absolutely! Each training program and internship includes a certified credential with a unique verified certificate ID. Awardees and employers can verify any credential instantly using our verified Certificate section."
  },
  {
    id: "faq-3",
    question: "Do you offer placement support after course completion?",
    answer: "We integrate rigorous industrial mentoring, portfolio-ready project assignments, and resume reviews during training loops. Outstanding students are offered direct hands-on internships here at INDIQOR or shared directly with our partner recruiter desks."
  },
  {
    id: "faq-4",
    question: "What is your agile communication model for active projects?",
    answer: "We structure active deliverables in bi-weekly SCRUM cycles. Clients gain access to a dedicated staging environment, dashboard progress trackers, and real-time support channels for proactive technical discussions."
  },
  {
    id: "faq-5",
    question: "How do I secure an internship space with INDIQOR?",
    answer: "You can apply via our inquiry forms. Our developers evaluate student applications based on basic technical knowledge and offer project-based tracks involving production-level frameworks and sandbox environments."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ecommerce-platform",
    clientSector: "FMCG Retail",
    title: "Global Supply Distribution Engine",
    description: "High-concurrency merchant checkouts capable of routing thousands of parallel orders across modern multi-region clusters.",
    statHighlight: "99.99% Node Uptime",
    technologies: ["React", "Spring Boot", "AWS Aurora", "Docker"],
    longDescription: "An enterprise B2B distributor dashboard designed to streamline supply chains. Built with custom caching mechanisms and lightweight responsive dashboard layouts to support offline warehouse operations on lower bandwidths.",
    results: "+240% scale speed, zero transaction drops across high-bandwidth merchant checkouts."
  },
  {
    id: "fintech-dashboard",
    clientSector: "Corporate FinTech",
    title: "Secured Compliance Financial Portal",
    description: "Double-authenticated administrative interface displaying real-time currency fluctuations and multi-tenant ledger verification boards.",
    statHighlight: "+420k Ledgers Sec",
    technologies: ["React", "Express API", "PostgreSQL", "GitHub Actions"],
    longDescription: "An administrative auditing system ensuring compliance under rigid security rules. It includes state-driven charting layers, fast server-side ledger hashes, and responsive financial activity tables.",
    results: "Sub-millisecond API response queries, zero data leakage through strict security audits."
  },
  {
    id: "healthcare-app",
    clientSector: "Digital Health",
    title: "Tele-Health Patient Records Hub",
    description: "Encrypted record storage and messaging layer enabling direct, safe, sub-second telemetry chats between clinical specialists and remote patients.",
    statHighlight: "FERPA/HIPAA Compliant",
    technologies: ["React", "Spring Boot", "MySQL", "Kubernetes"],
    longDescription: "A HIPAA-compliant electronic health records coordinator. Integrates state-driven video channels, automated consultation summaries via natural language filters, and secure database auditing files.",
    results: "99.9% telemedicine call quality retention across rural regions, zero security flags."
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Engineering",
    description: "Fully engineered distributed architectures matched with secure corporate business practices and high availability.",
    iconName: "Cpu",
    technologies: ["Java", "Spring Boot", "TypeScript", "Docker"],
    details: "We build highly secure, scalable, and microservice-oriented architectures to resolve tedious business workflows.",
    features: [
      "Rigid security compliance",
      "Robust state monitoring",
      "Dynamic reporting grids",
      "Full API microservice builds"
    ]
  },
  {
    id: "web-dev",
    title: "State-of-the-Art Web Apps",
    description: "Stellar visual interfaces paired with performant script engines and modular, clean Tailwind architectures.",
    iconName: "Globe",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js"],
    details: "High-performance responsive single-page web applications constructed to perform efficiently on every modern tablet, phone, or laptop.",
    features: [
      "Sub-second lighthouse cycles",
      "Responsive fluid bento grids",
      "Accessible W3C layout tags",
      "Dynamic interactive panels"
    ]
  },
  {
    id: "mobile-dev",
    title: "Cross-Platform Mobile Apps",
    description: "Native-grade user performance across iOS and Android systems using single, reliable codebase setups.",
    iconName: "Smartphone",
    technologies: ["React Native", "Flutter", "TypeScript", "Fastlane"],
    details: "Native compilation optimized for high touch density, push notifications, offline local state storage, and device camera/GPS sensors.",
    features: [
      "iOS / Android unified parity",
      "Frictionless offline state Sync",
      "Biometric secure lock in",
      "Sleek gestural transitions"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    description: "Automated continuous integrations, cloud migration processes, container deployments, and monitoring frameworks.",
    iconName: "Cloud",
    technologies: ["AWS", "Azure", "Kubernetes", "GitHub Actions"],
    details: "Virtualizing staging environments using Docker, zero-downtime micro deployments, and auto-scaling setups on AWS and Azure cloud runtimes.",
    features: [
      "Fully automated CI/CD pipelines",
      "Proactive auto-scaling rules",
      "Database backup triggers",
      "Server resource optimization"
    ]
  },
  {
    id: "support-maintenance",
    title: "Corporate Support & SLA",
    description: "Sustained software upgrades, package updates, performance refactors, and prompt technical support.",
    iconName: "Wrench",
    technologies: ["Vite", "Spring Boot", "Express", "SLA Engine"],
    details: "Continuous monitoring, Hot-Fix deployment workflows, and database cleaning loops to keep system architectures operational.",
    features: [
      "Guaranteed 24-hour Hot-Fix SLA",
      "Incremental dependency patch scripts",
      "Proactive security scanning logs",
      "Server cleanup automated tasks"
    ]
  }
];

export const TRAINING_DATA: TrainingCourse[] = [
  {
    id: "course-java",
    title: "Advanced Java Fundamentals",
    iconName: "KeyRound",
    duration: "10-12 Weeks",
    description: "Deep dive into solid object-oriented structures, concurrent collections, memory profiles, JVM optimizations, and clean code paradigms.",
    topics: [
      "Object-Oriented Programming (OOP)",
      "Multi-Threading & Concurrency",
      "File I/O and Socket Streams",
      "Advanced Collection Architectures"
    ]
  },
  {
    id: "course-springboot",
    title: "Spring Boot Microservices",
    iconName: "Server",
    duration: "12 Weeks",
    description: "Learn web services construction, JPA/Hibernate mapping, JSON routing layers, Spring security policies, and microservices orchestration.",
    topics: [
      "Spring MVC & REST Endpoints",
      "Hibernate ORM / Spring Data JPA",
      "Microservices Config Servers",
      "OAuth2 Secure Token Handlers"
    ]
  },
  {
    id: "course-react",
    title: "Modern React & Tailwind",
    iconName: "Code",
    duration: "8-10 Weeks",
    description: "Master modern single-page frontend engineering, state-driven hooks, performance monitoring, Tailwind grids, and Vite compiling workflows.",
    topics: [
      "React Hooks (useState, useEffect)",
      "Global Context state control",
      "Fluid Tailwind CSS transitions",
      "Modular components structure"
    ]
  },
  {
    id: "course-fullstack",
    title: "Certified Full-Stack Java-React",
    iconName: "Layers",
    duration: "20 Weeks",
    description: "Comprehensive end-to-end curriculum bridging responsive React visual dashboards with robust enterprise Spring Boot database servers.",
    topics: [
      "React + Spring REST Integration",
      "MySQL Table Relationships",
      "Docker Container Deployments",
      "Real-world Portfolio Sandbox build"
    ]
  }
];

export const TRAINING_FEATURES: string[] = [
  "Mentor-Led Collaborative Classrooms",
  "GitHub Sandbox Pull Request Reviews",
  "Industry-standard Mock Interview Practice",
  "Unique Verifiable Certificate IDs",
  "Outstanding Student Job Placement desk"
];

export const INTERNSHIP_DATA: InternshipTrack[] = [
  {
    id: "intern-java-dev",
    title: "Enterprise Java Developer Internship",
    iconName: "Shield",
    duration: "3-6 Months",
    description: "Collaborate inside actual corporate repository branches, debugging secure transaction pipelines and writing unit-test specifications.",
    benefits: ["Experience Certificate", "Live-Project Deployment", "Code Reviews"]
  },
  {
    id: "intern-springboot-dev",
    title: "Backend Microservices Internship",
    iconName: "Terminal",
    duration: "3-6 Months",
    description: "Assist cloud engineers with container configurations, custom Express/Spring APIs, and security database auditing checklists.",
    benefits: ["Microservice Training", "Verifiable Letter of Exp", "Team Leader Mentorship"]
  },
  {
    id: "intern-react-dev",
    title: "Frontend UI Developer Internship",
    iconName: "Key",
    duration: "3 Months",
    description: "Build interactive layouts, responsive administrative dashboards, custom graphics integrations, and secure client-side API proxies.",
    benefits: ["Portfolio Codebases", "Responsive Design Master", "Official Recommendation"]
  },
  {
    id: "intern-fullstack-dev",
    title: "Full-Stack Software Analyst Internship",
    iconName: "Computer",
    duration: "6 Months",
    description: "Unified cross-functional track covering end-to-end system compilations, database schemas planning, and live production launches.",
    benefits: ["Full Lifecycle Development", "Senior Architect Seminars", "Direct Placement Priority"]
  }
];

export const INTERNSHIP_BENEFITS: string[] = [
  "Certified Work Experience Credentials",
  "Direct Participation on Staging Sandboxes",
  "Weekly Collaborative Tech Scrums",
  "Hands-On Mentoring with Senior Engineers",
  "Official Letter of Recommendation (LOR)"
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: "Senior Engineering Mentors",
    description: "Our instructors actively compile production-grade digital solutions daily."
  },
  {
    title: "No Mock Academics",
    description: "Every assignment is constructed inside a localized GitHub Sandbox model."
  },
  {
    title: "Verifiable Digital Badges",
    description: "Instantly showcase authenticated course achievements to recruit desks."
  },
  {
    title: "Highly Performant Stacks",
    description: "We focus heavily on modern standards (Vite, React, Spring Boot, microservices)."
  },
  {
    title: "Flexible Engagement Models",
    description: "Custom corporate training blueprints structured to respect timeline parameters."
  },
  {
    title: "Container Ready Deployments",
    description: "Learn modern DevOps setups, Docker bundles, and continuous integrations."
  },
  {
    title: "Agile Development Loops",
    description: "Our software is structured under rigid, reliable SCRUM release schedules."
  },
  {
    title: "Lifelong Project Showcase",
    description: "Maintain live, verified portfolio profiles hosted on the INDIQOR global system."
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: "startup-tier",
    name: "Startup Platform Core",
    label: "Core Visual Build",
    price: "$1,499",
    priceSub: "Startup Entry",
    features: [
      "Custom React & Tailwind CSS visual frontends",
      "Perfect mobile responsive fluid layout grids",
      "Standard interactive inquiry dashboard",
      "Automated CI/CD setup on Cloud Run",
      "3 Months proactive SLA code fixes support"
    ],
    popular: false,
    ctaText: "Select Startup Tier"
  },
  {
    id: "business-tier",
    name: "Enterprise Business Engine",
    label: "Fully Stacked Microservices",
    price: "$4,500",
    priceSub: "Target Corporate Build",
    popular: true,
    features: [
      "Unified React UI with Spring Boot or Node.js backend",
      "Secure double-audited Database modeling",
      "Interactive data charts & ledger monitors",
      "Authorized JWT authentication pipelines",
      "Automated backups & Docker builds configuration",
      "6 Months intensive architectural SLA"
    ],
    ctaText: "Select Business Tier"
  },
  {
    id: "custom-enterprise",
    name: "Custom Enterprise Cloud",
    label: "Advanced Orchestrated Systems",
    price: "Custom",
    priceSub: "Corporate Custom Scope",
    features: [
      "Multi-region auto-scaling Kubernetes nodes",
      "Dedicated senior DevOps infrastructure architects",
      "Custom API connectors to third-party providers",
      "Strict legal NDA & custom SLA response parameters",
      "Continuous load diagnostics and stress assessments"
    ],
    popular: false,
    ctaText: "Contact Corporate Architect"
  }
];

export const TRUSTED_BY_LOGOS: TrustedBrand[] = [
  { name: "Global RetailCorp", type: "FMCG Supply" },
  { name: "Plexis Health", type: "TeleMedicine SaaS" },
  { name: "Stellaro FinTech", type: "Compliance Ledger" },
  { name: "Core Node Systems", type: "DevOps Cluster" }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    rating: 5,
    feedback: "INDIQOR Technologies engineered our multi-merchant warehouse checkouts in record time. Their React integration handles load spikes with flawless performance.",
    author: "Arindam Roy",
    position: "Founder & CTO",
    company: "Plexis distribution"
  },
  {
    id: "testimonial-2",
    rating: 5,
    feedback: "The Advanced Java training curated by INDIQOR was instrumental in onboarding our corporate developer desk. Very hands-on, focus-bound, and authentic.",
    author: "Shreya Ghoshal",
    position: "HR Engineering Lead",
    company: "Core Node Systems"
  },
  {
    id: "testimonial-3",
    rating: 5,
    feedback: "My React Developer internship at INDIQOR changed my career trajectory. Working on live staging branches with senior architects provided skillsets you can't learn in college.",
    author: "Mohit Vermani",
    position: "Associate DevOps Tech",
    company: "Stellaro Tech"
  }
];

// Rich set of Mock Certificates that users can query & verify!
export const MOCK_CERTIFICATES_DATABASE: VerifiedCertificate[] = [
  {
    certificateId: "IND-TR-0042",
    recipientName: "Rahul Sharma",
    type: "training",
    courseName: "Certified Full-Stack Java-React Developer",
    grade: "Grade A+ (Distinction)",
    issueDate: "2026-05-12",
    uuid: "cert_9a8b7c6d5e4f3a2b1c",
    sha256: "ea840139b4bdf2398cd3847fed23c0be812d45b73d842910fc38ad819ad20412"
  },
  {
    certificateId: "IND-TR-0189",
    recipientName: "Priya Patel",
    type: "training",
    courseName: "Modern React & Tailwind CSS",
    grade: "Grade A (Excellent)",
    issueDate: "2026-04-18",
    uuid: "cert_1a2b3c4d5e6f7a8b9c",
    sha256: "89c8942df8417cb398de2b79aef41235bc6c88cd9121be56ae4767104b20de29"
  },
  {
    certificateId: "IND-IN-0814",
    recipientName: "Amit Kumar",
    type: "internship",
    courseName: "Backend Microservices Internship",
    grade: "Outstanding Performance",
    issueDate: "2026-06-01",
    uuid: "cert_4f3e2d1c0b9a8f7e6d",
    sha256: "bc59d8126b4cf8489de45df84bde6ce8b7ab7ff3e120da38741369ae567b41e8"
  },
  {
    certificateId: "IND-IN-0925",
    recipientName: "Neha Gupta",
    type: "internship",
    courseName: "Frontend UI Developer Internship",
    grade: "Highly Recommended",
    issueDate: "2026-06-15",
    uuid: "cert_7e6d5c4b3a2f1e0d9c",
    sha256: "4731de848debc72f10b8d2ef7bd6cf83d2def82cbde32cfa87ff9e2cd1e86a9f"
  }
];
