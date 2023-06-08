export default function Navbar() {
  return (
    <div className=" border border-red-500 h-28 flex justify-between items-center sticky t-0 l-0 w-full">
      <ul className=" flex justify-between w-60">
        <li>
          <a href="/womens">Womens</a>
        </li>
        <li>
          <a href="/mens">Mens</a>
        </li>
        <li>
          <a href="/sale">Sale</a>
        </li>
        <li>
          <a href="/jeans">Jeans</a>
        </li>
      </ul>

      <div>
        <h1 className=" text-6xl font-black">STIL</h1>
      </div>

      <ul className="flex justify-between w-60">
        <li>
          <a href="/join">join</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
        <li>
          <a href="/cart">cart</a>
        </li>
      </ul>
    </div>
  );
}
