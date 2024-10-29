// src/app/pages/car-details.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const CarDetails = () => {
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get('color') === 'White' ? 'White' : 'Black';

  // Car images based on color selection
  const carImages: { [key: string]: string[] } = {
    Black: [
      'https://sbimotor.com/uploads/car/images/121426/3546973_big_ee2c0ef7.jpg',
      'https://i.pinimg.com/originals/65/7a/8c/657a8c45d48483ce1a3efead230f3f18.jpg',
    ],
    White: [
      'https://example.com/car-white-front.jpg',
      'https://example.com/car-white-side.jpg',
    ],
  };

  // Car description
  const carDescription = `
    The 2024 Suzuki Swift is designed for both rugged terrains and city driving.
    It offers a powerful engine, advanced safety features, and a spacious interior.
    Choose between Black and White to suit your style.
  `;

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Suzuki Swift 2024</h1>
      <div className="text-2xl font-semibold text-green-600 mb-4">PKR 40.8-45.5 lacs</div>

      {/* Color Selection */}
      <div className="flex space-x-4 mb-6">
        <Link href={{ pathname: '/car-details', query: { color: 'Black' } }}>
          <button className={`py-2 px-4 rounded ${selectedColor === 'Black' ? 'bg-black text-white' : 'bg-gray-200'}`}>
            Black
          </button>
        </Link>
        <Link href={{ pathname: '/car-details', query: { color: 'White' } }}>
          <button className={`py-2 px-4 rounded ${selectedColor === 'White' ? 'bg-gray-300 text-black' : 'bg-gray-200'}`}>
            White
          </button>
        </Link>
      </div>

      {/* Car Images */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {carImages[selectedColor].map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Suzuki Swift- ${selectedColor}`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <Link href="/test-drive">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Test Drive</button>
        </Link>
        <Link href="/bank-finance">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Request Bank Finance</button>
        </Link>
        <Link href="/visit-places">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Visit Places</button>
        </Link>
        <Link href="/car-inspection">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Car Inspection</button>
        </Link>
      </div>

      {/* Description */}
      <div className="text-lg text-gray-700 mb-6">
        <p>{carDescription}</p>
      </div>

      {/* Make Payment Button */}
      <Link href="/PO1">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Make Payment
        </button>
      </Link>
    </div>
  );
};

export default CarDetails;
