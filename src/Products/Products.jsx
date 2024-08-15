import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [totalDataLength, setTotalDataLength] = useState(0);
  const totalPages = Math.ceil(totalDataLength / 12);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/?page=${page}&search=${search}`)
      .then((res) => {
        setData(res.data.data);
        setTotalDataLength(res.data.totalDocCount);
      });

  }, [page, search]);

  return (
    <div className="max-w-screen-2xl mx-auto my-4">
      <h1 className="text-center text-xl mb-2">Products..</h1>
      <div className="mb-4">
        <input onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search..."
          type="text"
          className="bg-gray-400 px-4 py-2 outline-none placeholder:text-gray-200 rounded"
        />
        <select name="" id=""></select>
      </div>
      
      <div className="p-1 md:p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-3 md:gap-2 gap-1">
        {data.map((item, i) => (
          <ProductCard data={item} key={i} />
        ))}
      </div>

      <div className="flex justify-center gap-2 py-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 disabled:bg-blue-300 px-3 py-1 text-white text-xl rounded">
          {"<"}
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            onClick={()=>setPage(i + 1)}
            key={i}
            className={`bg-blue-500 px-3 py-1 text-white text-xl rounded ${page === i+1 ? "bg-blue-600" : "bg-blue-500"}`}>
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 disabled:bg-blue-300 px-3 py-1 text-white text-xl rounded">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Products;
