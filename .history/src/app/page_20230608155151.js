"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import SaleBox from "./components/SaleBox";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Navbar />
      <SaleBox />
    </div>
  );
}
