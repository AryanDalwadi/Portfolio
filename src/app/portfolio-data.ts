import type { NavItem } from "./nav-icon";

type Profile = {
  name: string;
  title: string;
  subtitle: string;
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
  subtitle: "Node.js | React.js",
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
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Context API",
      "Material UI",
      "React Router",
      "React Hook Form",
      "Axios",
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
      "Third-Party APIs",
    ],
  },
  {
    title: "Databases",
    items: [
      "MSSQL",
      "MySQL",
      "Stored Procedures",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    title: "Security",
    items: [
      "CORS",
      "Helmet.js",
      "XSS Prevention",
      "AES Encryption",
      "Parameterized Queries",
    ],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS S3", "Firebase FCM", "Redis", "Node-Cron", "Git", "GitHub", "PM2"],
  },
  {
    title: "Integrations",
    items: [
      "Google Maps API",
      "WhatsApp Business API",
      "Firebase Push Notifications",
      "PDF Generation",
      "Barcode Processing",
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
      "A complete business management CRM platform for handling real estate, HR, billing, recruitment, restaurant, stock, file manager, WaBus, wallet, WhatsApp, and admin operations from one dashboard.",
    problem:
      "Businesses needed a centralized system to manage multiple departments, role-based users, inquiries, follow-ups, tasks, billing, and module-specific workflows without switching between separate tools.",
    solution:
      "Built a modular CRM with a dark admin dashboard, module launcher, analytics cards, inquiry and follow-up tracking, role-based permissions, JWT authentication, secure APIs, and optimized MSSQL workflows.",
    stack: ["Node.js", "Express.js", "React.js", "MSSQL", "JWT", "RBAC"],
    features: [
      "Complete business management dashboard",
      "Real Estate, Billing, HRMS, Recruitment, Restaurant, Stock, WaBus, Wallet, and WhatsApp modules",
      "Inquiry, task, follow-up, users, roles, and permissions management",
      "Analytics cards, charts, status tracking, and module-wise reporting",
      "80+ REST API modules with validation and standardized responses",
      "30% lower API latency and 40% faster critical SQL queries",
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
      "A logistics and delivery platform with real-time rider tracking, alerts, and delivery workflow automation.",
    problem:
      "The platform needed accurate delivery zones, real-time synchronization, fare calculation, OTP authentication, and order notifications.",
    solution:
      "Implemented polygon-based zone mapping with Google Maps API, dynamic fare calculation with GST/IGST logic, Wabus WhatsApp API webhooks, Redis, and Firebase push notifications.",
    stack: ["React.js", "Node.js", "Express.js", "Google Maps API", "Redis", "Firebase"],
    features: [
      "Real-time rider tracking",
      "Dynamic fare calculation",
      "WhatsApp OTP",
      "Push notifications",
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
      "A billing and inventory management system for multi-outlet restaurants.",
    problem:
      "Restaurant teams needed real-time GST computation, invoice generation, inventory visibility, and compliant reporting.",
    solution:
      "Engineered automated PDF invoice generation, inventory tracking dashboards, audit logs, reporting, and GST workflows.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "PDF Generation"],
    features: [
      "GST automation",
      "Inventory dashboard",
      "PDF invoices",
      "Audit logs",
    ],
  },
  {
    title: "Esha IVF Management",
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
      "A healthcare management platform for patient lifecycle, appointments, and lab workflows.",
    problem:
      "Healthcare teams needed secure patient workflow tracking, appointment handling, lab process management, and automated communication.",
    solution:
      "Developed modules handling 200+ daily patient workflows with secure admin dashboards, backend APIs, Firebase, and WhatsApp communication.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "Firebase", "WhatsApp API"],
    features: [
      "200+ daily workflows",
      "Appointment management",
      "Lab workflow modules",
      "Automated communication",
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
      "A document mapping system linking Excel data with PDFs through barcode logic and optimized search.",
    problem:
      "Teams needed to manage large document sets, map spreadsheet records to PDF files, and search through thousands of files efficiently.",
    solution:
      "Built dynamic folder CRUD operations, barcode-based file mapping, and optimized search workflows for 10,000+ files.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "Barcode Processing"],
    features: [
      "10,000+ file handling",
      "Barcode mapping",
      "Dynamic folders",
      "Optimized search",
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
      "A multi-step loan workflow system with approval hierarchy, documents, notifications, and PDF generation.",
    problem:
      "Loan teams needed to process applications, manage borrower/surety documents, and track approvals in one structured workflow.",
    solution:
      "Implemented approval hierarchy, AWS S3 document uploads, borrower/surety management, notification system, and PDF generation.",
    stack: ["React.js", "Node.js", "Express.js", "MSSQL", "AWS S3", "PDF Generation"],
    features: [
      "100+ daily applications",
      "Approval hierarchy",
      "AWS S3 uploads",
      "PDF generation",
    ],
  },
];

export const experience = [
  {
    company: "Prashi Solution, Ahmedabad",
    role: "Full Stack Developer",
    duration: "Dec 2023 - Present",
    responsibilities: [
      "Engineered and scaled a multi-tenant SaaS CRM platform (CRM Emperor) supporting Real Estate, Billing, CMS, and Admin modules used by multiple clients on isolated tenant databases.",
      "Built and maintained 80+ RESTful API modules using Node.js and Express with structured error handling middleware, request validation, and standardized response models.",
      "Architected and optimized RESTful APIs using Node.js and Express, enhancing scalability and reducing response latency.",
      "Implemented JWT-based authentication with AES-encrypted request bodies, CORS configuration, Helmet.js security headers, and XSS prevention across all API endpoints.",
      "Designed and enforced RBAC-based menu-driven authorization, ensuring secure, role-scoped access control across all modules.",
      "Optimized backend workflows, reducing API response time by approx. 30% and improving data processing efficiency.",
      "Optimized MSSQL queries, reducing execution time by approx. 40% for critical operations, including query optimization and schema design.",
    ],
    details:
      "Engineered and scaled CRM Emperor, Haulerr, Fusion Pizza, Esha IVF, File Manager, and Loan Processing modules using React.js, Node.js, Express.js, MSSQL, Redis, Firebase, AWS S3, and third-party APIs.",
    impact:
      "Built 80+ REST API modules, reduced API response time by approx. 30%, optimized MSSQL queries by approx. 40%, and delivered secure JWT/RBAC-based workflows.",
    technologies: "React.js, Node.js, Express.js, MSSQL, Redis, Firebase, AWS S3",
    projects: [
      "Haulerr: Designed and deployed a full-stack logistics platform with real-time rider tracking and alert system, dynamic fare calculation with GST/IGST logic, Google Maps polygon zone mapping, Wabus WhatsApp OTP/order notifications via webhooks, and Redis/Firebase real-time synchronization with push notifications.",
      "Fusion Pizza: Engineered a billing and inventory system with real-time GST computation and automated PDF invoice generation, multi-outlet inventory tracking dashboards, and audit logs for compliance and transaction reporting.",
      "IVF Management System (Esha IVF): Developed a scalable healthcare management system for patient lifecycle, appointments, and lab workflows, handling 200+ patient workflows daily with Firebase/WhatsApp automated communication and secure admin dashboards.",
      "File Manager System: Built a document mapping system linking Excel data with PDFs via barcode logic, supporting 10,000+ files with optimized search and dynamic folder CRUD operations.",
      "Loan Processing Module: Developed a multi-step loan workflow system handling 100+ applications daily with approval hierarchy, AWS S3 document uploads, borrower/surety management, notifications, and PDF generation.",
    ],
  },
  {
    company: "Shersmart Infotech, Ahmedabad",
    role: "Intern",
    duration: "Jul 2023 - Dec 2023",
    details:
      "Developed reusable and responsive UI components using React.js and Material UI, implemented CRUD operations via REST APIs, and leveraged React hooks and state management to enhance UI performance and maintainability.",
    impact:
      "Improved UI performance, responsiveness, and component reusability across application screens.",
    technologies: "React.js, Material UI, REST APIs, React Hooks",
  },
  {
    company: "Parshi Emerging Technologies PVT LTD, Remote",
    role: "Intern",
    duration: "Jul 2022 - Dec 2022",
    details:
      "Learned Object-Oriented Programming (OOP) concepts in Python and developed a strong understanding of classes, objects, inheritance, polymorphism, and encapsulation.",
    impact:
      "Gained hands-on experience with NumPy, Pandas, and other essential Python libraries for data manipulation, analysis, and problem-solving using the Python interpreter.",
    technologies: "Python, OOP, NumPy, Pandas",
  },
  {
    company: "Linear Loop Private Limited, Ahmedabad",
    role: "Intern",
    duration: "Jan 2022 - Apr 2022",
    details:
      "Designed and developed a Bank Statement Analyser web application to automate extraction, analysis, and visualization of financial statements for creditworthiness assessment.",
    impact:
      "Built modules for PDF-to-CSV conversion, user authentication, and real-time analytics using Python, Flask, Pandas, NumPy, SQLAlchemy, Dash, and Matplotlib.",
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
  "Diploma in Multilingual Computer Programming - C-DAC, Jan 2019 - Jul 2019",
  "HTML, CSS, JavaScript, React – Online Certification Course",
  "React - The Complete Guide (incl. Hooks, React Router, Redux) - Udemy",
  "Udemy Python for Data Science and Data Analysis",
];
