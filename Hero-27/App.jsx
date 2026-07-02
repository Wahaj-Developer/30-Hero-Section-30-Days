export default function EcommerceHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              🔥 New Collection 2026
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Upgrade Your
              <span className="block text-orange-500">
                Everyday Style
              </span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg max-w-xl">
              Discover premium fashion, accessories, and essentials
              designed for comfort, quality, and modern living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:scale-105 transition">
                Shop Now
              </button>

              <button className="px-8 py-4 border border-slate-300 rounded-xl hover:bg-slate-100 transition">
                Explore Collection
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  10K+
                </h3>
                <p className="text-slate-500 text-sm">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  500+
                </h3>
                <p className="text-slate-500 text-sm">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  4.9★
                </h3>
                <p className="text-slate-500 text-sm">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">

            {/* Background Circle */}
            <div className="absolute w-96 h-96 bg-orange-100 rounded-full blur-3xl"></div>

            {/* Main Product Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md border border-slate-100">

              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <span className="text-8xl">👟</span>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Premium Sneakers
                </h3>

                <p className="text-slate-500 mt-2">
                  Lightweight design with modern comfort.
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-3xl font-bold text-orange-500">
                    $99
                  </span>

                  <button className="bg-slate-900 text-white px-5 py-3 rounded-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm text-slate-500">
                Flash Sale
              </p>
              <h4 className="font-bold text-slate-900">
                Up To 50% Off
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}