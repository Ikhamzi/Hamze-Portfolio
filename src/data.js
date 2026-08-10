



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
import project4 from "/assets/project/proyek4.png?url";
import project5 from "/assets/project/proyek5.png?url";
import project6 from "/assets/project/proyek6.jpg?url";
import project7 from "/assets/project/proyek7.jpg?url";
import project8 from "/assets/project/proyek8.jpg?url";
import project9 from "/assets/project/proyek9.jpg?url";
import project10 from "/assets/project/proyek10.jpg?url";

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
  {
    id: 6,
    image: project6,
    title: "Aether — AI Task Automation Agent",
    subtitle: "AI Agent — Deployed on AWS ECS",
    fullDescription: "Aether is an AI task automation agent that turns plain-language requests into real, executed actions — planning a trip, drafting and sending an email, or scheduling an event — by orchestrating an LLM through a set of callable tools (task creation, calendar scheduling, web search, and email dispatch). Containerized with Docker and deployed on AWS ECS (Fargate) in the ap-south-1 region, with Google OAuth for sign-in and a full no-signup demo mode for evaluation.",
    borderColor: "#2DD4BF",
    gradient: "linear-gradient(145deg, #2DD4BF, #000)",
    url: "https://ae-fd13d663bc814478b726a68e6b7a2e8f.ecs.ap-south-1.on.aws/",
    sourceCode: "",
    dad: "600",
  },
  {
    id: 7,
    image: project7,
    title: "Project Manager (MCP-enabled)",
    subtitle: "Kanban Project Manager with a custom MCP server",
    fullDescription: "A Trello-style project management tool with team workspaces, multi-project boards, and a full ticket pipeline (Backlog → To Do → In Progress → In Review → Done). What sets it apart: a self-built MCP (Model Context Protocol) server exposed directly from the app — users generate a personal access token that lets Claude Code, Claude Desktop, or claude.ai read and edit their boards and tickets directly, turning the project manager into a tool an AI agent can operate on their behalf.",
    borderColor: "#F97316",
    gradient: "linear-gradient(180deg, #F97316, #000)",
    url: "https://task-manager-dpit.onrender.com",
    sourceCode: "",
    dad: "700",
  },
  {
    id: 8,
    image: project8,
    title: "Personal Expense Tracker",
    subtitle: "Full-stack expense tracker — Python/FastAPI backend",
    fullDescription: "A personal finance tracker for logging monthly expenses by category and reviewing spending summaries at a glance. Built as two independently deployed services: a React (Vite) single-page frontend with Google Sign-In, and a Python FastAPI backend (served via Uvicorn) exposing a REST API for adding expenses and computing monthly summaries — a clean example of decoupled frontend/backend architecture on Render.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://expense-tracker-frontend-ae67.onrender.com/",
    sourceCode: "",
    dad: "800",
  },
  {
    id: 9,
    image: project9,
    title: "Driver Drowsiness Detection",
    subtitle: "Real-time safety monitor — FastAPI backend, Postgres + SQLite fallback",
    fullDescription: "A real-time driver-safety monitor that watches a live webcam feed to detect signs of drowsiness during a trip, tracking driver status, runtime, and GPS start/end location for each journey. On a drowsy-driving alert, it automatically triggers an SMS and phone call to a saved emergency contact. Built on a FastAPI (Uvicorn) backend that persists trip data to PostgreSQL, with an automatic SQLite fallback to keep logging trips locally if the connection to the primary database is lost.",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://driver-drowsiness-detection-thsh.onrender.com",
    sourceCode: "",
    dad: "900",
  },
  {
    id: 10,
    image: project10,
    title: "Shopify Store Theme",
    subtitle: "Custom Shopify theme — built with Liquid",
    fullDescription: "A custom-themed Shopify storefront built using Liquid, Shopify's server-side templating language that renders product, collection, and cart data directly into the storefront's HTML. Work included building and editing theme sections and templates, wiring dynamic store data (products, variants, pricing) into Liquid objects and tags, and customizing the storefront inside the Shopify theme editor.",
    borderColor: "#22C55E",
    gradient: "linear-gradient(145deg, #22C55E, #000)",
    url: "https://ecommerce-7exnuelt.myshopify.com",
    sourceCode: "",
    dad: "1000",
  },
];
