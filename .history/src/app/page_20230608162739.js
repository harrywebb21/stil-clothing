"use client";
import Image from "next/image";
import AfterSun from "./components/AfterSun";
import Navbar from "./components/Navbar";
import SaleBox from "./components/SaleBox";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" px-20">
        <SaleBox />
        <AfterSun />
      </div>
    </div>
  );
}
