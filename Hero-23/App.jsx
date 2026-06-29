import React, { useEffect, useState } from 'react';

const Hero8 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 overflow-hidden flex items-center justify-center relative">
      {/* Gradient orbs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-300 to-blue-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-cyan-600 font-bold text-lg uppercase tracking-wider">Fintech Innovation</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Money <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Moves</span> Fast
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Send, receive, and manage your finances with our cutting-edge fintech platform. Secure, fast, and built for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div
            className={`transform transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                💳
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Cards</h3>
              <p className="text-slate-600 mb-6">Virtual and physical cards with instant activation and control.</p>
              <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-700">Learn more →</a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover:border-cyan-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🌍
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Global Transfer</h3>
              <p className="text-slate-600 mb-6">Send money worldwide instantly at the best exchange rates.</p>
              <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-700">Learn more →</a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Insights</h3>
              <p className="text-slate-600 mb-6">AI-powered spending analysis and personalized recommendations.</p>
              <a href="#" className="text-cyan-600 font-semibold hover:text-cyan-700">Learn more →</a>
            </div>
          </div>
        </div>

        <div
          className={`text-center transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105 text-lg inline-block mb-4">
            Open Account in 5 Minutes
          </button>
          <p className="text-slate-600">No credit card required. Start free forever.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero8;
