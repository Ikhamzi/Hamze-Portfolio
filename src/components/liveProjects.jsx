import { useState, useEffect } from "react";
export default function ExpertiseTimeline() {
  <>
    <h3 className="text-4xl font-bold mb-16 text-center">Live Projects</h3>

    <div className="space-y-10">
      {[
        {
          name: "LifeOS AI",
          link: "http://lifeosai.vercel.app",
          desc: "Deploys from GitHub",
          image: "/images/lifeos.png",
        },
        {
          name: "8th Haus Cafe",
          link: "https://8th-haus-cafe.netlify.app",
          desc: "Deploys from GitHub",
          image: "/images/8thhaus.png",
        },
        {
          name: "Digital Leaf Solutions",
          link: "https://digitalleafsolutions.netlify.app/",
          desc: "Deploys from GitHub",
          image: "/images/digitalleaf.png",
        },
        {
          name: "Real Estate Platform",
          link: "https://realestate.netlify.app/",
          desc: "Manual Deploy",
          image: "/images/realestate.png",
        },
      ].map((project) => (
        <a
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
        >
          {/* Thumbnail */}
          <div className="w-48 h-28 rounded-xl overflow-hidden bg-white/10">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text Content */}
          <div>
            <h4 className="text-2xl font-semibold group-hover:text-cyan-400 transition">
              {project.name}
            </h4>
            <p className="text-gray-400 mt-1">{project.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </>;
}
