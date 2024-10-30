import React from "react";
import Link from "next/link";
import Image from "next/image";

const CarDetails = () => {
  // Car images for Black color
  const carImages = [
    "https://content.homenetiol.com/2000292/2235906/0x0/66d86e57e7d140d8a949b698ae7937b2.jpg",
    "https://cdcssl.ibsrv.net/autodata/images/?img=USD20HOC021A021002.jpg&width=660",
  ];

  // Car description
  const carDescription = `
    The Honda Civic 2024 is designed for both rugged terrains and city driving.
    It offers a powerful engine, advanced safety features, and a spacious interior.
    Available in sleek Black color.
  `;

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Honda Civic 2024 (Black)</h1>
      <div className="text-2xl font-semibold text-green-600 mb-4">PKR 86.6-99.0 lacs</div>

      {/* Car Images in Flex Format */}
      <div className="flex space-x-4 mb-6">
        {carImages.map((imageUrl, index) => (
          <div key={index} className="flex-1">
            <Image
              src={imageUrl}
              alt={`Honda Civic - Black ${index + 1}`}
              width={500}  // Set appropriate width
              height={300} // Set appropriate height
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
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
