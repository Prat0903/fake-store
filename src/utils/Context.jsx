import { createContext, useEffect, useState } from "react";
import axios from "./Axios";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(null);

  function getProducts() {
    try {
      // const { data } = await axios("/products");
      // setProducts(data);
      axios.get("/products").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
