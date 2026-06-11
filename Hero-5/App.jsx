import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["PRODUCTS", "TEMPLATES", "RESOURCES"];

export default function SquarespaceHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0e08] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-14px) rotate(-2deg); }
        }
        @keyframes grain {
          0%,100% { transform: translate(0, 0); }
          10%      { transform: translate(-2%, -3%); }
          30%      { transform: translate(3%, 2%); }
          50%      { transform: translate(-1%, 4%); }
          70%      { transform: translate(2%, -2%); }
          90%      { transform: translate(-3%, 1%); }
        }

        .nav-fade   { animation: fadeIn   0.7s ease forwards; }
        .hero-slide { animation: slideRight 0.9s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-up    { animation: fadeUp   0.9s cubic-bezier(.22,1,.36,1) forwards; }
        .tablet-anim{ animation: slideLeft 1.1s cubic-bezier(.22,1,.36,1) forwards; }
        .bg-anim    { animation: scaleIn   1.2s cubic-bezier(.22,1,.36,1) forwards; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .hidden-init { opacity: 0; }

        .grain-overlay::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
          animation: grain 6s steps(1) infinite;
          pointer-events: none; z-index: 1;
        }

        .tablet-float { animation: float 5s ease-in-out infinite; }

        .btn-outline {
          position: relative; overflow: hidden;
          transition: color 0.35s, box-shadow 0.35s;
        }
        .btn-outline::before {
          content: '';
          position: absolute; inset: 0;
          background: white; transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(.22,1,.36,1);
          z-index: 0;
        }
        .btn-outline:hover::before { transform: translateX(0); }
        .btn-outline:hover { color: #1a0e08 !important; box-shadow: 0 0 0 1px white; }
        .btn-outline span { position: relative; z-index: 1; }

        .btn-solid {
          position: relative; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .btn-solid:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,255,255,0.2); }

        .nav-link {
          position: relative;
          transition: opacity 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: white;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { opacity: 0.8; }

        .italic-word {
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(90deg, #fff 0%, #d4b896 50%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }

        .wood-bg {
          background: radial-gradient(ellipse at 60% 50%, #5c2e10 0%, #2a1208 50%, #0d0604 100%);
        }

        .vignette::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%);
          z-index: 2; pointer-events: none;
        }

        /* Mobile menu */
        .mobile-menu {
          transition: max-height 0.4s cubic-bezier(.22,1,.36,1), opacity 0.4s;
          overflow: hidden;
        }
        .mobile-menu.closed { max-height: 0; opacity: 0; }
        .mobile-menu.open   { max-height: 400px; opacity: 1; }
      `}</style>

      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        } ${loaded ? "nav-fade" : "hidden-init"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="white" fillOpacity="0.12" />
                <path d="M8 14C8 10.686 10.686 8 14 8s6 2.686 6 6-2.686 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="14" cy="14" r="2.5" fill="white" />
              </svg>
              <span className="font-montserrat font-700 text-white text-sm tracking-[0.2em] font-semibold">
                SQUARESPACE
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  className="nav-link font-montserrat text-white text-xs tracking-[0.15em] font-medium"
                >
                  {l} {l !== "TEMPLATES" && <span className="ml-0.5 text-[10px]">▾</span>}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <button className="nav-link font-montserrat text-white text-xs tracking-[0.12em] font-medium">
                LOG IN
              </button>
              <button className="btn-outline font-montserrat text-white text-xs tracking-[0.15em] font-semibold px-5 py-2.5 border border-white">
                <span>GET STARTED</span>
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu md:hidden ${menuOpen ? "open" : "closed"}`}>
            <div className="pb-6 flex flex-col gap-4 border-t border-white/10 pt-4">
              {NAV_LINKS.map((l) => (
                <button key={l} className="font-montserrat text-white/80 text-sm tracking-widest text-left">
                  {l}
                </button>
              ))}
              <div className="flex gap-4 pt-2">
                <button className="font-montserrat text-white/80 text-sm tracking-widest">LOG IN</button>
                <button className="btn-outline font-montserrat text-white text-xs tracking-widest font-semibold px-4 py-2 border border-white">
                  <span>GET STARTED</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen wood-bg grain-overlay vignette flex items-center overflow-hidden"
      >
        {/* Decorative warm light blobs */}
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-30 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 80% 30%, #8B4513 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] opacity-20 pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 20% 80%, #6B3410 0%, transparent 60%)" }} />

        {/* Horizontal wood-grain lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 40px, rgba(255,200,120,0.08) 41px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-0 lg:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center w-full">

            {/* LEFT — Copy */}
            <div className="flex flex-col gap-7 lg:pr-8">
              {/* Headline */}
              <h1
                className={`font-playfair text-white leading-[1.05] hidden-init ${
                  loaded ? "hero-slide delay-300" : ""
                }`}
                style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
              >
                Designed{" "}
                <span className="italic-word font-playfair">to</span>{" "}
                Sell
              </h1>

              {/* Sub-copy */}
              <div className={`hidden-init ${loaded ? "hero-up delay-500" : ""}`}>
                <p className="font-montserrat text-white/70 text-sm lg:text-base leading-relaxed max-w-xs">
                  Get your free website trial today.
                  <br />No credit card required.
                </p>
              </div>

              {/* CTAs */}
              <div className={`flex flex-wrap items-center gap-5 hidden-init ${loaded ? "hero-up delay-600" : ""}`}>
                <button className="btn-solid font-montserrat bg-white text-[#1a0e08] text-xs tracking-[0.18em] font-bold px-8 py-4">
                  GET STARTED
                </button>
              </div>

              {/* Social proof dots */}
              <div className={`flex items-center gap-3 hidden-init ${loaded ? "hero-up delay-700" : ""}`}>
                <div className="flex -space-x-2">
                  {["#d4956a", "#c47a52", "#b86840", "#a85a30"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#1a0e08]"
                      style={{ background: c }} />
                  ))}
                </div>
                <p className="font-montserrat text-white/50 text-xs tracking-wide">
                  Trusted by millions of creators
                </p>
              </div>
            </div>

            {/* RIGHT — Tablet mockup */}
            <div
              className={`relative flex justify-center lg:justify-end items-center hidden-init ${
                loaded ? "tablet-anim delay-400" : ""
              }`}
            >
              {/* Dumbbells / background objects — abstract shapes */}
              <div className="absolute -left-8 bottom-0 w-48 lg:w-64 h-32 lg:h-40 opacity-60 pointer-events-none select-none z-0">
                <svg viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <ellipse cx="30" cy="80" rx="22" ry="22" fill="#e8e0d4" opacity="0.85" />
                  <rect x="52" y="73" width="160" height="14" rx="7" fill="#d8d0c4" opacity="0.7" />
                  <ellipse cx="232" cy="80" rx="22" ry="22" fill="#e8e0d4" opacity="0.85" />
                  <ellipse cx="30" cy="80" rx="14" ry="18" fill="#f5f0ea" opacity="0.5" />
                  <ellipse cx="232" cy="80" rx="14" ry="18" fill="#f5f0ea" opacity="0.5" />
                </svg>
              </div>

              {/* Kettlebell shape */}
              <div className="absolute right-0 top-1/3 w-20 lg:w-28 opacity-40 pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 5C38 5 28 13 28 23C28 30 32 36 38 40L30 50H70L62 40C68 36 72 30 72 23C72 13 62 5 50 5Z" fill="#d4c4b4" opacity="0.8" />
                  <ellipse cx="50" cy="90" rx="30" ry="30" fill="#cdbdad" opacity="0.8" />
                  <ellipse cx="50" cy="90" rx="20" ry="20" fill="#c4b09e" opacity="0.5" />
                </svg>
              </div>

              {/* Tablet device */}
              <div className="tablet-float relative z-10">
                {/* Device frame */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    width: "clamp(240px, 40vw, 420px)",
                    aspectRatio: "3/4",
                    background: "#1a1a1a",
                    boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 2px rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Screen */}
                  <div className="absolute inset-[3px] rounded-xl overflow-hidden bg-[#f2ebe2]">
                    {/* Mini site header */}
                    <div className="px-4 pt-4 pb-2 text-center">
                      <p className="font-montserrat text-[#1a2a4a] tracking-[0.3em] font-bold text-[clamp(8px,2vw,13px)]">
                        FOAM METHOD
                      </p>
                      <div className="flex justify-center gap-3 mt-1.5">
                        {["BOOK", "SCHEDULE", "ABOUT", "CONTACT"].map((n) => (
                          <span key={n} className="font-montserrat text-[#1a2a4a] text-[clamp(5px,1vw,8px)] tracking-widest opacity-80">
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hero image area */}
                    <div
                      className="mx-4 rounded-xl overflow-hidden relative"
                      style={{
                        height: "clamp(100px, 22vw, 200px)",
                        background: "linear-gradient(135deg, #4a7a8a 0%, #2a5a6a 40%, #1a4a5a 100%)",
                      }}
                    >
                      {/* Slatted background */}
                      <div className="absolute inset-0 flex gap-[6px] px-3 pt-3 opacity-60">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="flex-1 h-full bg-[#3a6a7a] rounded-t-sm opacity-70" />
                        ))}
                      </div>
                      {/* Large "8" shape / circle cutout */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[85%] rounded-full border-[14px] border-[#f2ebe2] opacity-90" />
                      {/* Product items on table */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1">
                        {/* Bottle */}
                        <div className="w-3 h-10 bg-[#6a8a5a] rounded-full opacity-90" />
                        {/* Bowl */}
                        <div className="w-8 h-4 bg-[#8a9a5a] rounded-full opacity-80 mb-0.5" />
                        {/* Cylinder */}
                        <div className="w-3 h-7 bg-[#2a2a2a] rounded-sm opacity-90" />
                      </div>
                    </div>

                    {/* Bottom tagline */}
                    <div className="px-4 pt-3">
                      <p className="font-playfair text-[#1a2a4a] font-bold text-[clamp(10px,2.5vw,18px)] leading-tight">
                        SOFT <em>BUT</em> STRONG
                      </p>
                      <button className="mt-2 font-montserrat text-[#1a2a4a] text-[clamp(5px,1vw,9px)] tracking-[0.2em] underline underline-offset-2">
                        LEARN MORE
                      </button>
                    </div>
                  </div>

                  {/* Reflection glare */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Glow under tablet */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full blur-2xl"
                  style={{ background: "rgba(180,100,40,0.4)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(10,5,2,0.6))" }} />

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden-init ${loaded ? "hero-up delay-800" : ""}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-montserrat text-white/30 text-[10px] tracking-[0.3em]">SCROLL</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}