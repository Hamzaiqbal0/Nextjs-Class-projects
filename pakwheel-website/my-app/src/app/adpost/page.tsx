// src/app/pages/post-ad.tsx

import React from "react";

const PostAd = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow mt-10">
      <h2 className="text-3xl font-bold mb-4">Post Your Ad</h2>
      <p>Get your vehicle noticed by thousands of potential buyers!</p>
      <form className="space-y-4 mt-6">
        <input type="text" placeholder="Car Model" className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Location" className="w-full p-2 border rounded"/>
        <textarea placeholder="Description" className="w-full p-2 border rounded"></textarea>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Submit Ad</button>
      </form>
    </div>
  );
};

export default PostAd;
