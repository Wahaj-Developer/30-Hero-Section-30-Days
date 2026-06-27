import React, { useEffect, useState } from 'react';

const Hero7 = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden flex items-center justify-center relative">
      {/* Floating cards background */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/20 rounded-3xl transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-3xl transform -rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/50">
              <span className="text-purple-300 font-semibold text-sm">💎 Premium SaaS</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Your Success <br /> Starts Here
            </h1>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              All-in-one platform for modern businesses. Manage, automate, and scale your operations seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
                <p className="text-purple-300 font-bold text-2xl mb-1">1M+</p>
                <p className="text-gray-300 text-sm">Active Users</p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30">
                <p className="text-indigo-300 font-bold text-2xl mb-1">150+</p>
                <p className="text-gray-300 text-sm">Countries</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
                <p className="text-purple-300 font-bold text-2xl mb-1">99.9%</p>
                <p className="text-gray-300 text-sm">Uptime SLA</p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30">
                <p className="text-indigo-300 font-bold text-2xl mb-1">$500M</p>
                <p className="text-gray-300 text-sm">Processed</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-lg w-full sm:w-auto">
              Claim Your Free Account →
            </button>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative space-y-6">
              {/* Floating cards */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg opacity-30"></div>
                  <div>
                    <h3 className="text-white font-bold">Real-time Sync</h3>
                    <p className="text-purple-200 text-sm">Instant updates</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-indigo-600/20 border border-indigo-400/40 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 cursor-pointer ml-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-400 rounded-lg opacity-30"></div>
                  <div>
                    <h3 className="text-white font-bold">AI-Powered</h3>
                    <p className="text-indigo-200 text-sm">Smart automation</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-lg opacity-30"></div>
                  <div>
                    <h3 className="text-white font-bold">Global Scale</h3>
                    <p className="text-purple-200 text-sm">Enterprise ready</p>
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

export default Hero7;
