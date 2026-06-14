import { useEffect, useState } from "react";

const tags = ["Sustainable", "Organic", "Mindful", "Natural", "Pure"];

export default function Hero4() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "#faf7f2",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* Blob shapes */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 40%, #e8d5c4 0%, #f5ede4 40%, transparent 70%)",
          filter: "blur(40px)",
          opacity: loaded ? 0.8 : 0,
          transition: "opacity 1.5s ease",
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d4e8d5 0%, transparent 70%)",
          filter: "blur(50px)",
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1.5s ease 0.3s",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Nav */}
        <nav
          className="flex justify-between items-center px-8 md:px-16 pt-10 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
        >
          <div className="text-2xl font-bold tracking-tight text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="italic text-stone-500">la</span>verdure
          </div>
          <div className="flex gap-8 text-sm text-stone-500" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            <span className="hover:text-stone-800 cursor-pointer transition-colors">Products</span>
            <span className="hover:text-stone-800 cursor-pointer transition-colors">Story</span>
            <span className="cursor-pointer bg-stone-800 text-white px-5 py-2 hover:bg-stone-600 transition-colors">Shop Now</span>
          </div>
        </nav>

        {/* Main layout */}
        <div className="flex-1 grid md:grid-cols-2 items-center px-8 md:px-16 py-16 gap-12">
          {/* Left */}
          <div>
            {/* Tags */}
            <div
              className="flex flex-wrap gap-2 mb-10 transition-all duration-700"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.2s" }}
            >
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  onMouseEnter={() => setHoveredTag(i)}
                  onMouseLeave={() => setHoveredTag(null)}
                  className="px-4 py-1.5 text-xs rounded-full border cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    borderColor: hoveredTag === i ? "#a3b899" : "#ddd5cc",
                    background: hoveredTag === i ? "#a3b899" : "transparent",
                    color: hoveredTag === i ? "white" : "#8a7e74",
                    transform: `translateY(${loaded ? 0 : 10}px)`,
                    transition: `transform 0.5s ease ${0.2 + i * 0.05}s, opacity 0.5s ease ${0.2 + i * 0.05}s, background 0.3s, color 0.3s, border-color 0.3s`,
                    opacity: loaded ? 1 : 0,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <div className="mb-8">
              {["Nourish", "Your World,", "Naturally."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <h1
                    className="text-[clamp(2.8rem,7vw,6.5rem)] font-normal leading-tight text-stone-800"
                    style={{
                      transform: loaded ? "translateY(0)" : "translateY(100%)",
                      transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.12}s`,
                      fontStyle: i === 1 ? "italic" : "normal",
                    }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              className="text-stone-500 text-lg leading-relaxed mb-10 max-w-sm transition-all duration-700"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.7s",
              }}
            >
              Handcrafted skincare rituals rooted in botanical wisdom. 
              Because your skin deserves nothing but pure earth.
            </p>

            <div
              className="flex items-center gap-6 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.85s",
              }}
            >
              <button
                className="group flex items-center gap-3 bg-stone-800 text-white px-8 py-4 hover:bg-stone-700 transition-colors duration-300"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em" }}
              >
                EXPLORE COLLECTION
                <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">↗</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#c4a882", "#b89b76", "#a68d6a"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs text-stone-500" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                  12k+ happy souls
                </span>
              </div>
            </div>
          </div>

          {/* Right - Product visual */}
          <div
            className="relative flex items-center justify-center transition-all duration-1200"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transitionDelay: "0.4s",
            }}
          >
            {/* Soft circle bg */}
            <div
              className="w-[380px] h-[380px] rounded-full"
              style={{ background: "radial-gradient(circle, #e8d5c4 0%, #f0e4d6 50%, transparent 75%)" }}
            />
            {/* Floating badge */}
            <div
              className="absolute top-8 right-8 w-24 h-24 rounded-full flex flex-col items-center justify-center border border-stone-300"
              style={{ background: "#faf7f2" }}
            >
              <span className="text-2xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>100</span>
              <span className="text-[9px] text-stone-500 tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>% NATURAL</span>
            </div>
            {/* Floating tag bottom left */}
            <div
              className="absolute bottom-12 left-4 bg-white shadow-sm px-5 py-3 rounded-full"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <span className="text-xs text-stone-600" style={{ fontFamily: "'Lato', sans-serif" }}>✦ New Season Collection</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}