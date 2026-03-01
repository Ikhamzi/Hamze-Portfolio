import { useState } from "react";
import lifeosai from "../assets/lifeosai.png";
import haus from "../assets/cafe.png";
import digitalleaf from "../assets/digleaf.png";
import realestate from "../assets/realestate.png";

export default function LiveProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "LifeOS AI",
      link: "http://lifeosai.vercel.app",
      desc: "Deployed using vercel and render",
      image: lifeosai,
      tech: ["React", "Node", "Tailwind", "AI/ML"],
    },
    {
      name: "8th Haus Cafe",
      link: "https://8th-haus-cafe.netlify.app",
      desc: "Deployed from Netlify",
      image: haus,
      tech: ["React", "Node", "Tailwind", "MongoDB", "Express"],
    },
    {
      name: "Digital Leaf Solutions",
      link: "https://digital-leaf-solutions.netlify.app/",
      desc: "Deployed from Netlify",
      image: digitalleaf,
      tech: ["React", "Node", "Tailwind", "MongoDB", "Express"],
    },
    {
      name: "Real Estate Platform",
      link: "https://realestate.netlify.app/",
      desc: "Deployed from Netlify",
      image: realestate,
      tech: ["React", "Tailwind", "Node"],
    },
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Live Projects
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Real-world applications deployed and live in production
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Glow Effect */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />

            <div className="relative flex flex-col md:flex-row items-stretch p-4 md:p-6 gap-6">
              {/* Thumbnail */}
              <div className="w-full md:w-56 h-40 md:h-28 rounded-xl overflow-hidden bg-white/5 relative">
                {/* 1. Enhanced Gradient Overlay: Added a multi-color blend and backdrop blur for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] z-10"></div>

                {/* 2. Subtle Inner Border Glow: Adds a premium feel on hover */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-cyan-400/30 transition-all duration-500 z-20 pointer-events-none"></div>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    // Added brightness and a smoother scale for a more professional feel
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
                  />
                ) : (
                  // 3. Enhanced Fallback State: Added a subtle grid pattern and a glowing icon
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 relative z-10">
                    {/* Subtle background pattern for the empty state */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>

                    <div className="relative group/icon">
                      <svg
                        className="w-12 h-12 text-gray-600 group-hover/icon:text-cyan-400 group-hover/icon:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs font-medium tracking-wider text-gray-600 uppercase group-hover:text-gray-400 transition-colors">
                      No Preview
                    </span>
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-2xl md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.name}
                </h4>
                <p className="text-gray-400 mt-1">{project.desc}</p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="hidden md:flex items-center justify-center w-12">
                <svg
                  className={`w-6 h-6 text-cyan-400 transform transition-transform duration-300 ${
                    hoveredProject === index
                      ? "translate-x-1 -translate-y-1"
                      : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>


      {/* CSS for animation */}
      <style>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .group-hover\\:animate-shine {
          animation: shine 1s;
        }
      `}</style>
    </div>
  );
}
