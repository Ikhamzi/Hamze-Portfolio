import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
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

          {/* DESKTOP VIEW - Hidden on mobile */}
          {!isMobile && (
            <div className="flex items-center gap-8">
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
          )}

          {/* MOBILE VIEW - Hamburger menu button */}
          {isMobile && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-gray-400 hover:text-cyan-400 transition"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && isMobile && (
        <div className="fixed inset-0 z-40 bg-[#0b1120]/95 backdrop-blur-xl pt-24 px-6">
          <div className="flex flex-col gap-6">
            <a
              href="#home"
              className="text-3xl font-bold text-white hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-3xl font-bold text-white hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-3xl font-bold text-white hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-3xl font-bold text-white hover:text-cyan-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Ikhamzi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
