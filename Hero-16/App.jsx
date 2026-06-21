import { useEffect, useState } from "react";

export default function Hero10() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    let p = 0;
    const timer = setInterval(() => {
      p += 0.8;
      setProgress(Math.min(p, 100));
      if (p >= 100) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [loaded]);

  const principles = ["間 · Space", "静 · Stillness", "美 · Beauty"];

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "#fafaf8",
        fontFamily: "'Noto Serif JP', 'Georgia', serif",
      }}
    >
      {/* Vertical accent line - left */}
      <div
        className="absolute left-[72px] top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent)",
        }}
      />

      {/* Vertical accent line - right */}
      <div
        className="absolute right-[72px] top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.08) 80%, transparent)",
        }}
      />

      {/* Horizontal lines top */}
      <div
        className="absolute top-[72px] left-0 right-0 h-px"
        style={{ background: "rgba(0,0,0,0.06)" }}
      />

      {/* Ink wash circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-2000"
        style={{
          width: loaded ? "min(70vw, 70vh)" : "0",
          height: loaded ? "min(70vw, 70vh)" : "0",
          border: "1px solid rgba(0,0,0,0.04)",
          transitionDuration: "2s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all"
        style={{
          width: loaded ? "min(45vw, 45vh)" : "0",
          height: loaded ? "min(45vw, 45vh)" : "0",
          background: "radial-gradient(circle, rgba(180,160,120,0.06) 0%, transparent 70%)",
          transitionDuration: "2.5s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.2s",
        }}
      />

      {/* Top nav */}
      <nav
        className="flex justify-between items-center px-[88px] pt-[88px] relative z-10 transition-all duration-700"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.1s" }}
      >
        <div className="text-sm tracking-[0.3em] text-stone-400" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
          MA·STUDIO
        </div>
        <div
          className="flex gap-10 text-xs tracking-[0.25em] text-stone-400"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="hover:text-stone-700 cursor-pointer transition-colors">WORK</span>
          <span className="hover:text-stone-700 cursor-pointer transition-colors">ABOUT</span>
          <span className="hover:text-stone-700 cursor-pointer transition-colors">CONTACT</span>
        </div>
      </nav>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-8 py-20">

        {/* Small kanji row */}
        <div
          className="flex gap-12 mb-16 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.4s",
          }}
        >
          {principles.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span
                className="text-4xl text-stone-800"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {p.split(" · ")[0]}
              </span>
              <span
                className="text-[10px] tracking-[0.3em] text-stone-400"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {p.split(" · ")[1]}
              </span>
            </div>
          ))}
        </div>

        {/* Main title */}
        <div className="mb-6">
          {["The Art of", "Purposeful", "Design."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <h1
                className="text-[clamp(3rem,9vw,9rem)] font-normal leading-tight text-stone-800"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: i === 1 ? "italic" : "normal",
                  letterSpacing: "-0.02em",
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.12}s`,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Thin rule */}
        <div
          className="w-24 h-px bg-stone-300 mb-8 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transitionDelay: "0.85s",
          }}
        />

        {/* Subtext */}
        <p
          className="text-stone-500 text-base md:text-lg leading-relaxed max-w-md mb-16 transition-all duration-700"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(15px)",
            transitionDelay: "0.9s",
          }}
        >
          We create with intention. Every element considered, every space 
          deliberate. Design that speaks in whispers, not shouts.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center gap-8 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(15px)",
            transitionDelay: "1.05s",
          }}
        >
          <button
            className="group relative px-12 py-4 border border-stone-800 text-stone-800 text-sm tracking-[0.2em] hover:bg-stone-800 hover:text-white transition-all duration-500"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            VIEW PORTFOLIO
          </button>
          <button
            className="text-sm tracking-[0.2em] text-stone-400 hover:text-stone-700 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            READ OUR PHILOSOPHY
          </button>
        </div>

        {/* Progress bar */}
        <div
          className="mt-20 flex flex-col items-center gap-3 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transitionDelay: "1.2s",
          }}
        >
          <div className="w-32 h-px bg-stone-100 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-stone-800 transition-all"
              style={{ width: `${progress}%`, transitionDuration: "0.1s" }}
            />
          </div>
          <span
            className="text-[10px] tracking-[0.4em] text-stone-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Bottom corners */}
      <div
        className="flex justify-between items-end px-[88px] pb-[40px] relative z-10 transition-all duration-700"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "1.4s" }}
      >
        <span
          className="text-[10px] tracking-[0.3em] text-stone-300"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          EST. 2016
        </span>
        <span
          className="text-[10px] tracking-[0.3em] text-stone-300"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          TOKYO · KYOTO · LONDON
        </span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Noto+Serif+JP:wght@300;400&display=swap');
      `}</style>
    </section>
  );
}