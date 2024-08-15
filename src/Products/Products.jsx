import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/products").then((res) => {
        setData(res.data.data);
      });
    }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-4">
      <h1 className="text-center text-xl mb-2">Products..</h1>
      <div className="mb-4">
        <input placeholder="Search..." type="text" className="bg-gray-400 px-4 py-1 placeholder:text-gray-200 rounded" />
        <select name="" id=""></select>
      </div>
      <div className="p-1 md:p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-3 md:gap-2 gap-1">
        {data.map((item, i) => (
          <ProductCard data={item} key={i} />
        ))}
      </div>
      <div className="flex justify-center gap-2 py-4">
        <button className="bg-blue-500 px-3 py-1 text-white text-xl rounded">{"<"}</button>
        <button className="bg-blue-500 px-3 py-1 text-white text-xl rounded">{"1"}</button>
        <button className="bg-blue-500 px-3 py-1 text-white text-xl rounded">{"2"}</button>
        <button className="bg-blue-500 px-3 py-1 text-white text-xl rounded">{">"}</button>
      </div>
    </div>
  );
};

export default Products;
