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
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <div className="flex justify-center items-center px-24">
          <Navbar />
        </div>
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
      </div>
      <Footer />
    </>
  );
}
