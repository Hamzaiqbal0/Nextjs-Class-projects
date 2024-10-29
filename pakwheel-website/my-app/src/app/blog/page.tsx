import React from 'react';
import Link from 'next/link';

const Blog: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest Blogs</h1>

      {/* Blog Post 1 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">The Evolution of Electric Cars in Pakistan</h2>
        <p className="text-gray-700 mb-4">
          Discover the rise of electric cars in Pakistan and their impact on the automotive industry. We explore the current 
          market trends, infrastructure developments, and what the future holds for electric vehicles in the country.
        </p>
        <Link href="">
          <button className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Read More</button>
        </Link>
      </div>

      {/* Blog Post 2 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Top 5 SUVs to Buy in 2024</h2>
        <p className="text-gray-700 mb-4">
          SUVs continue to dominate the market with their power, versatility, and comfort. Check out our list of the top 5 SUVs 
          to buy in 2024, featuring models with the best safety, technology, and performance features available in Pakistan.
        </p>
        <Link href="">
          <button className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Read More</button>
        </Link>
      </div>

      {/* Blog Post 3 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">How to Maintain Your Car for Optimal Performance</h2>
        <p className="text-gray-700 mb-4">
          Regular maintenance is crucial for keeping your car in top shape. Learn essential tips and tricks to keep your vehicle 
          performing at its best, from routine checks to seasonal care, ensuring longevity and reliability.
        </p>
        <Link href="">
          <button className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Read More</button>
        </Link>
      </div>

      {/* Blog Post 4 */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Car Insurance in Pakistan: What You Need to Know</h2>
        <p className="text-gray-700 mb-4">
          Car insurance is essential for vehicle owners. This guide explains the different types of car insurance available in 
          Pakistan, their benefits, and tips to choose the best insurance plan for your needs and budget.
        </p>
        <Link href="">
          <button className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
