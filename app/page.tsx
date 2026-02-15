export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6 relative">
        <h1 className="text-6xl md:text-8xl font-light tracking-wide">
          Zinora Fits
        </h1>

        <div className="w-24 h-[2px] bg-[#B8963D] my-6"></div>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl">
          Affordable luxury African fashion crafted for the modern global icon.
        </p>

        <button className="mt-10 px-10 py-3 border border-[#B8963D] text-[#B8963D] hover:bg-[#B8963D] hover:text-black transition duration-300 tracking-wider">
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
