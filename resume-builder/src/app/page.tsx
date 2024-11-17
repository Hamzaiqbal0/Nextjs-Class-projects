"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">


      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex-1 p-6">
          <h2 className="text-4xl font-bold mb-4">Create Professional Resumes Effortlessly</h2>
          <p className="mb-6">
            Our resume builder helps you create a polished, job-winning resume in minutes. Choose from various templates, customize easily, and impress employers.
          </p>
          <Link href="/fill-details">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/resume-banner.jpg"
            alt="Resume Builder Hero Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row w-full items-center justify-between p-8">
        <div className="flex-1 p-4">
          <Image
            src="/resume_dk_pics.webp"
            alt="Template Selection"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-3xl font-bold mb-4">Choose from Multiple Templates</h3>
          <p>
            Our app offers a variety of templates to suit different industries and preferences. Select one that fits your style and customize it as needed.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 bg-blue-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Your Resume?</h2>
        <h3 className="mb-6 text-lg"><b>Unlock your potential using our free, intuitive resume builder, enhanced by powerful AI technology!</b> </h3>
           <p className="mr-20 ml-20">Craft a winning resume with ease, as our smart builder offers personalized suggestions to help you showcase your strengths effectively.
            Choose from a wide selection of tailored templates that highlight your skills and include industry-specific keywords for a polished, professional resume.</p>
             <p className="mt-2 mb-2"><b>Edit and download your resume anytime, anywhere for free.</b></p>

<p className="mr-20 ml-20">Join thousands of satisfied users who love our resume builder for its simplicity & high-quality results.
 Do not miss this opportunity to showcase your talents and get noticed in todays competitive job market.
  Start creating your standout resume now with our free, AI-powered resume builder and take your career to the next level!</p>
        <Link href="/fill-details">
          <button className="px-8 py-3 mt-8 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">
            Start Now
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      
    </div>
  );
}
