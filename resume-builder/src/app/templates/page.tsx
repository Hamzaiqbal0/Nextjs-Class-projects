// src/app/template/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function TemplatesPage() {
  return (
    <div className="flex flex-col items-center py-8 bg-gradient-to-r from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Choose Your Resume Template</h1>

      {/* Flex container for the template images */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* Template 1 */}
        <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition duration-200">
          <Image
            src="/template1.png"
            alt="Template 1"
            width={320}
            height={350}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Professional</h2>
          <Link href="/fill-details">
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Use This Template
            </button>
          </Link>
        </div>

        {/* Template 2 */}
        <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition duration-200">
          <Image
            src="/template2.png"
            alt="Template 2"
            width={320}
            height={350}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Modern</h2>
          <Link href="/fill-details">
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Use This Template
            </button>
          </Link>
        </div>

        {/* Template 3 */}
        <div className="w-80 p-4 border rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500 transition duration-200">
          <Image
            src="/template3.jpg"
            alt="Template 3"
            width={320}
            height={350}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold text-center mt-4">Creative</h2>
          <Link href="/fill-details">
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Use This Template
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
