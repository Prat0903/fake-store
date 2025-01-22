import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let categories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  categories = [...new Set(categories)];

  function color() {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.5)`;
  }

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
      <div className="w-[75%]">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/?category=${category}`}
            className="flex items-center mb-2"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[10px] h-[10px] rounded-full mr-2"
            ></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
