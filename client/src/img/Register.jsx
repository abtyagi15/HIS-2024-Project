// Register.js
import React, { useState } from "react";

const Register = ({ handleToggle }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#d7f3f4]">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4 border-black">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input mt-1 block w-full form-input  appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-4 border-black">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input mt-1 block w-full form-input   appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-4 border-black">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full form-input mt-1 block w-full appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-4 border-black">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full form-input mt-1 block w-full appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-6 border-black">
          <label htmlFor="confirmPassword" className="block text-gray-700 ">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input mt-1 block w-full appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-green-400 mx-auto text-white py-2 px-4 rounded hover:bg-green-500"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={handleToggle}>
        <span className="text-black">Already have an account?</span> Login
      </p>
    </div>
  );
};

export default Register;
