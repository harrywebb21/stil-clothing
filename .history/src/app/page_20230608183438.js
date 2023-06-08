"use client";
import Image from "next/image";
import AfterSun from "./components/AfterSun";
import FestivalSleaze from "./components/FestivalSleaze";
import Navbar from "./components/Navbar";
import SaleBox from "./components/SaleBox";
import SwimwearSeason from "./components/SwimwearSeason";
import TshirtPrinting from "./components/TshirtPrinting";
import Responsibility from "./components/Responsibility";
import FindStore from "./components/FindStore";

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
        <div className=" flex gap-10">
          <Responsibility />
          <FindStore />
        </div>
      </div>
      <footer>
        <div className=" flex flex-col justify-center items-center h-96 w-screen bg-neutral-300 text-white gap-10 p-10">
          <h1 className=" text-4xl font-black"> Up to 50% off | Summer Sale</h1>
        </div>
      </footer>
    </div>
  );
}
