export default function Navbar() {
  return (
    <div>
      <ul className=" flex justify-between w-48">
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
