import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function EcommerceHero3() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              🚀 New Arrival
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              Future Of
              <span className="block text-blue-600">
                Smart Devices
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Discover cutting-edge gadgets designed to simplify your life,
              improve productivity, and elevate your everyday experience.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl hover:scale-105 transition">
                Shop Now
              </button>

              <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition">
                Explore Products
              </button>
            </div>

            <div className="flex gap-10 mt-12 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">50K+</h3>
                <p className="text-slate-500">Orders Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">2K+</h3>
                <p className="text-slate-500">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">24/7</h3>
                <p className="text-slate-500">Support</p>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative flex justify-center">

            {/* Background Circle */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-200/50 blur-3xl"></div>

            {/* Main Card */}
            <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[40px] p-8 w-full max-w-md">

              <div className="flex justify-center">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-[140px]">🎧</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-bold text-slate-900">
                  Wireless Pro
                </h3>

                <p className="text-slate-500 mt-2">
                  Premium sound quality with active noise cancellation.
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-4xl font-bold text-blue-600">
                    $199
                  </span>

                  <button className="px-6 py-3 rounded-xl bg-slate-900 text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute top-10 -left-4 bg-white rounded-2xl shadow-lg p-4">
              <p className="text-sm text-slate-500">Customer Rating</p>
              <h4 className="font-bold text-slate-900">⭐ 4.9/5</h4>
            </div>

            {/* Floating Discount Card */}
            <div className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-lg p-4">
              <p className="text-sm text-slate-500">Special Offer</p>
              <h4 className="font-bold text-blue-600">Save 30%</h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}