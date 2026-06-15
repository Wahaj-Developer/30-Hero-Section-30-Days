import { useEffect, useState } from "react";

const features = [
  { icon: "⚡", label: "10x Faster", desc: "Blazing performance" },
  { icon: "🔒", label: "Bank-grade Security", desc: "SOC2 compliant" },
  { icon: "🤝", label: "Live Collaboration", desc: "Real-time sync" },
];

const mockRows = [
  { name: "Revenue", value: "$48,234", change: "+12.4%", up: true },
  { name: "Users", value: "12,841", change: "+8.2%", up: true },
  { name: "Churn", value: "1.2%", change: "-0.4%", up: false },
  { name: "NPS", value: "72", change: "+5pts", up: true },
];

export default function Hero5() {
  const [loaded, setLoaded] = useState(false);
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => setActiveRow(r => (r + 1) % mockRows.length), 1800);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "#0f1117",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)" }}
      />

      {/* Purple mesh glow */}
      <div
        className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-20">
        {/* Nav */}
        <div
          className="flex justify-between items-center mb-24 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.05s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Dashify</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
            {["Features", "Pricing", "Docs", "Blog"].map(item => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <button className="text-sm bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors">
            Get Started Free
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 transition-all duration-700"
              style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.15s" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs text-violet-300 font-medium">Now with AI-powered insights</span>
            </div>

            {/* Heading */}
            <div className="mb-6">
              {["Your analytics,", "finally beautiful", "& actionable."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <h1
                    className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-tight"
                    style={{
                      color: i === 1 ? "transparent" : "white",
                      background: i === 1 ? "linear-gradient(135deg, #818cf8, #c084fc)" : "none",
                      WebkitBackgroundClip: i === 1 ? "text" : "unset",
                      WebkitTextFillColor: i === 1 ? "transparent" : "unset",
                      transform: loaded ? "translateY(0)" : "translateY(100%)",
                      transition: `transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.1}s`,
                    }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-md transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.55s",
              }}
            >
              Connect your data sources in minutes. Get stunning dashboards 
              that actually help you make decisions.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.7s",
              }}
            >
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
                Start for free →
              </button>
              <button className="flex items-center justify-center gap-2 border border-white/10 text-white px-8 py-3.5 rounded-xl hover:border-white/30 transition-all">
                <span className="text-violet-400">▶</span> Watch demo
              </button>
            </div>

            {/* Features */}
            <div
              className="grid grid-cols-3 gap-4 transition-all duration-700"
              style={{
                opacity: loaded ? 1 : 0,
                transitionDelay: "0.85s",
              }}
            >
              {features.map((f, i) => (
                <div key={i} className="border border-white/5 rounded-xl p-4 hover:border-violet-500/30 transition-colors bg-white/2">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="text-white text-xs font-semibold mb-1">{f.label}</div>
                  <div className="text-white/30 text-xs">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mock dashboard */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
              transitionDelay: "0.4s",
            }}
          >
            <div
              className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60"
              style={{ background: "#161b27" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
                <div className="flex-1 mx-4 h-6 rounded bg-white/5 text-center text-xs text-white/20 flex items-center justify-center">
                  app.dashify.io/dashboard
                </div>
              </div>

              <div className="p-6">
                {/* KPI cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "MRR", val: "$48.2K", trend: "↑ 12%" },
                    { label: "Active Users", val: "12,841", trend: "↑ 8%" },
                  ].map((k, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: "#1e2436" }}>
                      <div className="text-xs text-white/40 mb-2">{k.label}</div>
                      <div className="text-2xl font-bold text-white mb-1">{k.val}</div>
                      <div className="text-xs text-emerald-400">{k.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="rounded-xl overflow-hidden" style={{ background: "#1e2436" }}>
                  <div className="grid grid-cols-3 px-4 py-2 text-[10px] text-white/30 uppercase tracking-wider border-b border-white/5">
                    <span>Metric</span><span className="text-right">Value</span><span className="text-right">Change</span>
                  </div>
                  {mockRows.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 px-4 py-3 text-sm border-b border-white/5 transition-colors duration-300"
                      style={{ background: activeRow === i ? "rgba(99,102,241,0.08)" : "transparent" }}
                    >
                      <span className="text-white/60">{row.name}</span>
                      <span className="text-right text-white font-medium">{row.value}</span>
                      <span className={`text-right text-xs font-medium ${row.up ? "text-emerald-400" : "text-rose-400"}`}>
                        {row.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}