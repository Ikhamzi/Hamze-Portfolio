import { useEffect, useState } from "react";

function TimelineItem({ side = "left", content, icon, isLast }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(content.slice(0, 10)); // unique id
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  const containerClass =
    side === "left"
      ? "md:flex-row md:text-right md:pr-8"
      : "md:flex-row-reverse md:text-left md:pl-8";

  return (
    <div
      id={content.slice(0, 10)}
      className={`flex flex-col md:flex ${containerClass} md:items-center md:justify-between space-y-4 md:space-y-0 transition-opacity transition-transform duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : side === "left"
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-x-10"
      }`}
    >
      <div className="md:w-5/12 text-center md:text-left">
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 flex items-center justify-center md:justify-start gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {content}
        </p>
      </div>

      <div className="md:w-2/12 flex flex-col items-center relative">
        <div className="w-8 h-8 rounded-full bg-[#00b8db] shadow-[0_0_15px_6px_rgba(0,184,219,0.5)] flex items-center justify-center text-[#0b1120] font-extrabold text-lg z-10">
          {icon}
        </div>
        {!isLast && (
          <div
            className="flex-1 w-px mt-1 bg-gradient-to-b from-[#00b8db] to-transparent opacity-70 rounded"
            style={{ minHeight: "60px" }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default function ExpertiseTimeline() {
  const items = [
    {
      side: "left",
      content:
        "Crafting modern websites and architectural solutions with precision and style. Building responsive and interactive websites using the latest frameworks and technologies.",
    },
    {
      side: "right",
      content:
        "Designing intuitive and user-friendly interfaces for seamless experiences. Creating efficient and aesthetic architectural designs for digital and physical spaces.",
    },
    {
      side: "left",
      content:
        "Integrating eco-friendly practices and sustainable architecture in all projects. Leveraging AI, Web3, and modern stacks to deliver innovative solutions.",
    },
    {
      side: "right",
      content:
        "Building responsive and interactive websites using the latest frameworks and technologies.",
      isLast: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0b1120] text-white relative">
      <h2 className="text-4xl font-extrabold mb-20 text-center text-[#00b8db] tracking-wide drop-shadow-lg">
        My Expertise
      </h2>

      {/* Vertical gradient timeline line */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-px h-[calc(100%-7rem)] bg-gradient-to-b from-[#00b8db] via-[#003f55] to-transparent opacity-70 rounded"></div>

      <div className="space-y-24 relative">
        {items.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}