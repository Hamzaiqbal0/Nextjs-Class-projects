// src/app/pages/used-cars.tsx

import React from "react";

const UsedCars: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Used Cars for Sale</h1>
      <p className="mb-6 text-lg text-gray-700">
        Explore a vast range of certified used cars. At PakWheels, we bring you reliable and affordable options with thorough
        inspection reports, history checks, and competitive prices.
      </p>

      <img
        src="https://timelinecovers.pro/facebook-cover/download/nissan-gtr-generations-facebook-cover.jpg"
        alt="Used Cars"
        className="w-full mb-6 rounded-lg shadow-md"
      />

      <h2 className="text-2xl font-bold mb-2">Featured Used Cars</h2>
      <p className="mb-4 text-gray-600">
        Our featured listings include the most popular models, inspected and certified for quality. Choose from SUVs, sedans,
        hatchbacks, and more.
      </p>

      <a href="https://www.pakwheels.com/used-cars/" className="text-blue-600 hover:underline font-semibold">Browse Used Cars</a>
    </div>
  );
};

export default UsedCars;
