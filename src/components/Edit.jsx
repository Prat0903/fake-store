import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  const changeHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const addProductHandler = (event) => {
    event.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Every field should have atleast 4 characters");
      return;
    }

    const productIndex = products.findIndex((product) => product.id == id);
    const copyData = [...products];
    copyData[productIndex] = { ...products[productIndex], ...product };

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
  };

  return (
    <div>
      <form
        onSubmit={addProductHandler}
        className="w-screen h-screen p-[7%] flex flex-col items-center"
      >
        <h1 className="text-2xl mb-4 w-1/2">Edit Product</h1>
        <input
          type="url"
          placeholder="image link"
          className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
          name="image"
          onChange={changeHandler}
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="title"
          className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
          name="title"
          onChange={changeHandler}
          value={product && product.title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="number"
            placeholder="price"
            className="text-xl rounded-md px-2 py-1 w-[45%] mb-3 bg-zinc-100 outline-none"
            name="price"
            onChange={changeHandler}
            value={product && product.price}
          />
          <input
            type="text"
            placeholder="category"
            className="text-xl rounded-md px-2 py-1 w-[45%] mb-3 bg-zinc-100 outline-none"
            name="category"
            onChange={changeHandler}
            value={product && product.category}
          />
        </div>
        <textarea
          className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
          rows="10"
          placeholder="Enter product decription here..."
          name="description"
          onChange={changeHandler}
          value={product && product.description}
        ></textarea>

        <div className="w-1/2">
          <button className="py-2 px-3 border rounded-md text-blue-500 border-blue-300">
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
