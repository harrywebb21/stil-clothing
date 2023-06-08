"use client";
import Image from "next/image";
import AfterSun from "./components/AfterSun";
import FestivalSleaze from "./components/FestivalSleaze";
import Navbar from "./components/Navbar";
import SaleBox from "./components/SaleBox";
import SwimwearSeason from "./components/SwimwearSeason";
import TshirtPrinting from "./components/TshirtPrinting";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center px-24 gap-10">
        <SaleBox />
        <AfterSun />
        <FestivalSleaze />
        <SwimwearSeason />
        <TshirtPrinting />
      </div>
    </div>
  );
}
