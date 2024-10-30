// src/app/pages/thank-you.tsx

"use client"; // To allow interactivity

import React from "react";

const ThankYou = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Thank You for Shopping with Us!</h1>

      <p className="text-lg text-gray-800 mb-4">
        Your order has been successfully placed, and we’re thrilled to be a part of your journey.
      </p>

      {/* Taglines for a positive experience */}
      <div className="text-center text-gray-700 space-y-4 mb-8">
        <p>🌟 "Making Your Dreams Drive is Our Passion!"</p>
        <p>🚗 "Safe Travels Ahead with Your New Ride!"</p>
        <p>💚 "Bringing the Joy of Driving Right to You!"</p>
        <p>🙏 "Thank you for being a valued part of our family!"</p>
      </div>

      <a
        href="/"
        className="bg-blue-500 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
