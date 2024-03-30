import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({ handleToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#d7f3f4]">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500 mx-auto"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={handleToggle}>
        <sppan className="text-black">New user?</sppan> <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
