import { useEffect, useState, useContext } from "react";
import axios from "../utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

function Details() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // async function getSingleProduct() {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
    // getSingleProduct();
  }, []);

  const productDeleteHandler = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    navigate("/");
  };

  return product ? (
    <div className="w-[75%] h-full m-auto flex p-[10%] justify-between items-center">
      <img
        className="w-[40%] h-[80%] object-contain"
        src={product.image}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-2xl">{product.title}</h1>
        <h2 className="text-zinc-500 my-3">₹{product.price}</h2>
        <h3 className="text-rose-500 mb-3">{product.category}</h3>
        <p className="mb-5">{product.description}</p>
        <Link
          to={`/edit/${product.id}`}
          className="mr-2 py-2 px-3 border rounded-md text-blue-500 border-blue-300"
        >
          Edit
        </Link>
        <button
          onClick={() => productDeleteHandler(product.id)}
          className="py-2 px-3 border rounded-md text-red-500 border-rose-300"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
