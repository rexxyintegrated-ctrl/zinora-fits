import { client } from "@/lib/sanity";

async function getProduct(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      price
    }`,
    { slug },
  );
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return (
    <main className="px-8 py-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-neutral-900 h-[500px]"></div>

        <div>
          <h1 className="text-4xl font-serif mb-6">{product.name}</h1>

          <p className="text-2xl text-[#B8963D] mb-8">
            ₦{product.price.toLocaleString()}
          </p>

          <button className="px-10 py-3 border border-[#B8963D] text-[#B8963D] hover:bg-[#B8963D] hover:text-black transition duration-300 tracking-wider">
            ADD TO CART
          </button>
        </div>
      </div>
    </main>
  );
}
