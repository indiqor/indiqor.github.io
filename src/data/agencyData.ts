import { Service, Project } from "../types";

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  iconName: string;
}

export interface InternshipProgram {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Bespoke systems engineered specifically to streamline your proprietary workflows and accelerate business operations.",
    details: "We build enterprise-grade software products tailored exactly to match your business processes. Our cross-functional engineering team eliminates manual friction and automates complex backend system routines.",
    iconName: "Cpu",
    technologies: ["Java", "Spring Boot", "Node.js", "PostgreSQL", "Docker"],
    features: [
      "ERP Development",
      "CRM Development",
      "Inventory Management Systems",
      "Business Automation Solutions"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance websites and bespoke applications tailored for stellar speed, maximum security, and conversions.",
    details: "From stunning marketing portals to complex multi-tenant cloud web applications, we combine fast-loading responsive front-ends with robust, scalable APIs.",
    iconName: "Globe",
    technologies: ["React JS", "Angular", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Corporate Websites",
      "Business Websites",
      "E-Commerce Solutions",
      "Custom Web Applications"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Multi-platform iOS and Android applications powered by fluid UI rendering engines and stable native controllers.",
    details: "Reach your clients on any screen size. We design feature-rich, beautiful applications that utilize custom device sensors, secure vaults, and robust offline synchronizations.",
    iconName: "Smartphone",
    technologies: ["Flutter", "React Native", "Android SDK", "iOS Swift"],
    features: [
      "Android Applications",
      "iOS Applications",
      "Flutter Applications",
      "React Native Applications"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    description: "Highly available, self-healing public and hybrid cloud clustering backed by automated continuous delivery.",
    details: "Ensure zero-downtime operations and bulletproof security by containerizing applications and running fully audited auto-scaling clusters.",
    iconName: "Cloud",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    features: [
      "AWS Deployment",
      "Azure Services",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipelines"
    ]
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic technological architecture and digital transformation plans focused on scaling technical operations.",
    details: "Unclog architectural bottlenecks and optimize infrastructure budgets. We help setup modern system design metrics, microservice separations, and database schemas.",
    iconName: "Briefcase",
    technologies: ["Architecture", "System Design", "Agile Roadmap", "Consulting"],
    features: [
      "Digital Transformation",
      "Technology Consulting",
      "Architecture Planning",
      "System Design"
    ]
  },
  {
    id: "support-maintenance",
    title: "Software Support & Maintenance",
    description: "Ongoing operating system upscaling, real-time bug mitigations, and responsive performance tune-ups.",
    details: "Ensure that your platforms stay updated, fast, and entirely safe from malicious exposure. Our active engineers provide continuous application checks and security validations.",
    iconName: "Wrench",
    technologies: ["Hotfixes", "Security Patching", "OS Upgrades", "Logs Audit"],
    features: [
      "Application Maintenance",
      "Performance Optimization",
      "Security Updates",
      "Bug Fixes"
    ]
  }
];

export const TRAINING_DATA: TrainingProgram[] = [
  {
    id: "t-java",
    title: "Java Development Training",
    description: "Master enterprise programming with a strong ground in object-oriented fundamentals, data structures, and multithreading architectures.",
    topics: [
      "Core Java & Syntax rules",
      "OOP Concepts & Implementations",
      "Collections Framework internals",
      "Exception Handling methodologies",
      "Multithreading & Async routines",
      "Java 8 Features & Streams API"
    ],
    duration: "6 Weeks (Live Interactive Classes)",
    iconName: "KeyRound"
  },
  {
    id: "t-springboot",
    title: "Spring Boot Training",
    description: "Build industrial Microservices, REST APIs, and spring security middleware solutions with enterprise databases.",
    topics: [
      "REST APIs architecture design",
      "Spring Security frameworks",
      "JWT Authentication & Tokens",
      "JPA/Hibernate Database mapping",
      "Microservices architectures",
      "Production-ready API Development"
    ],
    duration: "8 Weeks (Advanced Practical)",
    iconName: "Server"
  },
  {
    id: "t-react",
    title: "React JS Training",
    description: "Build stunning, composable front-ends utilizing state-driven functional hooks, navigation route layouts, and high efficiency APIs.",
    topics: [
      "Declarative Components & Layouts",
      "Functional Hooks (useState, useEffect)",
      "Context API & global structures",
      "Single Page Routing & Protection",
      "Axios & Fetch API Integrations",
      "State Management best practices"
    ],
    duration: "6 Weeks (Modern Front-end)",
    iconName: "Code"
  },
  {
    id: "t-fullstack",
    title: "Full Stack Development Training",
    description: "The complete engineering blueprint of modern apps. Connect robust client widgets directly to production database engines.",
    topics: [
      "Semantic HTML5 & Modern CSS3",
      "Dynamic JavaScript logic",
      "React JS frontend interfaces",
      "Spring Boot secure backends",
      "MySQL database schemas & index rules"
    ],
    duration: "12 Weeks (Comprehensive Track)",
    iconName: "Layers"
  }
];

export const TRAINING_FEATURES = [
  "Live Interactive Classes",
  "Practical Hands-On Assignments",
  "Real-World Industry Projects",
  "Rigorous Interview Preparation",
  "Expert One-on-One Mentorship"
];

export const INTERNSHIP_DATA: InternshipProgram[] = [
  {
    id: "int-java",
    title: "Java Developer Internship",
    description: "Contribute immediately to structured backend enterprise builds and core algorithms alongside our senior system architects.",
    benefits: ["Practical development experience", "Live corporate sandbox projects", "Certificate of Completion"],
    duration: "3 - 6 Months",
    iconName: "Key"
  },
  {
    id: "int-springboot",
    title: "Spring Boot Internship",
    description: "Write real microservices APIs and optimize production SQL queries for distributed high-traffic backend endpoints.",
    benefits: ["Industry exposure and mentoring", "JWT security structures setup", "Reference Letter reward"],
    duration: "3 - 6 Months",
    iconName: "Shield"
  },
  {
    id: "int-react",
    title: "React Developer Internship",
    description: "Sling beautiful Tailwind CSS and React states to engineer stunning dashboards, responsive portals, and complex SaaS screens.",
    benefits: ["UI component library proficiency", "Dynamic interactive portfolio pieces", "Career placement assistance"],
    duration: "3 Months",
    iconName: "Computer"
  },
  {
    id: "int-fullstack",
    title: "Full Stack Developer Internship",
    description: "Connect front-end screens with back-end APIs. Handle data migrations, client routing, and secure system modules.",
    benefits: ["End-to-end software delivery run", "Mentor code reviews & refactoring", "Full Completion Kit"],
    duration: "6 Months",
    iconName: "Terminal"
  },
  {
    id: "int-testing",
    title: "Software Testing Internship",
    description: "Write rigorous test assertions, automate quality assurance checks, and log functional bugs before products go live.",
    benefits: ["Automated JUnit testing frameworks", "CI/CD quality gate experience", "QA Analyst skill mapping"],
    duration: "3 Months",
    iconName: "CheckSquare"
  }
];

export const INTERNSHIP_BENEFITS = [
  "Live Corporate Projects",
  "Practical Development Experience",
  "Dedicated Mentor Guidance",
  "Direct Industry Exposure",
  "Official Certificate of Completion",
  "Long-Term Career Support"
];

export const PROCESS_STEPS_DATA = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "We work directly alongside your teams to gather business rules, system boundaries, and precise feature spec maps."
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description: "Our senior design leads diagram system components, define database indexes, and outline physical deployment patterns."
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "We create interactive high-fidelity user flows and beautiful glassmorphism style assets inside our premium workspace."
  },
  {
    step: "04",
    title: "Development",
    description: "Our certified coders write clean, type-safe, and scalable code in structured, high-energy SCRUM project sprints."
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description: "Automated test suites and manual validation verify accessibility, security clearances, and cross-browser screen renderings."
  },
  {
    step: "06",
    title: "Deployment & Support",
    description: "We deploy secure server bundles onto modern container hostings and initiate proactive server health monitoring."
  }
];

export const TECHNOLOGIES_DATA = {
  frontend: [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 95 },
    { name: "JavaScript", percentage: 98 },
    { name: "React", percentage: 95 },
    { name: "Angular", percentage: 85 }
  ],
  backend: [
    { name: "Java", percentage: 96 },
    { name: "Spring Boot", percentage: 94 },
    { name: "Node.js", percentage: 90 }
  ],
  database: [
    { name: "MySQL", percentage: 92 },
    { name: "PostgreSQL", percentage: 95 },
    { name: "MongoDB", percentage: 88 }
  ],
  devops: [
    { name: "AWS", percentage: 89 },
    { name: "Azure", percentage: 84 },
    { name: "Docker", percentage: 92 },
    { name: "Kubernetes", percentage: 86 },
    { name: "GitHub Actions", percentage: 90 }
  ]
};

export const WHY_CHOOSE_US_DATA = [
  {
    title: "Experienced Team",
    description: "Our leadership and software engineers are tech industry veterans with millions of lines of proven production code."
  },
  {
    title: "Industry-Oriented Training",
    description: "We reject dry academic theory. Our coursework teaches practical development structures actively sought after by leading tech firms."
  },
  {
    title: "Live Project Experience",
    description: "Every student and intern works side-by-side with genuine codebases, giving them actual context for enterprise challenges."
  },
  {
    title: "Scalable Software Solutions",
    description: "Our software builds are designed with cloud-native, microservices-aligned configurations to handle massive spikes cleanly."
  },
  {
    title: "Affordable Pricing",
    description: "We balance highly premium output and top-tier mentorship with highly cost-efficient project pricing models."
  },
  {
    title: "Long-Term Technical Support",
    description: "We do not vanish after launch. We offer 24/7 server log auditing, performance tunes, and swift software troubleshooting support."
  },
  {
    title: "Modern Technologies",
    description: "We implement modern cutting-edge stacks—including React, Spring Boot, AWS Docker packages, and advanced AI services."
  },
  {
    title: "Professional Guidance",
    description: "Every student receives CV screening help, interview rehearsals, and personalized portfolio reviews from industry mentors."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What software development services do you provide?",
    answer: "INDIQOR Technologies specializes in Custom Software Development (ERP and CRM systems), high-performance Web Development (Corporate sites and e-commerce), Mobile App Development (iOS, Android, Flutter, React Native), Devops-configured Cloud Solutions, IT Consulting, and long-term Application Maintenance."
  },
  {
    id: "faq-2",
    question: "Do you provide internship certificates?",
    answer: "Yes, absolutely! On successful completion of any project-based internship program, you will receive an official Internship Certificate validating your practical development experience, along with a custom reference letter from your senior team mentor."
  },
  {
    id: "faq-3",
    question: "Is training suitable for beginners?",
    answer: "Yes. Our Java, React JS, Spring Boot, and Full Stack Development training modules are structured to take you from core programming fundamentals all the way up to advanced system architecture. We provide step-by-step guidance suitable for both beginners and juniors."
  },
  {
    id: "faq-4",
    question: "Do you provide live projects?",
    answer: "Yes. In both our professional training courses and internship tracks, you will be assigned to design, code, and deploy real development sandbox solutions. Our hands-on focus guarantees high confidence during client interviews."
  },
  {
    id: "faq-5",
    question: "Do you offer placement assistance?",
    answer: "Yes, we offer comprehensive career alignment checks, CV polishing workshops, mock interview rehearsals, technical coding practice sheets, and direct access to partner recruiters to help you land your dream IT role."
  },
  {
    id: "faq-6",
    question: "How can I contact INDIQOR Technologies?",
    answer: "You can submit an inquiry directly through our customized interactive form here, send an email to indiqor@rediffmail.com, or use our floating WhatsApp helper on the bottom-right corner of the screen. We respond within 24 hours on all business days."
  }
];

export const TRUSTED_BY_LOGOS = [
  { name: "Enterprise Sprints", type: "Tech Systems" },
  { name: "Digital Solutions", type: "Consulting Co" },
  { name: "CloudScale Software", type: "Hosting Giant" },
  { name: "SaaS Systems LLC", type: "Fintech Grid" },
  { name: "Global IT Core", type: "Corporate Network" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "enterprise-erp",
    title: "Custom Enterprise ERP Platform",
    description: "Automated business tracking, invoicing systems, and secure inventory management for cloud-native SME workflow solutions.",
    category: "Software Development",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
    results: "35% reduction in manual clerical errors and processing paperwork.",
    statHighlight: "35% Less Manual Work",
    longDescription: "A heavy-duty tailored administrative software designed to sync real-time catalog stock quantities, generate custom digital invoices, authorize secure employee clearance levels, and log operational metrics cleanly. Engineered using the Java Virtual Machine, Spring Boot Hibernate maps, and secure container structures in Docker.",
    clientSector: "Enterprise Automation"
  },
  {
    id: "fintech-ledgers",
    title: "Atomically Synchronized Payment Ledger",
    description: "High security transactional payment systems featuring beautiful responsive visualization widgets.",
    category: "Web Development",
    technologies: ["React JS", "Node.js", "PostgreSQL", "Kubernetes"],
    results: "Reduced microservice response overhead down to 100ms globally.",
    statHighlight: "100ms Global Sync",
    longDescription: "Implemented atomic secure locks and relational index optimizations inside a cluster of PostgreSQL database replicas. Designed a stunning, dark-themed interactive customer dashboard powered by modern React hook metrics, Tailwind CSS styling classes, and real-time ledger audits.",
    clientSector: "Fintech Systems"
  },
  {
    id: "educational-classes",
    title: "Global Classroom & Grade Dashboard",
    description: "Integrated online classrooms, assignment grade spreadsheets, and secure course completion certificates.",
    category: "IT Services",
    technologies: ["React JS", "Node.js", "MongoDB", "AWS Services"],
    results: "Seamlessly handles access rules for 10,000+ active student credentials.",
    statHighlight: "10k+ Active Students",
    longDescription: "A production-perfect learning management system that handles complex role-based course access, stores course PDF worksheets on cloud buckets, coordinates live video conference triggers, and prints secure completion certifications upon academic completion.",
    clientSector: "EdTech Portals"
  }
];

