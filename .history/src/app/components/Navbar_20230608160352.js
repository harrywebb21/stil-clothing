export default function Navbar() {
  return (
    <div className=" border border-red-500 h-28 flex justify-between items-center sticky t-0 l-0 w-screen">
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
