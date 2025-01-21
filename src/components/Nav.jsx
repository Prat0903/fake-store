function Nav() {
  return (
    <nav className="w-1/5 h-full bg-zinc-100 flex flex-col items-center pt-4">
      <a
        className="py-2 px-3 border rounded-md text-blue-500 border-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-4/5 my-3" />
      <h1 className="text-lg mb-2 w-[75%]">Category Filter</h1>
      <ul className="w-[75%]">
        <li className="flex items-center mb-2">
          <span className="w-[10px] h-[10px] rounded-full mr-2 bg-blue-300"></span>
          Cat 1
        </li>
        <li className="flex items-center mb-2">
          <span className="w-[10px] h-[10px] rounded-full mr-2 bg-teal-300"></span>
          Cat 2
        </li>
        <li className="flex items-center mb-2">
          <span className="w-[10px] h-[10px] rounded-full mr-2 bg-indigo-300"></span>
          Cat 3
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
