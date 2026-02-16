import { client } from "@/lib/sanity";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  return await client.fetch(`*[_type == "product"]{
    _id,
    name,
    price
  }`);
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <main className="px-8 py-20">
      <h1 className="text-4xl font-serif mb-12">Shop Collection</h1>

      <div className="grid md:grid-cols-3 gap-12">
        {products.map((product: any) => (
          <ProductCard
            key={product._id}
            name={product.name}
            price={`₦${product.price.toLocaleString()}`}
          />
        ))}
      </div>
    </main>
  );
}
