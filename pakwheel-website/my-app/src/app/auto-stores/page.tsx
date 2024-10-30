import React from "react";

const AutoStore: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Auto Store</h1>
      <p className="mb-6 text-lg text-gray-700">
        Find genuine parts and accessories for your car and bike. PakWheels Auto Store offers a wide range of products with reliable
        quality.
      </p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IEilGjW23K8MXet2HwcCrZx_Mw9Ljf62BQ&s"
        alt="Auto Store"
        className="w-half mb-6 rounded-lg shadow-md"
      />

      <a href="https://www.pakwheels.com/accessories-spare-parts/search/-/buynow_1/" className="text-blue-600 font-semibold hover:underline">Visit Auto Store</a>
    </div>
  );
};

export default AutoStore;
