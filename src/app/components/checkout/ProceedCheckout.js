import Image from "next/image";

export default function ProceedCheckout() {
  return (
    <div className="flex flex-col border justify-center gap-10 p-6 h-fit">
      <h1 className=" font-semibold">Shopping bag total</h1>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$90</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <form className="flex flex-col gap-2 border-b-2 border-black pb-6">
          <label>Discount code</label>
          <div className=" flex gap-2 ">
            <input className="border border-black"></input>
            <button className="bg-black text-white p-1 px-2">Apply</button>
          </div>
        </form>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>$90</p>
      </div>
      <button className=" bg-black text-white p-4">Checkout</button>
    </div>
  );
}
