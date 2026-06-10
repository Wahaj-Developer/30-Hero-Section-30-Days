import { useState, useEffect, useRef } from "react";

const NAV_LINKS_LEFT = ["Shop", "Products"];
const NAV_LINKS_RIGHT = ["Fertilizer", "Guide"];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function PlantifyHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroRef, heroVisible] = useInView(0.1);
  const [gridRef, gridVisible] = useInView(0.1);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#004F44", fontFamily: "'DM Sans', sans-serif" }}>

      {/* Fonts + keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn  { from { opacity:0; transform:scale(.93); }       to { opacity:1; transform:scale(1); } }
        @keyframes navFade  { from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float    { 0%,100% { transform:translateY(0); }  50% { transform:translateY(-9px); } }
        @keyframes dotPop   { 0%,100% { opacity:.2; transform:scale(1); } 50% { opacity:.55; transform:scale(1.5); } }

        .nav-anim   { animation: navFade  .6s  .05s both; }
        .w1 { animation: fadeUp .7s  .10s both; }
        .w2 { animation: fadeUp .7s  .28s both; }
        .w3 { animation: fadeUp .7s  .46s both; }
        .w4 { animation: fadeUp .7s  .62s both; }
        .w5 { animation: fadeUp .7s  .78s both; }
        .w6 { animation: fadeUp .7s  .93s both; }
        .c1 { animation: scaleIn .7s .35s both; }
        .c2 { animation: scaleIn .7s .55s both; }
        .c3 { animation: scaleIn .7s .75s both; }

        .nav-link { position:relative; color:rgba(255,255,255,.72); text-decoration:none; font-size:14px; letter-spacing:.04em; transition:color .3s; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:1px; background:#fff; transform:scaleX(0); transform-origin:left; transition:transform .35s; }
        .nav-link:hover { color:#fff; }
        .nav-link:hover::after { transform:scaleX(1); }

        .btn-shop { position:relative; overflow:hidden; transition:all .3s; }
        .btn-shop::before { content:''; position:absolute; inset:0; background:rgba(0,79,68,.09); transform:translateX(-100%); transition:transform .35s; }
        .btn-shop:hover::before { transform:translateX(0); }
        .btn-shop:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,.22); }

        .btn-exp .arr { display:inline-block; transition:transform .3s; }
        .btn-exp:hover { color:#fff !important; }
        .btn-exp:hover .arr { transform:translateX(6px); }

        .card-img { transition:transform .55s ease; }
        .plant-card:hover .card-img { transform:scale(1.07); }

        .dot-cell { animation: dotPop 2.8s infinite; }
        .scroll-float { animation: float 3.5s ease-in-out infinite; }

        .blob { position:fixed; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
      `}</style>

      {/* Ambient blobs */}
      <div className="blob" style={{ width:400, height:400, background:"rgba(0,100,85,.35)", top:-80, right:"8%" }} />
      <div className="blob" style={{ width:260, height:260, background:"rgba(0,90,76,.28)", bottom:"18%", left:"3%" }} />

      {/* ── NAVBAR ── */}
      <nav className="nav-anim relative z-50 flex items-center justify-between px-6 md:px-16 py-5">
        {/* Left links */}
        <div className="hidden md:flex gap-9">
          {NAV_LINKS_LEFT.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center leading-none select-none">
          <span style={{ fontSize:10, color:"rgba(255,255,255,.4)", letterSpacing:".3em" }}>✦</span>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#fff", fontWeight:700, letterSpacing:".05em" }}>Plantify</span>
          <span style={{ fontSize:10, color:"rgba(255,255,255,.4)", letterSpacing:".2em" }}>Garden</span>
        </div>

        {/* Right links + icons */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS_RIGHT.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
          <div className="flex gap-5 ml-2">
            {["🔍","👤","🛒"].map((ic, i) => (
              <button key={i} className="text-lg transition-opacity duration-200" style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,.6)", opacity:1 }}
                onMouseEnter={e => e.currentTarget.style.color="#fff"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.6)"}
              >{ic}</button>
            ))}
          </div>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-white text-2xl" style={{ background:"none", border:"none", cursor:"pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute z-40 left-0 right-0 top-16 px-8 py-6 flex flex-col gap-4"
          style={{ background:"rgba(0,50,42,.96)", backdropFilter:"blur(8px)" }}>
          {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map(l => (
            <a key={l} href="#" className="nav-link pb-3" style={{ borderBottom:"1px solid rgba(255,255,255,.1)" }}>{l}</a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 px-6 md:px-16 pt-4 pb-12"
        style={{ minHeight:"calc(100vh - 80px)" }}
      >
        {/* LEFT — Copy */}
        <div className="flex-1 max-w-lg flex flex-col">
          <div className="w1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-widest"
              style={{ background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.14)", color:"rgba(255,255,255,.7)", letterSpacing:".08em" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background:"#6ee7b7" }} />
              New arrivals available
            </div>
          </div>

          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.4rem,4.2vw,3.9rem)", lineHeight:1.12, marginBottom:22 }}>
            <span className="block text-white w2">Happiness</span>
            <span className="block text-white w3">blooms from</span>
            <span className="block w4" style={{ color:"#a7f3d0", fontStyle:"italic" }}>within</span>
          </h1>

          <p className="w5" style={{ color:"rgba(255,255,255,.52)", fontSize:15, lineHeight:1.78, maxWidth:355, marginBottom:36 }}>
            Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
          </p>

          <div className="flex items-center gap-6 flex-wrap w6">
            <button className="btn-shop px-8 py-3 rounded-full text-sm font-medium tracking-wide"
              style={{ background:"#fff", color:"#004F44", border:"none", cursor:"pointer" }}>
              Shop now
            </button>
            <button className="btn-exp flex items-center gap-2 text-sm tracking-wide"
              style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,.72)" }}>
              Explore plants <span className="arr">→</span>
            </button>
          </div>

          {/* Dot grid */}
          <div className="hidden md:grid mt-11 w6" style={{ gridTemplateColumns:"repeat(9,1fr)", gap:7, width:170, animationDelay:".98s" }}>
            {Array.from({ length: 45 }).map((_, i) => (
              <div key={i} className="dot-cell rounded-full" style={{ width:4, height:4, background:"rgba(255,255,255,.18)", animationDelay:`${(i * 0.065).toFixed(2)}s` }} />
            ))}
          </div>
        </div>

        {/* RIGHT — Cards grid */}
        <div
          ref={gridRef}
          className="flex-1 w-full max-w-xl relative"
          style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"220px 220px", gap:12 }}
        >
          {/* Subtle radial glow */}
          <div style={{ position:"absolute", inset:-60, background:"radial-gradient(ellipse at 70% 40%, rgba(110,231,183,.06) 0%, transparent 65%)", pointerEvents:"none", zIndex:0 }} />

          {/* Card 1 — New */}
          <div className={`plant-card c1 rounded-2xl overflow-hidden relative cursor-pointer`} style={{ zIndex:1 }}>
            <img src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&q=80"
              alt="Golden Pothos" className="card-img w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(0,0,0,.58) 0%,transparent 55%)" }} />
            <span className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ background:"rgba(0,63,54,.82)", letterSpacing:".06em" }}>New</span>
          </div>

          {/* Card 2 — Featured (spans 2 rows) */}
          <div className={`plant-card c2 rounded-2xl overflow-hidden relative cursor-pointer`} style={{ gridRow:"1 / span 2", zIndex:1 }}>
            <img src="https://hips.hearstapps.com/hmg-prod/images/2a41717d-11c4-4736-a413-024bf57882d5.jpg?crop=1.00xw:0.752xh;0,0.188xh&resize=640:*"
              alt="Tulips" className="card-img w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(0,0,0,.62) 0%,transparent 50%)" }} />
            <span className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ background:"rgba(0,79,68,.82)", letterSpacing:".06em" }}>Featured</span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white mb-1.5" style={{ fontFamily:"'Playfair Display',serif", fontSize:17 }}>Anthurium Flower</h3>
              <p style={{ color:"rgba(255,255,255,.58)", fontSize:12, lineHeight:1.6, marginBottom:12, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                The flower of human being. It has meaningful of fact that the plant always grow whatever season and weather...
              </p>
              <button className="w-full py-2 rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ background:"#fff", color:"#004F44", border:"none", cursor:"pointer", letterSpacing:".1em" }}
                onMouseEnter={e => e.currentTarget.style.background="#e6f4f1"}
                onMouseLeave={e => e.currentTarget.style.background="#fff"}>
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 — Popular */}
          <div className={`plant-card c3 rounded-2xl overflow-hidden relative cursor-pointer`} style={{ zIndex:1 }}>
            <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&q=80"
              alt="Cactus" className="card-img w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background:"linear-gradient(to top,rgba(0,0,0,.58) 0%,transparent 55%)" }} />
            <span className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full" style={{ background:"rgba(0,63,54,.82)", letterSpacing:".06em" }}>Popular</span>
          </div>
        </div>
      </section>

      {/* ── SCROLL INDICATOR ── */}
      <div className="flex justify-center pb-8">
        <div className="scroll-float flex flex-col items-center gap-1.5">
          <span style={{ fontSize:10, color:"rgba(255,255,255,.28)", letterSpacing:".25em", textTransform:"uppercase" }}>Scroll</span>
          <div style={{ width:1, height:36, background:"linear-gradient(to bottom,rgba(255,255,255,.28),transparent)" }} />
        </div>
      </div>
    </div>
  );
}