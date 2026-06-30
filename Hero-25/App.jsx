import React, { useEffect, useState } from 'react';

const Hero10 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Analytics', icon: '📈' },
    { label: 'Reports', icon: '📋' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden flex items-center justify-center relative">
      {/* Soft gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-200 to-transparent rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-transparent rounded-full opacity-30 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-700 font-semibold text-sm">🎯 Business Intelligence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Make Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Decisions</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Transform your raw data into actionable insights with our powerful analytics platform. Real-time dashboards, predictive analytics, and more.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div>
                <p className="text-4xl font-black text-blue-600 mb-1">98%</p>
                <p className="text-slate-600 text-sm">Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-black text-purple-600 mb-1">10s</p>
                <p className="text-slate-600 text-sm">Fast Query</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-600 mb-1">∞</p>
                <p className="text-slate-600 text-sm">Scalable</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300 transform hover:scale-105">
                Try Free for 14 Days
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
              {/* Tab navigation */}
              <div className="flex border-b border-blue-100">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-4 font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-b-2 border-current'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Chart visualization */}
                  <div className="flex items-end justify-around h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    {[40, 60, 45, 75, 55, 85, 65].map((height, idx) => (
                      <div
                        key={idx}
                        className="w-8 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-blue-50">
                      <p className="text-slate-600 text-sm font-semibold mb-1">Revenue</p>
                      <p className="text-2xl font-black text-blue-600">$124.5K</p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple-50">
                      <p className="text-slate-600 text-sm font-semibold mb-1">Growth</p>
                      <p className="text-2xl font-black text-purple-600">+23.8%</p>
                    </div>
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

export default Hero10;
