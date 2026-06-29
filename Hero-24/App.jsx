import React, { useEffect, useState } from 'react';

const Hero9 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-screen h-screen bg-gradient-to-br from-red-600/30 via-transparent to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-screen h-screen bg-gradient-to-tl from-yellow-600/30 via-transparent to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-red-500 font-bold text-lg uppercase tracking-widest mb-4">Power & Performance</h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600">Creators</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Professional content creation tools that don't compromise on quality. Trusted by thousands of creators worldwide.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-4">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <span className="text-white font-semibold text-lg">4K & Beyond Resolution Support</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <span className="text-white font-semibold text-lg">Multi-Track Editing</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"></div>
                <span className="text-white font-semibold text-lg">AI-Powered Effects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-105 text-lg">
                Start Creating
              </button>
              <button className="px-10 py-4 border-2 border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-500/10 transition-all duration-300 text-lg">
                Watch Tutorial
              </button>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 rounded-3xl opacity-50 blur-xl"></div>
              <div className="relative bg-black rounded-3xl p-8 border border-red-500/30">
                <div className="aspect-video bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-2xl flex items-center justify-center group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-6 font-semibold">Advanced Editing Suite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
