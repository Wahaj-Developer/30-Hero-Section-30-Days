import { useState, useEffect } from "react";

const FloatingCard = ({ children, className, delay = 0 }) => (
  <div
    className={`absolute bg-white rounded-2xl shadow-xl px-4 py-3 ${className}`}
    style={{
      animation: `floatUp 0.8s ease forwards ${delay}s, floatBob 3s ease-in-out infinite ${delay + 0.8}s`,
      opacity: 0,
    }}
  >
    {children}
  </div>
);

export default function BiccasHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }

        @keyframes underlineExpand {
          from { width: 0; }
          to   { width: 100%; }
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.6; }
        }

        .nav-link {
          position: relative;
          color: #374151;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #10b981;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #10b981; }
        .nav-link:hover::after { width: 100%; }

        .nav-link.active { color: #10b981; font-weight: 700; }
        .nav-link.active::after { width: 100%; }

        .btn-primary {
          background: #10b981;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: inherit;
        }
        .btn-primary:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(16,185,129,0.35);
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          background: transparent;
          color: #374151;
          border: 2px solid #e5e7eb;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s, color 0.2s;
          font-family: inherit;
        }
        .btn-outline:hover { border-color: #10b981; color: #10b981; }

        .signup-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 10px 22px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          font-family: inherit;
        }
        .signup-btn:hover { background: #059669; transform: scale(1.04); }

        .send-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
          font-family: inherit;
        }
        .send-btn:hover { background: #059669; }

        .hero-image-wrapper {
          animation: slideInRight 0.9s ease 0.2s both;
        }

        .hero-text-wrapper {
          animation: slideInLeft 0.9s ease 0.1s both;
        }

        .navbar-wrapper {
          animation: fadeDown 0.7s ease both;
        }

        .underline-accent {
          display: inline-block;
          position: relative;
        }
        .underline-accent::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          height: 4px;
          background: #10b981;
          border-radius: 2px;
          width: 0;
          animation: underlineExpand 0.7s ease 1s forwards;
        }

        @media (max-width: 1024px) {
          .floating-cards-area { display: none; }
          .hero-image-person { max-width: 340px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; text-align: center; }
          .hero-text-wrapper { align-items: center !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-h1 { font-size: 42px !important; }
          .hero-image-wrapper { margin-top: 40px; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 34px !important; }
          .nav-links-desktop { display: none !important; }
          .nav-auth-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <div style={{ background: "#f0fdf7", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", overflow: "hidden" }}>

        {/* NAVBAR */}
        <nav
          className="navbar-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 6%",
            position: "relative",
            zIndex: 100,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 12, height: 12, borderRadius: "50%",
              background: "#10b981",
              animation: "pulse-dot 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: 22, fontWeight: 800, color: "#10b981", letterSpacing: "-0.5px" }}>Biccas</span>
          </div>

          {/* Nav links */}
          <div className="nav-links-desktop" style={{ display: "flex", gap: 36 }}>
            {["Home", "Product", "FAQ", "Blog", "About Us"].map((item) => (
              <a key={item} href="#" className={`nav-link ${item === "Home" ? "active" : ""}`}>
                {item}
              </a>
            ))}
          </div>

          {/* Auth */}
          <div className="nav-auth-desktop" style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="#" className="nav-link">Login</a>
            <button className="signup-btn">Sign Up</button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 24, height: 2.5,
                background: "#374151", borderRadius: 2,
                transition: "transform 0.3s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" :
                           menuOpen && i === 1 ? "scaleX(0)" :
                           menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none"
              }} />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "white", padding: "20px 6%",
            display: "flex", flexDirection: "column", gap: 16,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            animation: "floatUp 0.3s ease both",
          }}>
            {["Home", "Product", "FAQ", "Blog", "About Us"].map(item => (
              <a key={item} href="#" className={`nav-link ${item === "Home" ? "active" : ""}`} style={{ fontSize: 16 }}>
                {item}
              </a>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a href="#" style={{ color: "#374151", fontWeight: 600, textDecoration: "none" }}>Login</a>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
        )}

        {/* HERO */}
        <div
          className="hero-grid"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 6% 60px",
            gap: 40,
            minHeight: "calc(100vh - 80px)",
          }}
        >
          {/* LEFT */}
          <div
            className="hero-text-wrapper"
            style={{ flex: "1 1 45%", display: "flex", flexDirection: "column", gap: 28 }}
          >
            <h1
              className="hero-h1"
              style={{
                fontSize: 58,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.15,
                letterSpacing: "-1.5px",
              }}
            >
              We're here to{" "}
              <br />
              <span className="underline-accent">Increase your</span>
              <br />
              Productivity
            </h1>

            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, maxWidth: 380 }}>
              Let's make your work more organized and easily using the Taskio Dashboard
              with many of the latest features in managing work every day.
            </p>

            <div className="hero-buttons" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <button className="btn-primary">Try free trial</button>
              <button className="btn-outline">
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 36, height: 36, borderRadius: "50%",
                  border: "2px solid #d1d5db",
                  transition: "border-color 0.2s",
                }}>
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M1 1l10 6L1 13V1z" fill="#374151"/>
                  </svg>
                </span>
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex", gap: 32, marginTop: 8,
                animation: "slideInLeft 0.8s ease 0.7s both",
                opacity: 0,
              }}
            >
              {[
                { val: "3.5K+", label: "Active Users" },
                { val: "98%", label: "Satisfaction" },
                { val: "4.9★", label: "App Rating" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#111827" }}>{val}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="hero-image-wrapper"
            style={{ flex: "1 1 55%", position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}
          >
            {/* Green BG card */}
            <div
              style={{
                position: "absolute",
                right: 0, top: -20,
                width: "75%", height: "88%",
                background: "#10b981",
                borderRadius: 32,
                zIndex: 0,
                animation: "scaleIn 0.7s ease 0.3s both",
                opacity: 0,
              }}
            >
              {/* Decorative lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 400 320">
                <polyline points="30,260 100,140 180,200 260,80 340,160 400,100" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="20,300 90,180 170,240 260,120 360,200" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4"/>
              </svg>
            </div>

            {/* Person placeholder */}
            <div
              className="hero-image-person"
              style={{
                position: "relative", zIndex: 2,
                width: 320, height: 380,
                borderRadius: 24,
                overflow: "hidden",
                background: "linear-gradient(180deg, #d1fae5 0%, #6ee7b7 100%)",
                display: "flex", alignItems: "flex-end", justifyContent: "center",
              }}
            >
              {/* Silhouette SVG */}
              <svg width="260" height="340" viewBox="0 0 260 340" fill="none" style={{ marginBottom: -2 }}>
                {/* Head */}
                <circle cx="130" cy="90" r="55" fill="#374151"/>
                {/* Glasses */}
                <rect x="100" y="88" width="26" height="16" rx="8" fill="none" stroke="#10b981" strokeWidth="3"/>
                <rect x="134" y="88" width="26" height="16" rx="8" fill="none" stroke="#10b981" strokeWidth="3"/>
                <line x1="126" y1="96" x2="134" y2="96" stroke="#10b981" strokeWidth="2.5"/>
                <line x1="96" y1="94" x2="100" y2="94" stroke="#10b981" strokeWidth="2.5"/>
                <line x1="160" y1="94" x2="165" y2="94" stroke="#10b981" strokeWidth="2.5"/>
                {/* Body / hoodie */}
                <path d="M50 340 C50 230 80 180 130 175 C180 180 210 230 210 340 Z" fill="#1f2937"/>
                <path d="M95 175 L130 195 L165 175 L155 340 L105 340 Z" fill="#374151"/>
              </svg>
            </div>

            {/* Floating cards */}
            <div className="floating-cards-area">
              {/* Send money card */}
              <FloatingCard className="floating-cards-area" delay={0.9} style={{ top: 10, left: -40, minWidth: 180 }}>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>Enter amount</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>$450.00</span>
                    <button className="send-btn" style={{ marginLeft: "auto" }}>Send</button>
                  </div>
                </div>
              </FloatingCard>

              {/* Checkmark badge */}
              <FloatingCard delay={1.1} style={{ top: 130, left: -60, padding: "10px 14px" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M1 6l5 5L15 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </FloatingCard>

              {/* Credit card */}
              <FloatingCard delay={1.3} style={{ bottom: 120, right: -30, minWidth: 160 }}>
                <div style={{
                  background: "#1f2937", borderRadius: 14, padding: "14px 16px",
                  color: "white",
                }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 20 }}>Credit Card</div>
                  <div style={{ fontSize: 12, letterSpacing: 3, color: "#d1d5db" }}>•••• •••• •••• 1234</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 10 }}>09/25</div>
                  <div style={{ position: "absolute", top: 14, right: 16, display: "flex", gap: -6 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#ef4444", opacity: 0.85 }}/>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#f97316", marginLeft: -8, opacity: 0.85 }}/>
                  </div>
                </div>
              </FloatingCard>

              {/* Income card */}
              <FloatingCard delay={1.15} style={{ bottom: 30, left: -50, minWidth: 160 }}>
                <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>Total Income</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#111827" }}>$245.00</span>
                  <svg width="24" height="20" viewBox="0 0 24 20">
                    <rect x="0" y="12" width="4" height="8" rx="1" fill="#10b981"/>
                    <rect x="6" y="7" width="4" height="13" rx="1" fill="#10b981"/>
                    <rect x="12" y="3" width="4" height="17" rx="1" fill="#10b981"/>
                    <rect x="18" y="0" width="4" height="20" rx="1" fill="#10b981"/>
                  </svg>
                </div>
              </FloatingCard>

              {/* Notification badge */}
              <FloatingCard delay={1.0} style={{ top: 20, right: -20, padding: "10px 14px" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
