import React from 'react';
import Link from 'next/link';

const More: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to PakWheels: Your Ultimate Car Marketplace</h1>
      <p className="text-gray-700 mb-6">
        At PakWheels, we offer a comprehensive platform for all car enthusiasts, whether you're looking to buy or sell a vehicle, 
        stay updated with the latest automotive news, or simply explore more about cars and bikes in Pakistan. Here's an overview of 
        what you can expect to find on our website.
      </p>

      {/* Section Links */}
      <div className="space-y-8">
        
        {/* Used Cars Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Used Cars</h2>
          <p className="text-gray-700 mb-4">
            Our platform connects buyers and sellers for a wide range of used cars. With verified listings, transparent prices, and 
            detailed descriptions, finding a quality used car has never been easier. Whether you’re looking for an economical city 
            car or a rugged SUV, our listings cater to every need.
          </p>
          <Link href="/used-cars">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Explore Used Cars</button>
          </Link>
        </div>

        {/* New Cars Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">New Cars</h2>
          <p className="text-gray-700 mb-4">
            Discover the latest car models available in Pakistan. We provide comprehensive information on new car launches, pricing, 
            and features. Explore specifications, compare models, and make informed decisions before purchasing your next new car.
          </p>
          <Link href="/new-cars">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Browse New Cars</button>
          </Link>
        </div>

        {/* Bikes Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Bikes</h2>
          <p className="text-gray-700 mb-4">
            We cater to biking enthusiasts with a broad selection of motorcycles and scooters. From everyday commuters to sports bikes, 
            explore models, specifications, and expert reviews to choose the bike that fits your needs and lifestyle.
          </p>
          <Link href="/bikes">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Explore Bikes</button>
          </Link>
        </div>

        {/* Auto Store Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Auto Parts Store</h2>
          <p className="text-gray-700 mb-4">
            Looking for car parts or accessories? Our Auto Parts Store provides a range of items for vehicle maintenance and performance 
            upgrades. Find the right parts to keep your car in top shape or to give it a performance boost.
          </p>
          <Link href="/auto-store">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Visit Auto Store</button>
          </Link>
        </div>

        {/* Blog Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Blog</h2>
          <p className="text-gray-700 mb-4">
            Stay informed with our blog, featuring articles on car maintenance tips, market insights, and the latest technology 
            trends. Our blog is a valuable resource for anyone interested in keeping up-to-date with automotive news in Pakistan.
          </p>
          <Link href="/blog">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg">Read Our Blog</button>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-sm text-gray-600">
        <p>© 2024 PakWheels. All rights reserved.</p>
      </div>
    </div>
  );
};

export default More;
