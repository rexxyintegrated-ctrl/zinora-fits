export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide">
          ZINORA FITS
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Affordable Luxury African Fashion for the Modern Global Icon.
        </p>

        <button className="mt-10 px-8 py-3 border border-[#B8963D] text-[#B8963D] hover:bg-[#B8963D] hover:text-black transition duration-300">
          SHOP COLLECTION
        </button>
      </section>
    </main>
  );
}

