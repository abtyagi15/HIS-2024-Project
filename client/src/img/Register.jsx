import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { setSignupData } from "../slices/authSlice";

const Register = ({ handleToggle }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    console.log("signupData", formData);
  }, [formData]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (event) => {
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords Do Not Match");
        return;
      }
      dispatch(setSignupData(formData));
      event.preventDefault();
      const response = await fetch(`${backendUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        toast.success("OTP has been sent to your email id");
        navigate("/verify-email");
      } else {
        console.log("Checking this statement");
        toast.error("Account already exists with this email id");
        return;
      }
    } catch (err) {
      console.error(err);
      console.log("Error in signup submit handler");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#d7f3f4]">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form className="w-full max-w-sm">
        <div className="mb-4 border-black">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
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
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
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
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            className="form-input mt-1 block w-full appearance-none rounded-none relative px-3 py-2 border border-black placeholder-gray-500
             text-gray-900 rounded-b-md
             focus:outline-none focus:ring-indigo-500 focus:black focus:z-10 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-green-400 mx-auto text-white py-2 px-4 rounded hover:bg-green-500"
          onClick={submitHandler}
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={handleToggle}>
        <span className="text-black">Already have an account?</span>
        <Link to="/login"> Login</Link>
      </p>
    </div>
  );
};

export default Register;
