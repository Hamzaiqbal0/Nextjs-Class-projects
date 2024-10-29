// src/app/pages/register-car.tsx

import React from 'react';

const RegisterCar = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold mb-4">Register Your Car</h2>
      <p>Join the platform to showcase your car and reach more potential buyers.</p>
      <form className="space-y-4 mt-6">
        <input type="text" placeholder="Owner Name" className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Contact Number" className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Car Model and Year" className="w-full p-2 border rounded"/>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register Now</button>
      </form>
    </div>
  );
};

export default RegisterCar;
