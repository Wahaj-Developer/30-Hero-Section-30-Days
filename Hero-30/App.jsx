import { useState } from 'react'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <h2 className="text-2xl font-bold text-zinc-900">
            LUXE
          </h2>

          <div className="hidden md:flex gap-8 text-zinc-600">
            <a href="/">Shop</a>
            <a href="/">Collection</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>

          <button className="px-5 py-2 bg-black text-white rounded-full">
            Sign In
          </button>
        </nav>

        {/* Hero Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Small Card */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-[32px] shadow-sm">
              <span className="text-sm text-zinc-500">
                New Arrival
              </span>

              <h3 className="text-2xl font-bold mt-3">
                Summer
                Collection
              </h3>

              <p className="text-zinc-500 mt-3">
                Carefully crafted products for everyday elegance.
              </p>

              <button className="mt-6 text-sm font-semibold">
                Explore →
              </button>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 text-center">

            <span className="uppercase tracking-[8px] text-zinc-500 text-sm">
              Premium Lifestyle
            </span>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 mt-6 leading-none">
              WEAR
              <br />
              CONFIDENCE
            </h1>

            <p className="max-w-md mx-auto text-zinc-600 mt-8">
              Discover timeless fashion designed to inspire confidence
              and elevate your everyday style.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button className="px-8 py-4 bg-black text-white rounded-full">
                Shop Now
              </button>

              <button className="px-8 py-4 border border-zinc-300 rounded-full">
                View Collection
              </button>
            </div>
          </div>

          {/* Right Product Showcase */}
          <div className="lg:col-span-3">
            <div className="relative">

              <div className="bg-[#ece6de] rounded-[40px] h-[420px] flex items-center justify-center">
                <span className="text-[180px]">
                  👗
                </span>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white rounded-3xl p-4 shadow-lg">
                <p className="text-xs text-zinc-500">
                  Best Seller
                </p>
                <h4 className="font-bold">
                  10K+ Sold
                </h4>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white rounded-3xl p-6">
            <h3 className="text-3xl font-bold">15K+</h3>
            <p className="text-zinc-500">Happy Customers</p>
          </div>

          <div className="bg-white rounded-3xl p-6">
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-zinc-500">Premium Products</p>
          </div>

          <div className="bg-white rounded-3xl p-6">
            <h3 className="text-3xl font-bold">4.9★</h3>
            <p className="text-zinc-500">Average Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
}