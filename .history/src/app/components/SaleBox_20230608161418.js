export default function SaleBox() {
  return (
    <div className="flex flex-col justify-center items-center h-[180px] bg-red-500 text-white w-screen m">
      <h1 className=" text-2xl"> Up to 50% off | Summer Sale</h1>
      <p className=" text-xl">
        Find that something special you’ve had your eye on for a minute…
      </p>
      <div className="gap-4 flex">
        <button className="bg-black text-white px-4 py-2 text-center  w-44 text-sm">
          SHOP WOMEN'S
        </button>
        <button className="bg-black text-white px-4 py-2  text-center w-44 text-sm">
          SHOP MEN'S
        </button>
      </div>
    </div>
  );
}
