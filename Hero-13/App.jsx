import { useEffect, useState } from "react";

export default function Hero9() {
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const services = ["Brand Identity", "Print Design", "Packaging", "Motion", "Digital"];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#f5e6c8",
        fontFamily: "'Abril Fatface', serif",
      }}
    >
      {/* Top wavy band */}
      <div
        className="absolute top-0 left-0 right-0 h-3"
        style={{ background: "linear-gradient(90deg, #c84b31, #e8a838, #c84b31, #2d6a4f, #c84b31)" }}
      />

      {/* Big decorative circle */}
      <div
        className="absolute rounded-full border-[3px] border-[#c84b31] pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          top: "-20vw",
          right: "-15vw",
          opacity: loaded ? 0.15 : 0,
          transition: "opacity 1.5s ease 0.3s",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "30vw",
          height: "30vw",
          bottom: "-10vw",
          left: "-5vw",
          background: "#c84b31",
          opacity: loaded ? 0.08 : 0,
          transition: "opacity 1.5s ease 0.5s",
        }}
      />

      {/* Dotted texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #8b4513 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav
          className="flex justify-between items-center px-10 pt-10 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "#c84b31", fontFamily: "'Abril Fatface', serif" }}
            >
              GS
            </div>
            <span className="text-2xl text-[#2d1f0e]">Groovy Studio</span>
          </div>
          <div
            className="flex gap-8 text-sm text-[#6b4423]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            <span className="hover:text-[#c84b31] cursor-pointer transition-colors">Work</span>
            <span className="hover:text-[#c84b31] cursor-pointer transition-colors">Studio</span>
            <span className="hover:text-[#c84b31] cursor-pointer transition-colors">Journal</span>
            <span
              className="border-2 border-[#c84b31] text-[#c84b31] px-5 py-1.5 rounded-full hover:bg-[#c84b31] hover:text-white transition-all cursor-pointer"
            >
              Let's Talk
            </span>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 px-10 py-16 flex flex-col justify-between">
          {/* Main title area */}
          <div>
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-6 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: "0.2s",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-[#e8a838] flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
              <span className="text-sm font-bold tracking-wider text-[#c84b31]">INDEPENDENT CREATIVE STUDIO</span>
            </div>

            {/* Headline */}
            <div className="max-w-4xl">
              {["Craft that", "Stands", "Out."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <h1
                    className="text-[clamp(4rem,13vw,13rem)] leading-none"
                    style={{
                      color: i === 1 ? "#c84b31" : "#2d1f0e",
                      transform: loaded ? "translateY(0)" : "translateY(110%)",
                      transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.12}s`,
                    }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "0.8s",
            }}
          >
            {/* Services list */}
            <div>
              <p
                className="text-xs font-bold tracking-widest text-[#6b4423] mb-4"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                OUR CRAFT
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <span
                    key={s}
                    className="px-4 py-2 text-sm border-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#c84b31] hover:border-[#c84b31] hover:text-white"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      borderColor: "#2d1f0e",
                      color: "#2d1f0e",
                      animation: loaded ? `pop 0.4s ease ${0.8 + i * 0.06}s both` : "none",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA + Stats */}
            <div className="flex items-end gap-10">
              <div className="text-center">
                <div className="text-5xl text-[#2d1f0e] mb-1">8+</div>
                <div
                  className="text-xs font-bold tracking-wider text-[#6b4423]"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  YEARS EXP.
                </div>
              </div>
              <div className="w-px h-14 bg-[#c4a882]" />
              <div className="text-center">
                <div className="text-5xl text-[#2d1f0e] mb-1">200</div>
                <div
                  className="text-xs font-bold tracking-wider text-[#6b4423]"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  PROJECTS
                </div>
              </div>
              <div className="w-px h-14 bg-[#c4a882]" />

              <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden"
                style={{
                  background: hover ? "#2d1f0e" : "#c84b31",
                }}
              >
                <span
                  className="text-white text-center text-sm font-bold leading-tight"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  View<br />Work ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Nunito:wght@400;600;700;800&display=swap');
        @keyframes pop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}