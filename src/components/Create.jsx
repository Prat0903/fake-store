import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (event) => {
    event.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Every field should have atleast 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));

    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="w-screen h-screen p-[7%] flex flex-col items-center"
    >
      <h1 className="text-2xl mb-4 w-1/2">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
        onChange={(event) => setImage(event.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="number"
          placeholder="price"
          className="text-xl rounded-md px-2 py-1 w-[45%] mb-3 bg-zinc-100 outline-none"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />
        <input
          type="text"
          placeholder="category"
          className="text-xl rounded-md px-2 py-1 w-[45%] mb-3 bg-zinc-100 outline-none"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
      </div>
      <textarea
        className="text-xl rounded-md px-2 py-1 w-1/2 mb-3 bg-zinc-100 outline-none"
        rows="10"
        placeholder="Enter product decription here..."
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></textarea>

      <div className="w-1/2">
        <button className="py-2 px-3 border rounded-md text-blue-500 border-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
