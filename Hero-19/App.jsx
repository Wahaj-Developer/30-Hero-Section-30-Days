import React, { useEffect, useState } from 'react';

const Hero5 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden flex items-center justify-center relative">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="inline-block mb-6 px-6 py-2 border border-blue-400/50 rounded-full bg-blue-500/10">
              <span className="text-blue-300 font-semibold text-sm">🚀 Technology Forward</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Deploy Faster Than <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">Ever</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade deployment platform with zero downtime. Built for teams that move fast.
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-16 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-blue-600/50">
              Get Started Free
            </button>
            <button className="px-10 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Features grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Deploy in seconds with zero configuration</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Enterprise Secure</h3>
            <p className="text-gray-400">Bank-level encryption and compliance</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Real-time Analytics</h3>
            <p className="text-gray-400">Monitor everything with detailed insights</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
