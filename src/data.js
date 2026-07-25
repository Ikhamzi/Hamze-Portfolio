



// Tool imports (keep all for images)
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

import project1 from "/assets/project/proyek1.png?url";
import project2 from "/assets/project/proyek2.png?url";
import project3 from "/assets/project/proyek3.png?url";
import project4 from "/assets/project/proyek4.png?url";
import project5 from "/assets/project/proyek5.png?url";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React",
    ket: "Frontend Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools7,
    nama: "Node.js",
    ket: "Backend Runtime",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Styling Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools19,
    nama: "MongoDB",
    ket: "NoSQL Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools19,
    nama: "PostgreSQL",
    ket: "Relational Database",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Superset of JS",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Git/GitHub",
    ket: "Version Control",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Backend Platform",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools18,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools9,
    nama: "AI/ML",
    ket: "Machine Learning",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML/CSS",
    ket: "Web Fundamentals",
    dad: "1400",
  },
];

export const listProyek = [
  {
    id: 1,
    image: project1,
    title: "LifeOS AI",
    subtitle: "Full Stack App — Live: https://lifeosai.vercel.app",
    fullDescription: "Designed and developed a productivity-focused web application with AI-assisted workflows to help users manage tasks, notes, and personal organization efficiently. Built a responsive, mobile-first interface ensuring seamless performance across desktop, tablet, and mobile devices. Implemented MongoDB as the primary database to provide a scalable, flexible, and high-performance data storage solution for the application. Deployed the frontend on Vercel and backend services on Render, optimizing performance, scalability, and real-world production reliability.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://lifeosai.vercel.app",
    sourceCode: "https://github.com/Ikhamzi/Life-OS-AI",
    dad: "100",
  },
  {
    id: 2,
    image: project2,
    title: "8th Haus Cafe",
    subtitle: "Deployed from Netlify",
    fullDescription: "8th Haus Cafe is a fully functional coffee shop website with menu browsing, online ordering, and business information. The site delivers a smooth user experience with responsive design optimized for both mobile and desktop. Built with React, Node, Tailwind, MongoDB, and Express.js.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://8th-haus-cafe.netlify.app",
    sourceCode: "https://github.com/Ikhamzi/8th-Haus-Cafe",
    dad: "200",
  },
  {
    id: 3,
    image: project3,
    title: "Digital Leaf Solutions",
    subtitle: "Deployed from Netlify",
    fullDescription: "Digital Leaf Solutions is a professional web platform showcasing innovative digital solutions for modern businesses. Featuring elegant design and smooth interactions, it demonstrates expertise in creating scalable web applications. Built with React, Node, Tailwind, MongoDB, and Express.js.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://digital-leaf-solutions.netlify.app/",
    sourceCode: "https://github.com/Ikhamzi/Builddigitalleafwebsite",
    dad: "300",
  },
  {
    id: 4,
    image: project4,
    title: "Real Estate Platform",
    subtitle: "No live deployment available",
    fullDescription: "A comprehensive real estate platform enabling property listings, search functionality, and user interactions. Designed with modern UI/UX principles and robust backend capabilities for real-world deployment. Built with React, Tailwind, and Node.js.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://real-estate-pro2.netlify.app/",
    sourceCode: "https://github.com/Ikhamzi/Alpha-Realty-Copy-",
    dad: "400",
  },
  {
    id: 5,
    image: project5,
    title: "QMet",
    subtitle: "Client Website (Frontend/UI-UX) — Live: https://qmet.onrender.com",
    fullDescription: "Designed and developed the UI/UX for a client website per their brand and design requirements. Built a responsive, accessible frontend using Next.js and Tailwind CSS. Developed ready to integrate backend API endpoints with Node.js/Express.js and PostgreSQL for data storage. Deployed the application on Render for client review and production use.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://qmet.onrender.com",
    sourceCode: "https://github.com/Ikhamzi/QMet",
    dad: "500",
  },
];
