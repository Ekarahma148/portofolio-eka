// ===========================
// PROFILE
// ===========================

export const profile = {
  name: "Eka Rahma",

  nickname: "Eka",

  title: "Frontend React Developer",

  subtitle:
    "Frontend Developer • React Instructor • Java Developer",

  email: "ekaarahma010@email.com",

  phone: "+62 8990393826",

  location: "Bandung, Jawa Barat, Indonesia",

  avatar: "/FP.jpeg",

  cv: "/cv_Eka Rahma.pdf",

  github: "https://github.com/Ekarahma148",

  linkedin: "www.linkedin.com/in/eka-rahma-31a9ab390",

  instagram: "https://instagram.com/ekarhma_14",

  description:
    "Saya adalah Frontend Developer yang memiliki ketertarikan besar pada React.js, Java, dan pengembangan aplikasi modern. Saya dipercaya menjadi Instruktur React Fundamental dan React Lanjutan, membantu peserta memahami konsep React melalui pembelajaran yang terstruktur dan praktik langsung.",

  about: `
Saya merupakan lulusan Sarjana Akuntansi yang tertarik untuk mendalami dunia software development.

Melalui pelatihan pemrograman intensif saya mempelajari berbagai teknologi mulai dari algoritma, struktur data, basis data, HTML, GitHub, React hingga Java.

Perjalanan tersebut membawa saya dipercaya menjadi Instruktur React Fundamental dan React Lanjutan.

Saya menikmati membangun aplikasi yang modern, clean, responsif, serta mudah digunakan dengan mengutamakan clean code dan reusable component.
`
};

// ===========================
// HERO TYPING
// ===========================

export const typingTexts = [
  "Frontend Developer",
  "React Developer",
  "React Instructor",
  "Java Developer",
  "Web Developer",
  "UI Enthusiast"
];

// ===========================
// STATISTICS
// ===========================

export const statistics = [
  {
    number: 9,
    suffix: "+",
    title: "Programming Trainings"
  },

  {
    number: 15,
    suffix: "+",
    title: "Technology Stack"
  },

  {
    number: 2,
    suffix: "",
    title: "React Instructor"
  },

  {
    number: 100,
    suffix: "%",
    title: "Passionate Learner"
  }
];

// ===========================
// SKILLS
// ===========================


export const skills = [
  {
    category: "Frontend",
    iconName: "Code2", // Nama ikon untuk Lucide jika ingin mengganti emoji
    items: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "React Router",
      "Axios",
      "Context API",
    ],
  },
  {
    category: "Backend",
    iconName: "Server",
    items: [
      "Java",
      "Spring Boot",
      "REST API",
      "JWT Authentication",
      "Microservices",
      "express"
    ],
  },
  {
    category: "Database",
    iconName: "Database",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    category: "Tools & Workflow",
    iconName: "Wrench",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "IntelliJ IDEA",
      "Docker"
    ],
  },
];
// ===========================
// TRAININGS
// ===========================

export const trainings = [
  {
    title: "Logika Algoritma Bahasa C",

    description:
      "Mempelajari dasar-dasar algoritma, flowchart, percabangan, perulangan, array, function, pointer serta problem solving menggunakan bahasa C."
  },

  {
    title: "Struktur Data",

    description:
      "Mempelajari Stack, Queue, Linked List, Tree, Searching dan Sorting sebagai dasar pengembangan perangkat lunak."
  },

  {
    title: "Basis Data",

    description:
      "Perancangan database, ERD, Normalisasi, SQL, JOIN, Constraint dan implementasi PostgreSQL maupun MySQL."
  },

  {
    title: "Web Development (HTML)",

    description:
      "Membangun website menggunakan HTML5, CSS3, Semantic HTML, Flexbox, Grid dan Responsive Design."
  },

  {
    title: "Git & GitHub",

    description:
      "Version Control menggunakan Git, Branching, Merge, Pull Request serta kolaborasi pengembangan aplikasi."
  },

  {
    title: "React Fundamental",

    description:
      "JSX, Component, Props, State, useState, useEffect, Event Handling, Conditional Rendering dan List Rendering."
  },

  {
    title: "React Advanced",

    description:
      "React Router, Axios, Authentication, CRUD, Context API, Reusable Component dan Deployment."
  },

  {
    title: "Java Fundamental",

    description:
      "OOP, Class, Object, Interface, Collection, Exception Handling serta dasar Java Programming."
  },

  {
    title: "Java Advanced",

    description:
      "Spring Boot, REST API, JPA, Hibernate, JWT Authentication dan Microservices."
  }
];

// ===========================
// INSTRUCTOR
// ===========================

export const instructor = [
  {
    title: "Instruktur React Fundamental",

    description:
      "Membimbing peserta memahami dasar React melalui pendekatan praktik langsung.",

    materials: [
      "JSX",
      "Component",
      "Props",
      "State",
      "Hooks",
      "useState",
      "useEffect",
      "Event Handling",
      "Conditional Rendering",
      "List Rendering"
    ]
  },

  {
    title: "Instruktur React Lanjutan",

    description:
      "Membimbing peserta membangun aplikasi React modern menggunakan praktik terbaik.",

    materials: [
      "React Router",
      "Context API",
      "Axios",
      "Authentication",
      "JWT",
      "CRUD",
      "Deployment",
      "Reusable Component",
      "Express"
    ]
  }
];

// ===========================
// PROJECTS
// ===========================

export const projects = [
  {
    title: "Task Management System",

    subtitle: "Full Stack Web Application",

    image: "/1.png",

    description:
      "Aplikasi manajemen tugas berbasis React dan Spring Boot dengan autentikasi JWT menggunakan arsitektur Microservices.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
    ],

    features: [
      "Authentication",
      "CRUD Task",
      "Dashboard",
      "Search",
      "Pagination",
      "Reminder",
    ],

    github: "https://github.com/Ekarahma148/PROJECT.git",

    demo: null,
  },

  {
    title: "MyCash",

    subtitle: "Full Stack Financial Management System",

    image: "/mycash.png",

    description:
      "Aplikasi manajemen keuangan pribadi berbasis Spring Boot dan Thymeleaf untuk mengelola transaksi kas, kategori, budget, jurnal, riwayat, profil, dan aktivitas pengguna.",

    technologies: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "Spring Data JPA",
      "Hibernate",
      "Docker"
    ],

    features: [
      "Authentication",
      "CRUD Transaksi",
      "Budgeting",
      "Kategori Kas",
      "Jurnal",
      "Activity Log",
    ],

    github: "https://github.com/Ekarahma148/mycash.git",

    demo: null,
  },

  {
    title: "Finance Tracker",

    subtitle: "Personal Finance Dashboard",

    image: "/2.png",

    description:
      "Aplikasi pencatatan keuangan pribadi dengan fitur pemasukan, pengeluaran, dashboard statistik dan laporan.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
    ],

    features: [
      "Dashboard",
      "CRUD",
      "Search",
      "Filter",
      "Report",
    ],

    github: "https://github.com/Ekarahma148/ProjectAkt-eka.git",

    demo: null,
  },
];

// ===========================
// CERTIFICATES
// ===========================

export const certificates = [
  {
    title: "Logika Algoritma",

    image: "/C.jpeg"
  },

  {
    title: "Struktur Data",

    image: "/SD.png"
  },

  {
    title: "Basis Data",

    image: "/BD.jpg"
  },
{
    title: "Web Development (HTML)",

    image: "/WEB.jpg"
},
  {
    title: "Git & GitHub",

    image: "/GIT.png"
  },

  {
    title: "React Fundamental",

    image: "/JS_FUNDA.jpeg"
  },

  {
    title: "React Advanced",

    image: "/JS_LAN.jpeg"
  },

  {
    title: "Java Fundamental",

    image: "/JAVA_FUNDA.jpeg"
  },

  {
    title: "Java Advanced",

    image: "/JAVA_LAN.jpeg"
  }
];

// ===========================
// SOCIAL
// ===========================

export const socials = [
  {
    name: "GitHub",
    link: profile.github
  },

  {
    name: "LinkedIn",
    link: profile.linkedin
  },

  {
    name: "Instagram",
    link: profile.instagram
  },

  {
    name: "Email",
    link: `mailto:${profile.email}`
  }
];