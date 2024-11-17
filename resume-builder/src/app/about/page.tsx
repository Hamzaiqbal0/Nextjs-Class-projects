import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-6 py-10 bg-gradient-to-r from-blue-200 to-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1 ">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About ResuMate</h1>
          <p className="text-lg text-gray-700 mb-6">
            At ResuMate, we believe that a well-crafted resume is your gateway to unlocking career opportunities.
            We provide an easy-to-use, AI-powered resume builder designed to help you create a professional resume
            that showcases your skills and strengths. Join thousands of satisfied users who have transformed their
            job applications with our tool.
          </p>
          <Link href="/template">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Start Building Your Resume
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/aboutus1.webp"
            alt="Professional Resume Building"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Educational Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose ResuMate?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Image
              src="/whyResuMate.jpg"
              alt="Why Choose Us"
              width={550}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              We understand the struggles of job seekers in today’s competitive market. Crafting a resume that
              stands out can be challenging, but with ResuMate, you get:
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
              <li>AI-powered suggestions tailored to highlight your unique strengths.</li>
              <li>Industry-specific templates designed to pass applicant tracking systems (ATS).</li>
              <li>Real-time editing and easy download options for flexibility.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest Blogs</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Blog 1 */}
          <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <Image
              src="/news1.jpg"
              alt="Resume Tips Blog"
              width={320}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Top 10 Resume Tips</h3>
            <p className="text-gray-700 mt-2">
              Discover expert tips on how to make your resume stand out and impress hiring managers.
            </p>
            <Link href="/blogs/resume-tips">
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <Image
              src="/news3.png"
              alt="How to Pass ATS Blog"
              width={320}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">How to Pass ATS Systems</h3>
            <p className="text-gray-700 mt-2">
              Learn the secrets to optimizing your resume for applicant tracking systems (ATS).
            </p>
            <Link href="/blogs/ats-guide">
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-200">
            <Image
              src="/news4.jpg"
              alt="Career Growth Blog"
              width={320}
              height={230}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Career Growth Strategies</h3>
            <p className="text-gray-700 mt-2">
              Explore actionable strategies for advancing your career and landing your dream job.
            </p>
            <Link href="/blogs/career-growth">
              <button className="w-full mt-7 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Create Your Professional Resume?</h2>
        <Link href="/template">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-200">
            Get Started with ResuMate
          </button>
        </Link>
      </div>
    </div>
  );
}