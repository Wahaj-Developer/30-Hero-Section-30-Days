import React, { useEffect, useState } from 'react';

const Hero4 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-blue-50 overflow-hidden flex items-center justify-center relative">
      {/* Organic shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-cyan-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 font-semibold text-sm">✨ Premium Experience</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Grow Your <span className="text-emerald-600">Business</span> Faster
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our innovative platform helps businesses scale at lightning speed. Join thousands of successful companies.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <span className="text-slate-700 font-semibold">Easy to use interface</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <span className="text-slate-700 font-semibold">Advanced analytics dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                <span className="text-slate-700 font-semibold">24/7 dedicated support</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial →
            </button>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-cyan-300 rounded-3xl transform -rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-20 animate-bounce"></div>
                    <p className="text-slate-400 font-semibold">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;

