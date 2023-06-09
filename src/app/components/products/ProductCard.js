"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ source, price, name, altSource, sale }) {
  return (
    <Link
      href="/product-page"
      className="flex flex-col text-white gap-5 p-5 border border-black w-fit"
    >
      <div className=" relative">
        <Image className="" width={250} height={300} src={source} alt={name} />

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
      <div className=" text-black text-left">
        <div className="flex items-center gap-3">
          {sale ? (
            <p className=" text-sm font-black line-through">${price}</p>
          ) : (
            <p className=" font-black ">${price}</p>
          )}
          {sale ? <p className="  font-bold text-red-500">${sale}</p> : null}
        </div>
        <h1 className="text-sm font-semibold">{name}</h1>
      </div>
    </Link>
  );
}
