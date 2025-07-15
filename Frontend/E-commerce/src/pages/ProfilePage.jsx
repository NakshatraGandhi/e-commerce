// src/pages/ProfilePage.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-center">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">
        Welcome back, {user.displayName || user.email}!
      </h1>
      <p>Your email: {user.email}</p>
      <p>Glad to see you here. Explore your dashboard and enjoy shopping!</p>
    </div>
  );
};

export default ProfilePage;
