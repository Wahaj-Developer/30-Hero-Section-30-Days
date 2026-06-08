import { useState, useEffect, useRef } from "react";

const GLOBE_SVG = `data:image/png;base64,`;

export default function NobleFinancesHero() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) / 2 - 8;

    // Orbit ring configs: tilt angles (degrees), phase offset
    const orbits = [
      { tiltX: 30, tiltY: 0, phase: 0, dotPos: 0.18 },
      { tiltX: -20, tiltY: 15, phase: Math.PI, dotPos: 0.72 },
    ];

    function drawGlobe(rot) {
      ctx.clearRect(0, 0, W, H);

      // --- Globe base ---
      // Ocean gradient
      const oceanGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
      oceanGrad.addColorStop(0, "#7eadd4");
      oceanGrad.addColorStop(0.5, "#5b8fc7");
      oceanGrad.addColorStop(1, "#3a6fa8");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // Clip to globe circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      // Draw land masses (simplified continents that rotate)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      const landGrad = ctx.createLinearGradient(-R, -R, R, R);
      landGrad.addColorStop(0, "#5a8a4a");
      landGrad.addColorStop(0.5, "#4a7a3a");
      landGrad.addColorStop(1, "#3a6a2a");

      // North America
      ctx.beginPath();
      ctx.moveTo(-R * 0.35, -R * 0.55);
      ctx.bezierCurveTo(-R * 0.55, -R * 0.5, -R * 0.65, -R * 0.2, -R * 0.5, 0);
      ctx.bezierCurveTo(-R * 0.45, R * 0.15, -R * 0.3, R * 0.25, -R * 0.25, R * 0.1);
      ctx.bezierCurveTo(-R * 0.15, -R * 0.05, -R * 0.1, -R * 0.3, -R * 0.2, -R * 0.4);
      ctx.bezierCurveTo(-R * 0.25, -R * 0.5, -R * 0.3, -R * 0.58, -R * 0.35, -R * 0.55);
      ctx.fillStyle = landGrad;
      ctx.fill();

      // South America
      ctx.beginPath();
      ctx.moveTo(-R * 0.2, R * 0.1);
      ctx.bezierCurveTo(-R * 0.35, R * 0.15, -R * 0.4, R * 0.45, -R * 0.3, R * 0.7);
      ctx.bezierCurveTo(-R * 0.2, R * 0.8, -R * 0.05, R * 0.7, 0, R * 0.5);
      ctx.bezierCurveTo(R * 0.02, R * 0.3, -R * 0.05, R * 0.1, -R * 0.2, R * 0.1);
      ctx.fillStyle = landGrad;
      ctx.fill();

      // Europe / Africa
      ctx.beginPath();
      ctx.moveTo(R * 0.1, -R * 0.65);
      ctx.bezierCurveTo(R * 0.05, -R * 0.55, R * 0.08, -R * 0.4, R * 0.15, -R * 0.3);
      ctx.bezierCurveTo(R * 0.25, -R * 0.18, R * 0.3, -R * 0.05, R * 0.25, R * 0.1);
      ctx.bezierCurveTo(R * 0.2, R * 0.3, R * 0.15, R * 0.55, R * 0.1, R * 0.75);
      ctx.bezierCurveTo(R * 0.05, R * 0.85, -R * 0.05, R * 0.8, -R * 0.05, R * 0.65);
      ctx.bezierCurveTo(-R * 0.05, R * 0.4, 0, R * 0.1, R * 0.05, -R * 0.1);
      ctx.bezierCurveTo(R * 0.04, -R * 0.35, R * 0.08, -R * 0.55, R * 0.1, -R * 0.65);
      ctx.fillStyle = landGrad;
      ctx.fill();

      // Greenland-ish blob
      ctx.beginPath();
      ctx.ellipse(-R * 0.05, -R * 0.72, R * 0.12, R * 0.1, 0.3, 0, Math.PI * 2);
      ctx.fillStyle = "#c8deba";
      ctx.fill();

      // Pole caps
      ctx.beginPath();
      ctx.ellipse(0, -R * 0.88, R * 0.25, R * 0.12, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(0, R * 0.88, R * 0.2, R * 0.1, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.fill();

      ctx.restore();

      // Atmosphere glow inside clip
      const atmoGrad = ctx.createRadialGradient(cx + R * 0.3, cy - R * 0.4, 0, cx, cy, R);
      atmoGrad.addColorStop(0, "rgba(255,255,255,0.12)");
      atmoGrad.addColorStop(0.6, "rgba(255,255,255,0)");
      atmoGrad.addColorStop(1, "rgba(0,30,80,0.25)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = atmoGrad;
      ctx.fill();

      ctx.restore(); // end clip

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, R - 2, cx, cy, R + 18);
      glowGrad.addColorStop(0, "rgba(100,170,220,0.25)");
      glowGrad.addColorStop(1, "rgba(100,170,220,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R + 18, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Shine highlight
      const shineGrad = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, 0, cx - R * 0.35, cy - R * 0.35, R * 0.55);
      shineGrad.addColorStop(0, "rgba(255,255,255,0.28)");
      shineGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = shineGrad;
      ctx.fill();

      // --- Orbit rings with animated dots ---
      const time = rot / 0.005; // use rotation as time proxy

      orbits.forEach((orb, i) => {
        const tX = (orb.tiltX * Math.PI) / 180;
        const tY = (orb.tiltY * Math.PI) / 180;

        // Draw elliptical orbit ring
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tY);

        const rX = R * 1.12;
        const rY = R * 0.42 * Math.cos(tX);

        // Ring shadow (back half)
        ctx.beginPath();
        ctx.ellipse(0, 0, rX, Math.abs(rY), 0, Math.PI, Math.PI * 2);
        ctx.strokeStyle = "rgba(220,160,130,0.35)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Ring front half
        ctx.beginPath();
        ctx.ellipse(0, 0, rX, Math.abs(rY), 0, 0, Math.PI);
        ctx.strokeStyle = "rgba(220,160,130,0.85)";
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Animated dot along orbit
        const dotAngle = rot * (i === 0 ? 2 : -1.5) + orb.phase;
        const dotX = rX * Math.cos(dotAngle);
        const dotY = rY * Math.sin(dotAngle);

        // Only show dot when "in front" of globe for depth
        const inFront = Math.sin(dotAngle) > 0;

        if (inFront) {
          // Draw dot on top of globe circle
          ctx.save();
          const dotGrad = ctx.createRadialGradient(dotX - 2, dotY - 2, 0, dotX, dotY, 8);
          dotGrad.addColorStop(0, "#f5e0c8");
          dotGrad.addColorStop(0.5, "#e8c8a8");
          dotGrad.addColorStop(1, "#c4a882");
          ctx.beginPath();
          ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
          ctx.fillStyle = dotGrad;
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,0.5)";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();
      });
    }

    function animate() {
      rotationRef.current += 0.005;
      drawGlobe(rotationRef.current);
      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [mounted]);

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: "#8fad8f", fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(60,80,40,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(40,60,30,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Navbar */}
      <nav
        className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: "#2d3d1e", letterSpacing: "0.18em" }}
        >
          Noble Finances
        </span>
        <div className="flex items-center gap-6">
          <span
            className="hidden md:block text-xs tracking-widest uppercase cursor-pointer hover:opacity-70 transition-opacity"
            style={{ color: "#2d3d1e", letterSpacing: "0.14em" }}
          >
            Services
          </span>
          <button
            className="px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundColor: "#2d3d1e",
              color: "#c8d8b0",
              letterSpacing: "0.12em",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              cusror: "pointer",
            }}
          >
            Book an appointment
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between flex-1 px-6 md:px-16 lg:px-24 pt-8 md:pt-0 pb-16 md:pb-0 gap-8 md:gap-0 min-h-[calc(100vh-80px)]">
        {/* Left Text */}
        <div className="flex-1 max-w-lg">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{
              color: "#1e2d10",
              fontFamily: "'Georgia', serif",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            Financial
            <br />
            Clarity
            <br />
            You Can
            <br />
            Trust
          </h1>

          <p
            className="text-sm md:text-base mb-8 leading-relaxed"
            style={{
              color: "#3a4d28",
              maxWidth: "320px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s",
            }}
          >
            Trusted financial guidance for every stage of life and business since 1987
          </p>

          <button
            className="px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#2d3d1e",
              color: "#c8d8b0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              letterSpacing: "0.06em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.9s ease 0.65s, transform 0.9s ease 0.65s, scale 0.3s, filter 0.3s",
              cursor: "pointer",
            }}
          >
            Connect with our experts
          </button>
        </div>

        {/* Globe Canvas */}
        <div
          className="flex-1 flex justify-center md:justify-end items-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1) translateX(0)" : "scale(0.8) translateX(40px)",
            transition: "opacity 1.1s ease 0.3s, transform 1.1s ease 0.3s",
          }}
        >
          <div className="relative" style={{ width: "min(420px, 88vw)", height: "min(420px, 88vw)" }}>
            {/* Subtle shadow beneath */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "65%",
                height: "18px",
                background: "radial-gradient(ellipse, rgba(30,50,15,0.28) 0%, transparent 80%)",
                filter: "blur(6px)",
                bottom: "-10px",
              }}
            />
            <canvas
              ref={canvasRef}
              width={420}
              height={420}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom subtle border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(45,61,30,0.3), transparent)" }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        canvas {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}