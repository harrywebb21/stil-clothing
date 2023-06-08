export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-96 w-screen bg-neutral-200 text-black gap-5 p-5">
      <div className=" flex flex-col gap-6">
        <h1 className=" text-4xl font-black">JOIN THE COMMUNITY</h1>
        <p className=" text-xl">
          Sign up and get 10% off your first order and style updates from our
          friends
        </p>
        <button className=" bg-transparent border border-black text-black px-4 py-4 text-center w-56 text-sm hover:bg-black hover:text-white">
          {" "}
          SIGN UP
        </button>
      </div>
        <div className=" flex flex-col gap-6">
            <ul>
                <li className=" font-bold">STIL</li>
                <li>Store locator</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Our responsibility</li>
                <li>Affiliate</li>
                <li>Student discount</li>
            </ul>
    </div>
  );
}
