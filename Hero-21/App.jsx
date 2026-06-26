import React, { useEffect, useState } from 'react';

const Hero6 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-white overflow-hidden flex items-center justify-center relative">
      {/* Artistic background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-screen h-screen max-w-screen-xl">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,200 600,400 T1200,400 L1200,0 L0,0 Z" fill="url(#grad1)" />
          <path d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z" fill="url(#grad1)" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-orange-600 font-bold text-lg mb-4">CREATIVE AGENCY</h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Create <br /> Extraordinary <br /> Experiences
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We design and build beautiful digital products that captivate audiences and drive real results for your business.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Award Winning Design</h3>
                  <p className="text-slate-600">Recognized globally for innovation and creativity</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Proven Track Record</h3>
                  <p className="text-slate-600">200+ successful projects delivered</p>
                </div>
              </div>
            </div>

            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Your Project
            </button>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"></div>
                <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg mt-8"></div>
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg mt-8"></div>
                <div className="h-48 bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
