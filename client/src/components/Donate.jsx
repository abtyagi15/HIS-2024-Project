import React from "react";

function DonateSection() {
  return (
    <div className="bg-[#d7f3f4] py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Donate Now</h2>
        <p className="text-lg text-gray-600 mb-8">
          "The joy of giving lasts a lifetime."
        </p>
        <button
          className="bg-[#5eead4] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            window.location.href = "/donation-form";
          }} // Redirects to the donation form
        >
          Click here to Donate
        </button>
      </div>
    </div>
  );
}

export default DonateSection;
