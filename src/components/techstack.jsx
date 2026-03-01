import React from 'react';

export default function techStack() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Tech Stack
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Technologies I work with to build modern, scalable applications
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
            className="group relative p-4 rounded-xl bg-white/5 border border-white/10 
              hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 
              hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="text-center relative z-10">
              <span className="text-3xl block mb-2 transform transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
            {/* Glow overlay on hover */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} 
                opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}