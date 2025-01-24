import { createContext, useState, useEffect } from "react";
import axios from "../utils/Axios";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // function getProducts() {
  //   try {
  //     axios.get("/products").then((response) => {
  //       setProducts(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // console.log(products);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
