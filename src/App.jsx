import TiltedCard from './components/TiltedCard';
import Navbar from "./components/navbar";
import ExpertiseTimeline from "./components/TimelineItem";
import LiveProjects from "./components/LiveProjects";


function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0b1120] text-white min-h-screen overflow-x-hidden selection:bg-cyan-500 selection:text-black">
        {/* ================= HERO ================= */}
        <section className="relative py-[214px] px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]"></div>

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Building Modern{" "}
                <span className="text-cyan-400">Digital Experiences</span>
              </h2>

              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Full-Stack MERN Developer crafting high-performance, scalable,
                and visually stunning web applications using modern
                technologies.
              </p>

              <div className="flex gap-4 flex-wrap">
                {[
                  "React",
                  "Node",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
                <TiltedCard
                  image
                  containerWidth={300}
                  containerHeight={400}
                  imageWidth={300}
                  imageHeight={400}
                />
              </div>
            </div>
          </div>
        </section>

        <ExpertiseTimeline />

        {/* ================= PROJECTS ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <LiveProjects />
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 text-center bg-linear-to-r from-cyan-500/10 to-blue-600/10">
          <h3 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h3>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you're a startup, business owner, or entrepreneur — I can
            help turn your idea into a powerful digital product.
          </p>

          <a
            href="mailto:hamza.junaid2002@gmail.com"
            className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-xl shadow-cyan-500/30"
          >
            Contact Me
          </a>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-8 text-gray-500 border-t border-white/10">
          © 2026 Hamza Junaid — Full Stack Developer
        </footer>
      </div>
    </>
  );
}

export default App;
