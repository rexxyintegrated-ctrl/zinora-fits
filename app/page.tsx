export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide">
          Crafted for Culture
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
          Affordable luxury African fashion for the modern global icon.
        </p>

        <button className="mt-10 px-10 py-3 border border-[#B8963D] text-[#B8963D] hover:bg-[#B8963D] hover:text-black transition duration-300">
          SHOP COLLECTION
        </button>
      </section>

      {/* Featured Section Placeholder */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl font-serif mb-10">Featured Collection</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 h-64"></div>
          <div className="bg-neutral-900 h-64"></div>
          <div className="bg-neutral-900 h-64"></div>
        </div>
      </section>
    </main>
  );
}
