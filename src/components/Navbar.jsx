import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Initialize reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll & resize handlers
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      // Active section detection with proper reset
      const sections = ["live-projects", "tech-stack"];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height
      let foundSection = "";
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          // Check if current scroll position is within this section
          if (scrollPosition >= top && scrollPosition < top + height) {
            foundSection = id;
            break;
          }
        }
      }
      
      // Only update if changed (prevents unnecessary re-renders)
      setActiveSection(prev => prev !== foundSection ? foundSection : prev);
    };
    
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll with animation-aware timing
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const delay = prefersReducedMotion ? 0 : 150;
      setTimeout(() => {
        el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      }, delay);
    }
  };

  const navLinks = [
    { name: "Live Projects", href: "#live-projects", id: "live-projects" },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
  ];

  // Animation classes helper
  const getMotionClasses = (isOpen) => {
    if (prefersReducedMotion) {
      return isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";
    }
    return isOpen 
      ? "opacity-100 translate-x-0 pointer-events-auto" 
      : "opacity-0 translate-x-full pointer-events-none";
  };

  const getLinkMotionClasses = (isOpen, index) => {
    if (prefersReducedMotion) {
      return isOpen ? "opacity-100" : "opacity-0";
    }
    return isOpen 
      ? `opacity-100 translate-y-0` 
      : `opacity-0 translate-y-3`;
  };

  return (
    <>
      {/* 
        ✅ MAIN NAV CONTAINER 
      */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-30 
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled
            ? "top-6 w-[92%] max-w-5xl rounded-full backdrop-blur-xl bg-black/40 border border-cyan-500/10 shadow-2xl shadow-cyan-500/20 py-3 px-10"
            : "top-0 w-full bg-[#0b1120] border-b border-cyan-500/10 py-6 px-6"
          }
          ${menuOpen && isMobile ? "opacity-0 scale-95 pointer-events-none blur-[2px]" : "opacity-100 scale-100 pointer-events-auto blur-0"}`}
      >
        <div className="flex items-center justify-evenly">
          {/* LOGO */}
          <h1 className="text-2xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-105">
            Hamza Junaid
          </h1>

          {/* DESKTOP VIEW */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-medium transition-all duration-300 group ${
                    activeSection === link.id
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                  {/* Active indicator with glow effect */}
                  <span 
                    className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-400 ease-out ${
                      activeSection === link.id 
                        ? "w-full shadow-[0_0_12px_rgba(34,211,238,0.8)]" 
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}

              {/* Unified Social Links - Desktop */}
              <div className="flex items-center gap-5 pl-5 border-l border-white/10">
                <SocialLink 
                  href="https://linkedin.com" 
                  label="LinkedIn"
                  icon={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                />
                <SocialLink 
                  href="https://github.com/Ikhamzi" 
                  label="GitHub"
                  icon={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  }
                />
              </div>

              {/* CTA Button */}
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

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-gray-400 hover:text-cyan-400 transition"
              aria-label="Toggle menu"
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

      {/* ✅ MOBILE MENU */}
      {isMobile && (
        <>
          {/* Backdrop overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
              ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 max-w-sm z-50 
              bg-[#0b1120]/98 backdrop-blur-xl border-l border-white/10
              pt-20 px-8 pb-10 flex flex-col
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${getMotionClasses(menuOpen)}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo/Name */}
            <div className={`mb-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${prefersReducedMotion 
                ? "" 
                : menuOpen 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: prefersReducedMotion ? "0ms" : (menuOpen ? "80ms" : "0ms") }}
            >
              <h2 className="text-2xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hamza Junaid
              </h2>
              <p className="text-sm text-gray-500 mt-1">Full-Stack Developer</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group flex items-center gap-3 py-4 text-2xl font-semibold transition-all duration-200
                    ${activeSection === link.id
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                    }
                    ${getLinkMotionClasses(menuOpen, index)}`}
                  style={{ transitionDelay: prefersReducedMotion ? "0ms" : (menuOpen ? `${index * 60 + 100}ms` : "0ms") }}
                >
                  <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    activeSection === link.id 
                      ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                      : "bg-cyan-400/0 group-hover:bg-cyan-400"
                  }`} />
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Connect Section */}
            <div className={`pt-8 border-t border-white/10 transition-opacity duration-200
              ${prefersReducedMotion ? "" : (menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}`}
              style={{ transitionDelay: prefersReducedMotion ? "0ms" : (menuOpen ? "280ms" : "0ms") }}
            >
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Connect</p>
              <div className="flex gap-3">
                <SocialLink 
                  href="https://linkedin.com" 
                  label="LinkedIn"
                  mobile
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  }
                />
                <SocialLink 
                  href="https://github.com/Ikhamzi" 
                  label="GitHub"
                  mobile
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// ✅ Reusable Social Link Component
function SocialLink({ href, label, icon, mobile = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2.5 font-medium transition-all duration-200
        ${mobile 
          ? "flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30" 
          : "text-gray-400 hover:text-cyan-400"
        }`}
      aria-label={label}
    >
      <span className={`transition-transform duration-200 ${mobile ? "group-hover:scale-110 group-hover:text-cyan-400" : ""}`}>
        {icon}
      </span>
      <span className={`${mobile ? "text-base" : "text-sm"}`}>{label}</span>
      {!mobile && (
        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  );
}
