import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const category = searchParams.get("category");
        const search = searchParams.get("search");

        let query = "";

        if (category) {
          query += `category=${encodeURIComponent(category)}`;
        }

        if (search) {
          if (query) query += "&";
          query += `search=${encodeURIComponent(search)}`;
        }

        const res = await axios.get(`https://e-commerce-3-zogp.onrender.com/api/product${query ? `?${query}` : ""}`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  return (
    <div className="px-4 py-5">
      <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
        All Beauty Products
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;