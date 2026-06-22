import React, { useEffect, useState } from 'react';

const Hero2 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-white overflow-hidden flex items-center justify-center relative">
      {/* Minimal geometric background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-widest text-indigo-600 font-bold">Innovation Redefined</h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Elegant <br /> Solutions for <br /> Modern Teams
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Streamline your workflow with intelligent tools designed for seamless collaboration and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 text-indigo-600 font-semibold hover:text-indigo-700 border-b-2 border-indigo-600 transition-all duration-300">
                  Watch Demo →
                </button>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl opacity-20"></div>
                  <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-20"></div>
                  <div className="h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl opacity-20"></div>
                  <div className="h-40 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
