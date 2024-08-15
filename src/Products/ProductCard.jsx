const ProductCard = ({ data }) => {
    
  console.log(data);

  const { productName, description } = data;
  const image_url = `https://picsum.photos/200/300?random=${Math.random()}`;
  return (
    <div className="border border-gray-300 rounded hover:bg-gray-100 hover:shadow-lg duration-300 cursor-pointer">
      <img
        className="mb-2 w-full h-40 bg-cover"
        loading="lazy"
        src={image_url}
        alt={productName}
      />
      <div className="p-1 md:p-2">
        <h2 className="font-semibold truncate">{productName}</h2>
        <p className="h-20 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
