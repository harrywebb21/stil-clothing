import ProductCard from "./ProductCard";

export default function ProductLayout({ products }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-24 mb-6">
        <div className="flex justify-center items-center px-24">
          <div className=" grid grid-flow-row-dense grid-cols-1 md:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCard key={product} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
