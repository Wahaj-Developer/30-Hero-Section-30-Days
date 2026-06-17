import { useEffect, useState } from "react";

const features = ["AI-Powered", "Real-time", "Scalable", "Secure"];

export default function Hero8() {
  const [loaded, setLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => setActiveFeature(i => (i + 1) % features.length), 2500);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  const cards = [
    { icon: "🧠", label: "Neural Engine", val: "99.8%", sub: "accuracy" },
    { icon: "⚡", label: "Speed", val: "<10ms", sub: "latency" },
    { icon: "🌍", label: "Global CDN", val: "200+", sub: "edge nodes" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Full gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0d0221 0%, #1a0533 25%, #0d1545 50%, #041030 75%, #080820 100%)",
        }}
      />

      {/* Animated orbs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
          animation: "orb1 12s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          animation: "orb2 15s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
          top: "40%",
          left: "40%",
          animation: "orb3 10s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-20">
        {/* Nav */}
        <nav
          className="flex justify-between items-center mb-24 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
        >
          <div className="text-white text-xl font-bold tracking-tight flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
            />
            Nexus AI
          </div>
          <div
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-white/10"
            style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.04)" }}
          >
            {["Product", "Solutions", "Pricing", "Enterprise"].map(item => (
              <button key={item} className="px-5 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all">
                {item}
              </button>
            ))}
          </div>
          <button
            className="text-sm font-semibold text-white px-6 py-2.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
          >
            Get Access
          </button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 text-sm transition-all duration-700"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.05)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(15px)",
                transitionDelay: "0.15s",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/70">Series B · $40M Raised</span>
            </div>

            {/* Headline with animated word */}
            <div className="mb-8">
              <div className="overflow-hidden">
                <h1
                  className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight text-white"
                  style={{
                    transform: loaded ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                  }}
                >
                  The Future of
                </h1>
              </div>
              <div className="overflow-hidden flex items-center gap-4 flex-wrap">
                <h1
                  className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #3b82f6, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transform: loaded ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
                  }}
                >
                  {features[activeFeature]}
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight text-white"
                  style={{
                    transform: loaded ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                  }}
                >
                  Infrastructure
                </h1>
              </div>
            </div>

            <p
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.65s",
              }}
            >
              Build, deploy, and scale AI applications with enterprise-grade 
              infrastructure. From prototype to production in hours, not months.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.8s",
              }}
            >
              <button
                className="relative px-8 py-4 rounded-full text-white font-semibold overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Free
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button
                className="px-8 py-4 rounded-full text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all font-medium"
                style={{ backdropFilter: "blur(20px)", background: "rgba(255,255,255,0.04)" }}
              >
                View Documentation
              </button>
            </div>
          </div>

          {/* Right - Glass cards */}
          <div
            className="grid gap-4 transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "0.45s",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.04)",
                  transitionDelay: `${0.5 + i * 0.1}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  {card.icon}
                </div>
                <div className="flex-1">
                  <div className="text-white/50 text-sm mb-1">{card.label}</div>
                  <div className="text-white text-2xl font-bold">{card.val}</div>
                </div>
                <div
                  className="text-xs text-white/40 uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {card.sub}
                </div>
              </div>
            ))}

            {/* Big glass card */}
            <div
              className="p-6 rounded-2xl border border-white/10 mt-2"
              style={{
                backdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/50 text-sm">Request Volume</span>
                <span className="text-emerald-400 text-xs">● Live</span>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[40, 60, 45, 80, 55, 90, 70, 85, 95, 75, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-500"
                    style={{
                      height: loaded ? `${h}%` : "0%",
                      background: `linear-gradient(to top, rgba(168,85,247,0.6), rgba(59,130,246,0.4))`,
                      transitionDelay: `${0.8 + i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
              <div className="text-right mt-2 text-xs text-white/30">4.2M req/day</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.05); }
          66% { transform: translate(20px, -20px) scale(0.95); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.1); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 30px) scale(0.9); }
          66% { transform: translate(30px, 10px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}