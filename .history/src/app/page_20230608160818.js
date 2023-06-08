"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import SaleBox from "./components/SaleBox";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center p-16">
        <SaleBox />
      </div>
    </div>
  );
}
