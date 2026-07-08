import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-wider">
          Dev<span className="text-cyan-500">Flow</span>
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-full backdrop-blur-md border transition hover:scale-110
          ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-black/10 border-black/20"
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20">

        {/* Animated Background Blur Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-[100px] animate-pulse"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-xl">

          <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
            🚀 Modern UI Experience
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight">
            Build Stunning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Digital Products
            </span>
          </h1>

          <p
            className={`mt-6 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Create modern websites with premium designs, smooth
            animations, and a beautiful user experience.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transition duration-300">
              Get Started
            </button>

            <button
              className={`px-8 py-4 rounded-xl border transition hover:scale-105
              ${
                darkMode
                  ? "border-gray-700 hover:bg-white/10"
                  : "border-gray-400 hover:bg-black/10"
              }`}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative mt-16 lg:mt-0 z-10">

          {/* Floating Card */}
          <div
            className={`w-[340px] rounded-3xl p-6 backdrop-blur-xl border
            animate-bounce
            ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-white border-gray-300 shadow-lg"
            }`}
          >
            <div className="flex justify-between items-center">

              <h2 className="font-bold text-xl">
                Dashboard Preview
              </h2>

              <span className="text-green-400">
                ● Live
              </span>
            </div>

            <div className="mt-8 space-y-4">

              <div className="h-4 bg-cyan-500 rounded-full w-full"></div>

              <div className="h-4 bg-purple-500 rounded-full w-3/4"></div>

              <div className="h-4 bg-pink-500 rounded-full w-1/2"></div>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="p-4 rounded-xl bg-cyan-500/20">
                <p className="text-sm">Users</p>
                <h1 className="font-bold text-2xl">
                  +12K
                </h1>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/20">
                <p className="text-sm">Sales</p>
                <h1 className="font-bold text-2xl">
                  +48%
                </h1>
              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
}