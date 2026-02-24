import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled
          ? "top-6 w-[92%] max-w-5xl rounded-full backdrop-blur-xl bg-black/40 border border-cyan-500/10 shadow-2xl shadow-cyan-500/20 py-3 px-10"
          : "top-0 w-full bg-[#0b1120] border-b border-cyan-500/10 py-6 px-6"
      }`}
    >
      <div className="flex items-center justify-evenly">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-105">
          Hamza Junaid
        </h1>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">
          {/* LINKEDIN */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="relative text-gray-400 font-medium transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group"
          >
            LinkedIn
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-400 ease-out group-hover:w-full"></span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Ikhamzi"
            target="_blank"
            rel="noreferrer"
            className="relative text-gray-400 font-medium transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group"
          >
            GitHub
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-400 ease-out group-hover:w-full"></span>
          </a>

          {/* CTA BUTTON */}
          <a
            href="mailto:hamza.junaid2002@gmail.com"
            className="relative px-6 py-2 rounded-full font-semibold text-black bg-cyan-500
              transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:bg-cyan-400 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/60
              active:scale-95"
          >
            Need a website?
          </a>
        </div>
      </div>
    </nav>
  );
}