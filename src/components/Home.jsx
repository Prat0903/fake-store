import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  async function getProductsCategory() {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category != "undefined") {
      // getProductsCategory();
      setFilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-4/5 h-full flex flex-wrap overflow-x-hidden overflow-y-auto pt-[5%]">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <Link
              key={index}
              to={`/details/${product.id}`}
              className="card p-3 mx-3 my-3 border shadow rounded w-[18%] h-[35vh] flex flex-col items-center"
            >
              <div
                className="w-full h-[85%] bg-contain bg-no-repeat bg-center hover:scale-110 mb-3"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <h1 className="text-sm font-medium hover:text-sky-500">
                {product.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
