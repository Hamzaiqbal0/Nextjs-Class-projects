import React from "react";

const NewCars: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">Latest Cars</h1>
      <p className="mb-6 text-lg text-gray-700">
        Discover the latest cars available in Pakistan with exclusive features, specifications, and competitive prices.
      </p>
      <div className="flex justify-between mt-8">
        <img
          src="https://cache2.pakwheels.com/system/car_generation_pictures/6432/original/Haval_H6_Front.jpg?1652179573" // Replace with the actual URL of the first car image
          alt="Car 1"
          className="w-1/4 rounded-lg shadow-md"
        />
        <img
          src="https://www.electrive.com/media/2024/08/byd-seal-bev-02-2024-jpeg-e1723203231806.jpeg" // Replace with the actual URL of the second car image
          alt="Car 2"
          className="w-1/4 rounded-lg shadow-md"
        />
        <img
          src="https://cache1.pakwheels.com/system/car_generation_pictures/6407/original/BMW_iX_Front.jpg?1650874000" // Replace with the actual URL of the third car image
          alt="Car 3"
          className="w-1/4 rounded-lg shadow-md"
        />
        <img
        src="https://www.ccarprice.com/products/BMW_iX_2023_1.jpg"
        alt="Car4"
        className="w-80 h-56 rounded-lg shadow-md"
        />
      </div>
    
      <h2 className="text-2xl font-bold mb-4">Discover the Latest Arrivals at PakWheels</h2>
      <p className="mb-4 text-gray-600">
        At PakWheels, we are excited to present our collection of newly launched cars that redefine style, performance, and technology. These latest models cater to the diverse needs of Pakistani drivers, offering a blend of modern design and advanced features. From fuel-efficient compact cars perfect for urban commuting to spacious SUVs designed for family adventures, our selection is tailored to meet various lifestyles and preferences. <br /> <br />
        Each newly launched vehicle comes equipped with cutting-edge technology, including advanced infotainment systems, enhanced safety features, and impressive fuel efficiency. Whether you"re seeking a sleek sedan for daily drives or a rugged SUV for off-road experiences, our lineup showcases the best of the automotive market. Explore the latest offerings at PakWheels and find the perfect car that matches your personality and requirements, ensuring a driving experience that is both enjoyable and reliable. Embrace the thrill of driving a brand-new vehicle that combines quality, innovation, and value, all available at your fingertips on PakWheels! 
        Stay updated with newly launched cars in Pakistan. Our listings are constantly updated to bring you the latest models and their full specifications.
      </p>

      <a href="https://www.pakwheels.com/new-cars/" className="text-blue-600 hover:underline font-semibold">Explore New Cars</a>
    </div>
  );
};

export default NewCars;
