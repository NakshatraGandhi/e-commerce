import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-50 border-t border-pink-200 py-8 text-sm text-gray-600 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-pink-600 font-bold mb-3">GlowBeauty</h4>
          <p>Your trusted store for skincare, makeup, and self-care essentials. Glow naturally!</p>
        </div>

        <div>
          <h4 className="text-pink-600 font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/product" className="hover:text-pink-700">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-pink-700">Cart</Link></li>
            <li><Link to="/login" className="hover:text-pink-700">Login</Link></li>
            <li><Link to="/register" className="hover:text-pink-700">Register</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-pink-600 font-bold mb-3">Customer Care</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-pink-600 font-bold mb-3">Connect With Us</h4>
          <ul className="space-y-2">
            <li>Email: support@glowbeauty.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Instagram: @glowbeauty</li>
            <li>Facebook: /glowbeauty</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} GlowBeauty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;