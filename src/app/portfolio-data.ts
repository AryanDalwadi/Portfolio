import type { NavItem } from "./nav-icon";

type Profile = {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  summaryShort: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  experience: string;
  photo?: string;
};

export const profile: Profile = {
  name: "Aryan Dalwadi",
  title: "Full Stack Developer",
  subtitle: "React.js | Node.js",
  summary:
    "Full Stack Developer with 3 years of experience building scalable web applications using React.js, Node.js, Express.js, and MSSQL. Experienced in developing responsive and reusable React interfaces, state management with Redux Toolkit and Context API, RESTful API integration, authentication and authorization, database optimization, and third-party integrations. Strong focus on performance, security, maintainability, debugging, and delivering scalable full-stack solutions.",
  summaryShort:
    "I am Aryan Dalwadi, a Full Stack Developer with 3 years of experience building scalable web applications with React.js, Node.js, Express.js, and MSSQL. I focus on performance, security, maintainability, and delivering user-friendly full-stack solutions.",
  location: "Ahmedabad, India",
  phone: "+91 9558046979",
  email: "aryandalwadi@gmail.com",
  github: "https://github.com/AryanDalwadi?tab=repositories",
  linkedin: "https://www.linkedin.com/in/aryan-dalwadi/",
  experience: "3 years",
  photo: "/profile/aryan-dalwadi.png",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Education", href: "/education", icon: "graduation" },
  { label: "Experience", href: "/experience", icon: "briefcase" },
  { label: "Tech Stack", href: "/tech-stack", icon: "code" },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Resume", href: "/resume", icon: "file" },
];

export const techGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+)", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "Context API",
      "Material UI",
      "React Router",
      "React Hook Form",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Webhooks",
      "Third-Party API Integration",
    ],
  },
  {
    title: "Databases",
    items: [
      "MSSQL",
      "MySQL",
      "Query Optimization",
      "Stored Procedures",
      "Schema Design",
    ],
  },
  {
    title: "Security",
    items: [
      "JWT Auth",
      "CORS",
      "Helmet.js",
      "XSS Prevention",
      "AES Encryption",
      "SQL Injection Prevention",
    ],
  },
  {
    title: "Testing & API Tools",
    items: ["Postman", "REST API Testing", "API Validation", "Debugging"],
  },
  {
    title: "Version Control & DevOps",
    items: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Pull Requests",
      "Code Reviews",
      "CI/CD",
      "PM2",
    ],
  },
  {
    title: "Cloud & Integrations",
    items: [
      "AWS S3",
      "Firebase FCM",
      "Redis",
      "Node-Cron",
      "Google Maps API",
      "WhatsApp Business API",
    ],
  },
  {
    title: "Architecture & Practices",
    items: [
      "API Optimization",
      "Real-time Systems",
      "Multi-Tenant Architecture",
      "System Design",
      "Agile/Scrum",
      "SDLC",
    ],
  },
];

export const projects = [
  {
    title: "CRM Emperor",
    slug: "crm-emperor",
    image: "/projects/crm-emperor/logo.png",
    imageWidth: 150,
    imageHeight: 150,
    galleryModules: [
      {
        name: "Real Estate",
        images: [
          "/projects/crm-emperor/real-estate/home.png",
          "/projects/crm-emperor/real-estate/landing.png",
          "/projects/crm-emperor/real-estate/dashboard.png",
          "/projects/crm-emperor/real-estate/inquiry.png",
        ],
      },
      {
        name: "User",
        images: [
          "/projects/crm-emperor/user/form.png",
          "/projects/crm-emperor/user/module-assignment.png",
          "/projects/crm-emperor/user/menu-master.png",
          "/projects/crm-emperor/user/employee-id-card.png",
          "/projects/crm-emperor/user/party-module-assignment.png",
          "/projects/crm-emperor/user/menu-rights.png",
        ],
      },
      {
        name: "WaBus",
        images: [
          "/projects/crm-emperor/wabus/user-list.png",
          "/projects/crm-emperor/wabus/template-list.png",
          "/projects/crm-emperor/wabus/campaign-list.png",
        ],
      },
    ],
    overview:
      "A multi-tenant SaaS CRM platform for Real Estate, Billing, CMS, Admin, HR, recruitment, restaurant, stock, file manager, WaBus, wallet, and WhatsApp operations.",
    problem:
      "Multiple clients needed a centralized CRM with isolated tenant databases, role-based access, secure APIs, and modular workflows across business departments.",
    solution:
      "Built responsive React.js interfaces with Redux Toolkit, Context API, and Material UI, integrated with 80+ RESTful Node.js APIs, JWT/AES authentication, RBAC authorization, and optimized MSSQL workflows.",
    stack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MSSQL",
      "JWT",
      "RBAC",
    ],
    features: [
      "Multi-tenant SaaS architecture with isolated tenant databases",
      "Responsive React.js enterprise interfaces with Redux Toolkit and Material UI",
      "Real Estate, Billing, CMS, Admin, HRMS, and module-wise workflows",
      "80+ REST API modules with validation and standardized responses",
      "~30% lower API latency and ~40% faster critical SQL queries",
      "JWT/AES authentication, RBAC, and secure role-scoped access",
    ],
  },
  {
    title: "Haulerr",
    slug: "haulerr",
    image: "/projects/haulerr/logo.png",
    imageFit: "cover",
    imageWidth: 420,
    imageHeight: 200,
    galleryImages: [
      "/projects/haulerr/zone-master.png",
      "/projects/haulerr/rider-dashboard.png",
      "/projects/haulerr/order-master.png",
      "/projects/haulerr/rider-master.png",
      "/projects/haulerr/order-history.png",
      "/projects/haulerr/order-details.png",
    ],
    overview:
      "A full-stack logistics and delivery platform with responsive React.js interfaces, real-time rider tracking, and operational workflow automation.",
    problem:
      "The platform needed responsive order management UI, accurate delivery zones, real-time synchronization, fare calculation, OTP authentication, and order notifications.",
    solution:
      "Developed React.js interfaces integrated with RESTful APIs, polygon-based Google Maps zones, dynamic GST/IGST fare logic, WhatsApp Business API webhooks, Redis, and Firebase push notifications.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Google Maps API",
      "Redis",
      "Firebase",
      "WhatsApp API",
    ],
    features: [
      "Responsive React.js interfaces for orders and rider operations",
      "Real-time rider tracking and alert system",
      "Dynamic fare calculation with GST/IGST logic",
      "Polygon-based service zones with Google Maps API",
      "WhatsApp OTP authentication and webhook-driven notifications",
    ],
  },
  {
    title: "Fusion Pizza",
    slug: "fusion-pizza",
    image: "/projects/fusion-pizza/logo.png",
    imageFit: "cover",
    imageWidth: 320,
    imageHeight: 100,
    galleryImages: [
      "/projects/fusion-pizza/home.png",
      "/projects/fusion-pizza/invoice.png",
      "/projects/fusion-pizza/audit.png",
      "/projects/fusion-pizza/product-link.png",
    ],
    overview:
      "A billing and inventory management system for multi-outlet restaurants with real-time GST computation and PDF invoice generation.",
    problem:
      "Restaurant teams needed real-time GST computation, PDF invoices, inventory visibility across outlets, and compliant reporting.",
    solution:
      "Engineered billing and inventory workflows with automated PDF invoice generation, multi-outlet inventory dashboards, audit logs, and compliance reporting.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "GST", "PDF Generation"],
    features: [
      "Real-time GST computation and PDF invoice generation",
      "Multi-outlet inventory tracking dashboard",
      "Audit logs and compliance reporting",
      "Daily stock and transaction tracking",
    ],
  },
  {
    title: "IVF Management System – Esha IVF",
    slug: "esha-ivf-management",
    image: "/projects/esha-ivf-management/logo.png",
    imageWidth: 250,
    imageHeight: 90,
    galleryImages: [
      "/projects/esha-ivf-management/login.png",
      "/projects/esha-ivf-management/appointment.png",
      "/projects/esha-ivf-management/doctor-form.png",
      "/projects/esha-ivf-management/appointment-list.png",
      "/projects/esha-ivf-management/upload-report.png",
    ],
    overview:
      "A scalable healthcare platform covering patient lifecycle, appointments, and lab workflows with secure admin dashboards.",
    problem:
      "Healthcare teams needed controlled workflow management for 200+ daily patient operations, appointments, lab processing, and automated communication.",
    solution:
      "Developed React.js modules with secure backend APIs, Firebase and WhatsApp automated communication, and admin dashboards for healthcare workflow management.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase",
      "WhatsApp API",
      "MSSQL",
    ],
    features: [
      "200+ daily patient workflows across core operations",
      "Patient lifecycle, appointments, and lab workflows",
      "Firebase and WhatsApp automated communication",
      "Secure admin dashboards and backend APIs",
    ],
  },
  {
    title: "File Manager System",
    slug: "file-manager-system",
    image: "/projects/file-manager-system/logo.png",
    imageWidth: 210,
    imageHeight: 200,
    galleryImages: [
      "/projects/file-manager-system/folders.png",
      "/projects/file-manager-system/users.png",
      "/projects/file-manager-system/pdf-report.png",
    ],
    overview:
      "A document management system linking Excel records with PDFs through barcode-based logic and optimized search.",
    problem:
      "Teams needed to map spreadsheet records to PDF files, manage large document sets, and search through 10,000+ files efficiently.",
    solution:
      "Built barcode-based document mapping, dynamic folder CRUD operations, and optimized search workflows for large-scale file management.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "Excel", "Barcode Processing"],
    features: [
      "Excel-to-PDF barcode-based document mapping",
      "10,000+ files with optimized search",
      "Dynamic folder structure with CRUD operations",
      "PDF report generation",
    ],
  },
  {
    title: "Loan Processing Module",
    slug: "loan-processing-module",
    image: "/projects/loan-processing-module/logo.png",
    imageWidth: 210,
    imageHeight:180,
    galleryImages: [
      "/projects/loan-processing-module/approve.png",
      "/projects/loan-processing-module/form.png",
      "/projects/loan-processing-module/upload.png",
      "/projects/loan-processing-module/members.png",
    ],
    overview:
      "A multi-step loan workflow system with approval hierarchy, document uploads, notifications, and PDF generation.",
    problem:
      "Loan teams needed to process 100+ daily applications with structured approvals, document management, and borrower/surety tracking.",
    solution:
      "Implemented multi-step loan workflows with AWS S3 document uploads, approval hierarchy, borrower and surety management, notifications, and PDF generation.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MSSQL",
      "AWS S3",
      "PDF Generation",
    ],
    features: [
      "100+ daily loan applications with approval hierarchy",
      "AWS S3 document uploads",
      "Borrower and surety management",
      "Notification workflows and PDF generation",
    ],
  },
];

export const experience = [
  {
    company: "Prashi Solution, Ahmedabad",
    role: "Full Stack Developer",
    duration: "Dec 2023 - Present",
    responsibilities: [
      "Developed responsive and reusable React.js components using Redux Toolkit, Context API, React Router, and Material UI to build maintainable enterprise application interfaces.",
      "Integrated React.js frontends with RESTful Node.js APIs, implementing form handling, state management, validation, and responsive user workflows across enterprise applications.",
      "Engineered and scaled a multi-tenant SaaS CRM platform (CRM Emperor) supporting Real Estate, Billing, CMS, and Admin modules for multiple clients using isolated tenant databases.",
      "Built and optimized 80+ RESTful API modules using Node.js and Express with request validation, structured error handling, standardized responses, and scalable API design.",
      "Implemented JWT/AES authentication, CORS, Helmet.js, XSS prevention, and RBAC-based menu authorization for secure, role-scoped access across modules and API endpoints.",
      "Optimized backend workflows and MSSQL queries, reducing API response time by ~30% and critical query execution time by ~40% across key operations.",
      "Optimized React.js components and frontend workflows to improve rendering performance, responsiveness, and maintainability across enterprise applications.",
      "Ensured responsive and cross-browser compatible React interfaces while following accessibility practices for consistent user experiences.",
      "Managed Git-based development workflows using Azure DevOps, including branch creation, pull requests, code reviews, and controlled code merging.",
      "Participated in sprint planning, daily stand-ups, task estimation, code reviews, and sprint retrospectives.",
      "Collaborated with QA, frontend/backend developers, and project teams to understand requirements, troubleshoot issues, and deliver application features.",
    ],
    details:
      "Project experience across SaaS CRM, logistics and delivery, billing and inventory, healthcare, document management, and loan processing platforms using React.js, Node.js, Express.js, MSSQL, Redis, Firebase, AWS S3, and third-party APIs.",
    impact:
      "Delivered 80+ REST API modules, ~30% faster APIs, ~40% faster critical SQL queries, multi-tenant SaaS CRM workflows, and secure JWT/RBAC-based full-stack solutions.",
    technologies:
      "React.js, Redux Toolkit, Node.js, Express.js, MSSQL, Redis, Firebase, AWS S3, Azure DevOps, Git",
    projects: [
      "CRM Emperor: Engineered and scaled a multi-tenant SaaS CRM with Real Estate, Billing, CMS, and Admin modules, responsive React.js interfaces, 80+ RESTful APIs, JWT/AES authentication, RBAC authorization, and optimized MSSQL workflows.",
      "Haulerr: Developed responsive React.js interfaces for order management and rider tracking, deployed a logistics platform with real-time tracking, GST/IGST fare logic, Google Maps polygon zones, and WhatsApp webhook notifications.",
      "Fusion Pizza: Engineered a billing and inventory system with real-time GST computation, PDF invoices, multi-outlet inventory dashboards, audit logs, and compliance reporting.",
      "IVF Management System – Esha IVF: Built a healthcare platform for patient lifecycle, appointments, and lab workflows supporting 200+ daily operations with Firebase, WhatsApp automation, and secure admin dashboards.",
      "File Manager System: Built barcode-based Excel-to-PDF document mapping for 10,000+ files with dynamic folder CRUD operations and optimized search.",
      "Loan Processing Module: Developed a multi-step loan workflow handling 100+ applications daily with approval hierarchy, AWS S3 uploads, borrower/surety management, notifications, and PDF generation.",
    ],
  },
  {
    company: "Shersmart Infotech, Ahmedabad",
    role: "Intern",
    duration: "Jan 2023 - Dec 2023",
    details:
      "Developed reusable responsive UI components with React.js and Material UI, and implemented CRUD workflows through REST APIs for maintainable frontend development.",
    impact:
      "Used React Hooks and state management to improve UI performance, responsiveness, and maintainability through reusable component design and optimized frontend workflows.",
    technologies: "React.js, Material UI, REST APIs, React Hooks, JavaScript",
  },
  {
    company: "Parshi Emerging Technologies PVT LTD, Remote",
    role: "Intern",
    duration: "Jul 2022 - Dec 2022",
    details:
      "Learned and applied Object-Oriented Programming concepts in Python, including classes, objects, inheritance, polymorphism, and encapsulation.",
    impact:
      "Gained hands-on experience with NumPy, Pandas, and other Python libraries for data manipulation, analysis, and problem-solving using the Python interpreter.",
    technologies: "Python, OOP, NumPy, Pandas",
  },
  {
    company: "Linear Loop Private Limited, Ahmedabad",
    role: "Intern",
    duration: "Jan 2022 - Apr 2022",
    details:
      "Developed a Bank Statement Analyzer web application to automate extraction, analysis, and visualization of financial statements.",
    impact:
      "Built the application using Python, Flask, Pandas, NumPy, and SQLAlchemy with Dash and Matplotlib visualizations, plus PDF-to-CSV conversion, user authentication, and real-time analytics for creditworthiness assessment.",
    technologies: "Python, Flask, Pandas, NumPy, SQLAlchemy, Dash, Matplotlib",
  },
];

export const education = [
  {
    degree: "B.E. - Information Technology",
    institution:
      "Silver Oak College of Engineering and Technology, Ahmedabad, Gujarat",
    year: "2018 - 2022 | CGPA: 8.68",
  },
];

export const certifications = [
  "Diploma in Multilingual Computer Programming (C-DAC) | Jan 2019 - Jul 2019",
  "HTML, CSS, JavaScript, React – Online Certification Course",
  "React - The Complete Guide (incl. Hooks, React Router, Redux) – Udemy",
  "Udemy Python for Data Science and Data Analysis",
];
