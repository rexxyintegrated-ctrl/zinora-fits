type ProductCardProps = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-neutral-900 h-80 mb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
      </div>

      <h3 className="text-lg font-serif tracking-wide">{name}</h3>
      <p className="text-gray-400 mt-1">{price}</p>
    </div>
  );
}
