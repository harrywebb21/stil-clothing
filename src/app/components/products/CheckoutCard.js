import Image from "next/image";
import Link from "next/link";

export default function CheckoutCard({
  source,
  price,
  name,
  colour,
  size,
  quantity,
  altSource,
}) {
  return (
    <Link
      href="/product-page"
      className="flex  text-white gap-5 p-8 pr-64 border border-black "
    >
      <div className=" relative">
        <Image className="" width={150} height={300} src={source} alt={name} />
        {altSource ? (
          <Image
            className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-500 ease-in-out"
            width={250}
            height={300}
            src={`${altSource}`}
            alt={name}
          />
        ) : null}
      </div>
      <div className=" text-black text-left flex flex-col gap-6">
        <h1 className="text-md font-black">{name}</h1>
        <div>
          <p className=" ">${price}</p>
        </div>
        <div>
          <p className=" ">Colour: {colour}</p>
          <p className=" ">Size: {size}</p>
          <p className=" ">Quantity: {quantity}</p>
        </div>
      </div>
    </Link>
  );
}
