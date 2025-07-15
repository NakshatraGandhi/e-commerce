import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-70 border border-pink-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="mt-2 text-pink-600 font-bold text-base">₹{product.price}</p>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={`/product/${product._id}`}
            className="text-center py-2 text-sm bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="text-center py-2 text-sm bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
