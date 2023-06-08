export default function Page({ products }) {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <SaleBox />
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-black">New Arrivals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
