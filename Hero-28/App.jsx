export default function EcommerceHero2() {
  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              ✨ Summer Collection 2026
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Elevate
              <span className="block">
                Your Style
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Discover premium fashion pieces crafted for comfort,
              elegance, and modern living.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:-translate-y-1 transition-all duration-300">
                Shop Collection
              </button>

              <button className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                View Lookbook
              </button>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">15K+</h3>
                <p className="text-gray-500">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">700+</h3>
                <p className="text-gray-500">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
                <p className="text-gray-500">Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            
            {/* Background Shape */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100 to-orange-50"></div>

            {/* Product Image */}
            <div className="relative z-10 w-[320px] md:w-[420px] h-[500px] rounded-[40px] bg-white shadow-2xl border border-gray-100 overflow-hidden">
              
              <div className="h-full bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
                <span className="text-[180px]">👜</span>
              </div>

            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-16 -left-4 bg-white shadow-lg rounded-2xl p-4 z-20">
              <p className="text-sm text-gray-500">Limited Offer</p>
              <h4 className="font-bold text-gray-900">40% OFF</h4>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-16 -right-4 bg-white shadow-lg rounded-2xl p-4 z-20">
              <p className="text-sm text-gray-500">Free Shipping</p>
              <h4 className="font-bold text-gray-900">Worldwide</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}