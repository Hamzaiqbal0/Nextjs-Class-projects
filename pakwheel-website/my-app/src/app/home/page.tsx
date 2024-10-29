"use client";

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
<div className="p-2 border border-gray-300 rounded-md">
    <div className="text-center mt-10 bg-gray-50">
          <p className="text-black font-bold text-2xl">Sell Your Car on PakWheels and Get the Best Price</p>
        </div>
        
        <div className="flex items-start px-48 py-2 bg-gray-50">
        {/* Left Heading and Paragraph */}
        <div className="ml-20 w-1/2 p-4">
          <h2 className="text-lg font-bold text-blue-600 justify-center px-4">Post Your Ads on PakWheels</h2>
          <p className="text-gray-700 mt-1">
            Post your Ads for Free in 3 Easy Steps.<br />
            Get Genuine Offers from Verified Buyers.<br />
            Sell your Car Fast at Best Price
          </p>
          <div className="flex space-x-4 mt-4 hover:shadow-sm px-16">
            <Link href="/adpost">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out">Post Your Ad</button>
            </Link>
          </div>
        </div>

        {/* Right Heading and Paragraph */}
        <div className="ml-24 w-1/2 p-4">
          <h2 className="text-lg font-bold text-blue-600 justify-center px-4">Try PakWheels Sell it For Me</h2>
          <p className="text-gray-700 mt-1">
            Dedicated Sells Expert To Sell Your Car.<br />
            We Bargain For You and Share The Best Offer.<br />
            We Ensure Safe and Secure Transactions
          </p>
          <div className="flex space-x-4 mt-4 hover:shadow-sm px-16">
          <Link href="/register-car">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out">Register Your Car</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  


       <div className="px-16 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Featured New Cars</h2>
        
        {/* Routes */}
        <div className="flex space-x-4 mb-6">
          <Link href="/popular" className="text-blue-600 hover:underline">Popular</Link>
          <Link href="/upcoming" className="text-blue-600 hover:underline">Upcoming</Link>
          <Link href="/newly-launched" className="text-blue-600 hover:underline">Newly Launched</Link>
        </div>

        {/* Car Images with names and prices */}
        <div className="grid grid-cols-4 gap-8">
          {/* Car 1 */}
          <div className="text-center">
            <Link href="/car1">
              <img
                src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
                alt="Car 1"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>
            <p className="font-semibold mt-2">Toyota Corolla</p>
            <p className="text-gray-600 font-semibold">Price: PKR 50.0-59.9 lacs</p>
            <div className="flex items-center justify-center mt-3">
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-gray-300 text-lg">★</span>
      <span className="text-gray-300 text-lg">★ </span> 299 Reviews
    </div>
          </div>

          {/* Car 2 */}
          <div className="text-center">
            <Link href="/car2">
              <img
                src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
                alt="Car 2"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>
            <p className="font-semibold mt-2">Honda Civic</p>
            <p className="text-gray-600 font-semibold">Price: PKR 86.6-99.0 lacs</p>
            <div className="flex items-center justify-center mt-3">
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-gray-300 text-lg">★</span>
      <span className="text-gray-300 text-lg">★ </span> 293 Reviews
    </div>
          </div>

          {/* Car 3 */}
          <div className="text-center">
            <Link href="/car3">
              <img
                src="https://cache1.pakwheels.com/system/car_generation_pictures/7441/original/SWIFT.jpg?1677750438"
                alt="Car 3"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>
            <p className="font-semibold mt-2">Suzuki Swift</p>
            <p className="text-gray-600 font-semibold">Price: PKR 40.8-45.5 lacs</p>
            <div className="flex items-center justify-center mt-3">
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-gray-300 text-lg">★ </span> 453 Reviews
    </div>
          </div>

          {/* Car 4 */}
          <div className="text-center">
            <Link href="/car4">
              <img
                src="https://cache4.pakwheels.com/system/car_generation_pictures/7335/original/Fortuner_-_PNG.png?1677568997"
                alt="Car 4"
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>
            <p className="font-semibold mt-2">Toyota Fortuner</p>
            <p className="text-gray-600 font-semibold">Price: PKR 1.45 - 1.99 crore</p>
            <div className="flex items-center justify-center mt-3">
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★</span>
      <span className="text-red-500 text-lg">★ </span> 56 Reviews
    </div>
          </div>
        </div>
      </div>
  </>
  );
};

export default Home;
