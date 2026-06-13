import { useEffect, useState, useRef } from "react";

export default function Hero3() {
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Animated counter
  useEffect(() => {
    if (!loaded) return;
    let start = 0;
    const end = 98;
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [loaded]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,200,0.4)";
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0,255,200,${0.1 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  const stats = [
    { label: "CLIENTS", value: "240+" },
    { label: "UPTIME", value: `${count}%` },
    { label: "REGIONS", value: "12" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "#03040a",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* System label */}
            <div
              className="flex items-center gap-3 mb-8 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateX(0)" : "translateX(-30px)",
                transitionDelay: "0.1s",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-400 tracking-[0.3em]">SYS_ONLINE // V4.2.1</span>
            </div>

            <div className="overflow-hidden mb-2">
              <h1
                className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none text-white"
                style={{
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                }}
              >
                NEXT-GEN
              </h1>
            </div>
            <div className="overflow-hidden mb-2">
              <h1
                className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #00ffc8",
                  textShadow: "0 0 30px rgba(0,255,200,0.3)",
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
                }}
              >
                INFRASTRUCTURE
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1
                className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none text-cyan-400"
                style={{
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                }}
              >
                PLATFORM.
              </h1>
            </div>

            <p
              className="text-sm text-white/40 leading-relaxed max-w-md mb-10 tracking-wider transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.65s",
              }}
            >
              &gt; Deploy at the speed of thought. Scale beyond limits.<br />
              &gt; Zero latency. Maximum throughput. Total control.
            </p>

            <div
              className="flex gap-4 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.8s",
              }}
            >
              <button
                className="relative px-8 py-3 text-sm text-black font-bold tracking-widest overflow-hidden group"
                style={{ background: "#00ffc8" }}
              >
                <span className="relative z-10">INITIALIZE</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              <button className="px-8 py-3 text-sm text-cyan-400 border border-cyan-400/30 tracking-widest hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                EXPLORE
              </button>
            </div>
          </div>

          {/* Right - Stats terminal */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "0.5s",
            }}
          >
            <div
              className="border border-cyan-400/20 p-6"
              style={{ background: "rgba(0,255,200,0.02)" }}
            >
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-400/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="ml-3 text-xs text-white/30">metrics.dashboard</span>
              </div>

              {stats.map((s, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/40">{s.label}</span>
                    <span className="text-cyan-400">{s.value}</span>
                  </div>
                  <div className="h-px bg-white/5 relative overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-to-r from-cyan-400 to-transparent"
                      style={{
                        width: loaded ? (i === 0 ? "80%" : i === 1 ? `${count}%` : "45%") : "0%",
                        transition: `width ${1.5 + i * 0.3}s ease ${0.7 + i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="text-xs text-white/20 mt-8">
                <span className="text-cyan-400/60">&gt; </span>
                <span className="animate-pulse">system nominal_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
      `}</style>
    </section>
  );
}