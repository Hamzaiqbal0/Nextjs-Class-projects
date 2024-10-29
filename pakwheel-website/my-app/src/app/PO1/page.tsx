// src/app/pages/make-payment.tsx

"use client"; // Enables interactivity

import React from 'react';

const MakePayment = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Make Payment</h1>
      
      {/* Form for Customer Details */}
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="card-no"
          placeholder="Card Number"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Shipping Address"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </form>

      {/* Place Your Order Button */}
      <a
        href="/thanks"
        className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Place Your Order
      </a>
    </div>
  );
};

export default MakePayment;
