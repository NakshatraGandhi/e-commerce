import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import logo from '../assets/logo.png';
import cart from '../assets/icons/cart.png';
import logoutIcon from '../assets/icons/logout.png';
import userIcon from '../assets/icons/user.png';


const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!search.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/api/product?search=${search}`);
        setSuggestions(res.data);
      } catch (err) {
        console.error("Error fetching suggestions:", err.message);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300); // debounce

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleSuggestionClick = (productId) => {
    setSearch("");
    setSuggestions([]);
    navigate(`/product/${productId}`);
  };

  const clearSearch = () => {
    setSearch("");
    setSuggestions([]);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pink-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GlowBeauty Logo" className="h-8" />
          <span className="text-xl font-extrabold text-pink-600">GlowBeauty</span>
        </Link>

        {/* Search bar */}
        <div className="relative flex-1 mx-4 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for brands, products, etc."
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-2 text-gray-400 hover:text-gray-700 text-lg"
              >
                ×
              </button>
            )}
          </div>

          {search && (
            <ul className="absolute bg-white border rounded shadow-md w-full z-50 mt-1 max-h-60 overflow-y-auto">
              {suggestions.length > 0 ? (
                suggestions.map((product) => (
                  <li
                    key={product._id}
                    onClick={() => handleSuggestionClick(product._id)}
                    className="px-4 py-2 text-sm hover:bg-pink-100 cursor-pointer"
                  >
                    {product.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500 italic">
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>

        {/* Nav & Auth */}
        <nav className="flex items-center gap-4 text-sm text-pink-700">
          <Link to="/product" className="hover:text-pink-600">
            Products
          </Link>

          <Link to="/cart" className="flex items-center gap-1 hover:text-pink-600">
            <img src={cart} alt="Cart" className="h-4 w-4" />
            Cart ({cartItems.length})
          </Link>

          {!user ? (
            <>
              <Link to="/login" className="flex items-center gap-1 hover:text-pink-600">
                <img src={userIcon} alt="Sign In" className="h-4 w-4" />
                Sign In
              </Link>
              <Link to="/register" className="hover:text-pink-600">Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="flex items-center gap-1 hover:text-pink-600">
                <img src={user} alt="Profile" className="h-4 w-4" />
                {user.name}
              </Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="flex items-center gap-1 text-red-500 hover:text-red-700"
              >
                <img src={logoutIcon} alt="Logout" className="h-4 w-4" />
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;