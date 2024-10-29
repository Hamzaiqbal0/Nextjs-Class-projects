import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><nav className="bg-black p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and tagline */}
        <div className="flex items-center">
        
            <img
              src="https://play-lh.googleusercontent.com/Q_3vIq94Bs2_QYFiFw4vQhobVioxzaKEq-XDuW0OEugD--iGQNLYktO2PgEcAED53v0=w240-h480-rw"
              alt="PakWheels Logo"
              className="h-12"
            />

          <span className="ml-3 text-white">THINK WHEELS, THINK PAKWHEELS</span>
          
        </div>

        {/* Links (for larger screens) */}
        <div className="hidden md:flex space-x-6">
        <Link href="/home" className="text-white py-2 hover:underline">Home</Link>
          <Link href="/auto-stores" className="text-white py-2 hover:underline">Auto Store</Link>
          <Link href="/new-cars" className="text-white py-2 hover:underline">New Cars</Link>
          <Link href="/used-cars" className="text-white py-2 hover:underline">Used Cars</Link>
          <Link href="/bikes" className="text-white py-2 hover:underline">Bikes</Link>
          <Link href="/blog" className="text-white py-2 hover:underline">Blogs</Link>
          <Link href="/more" className="text-white py-2 hover:underline">More+</Link>
        </div>

        {/* Sign Up & Sign In buttons (visible on all screens) */}
        <div className="space-x-4">
          <Link href="/signUp">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out">Sign Up</button>
          </Link>
          <Link href="/signIn">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out">Sign In</button>
          </Link>
        </div>
        
      </div>

    </nav>
 

        {children}
        <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left side: Copyright text */}
        <div className="text-left text-gray-300">
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="mt-1 space-x-4 text-gray-400 text-sm">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>

        {/* Right side: Social Media Icons and "Made by" link */}
        <div className="flex flex-col items-end">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-1">
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-500" size={24} />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-blue-700" size={24} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-500" size={24} />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-red-600" size={24} />
            </Link>
          </div>
          {/* Made by Link */}
          <Link href="https://www.linkedin.com/in/hamza-iqbal123/" className="text-gray-400 hover:text-white">Muhammad Hamza Iqbal</Link>
        </div>

      </div>
    </footer>
      </body>
    </html>
  );
}
