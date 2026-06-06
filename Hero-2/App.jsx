import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const FloatingShape = ({ className, style }) => (
  <div className={`absolute pointer-events-none ${className}`} style={style} />
);

export default function EnverLanding() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroRef, heroInView] = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", handleScroll); };
  }, []);

  const navLinks = ["Home", "Services", "Our Project", "About us"];

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #12122b 40%, #0f0f20 100%)",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Clash+Display:wght@600;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(12px) rotate(-3deg); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes navSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawCircle {
          from { stroke-dashoffset: 283; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(99,87,255,0.3), 0 0 40px rgba(99,87,255,0.1); }
          50%       { box-shadow: 0 0 40px rgba(99,87,255,0.6), 0 0 80px rgba(99,87,255,0.2); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }

        .hero-title span {
          display: inline-block;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-title.loaded span:nth-child(1) { opacity: 1; transform: none; transition-delay: 0.3s; }
        .hero-title.loaded span:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.5s; }
        .hero-title.loaded span:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.7s; }

        .nav-animate { animation: navSlide 0.6s ease forwards; }
        .hero-desc  { animation: fadeUp 0.8s ease 0.9s both; }
        .hero-btn   { animation: fadeUp 0.8s ease 1.1s both; }
        .hero-img   { animation: slideRight 1s ease 0.5s both; }
        .hero-ornament { animation: fadeIn 1.2s ease 1.5s both; }

        .btn-glow {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: glowPulse 3s ease-in-out infinite;
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .btn-glow:hover::before { transform: translateX(100%); }
        .btn-glow:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(99,87,255,0.5); }

        .nav-link {
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: #6357ff;
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #a89fff; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,87,255,0.3);
        }

        .image-frame {
          animation: float 5s ease-in-out infinite;
        }
        .deco-shape-1 { animation: floatReverse 4s ease-in-out infinite; }
        .deco-shape-2 { animation: float 6s ease-in-out infinite 1s; }
        .deco-circle  { animation: rotateSlow 12s linear infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #a89fff 60%, #6357ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mesh-bg {
          background-image: radial-gradient(ellipse at 20% 50%, rgba(99,87,255,0.15) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 40%),
                            radial-gradient(ellipse at 60% 80%, rgba(59,130,246,0.08) 0%, transparent 40%);
        }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        .img-card-glow {
          box-shadow: -6px 6px 0 0 #6357ff, 0 20px 60px rgba(0,0,0,0.5);
          animation: glowPulse 4s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.8rem !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.2rem !important; }
        }
      `}</style>

      {/* Background layers */}
      <div className="fixed inset-0 mesh-bg pointer-events-none" />
      <div className="fixed inset-0 dot-grid pointer-events-none opacity-50" />
      <div className="fixed inset-0 noise-overlay pointer-events-none" />

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        } ${loaded ? "nav-animate" : "opacity-0"}`}
        style={{
          background: scrolled
            ? "rgba(13,13,26,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(99,87,255,0.15)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6357ff, #a89fff)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="white" />
                <path d="M8 2 L8 5 M8 11 L8 14 M2 8 L5 8 M11 8 L14 8"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Enver
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`nav-link text-sm font-medium ${
                  i === 0 ? "text-white" : "text-gray-400"
                }`}
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              className="hidden md:block px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6357ff, #8b5cf6)",
                boxShadow: "0 4px 15px rgba(99,87,255,0.3)",
              }}
            >
              Contact us
            </button>
            {/* Hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "rgba(13,13,26,0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-gray-300 hover:text-white text-sm font-medium">
                {link}
              </a>
            ))}
            <button
              className="mt-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium w-full"
              style={{ background: "linear-gradient(135deg, #6357ff, #8b5cf6)" }}
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #6357ff 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            {/* ── LEFT CONTENT ── */}
            <div className="flex-1 z-10">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${
                  loaded ? "hero-desc" : "opacity-0"
                }`}
                style={{
                  background: "rgba(99,87,255,0.1)",
                  borderColor: "rgba(99,87,255,0.3)",
                  animationDelay: "0.2s",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 text-xs font-medium tracking-wider uppercase">
                  Digital Studio
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`hero-title font-bold leading-tight mb-6 ${loaded ? "loaded" : ""}`}
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontFamily: "'Clash Display', 'DM Sans', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                <span className="text-white block">Build Your</span>
                <span className="gradient-text block">Awesome</span>
                <span className="text-white block">Platform</span>
              </h1>

              {/* Description */}
              <p
                className={`text-gray-400 text-base leading-relaxed mb-8 max-w-md hero-desc ${
                  loaded ? "" : "opacity-0"
                }`}
                style={{ animationDelay: "0.9s" }}
              >
                Enver studio is a digital studio that offers several services such as UI/UX
                Design to developers. We provide the best service for those of you who use
                our services.
              </p>

              {/* CTA Button */}
              <div
                className={`flex items-center gap-4 hero-btn ${loaded ? "" : "opacity-0"}`}
                style={{ animationDelay: "1.1s" }}
              >
                <button
                  className="btn-glow px-7 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #6357ff 0%, #8b5cf6 100%)",
                  }}
                >
                  Our Services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7h12M7 1l6 6-6 6"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium group">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-purple-400 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M1 1l10 6-10 6V1z" fill="white" />
                    </svg>
                  </div>
                  Watch Demo
                </button>
              </div>

              {/* Stats row */}
              <div
                className={`mt-10 flex gap-8 hero-ornament ${loaded ? "" : "opacity-0"}`}
                style={{ animationDelay: "1.5s" }}
              >
                {[
                  { val: "5K+", label: "Clients" },
                  { val: "98%", label: "Satisfaction" },
                  { val: "10+", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl font-bold gradient-text"
                      style={{ fontFamily: "'Clash Display', sans-serif" }}
                    >
                      {stat.val}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT IMAGE ── */}
            <div className="flex-1 flex justify-center lg:justify-end relative hero-img">
              {/* Decorative squiggles / symbols */}
              <div
                className="absolute top-10 left-10 deco-shape-1 text-white/30 select-none"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                ∿∿∿
              </div>
              <div
                className="absolute bottom-16 left-0 deco-shape-2 text-white/20 select-none"
                style={{ fontSize: "1.8rem" }}
              >
                ▷
              </div>
              <div
                className="absolute top-4 right-0 text-white/20 hero-ornament deco-circle select-none"
                style={{ fontSize: "2rem", animationDelay: "1.5s" }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20" cy="20" r="18"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="10 4"
                  />
                </svg>
              </div>
              <div
                className="absolute bottom-8 right-4 text-white/25 hero-ornament select-none"
                style={{ animationDelay: "1.7s", fontSize: "1.5rem" }}
              >
                +
              </div>

              {/* Main image card */}
              <div
                className="image-frame relative"
                style={{ marginTop: "2rem" }}
              >
                {/* Purple glow square behind */}
                <div
                  className="absolute inset-2 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #6357ff 0%, #8b5cf6 100%)",
                    transform: "rotate(-3deg)",
                    zIndex: 0,
                  }}
                />

                {/* Card border */}
                <div
                  className="relative rounded-3xl overflow-hidden img-card-glow"
                  style={{
                    width: "clamp(260px, 35vw, 420px)",
                    height: "clamp(300px, 42vw, 480px)",
                    border: "2px solid rgba(255,255,255,0.15)",
                    background: "rgba(30,30,50,0.6)",
                    backdropFilter: "blur(10px)",
                    zIndex: 1,
                  }}
                >
                  {/* Placeholder image area styled to match the design */}
                  <div
                    className="absolute inset-0 flex items-end justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(99,87,255,0.2) 0%, rgba(13,13,26,0.8) 100%)",
                    }}
                  >
                    {/* Stylised person silhouette */}
                    <svg
                      viewBox="0 0 300 400"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                      style={{ position: "absolute", bottom: 0 }}
                    >
                      {/* Body glow */}
                      <ellipse cx="150" cy="350" rx="80" ry="20" fill="rgba(99,87,255,0.3)" />
                      {/* Torso */}
                      <rect x="90" y="200" width="120" height="160" rx="20"
                        fill="rgba(210,120,30,0.85)" />
                      {/* Head */}
                      <circle cx="150" cy="160" r="55" fill="rgba(210,160,100,0.9)" />
                      {/* Eyes / face */}
                      <circle cx="135" cy="155" r="6" fill="#333" />
                      <circle cx="165" cy="155" r="6" fill="#333" />
                      <path d="M138 175 Q150 185 162 175" stroke="#333" strokeWidth="2.5"
                        fill="none" strokeLinecap="round" />
                      {/* Arm pointing */}
                      <path d="M210 230 Q260 200 280 170" stroke="rgba(210,120,30,0.85)"
                        strokeWidth="28" strokeLinecap="round" fill="none" />
                      {/* Finger */}
                      <circle cx="282" cy="168" r="10" fill="rgba(210,160,100,0.9)" />
                    </svg>
                  </div>

                  {/* Inner frame lines */}
                  <div
                    className="absolute inset-4 rounded-2xl pointer-events-none"
                    style={{ border: "1.5px solid rgba(255,255,255,0.1)" }}
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -left-8 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 hero-ornament"
                  style={{
                    background: "rgba(20,20,40,0.9)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(99,87,255,0.4)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                    animationDelay: "1.8s",
                    zIndex: 2,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#6357ff,#a89fff)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                      <rect x="8" y="1" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                      <rect x="1" y="8" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                      <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">UI/UX Design</div>
                    <div className="text-purple-300 text-xs">Excellence</div>
                  </div>
                </div>

                {/* Top-right badge */}
                <div
                  className="absolute -top-4 -right-4 px-3 py-2 rounded-xl hero-ornament"
                  style={{
                    background: "rgba(99,87,255,0.9)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 20px rgba(99,87,255,0.5)",
                    animationDelay: "2s",
                    zIndex: 2,
                  }}
                >
                  <div className="text-white text-xs font-semibold">⭐ 4.9 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(13,13,26,0.8) 0%, transparent 100%)",
          }}
        />
      </section>

    </div>
  );
}
