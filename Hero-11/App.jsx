import { useEffect, useState, useRef } from "react";

export default function Hero7() {
  const [loaded, setLoaded] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const interval = setInterval(() => setTick(t => t + 1), 50);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  const shapes = [
    { type: "circle", cx: "75%", cy: "20%", r: 120, color: "#ff4d00", delay: 0 },
    { type: "rect", x: "5%", y: "60%", w: 80, h: 200, color: "#0a0a0a", delay: 0.1 },
    { type: "circle", cx: "20%", cy: "80%", r: 60, color: "#ff4d00", delay: 0.2, outline: true },
    { type: "rect", x: "55%", y: "75%", w: 150, h: 40, color: "#e8e0d5", delay: 0.3 },
    { type: "circle", cx: "90%", cy: "65%", r: 30, color: "#0a0a0a", delay: 0.15 },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#e8e0d5",
        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
      }}
    >
      {/* SVG geometric shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {shapes.map((s, i) => (
          s.type === "circle" ? (
            <circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill={s.outline ? "none" : s.color}
              stroke={s.outline ? s.color : "none"}
              strokeWidth={s.outline ? 3 : 0}
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "scale(1)" : "scale(0)",
                transformOrigin: `${s.cx} ${s.cy}`,
                transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${s.delay + 0.2}s`,
              }}
            />
          ) : (
            <rect
              key={i}
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              fill={s.color}
              style={{
                opacity: loaded ? 0.15 : 0,
                transition: `opacity 1s ease ${s.delay + 0.3}s`,
              }}
            />
          )
        ))}

        {/* Diagonal lines */}
        {[...Array(8)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1={-100 + i * 200}
            y1={0}
            x2={i * 200 + 200}
            y2={900}
            stroke="rgba(0,0,0,0.04)"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav
          className="flex justify-between items-center px-10 pt-10 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
        >
          <div
            className="text-4xl font-black tracking-tight text-stone-900"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            VOLT
          </div>
          <div
            className="flex gap-6 text-sm font-bold tracking-widest text-stone-500"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px" }}
          >
            <span className="hover:text-stone-900 cursor-pointer transition-colors">WORK</span>
            <span className="hover:text-stone-900 cursor-pointer transition-colors">INFO</span>
            <span className="bg-stone-900 text-stone-100 px-4 py-2 hover:bg-[#ff4d00] transition-colors cursor-pointer">
              HIRE US
            </span>
          </div>
        </nav>

        {/* Main */}
        <div className="flex-1 flex flex-col justify-center px-10 py-12 max-w-7xl">
          {/* Year tag */}
          <div
            className="flex items-center gap-4 mb-8 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(-30px)",
              transitionDelay: "0.2s",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
            }}
          >
            <div className="w-3 h-3 rotate-45 bg-[#ff4d00]" />
            <span className="tracking-widest text-stone-500">CREATIVE STUDIO 2024</span>
            <div className="h-px flex-1 bg-stone-300 max-w-[100px]" />
          </div>

          {/* Giant headline */}
          <div>
            {["WE MAKE", "THINGS THAT", "MOVE PEOPLE"].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <div
                  className="flex items-center gap-4"
                  style={{
                    transform: loaded ? "translateY(0)" : "translateY(110%)",
                    transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.12}s`,
                  }}
                >
                  {i === 2 && (
                    <div
                      className="w-20 h-20 rounded-full bg-[#ff4d00] flex-shrink-0 hidden md:flex items-center justify-center"
                      style={{
                        animation: loaded ? "spin 8s linear infinite" : "none",
                      }}
                    >
                      <svg viewBox="0 0 80 80" className="w-full h-full">
                        <path
                          d="M 40 10 A 30 30 0 0 1 70 40 A 30 30 0 0 1 40 70 A 30 30 0 0 1 10 40 A 30 30 0 0 1 40 10"
                          fill="none"
                          stroke="white"
                          strokeWidth="0"
                        />
                        <text fontSize="9" fill="white" fontFamily="Space Mono, monospace" fontWeight="bold">
                          <textPath href="#circle" startOffset="0%">
                            MOTION • DESIGN • DIGITAL • CREATIVE •
                          </textPath>
                        </text>
                        <defs>
                          <path id="circle" d="M 40 12 A 28 28 0 0 1 68 40 A 28 28 0 0 1 40 68 A 28 28 0 0 1 12 40 A 28 28 0 0 1 40 12" />
                        </defs>
                      </svg>
                    </div>
                  )}
                  <h1
                    className="text-[clamp(3rem,11vw,11rem)] font-black leading-none tracking-[-0.03em]"
                    style={{
                      color: i === 1 ? "#ff4d00" : "#0a0a0a",
                    }}
                  >
                    {line}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mt-14 gap-8 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.75s",
            }}
          >
            <p
              className="text-stone-600 max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px" }}
            >
              Award-winning creative direction, design systems, and digital 
              experiences. We don't do average.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-stone-900">120+</div>
                <div className="text-xs text-stone-400 tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>PROJECTS</div>
              </div>
              <div className="w-px h-12 bg-stone-300" />
              <div className="text-center">
                <div className="text-4xl font-black text-stone-900">8</div>
                <div className="text-xs text-stone-400 tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>AWARDS</div>
              </div>
              <div className="w-px h-12 bg-stone-300" />
              <button
                className="group flex items-center gap-3 bg-stone-900 text-white px-8 py-4 font-black tracking-wider hover:bg-[#ff4d00] transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", letterSpacing: "0.1em" }}
              >
                SEE WORK
                <span className="group-hover:rotate-45 transition-transform duration-300 text-xl">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}