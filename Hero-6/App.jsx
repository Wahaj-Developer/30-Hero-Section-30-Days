import { useEffect, useRef, useState } from "react";

export default function Hero1() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: "radial-gradient(circle, #8b5e3c 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
          transform: `translate(${-mousePos.x * 0.2}px, ${-mousePos.y * 0.2}px)`,
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Thin horizontal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px"
            style={{
              top: `${(i + 1) * 14}%`,
              background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.08), transparent)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-4 mb-8 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.1s",
          }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
          <span
            className="text-xs tracking-[0.4em] text-amber-400/80 uppercase"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Est. 2024
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
        </div>

        {/* Main Title */}
        <h1
          className="text-[clamp(4rem,12vw,10rem)] font-light leading-none tracking-tight text-white mb-6 transition-all duration-1200"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "0.25s",
          }}
        >
          <span className="block italic text-amber-100">Lumière</span>
          <span
            className="block text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(201,169,110,0.5)",
            }}
          >
            Collective
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-wide transition-all duration-1000"
          style={{
            fontFamily: "'Jost', sans-serif",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.45s",
          }}
        >
          Where luxury meets timeless elegance.
          <br />
          Curated experiences for the discerning few.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.6s",
          }}
        >
          <button className="group relative px-10 py-4 overflow-hidden border border-amber-400/40 text-amber-100 text-sm tracking-[0.2em] uppercase hover:text-black transition-colors duration-500"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            <span className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative">Discover More</span>
          </button>
          <button className="text-white/40 hover:text-white/80 text-sm tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            View Gallery →
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
          style={{
            opacity: loaded ? 0.5 : 0,
            transitionDelay: "1s",
          }}
        >
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>Scroll</span>
          <div className="w-px h-12 overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-b from-amber-400/60 to-transparent"
              style={{
                animation: "scrollLine 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}