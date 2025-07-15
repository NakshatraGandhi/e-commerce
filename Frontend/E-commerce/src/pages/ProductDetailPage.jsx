import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://e-commerce-3-zogp.onrender.com/api/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Product not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading product...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg border"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-pink-700 mb-2">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-1">Price: {product.brand}</p>
          <p className="text-pink-600 text-xl font-semibold mb-4">₹{product.price}</p>
          <p className="text-gray-700 mb-6">
            {product.description || "No description available."}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;