export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center px-24">
        <div className=" border-b-2 border-black h-28 flex justify-between items-center sticky t-0 l-0 w-full mb-6">
          <ul className=" flex justify-between w-60">
            <li>
              <a href="/womens" className=" font-bold hover:underline">
                Womens
              </a>
            </li>
            <li>
              <a href="/mens" className=" font-bold hover:underline">
                Mens
              </a>
            </li>
            <li>
              <a href="/sale" className=" font-bold hover:underline">
                Sale
              </a>
            </li>
          </ul>

          <div>
            <a className=" text-6xl font-black" href="/">
              STIL
            </a>
          </div>

          <ul className="flex justify-between w-60">
            <li>
              <a href="/join" className=" font-bold hover:underline">
                Join
              </a>
            </li>
            <li>
              <a href="/login" className=" font-bold hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/cart" className=" font-bold hover:underline">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
