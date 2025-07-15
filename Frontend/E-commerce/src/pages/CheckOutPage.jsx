import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CheckOutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "COD",
  });

  const [success, setSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      const order = {
        user: user?.name || "Guest",
        items: cartItems,
        total: totalPrice,
        shippingInfo: {
          name: formData.name,
          address: formData.address,
          phone: formData.phone,
          paymentMethod: formData.paymentMethod,
        },
      };

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        throw new Error("Order failed");
      }

      clearCart();
      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Order error:", err.message);
      alert("Order could not be placed.");
    }
  };

  if (cartItems.length === 0 && !success) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-xl font-bold mb-4">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
        Checkout
      </h1>

      {success ? (
        <div className="text-center text-green-600 text-xl font-semibold">
          ✅ Order placed successfully! Redirecting to homepage...
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white shadow p-6 rounded-lg border"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-pink-200 rounded px-4 py-2 focus:outline-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-pink-200 rounded px-4 py-2 focus:outline-pink-400"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-pink-200 rounded px-4 py-2 focus:outline-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-1 block w-full border border-pink-200 rounded px-4 py-2"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Credit/Debit Card</option>
            </select>
          </div>

          <div className="text-lg font-bold text-right text-pink-700">
            Total: ₹{totalPrice.toFixed(2)}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckOutPage;