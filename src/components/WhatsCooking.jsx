// src/components/WhatsCooking.jsx
import React from "react";
import "./WhatsCooking.css";

export default function WhatsCooking() {
  return (
    <section className="relative py-18 px-6 overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.04),_transparent_50%)]" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Currently Building
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              What's Cooking?
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm crafting something special in the lab. A blend of cutting-edge
            technology and thoughtful design — coming soon to transform how you
            build.
          </p>
        </div>

        {/* 3-Column Sophisticated Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* ========== LEFT: Animated Pot (Premium Glass Card) ========== */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Card glassmorphism */}
              <div
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-3xl 
                bg-gradient-to-br from-white/[0.08] to-white/[0.02] 
                border border-white/10 backdrop-blur-xl
                shadow-2xl shadow-cyan-500/5
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10"
              >
                {/* Inner glow ring */}
                <div className="absolute inset-0 rounded-3xl border border-cyan-500/0 group-hover:border-cyan-500/20 transition-colors duration-500" />

                {/* Steam container - positioned relative to card */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-10 bg-gradient-to-t from-cyan-400/50 via-cyan-300/20 to-transparent rounded-full animate-steam"
                      style={{
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "3s",
                      }}
                    />
                  ))}
                </div>

                {/* Pot illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pot body - metallic gradient */}
                    <div className="relative w-28 h-20 md:w-36 md:h-24">
                      {/* Main pot */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-b-[2rem] border-2 border-gray-600/80 shadow-inner">
                        {/* Metallic highlight */}
                        <div className="absolute inset-x-2 top-1 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
                      </div>

                      {/* Handles */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-7 border-2 border-gray-600/80 rounded-l-xl bg-gradient-to-b from-gray-400 to-gray-600" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3.5 h-7 border-2 border-gray-600/80 rounded-r-xl bg-gradient-to-b from-gray-400 to-gray-600" />

                      {/* Bubbling liquid */}
                      <div className="absolute inset-x-3 top-3 h-10 overflow-hidden rounded-t-lg">
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 via-cyan-400/20 to-transparent" />
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-bubble shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                            style={{
                              left: `${15 + i * 23}%`,
                              bottom: "4px",
                              animationDelay: `${i * 0.4}s`,
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Lid */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 md:w-40 h-3.5 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-xl border-2 border-gray-600/80" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-3 bg-gray-400 rounded-t-lg border border-gray-600/80" />
                  </div>
                </div>

                {/* Subtle pulse ring */}
                <div className="absolute inset-0 rounded-3xl animate-pot-pulse" />
              </div>

              {/* Caption */}
              <p className="mt-5 text-center text-sm font-medium text-gray-500">
                <span className="text-cyan-400">●</span> Simmering with ideas
              </p>
            </div>
          </div>

          {/* ========== CENTER: Project Details (Editorial Style) ========== */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="space-y-6">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                <span className="text-xs font-medium text-gray-300">
                  Phase 2 of 4
                </span>
              </div>

              {/* Title with gradient underline */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Visual Optics E-commerce Platform
                </h3>
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                A unified product page that combines{" "}
                <span className="text-cyan-400 font-medium">
                  user requirements
                </span>
                ,
                <span className="text-blue-400 font-medium">
                  {" "}
                  real-time collaboration
                </span>
                , and
                <span className="text-purple-400 font-medium">
                  {" "}
                  one-tap orders and payments
                </span>
                . Built for people who style fast without sacrificing quality.
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {[
                  "React",
                  "Node",
                  "express",
                  "PostgreSQL",
                  "Docker",
                  "Render",
                  "Vercel",
                ].map((tech, i) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg 
                      bg-gradient-to-br from-white/[0.08] to-white/[0.02] 
                      border border-white/10 text-gray-300
                      hover:border-cyan-500/40 hover:text-cyan-400
                      transition-all duration-200 cursor-default"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Development Progress</span>
                  <span className="text-cyan-400 font-medium">58%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
                      transition-all duration-1000 ease-out"
                    style={{ width: "58%" }}
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#live-projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector("#live-projects");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl 
    bg-gradient-to-r from-cyan-500 to-blue-500 
    text-black font-semibold text-sm
    hover:from-cyan-400 hover:to-blue-400
    transform hover:scale-[1.02] hover:-translate-y-0.5
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
    shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40
    focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0b1120]"
                >
                  <span>Explore Live Projects</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ========== RIGHT: Project Preview (Cinematic Card) ========== */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative group">
              {/* Cinematic glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-cyan-400/40 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-700" />

              {/* Preview card */}
              <div
                className="relative w-72 h-48 md:w-80 md:h-52 rounded-2xl overflow-hidden 
                bg-gradient-to-br from-[#0f172a] to-[#1e293b] 
                border border-white/10
                shadow-2xl shadow-black/40"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-grid-move" />
                </div>

                {/* Preview content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Abstract UI mockup */}
                  <div className="relative w-full max-w-xs">
                    {/* Header bar */}
                    <div className="h-8 rounded-lg bg-white/10 mb-3 flex items-center px-3 gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                      <div className="w-2 h-2 rounded-full bg-green-400/80" />
                    </div>

                    {/* Main content area */}
                    <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-400/30 border border-cyan-400/40 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-cyan-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <p className="text-xs font-medium text-gray-400">
                          Dashboard Preview
                        </p>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="h-6 rounded-lg bg-white/5 mt-3" />
                  </div>
                </div>

                {/* Overlay badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg 
                  bg-black/50 border border-white/10 backdrop-blur-md
                  flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-medium text-gray-300">
                    Live Preview
                  </span>
                </div>

                {/* Hover interaction hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-xs font-medium text-white/90 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    Click to expand →
                  </span>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-5 text-center text-sm font-medium text-gray-500">
                Interactive preview <span className="text-cyan-400/80">↗</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-float-particle"
          style={{
            background: `radial-gradient(circle, ${i % 2 === 0 ? "rgba(34,211,238,0.6)" : "rgba(59,130,246,0.5)"}, transparent)`,
            top: `${15 + i * 12}%`,
            left: `${8 + i * 14}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        />
      ))}
    </section>
  );
}
