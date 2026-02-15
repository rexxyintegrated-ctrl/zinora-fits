import ProductCard from "@/components/ProductCard";

export default function Shop() {
  return (
    <main className="px-8 py-20">

      <h1 className="text-4xl font-serif mb-12">
        Shop Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        <ProductCard name="Adire Luxe Set" price="₦85,000" />
        <ProductCard name="Emerald Ankara Dress" price="₦72,000" />
        <ProductCard name="Midnight Agbada" price="₦120,000" />
      </div>

    </main>
  );
}
