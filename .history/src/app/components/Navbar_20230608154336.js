export default function Navbar() {
  return (
    <div className=" border border-red-500 h-24">
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
    </div>
  );
}
