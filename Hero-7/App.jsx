import { useEffect, useState } from "react";

const words = ["BOLD.", "BRAVE.", "BUILT."];

export default function Hero2() {
  const [loaded, setLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFlipping(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        background: "#f0ebe3",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* Top bar */}
      <div
        className="flex justify-between items-center px-4 sm:px-8 pt-4 sm:pt-8 transition-all duration-700"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-stone-800">STUDIO.07</span>
        <div className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest text-stone-500">
          <span className="hover:text-stone-800 cursor-pointer transition-colors">WORK</span>
          <span className="hover:text-stone-800 cursor-pointer transition-colors">ABOUT</span>
          <span className="hover:text-stone-800 cursor-pointer transition-colors">CONTACT</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 py-8">
        {/* Huge number */}
        <div
          className="text-[clamp(4rem,20vw,22rem)] font-black leading-none text-stone-200 select-none mb-[-1rem] sm:mb-[-2rem] md:mb-[-4rem] transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-60px)",
            transitionDelay: "0.1s",
          }}
        >
          07
        </div>

        {/* Title block */}
        <div className="relative z-10">
          <div
            className="overflow-hidden transition-all duration-800"
            style={{
              opacity: loaded ? 1 : 0,
              transitionDelay: "0.2s",
            }}
          >
            <h1
              className="text-[clamp(2.5rem,10vw,9rem)] font-black leading-none text-stone-900 tracking-tighter"
              style={{
                transform: loaded ? "translateY(0)" : "translateY(100%)",
                transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              DESIGN
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            <div
              className="overflow-hidden transition-all duration-800"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.35s" }}
            >
              <h1
                className="text-[clamp(2.5rem,10vw,9rem)] font-black leading-none text-stone-900 tracking-tighter"
                style={{
                  transform: loaded ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s",
                }}
              >
                THAT'S
              </h1>
            </div>

            {/* Animated word */}
            <div
              className="overflow-hidden mt-2 sm:mt-0"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.5s ease 0.5s",
              }}
            >
              <div
                className="text-[clamp(2.5rem,10vw,9rem)] font-black leading-none tracking-tighter px-2 sm:px-4 inline-block w-auto min-w-[180px] sm:min-w-[250px] text-center"
                style={{
                  background: "#1a1a1a",
                  color: "#f0ebe3",
                  transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
                  transition: "transform 0.3s ease",
                  transformOrigin: "bottom center",
                  perspective: "400px",
                }}
              >
                {words[wordIndex]}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 sm:mt-12 gap-6 sm:gap-8 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.7s",
          }}
        >
          <p className="text-xs sm:text-sm text-stone-500 max-w-xs leading-relaxed tracking-wide">
            We build digital products that cut through
            the noise. No fluff. Just impact.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <button
              className="group flex items-center gap-2 sm:gap-3 bg-stone-900 text-stone-100 text-xs tracking-widest px-6 sm:px-8 py-3 sm:py-4 hover:bg-stone-700 transition-colors duration-300"
            >
              START PROJECT
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>

            <div className="hidden md:flex flex-col gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-0.5 bg-stone-900 transition-all duration-300 ${i === 1 ? "w-8" : "w-4"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker - Fixed responsive version */}
      <div
        className="border-t border-stone-300 overflow-hidden py-3 transition-all duration-700 w-full"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.9s" }}
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-8 sm:gap-16 text-[10px] sm:text-xs tracking-widest text-stone-400 whitespace-nowrap"
            style={{
              animation: "ticker 15s linear infinite",
              width: "max-content",
            }}
          >
            {/* First set */}
            {["UX DESIGN", "◆", "BRANDING", "◆", "WEB DEV", "◆", "MOTION", "◆", "STRATEGY", "◆"].map((item, idx) => (
              <span key={`first-${idx}`}>{item}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {["UX DESIGN", "◆", "BRANDING", "◆", "WEB DEV", "◆", "MOTION", "◆", "STRATEGY", "◆"].map((item, idx) => (
              <span key={`second-${idx}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Ensure smooth animation on all devices */
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation: ticker"] {
            animation: none !important;
          }
        }
        
        /* Fix for mobile viewport */
        @media (max-width: 640px) {
          div[style*="animation: ticker"] {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
}