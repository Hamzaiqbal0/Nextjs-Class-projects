import Link from "next/link";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="bg-black p-5">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and tagline */}
                <div className="flex items-center">
                    <Image
                        src="https://play-lh.googleusercontent.com/Q_3vIq94Bs2_QYFiFw4vQhobVioxzaKEq-XDuW0OEugD--iGQNLYktO2PgEcAED53v0=w240-h480-rw"
                        alt="PakWheels Logo"
                        className="h-12"
                        width={48} // Provide width for optimization
                        height={24
                        } // Provide height for optimization
                    />
                    <span className="ml-3 text-white">THINK WHEELS, THINK PAKWHEELS</span>
                </div>

                {/* Links (for larger screens) */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white py-2 hover:underline">Home</Link>
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
    );
}
