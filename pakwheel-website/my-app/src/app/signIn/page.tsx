// src/app/pages/sign-in.tsx

import React from "react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
          <input type="password" placeholder="Password" className="w-full p-2 border rounded"/>
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign In</button>
        </form>
        <p className="mt-4 text-center">
          Don’t have an account? <Link href="/sign-up" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
