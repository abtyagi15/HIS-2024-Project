import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../slices/authSlice";

const Login = ({handleToggle}) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
    console.log(backendUrl);
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        navigate("/");
        console.log("If data.success then navigate to home page");
      }

      if (data.token) {
        toast.success("Login Successful");
        dispatch(setToken(data.token));
        navigate("/");
        console.log("If token then navigate to home page");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#d7f3f4]">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={submitHandler} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
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
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-500 mx-auto"
          onClick={submitHandler}
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
