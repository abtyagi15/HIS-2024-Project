import React, { useState } from "react";

function ProductForm() {
  const [userType, setUserType] = useState("renter"); // Default to renter

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="bg-gradient-to-r from-[#5eead4] to-[#d7f3f4] min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Product Form</h2>
        <div className="flex justify-between mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="renter"
              checked={userType === "renter"}
              onChange={handleUserTypeChange}
              className="mr-1"
            />
            I want to rent a product
          </label>
          <label>
            <input
              type="radio"
              value="seller"
              checked={userType === "seller"}
              onChange={handleUserTypeChange}
              className="mr-1"
            />
            I want to sell a product
          </label>
        </div>

        {userType === "renter" ? <RenterForm /> : <SellerForm />}

        <button
          className="bg-[#5eead4] hover:bg-black text-white font-bold py-2 px-4 rounded mt-4 w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function RenterForm() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-center">Rent Product Form</h3>
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Contact:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">City:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Photo Upload:</label>
        <input type="file" className="border" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Product Detail:</label>
        <textarea className="w-full border rounded px-2 py-1"></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Price:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
    </div>
  );
}

function SellerForm() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-center">Sell Product Form</h3>
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Contact:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">City:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Photo Upload:</label>
        <input type="file" className="border" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Product Detail:</label>
        <textarea className="w-full border rounded px-2 py-1"></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Price:</label>
        <input type="text" className="w-full border rounded px-2 py-1" />
      </div>
    </div>
  );
}

export default ProductForm;
