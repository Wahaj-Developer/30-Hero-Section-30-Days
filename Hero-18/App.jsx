import React, { useEffect, useState } from 'react';

const Hero3 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative">
      {/* Interactive light follow effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 transition-all duration-300 pointer-events-none"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-cyan-400 text-lg font-bold uppercase tracking-widest mb-4">Next Generation</h2>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              The <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Future</span> is Now
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Harness the power of cutting-edge technology to transform your business and reach new heights of success.
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 flex flex-col sm:flex-row gap-4 justify-center ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 text-lg">
              Launch Now
            </button>
            <button className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-lg">
              Explore Features
            </button>
          </div>

          {/* Stats section */}
          <div
            className={`mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">10K+</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">99%</p>
              <p className="text-gray-400">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 mb-2">24/7</p>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
