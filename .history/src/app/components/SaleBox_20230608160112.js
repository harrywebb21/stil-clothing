export default function SaleBox() {
  return (
    <div className="flex flex-col justify-center items-center w-60 bg-rose-500 text-white w-screen mt-28">
      <h1> Up to 50% off | Summer Sale</h1>
      <p>Find that something special you’ve had your eye on for a minute…</p>
      <div className="gap-4 flex">
        <button className="bg-black text-white px-4 py-2 text-center  w-44">
          SHOP WOMEN'S
        </button>
        <button className="bg-black text-white px-4 py-2  text-center w-44">
          SHOP MEN'S
        </button>
      </div>
    </div>
  );
}
