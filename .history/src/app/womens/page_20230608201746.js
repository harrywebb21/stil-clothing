import Navbar from "../components/Navbar";
import ProductCard from "../components/products/ProductCard";

export default function Page({ products }) {
  return (
    <div className="flex justify-center items-center px-24">
      <Navbar />
      <div>
        <ProductCard />
      </div>
    </div>
  );
}
