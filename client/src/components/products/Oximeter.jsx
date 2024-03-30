import React from 'react'
import equipment from "../../assests/equipments.json";
import { Link } from 'react-router-dom';
const Oximeter = () => {
  const product = equipment.oximeter;
  console.log(product);
  return (
    <div className="flex flex-wrap gap-3">
      {product.map((product, index) => (
        <div className="bg-[#d7f3f4] shadow-lg rounded-lg overflow-hidden w-[30%]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-700">
                  Rental Price per Day: ${product.rental_price_per_day}
                </p>
                <p className="text-gray-700">
                  Normal Price: ${product.normal_price}
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Contact:</p>
                <p className="text-gray-700">{product.contact.name}</p>
                <p className="text-gray-700">{product.contact.email}</p>
                <p className="text-gray-700">{product.contact.phone}</p>
              </div>
            </div>
            <Link to="sell-form">
              <button className="bg-[#5eead4] text-white py-2 px-4 rounded-lg hover:bg-green-600">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Oximeter