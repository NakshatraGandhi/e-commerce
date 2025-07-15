// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import googleIcon from "../assets/icons/google.png";

const LoginPage = () => {
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData);
      navigate("/profile");
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (err) {
      console.error("Google login error:", err.message);
      setError("Google sign-in failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Sign In</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Login
        </button>
      </form>

      <div className="my-4 text-center text-sm text-gray-500">or</div>

      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-50"
      >
        <img src={googleIcon} alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>

      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-pink-600 font-medium hover:underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
