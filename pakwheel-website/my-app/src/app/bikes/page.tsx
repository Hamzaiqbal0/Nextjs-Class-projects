
import React from "react";
import Image from "next/image";

const Bikes: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Popular Bikes in Pakistan</h1>
      <p className="mb-6 text-lg text-gray-700">
        Browse through a diverse range of motorbikes. From sports bikes to daily commuters, PakWheels has something for everyone.
      </p>

      <Image
        src="https://i.pinimg.com/originals/63/57/de/6357de9a9d2293fe75b9df315453ef15.jpg"
        alt="Popular Bikes"
        width={500}  // Set appropriate width
        height={300} // Set appropriate height
        className="w-full mb-6 rounded-lg shadow-md"
      />

      <h2 className="text-2xl font-bold mb-2">Top Models</h2>
      <p className="mb-4 text-gray-600">
        Check out the top-selling bikes with detailed reviews, specs, and prices.
      </p>

      <a href="https://www.pakwheels.com/bikes/" className="text-blue-600 hover:underline font-semibold">
        Browse More Bikes
      </a>
    </div>
  );
};

export default Bikes;
