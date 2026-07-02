export default function Hero4() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400">Hello, I'm</p>

          <h1 className="text-6xl font-bold mt-4">
            Front-End
            <span className="block text-zinc-400">
              Developer
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-lg">
            I build responsive websites and modern web experiences using React,
            Tailwind CSS, and JavaScript.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-cyan-500 px-6 py-3 rounded-xl">
              Hire Me
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-xl">
              My Work
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-[2px]" />
        </div>
      </div>
    </section>
  );
}