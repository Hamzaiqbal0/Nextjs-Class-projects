// src/app/pages/sign-up.tsx

import React from "react";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded"/>
          <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
          <input type="password" placeholder="Password" className="w-full p-2 border rounded"/>
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/sign-in" className="text-blue-600">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
