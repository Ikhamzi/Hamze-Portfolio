import { useState } from "react";

export default function LiveProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "LifeOS AI",
      link: "http://lifeosai.vercel.app",
      desc: "Deploys from GitHub",
      image: "/images/lifeos.png",
      tech: ["React", "Node.js", "AI/ML", "Tailwind"],
    },
    {
      name: "8th Haus Cafe",
      link: "https://8th-haus-cafe.netlify.app",
      desc: "Deploys from GitHub",
      image: "/images/8thhaus.png",
      tech: ["React", "Firebase", "CSS3", "Netlify"],
    },
    {
      name: "Digital Leaf Solutions",
      link: "https://digitalleafsolutions.netlify.app/",
      desc: "Deploys from GitHub",
      image: "/images/digitalleaf.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      name: "Real Estate Platform",
      link: "https://realestate.netlify.app/",
      desc: "Manual Deploy",
      image: "/images/realestate.png",
      tech: ["React", "Redux", "Node.js", "PostgreSQL"],
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
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
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
                    hoveredProject === index ? "translate-x-1 -translate-y-1" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
            Tech Stack
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
            { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
            { name: "MongoDB", icon: "🍃", color: "from-green-400 to-emerald-600" },
            { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-blue-600" },
            { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-teal-500" },
            { name: "Framer", icon: "✨", color: "from-purple-400 to-pink-500" },
            { name: "JavaScript", icon: "📜", color: "from-yellow-400 to-yellow-600" },
            { name: "TypeScript", icon: "🔷", color: "from-blue-400 to-blue-600" },
            { name: "Git", icon: "📦", color: "from-orange-400 to-red-500" },
            { name: "Vercel", icon: "▲", color: "from-black to-gray-600" },
            { name: "Netlify", icon: "🌐", color: "from-cyan-400 to-blue-600" },
            { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-500" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <span className="text-3xl block mb-2">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
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
