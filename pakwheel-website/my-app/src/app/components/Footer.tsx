import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link"
export function Footer (){
    return(
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
    )
}