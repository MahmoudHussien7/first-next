import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="relative bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="relative z-10 text-white font-bold text-2xl">
            THE NORTH
          </div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none"> </button>
          </div>
          <ul className="lg:flex space-x-4 relative z-10">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Users"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/News"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                News
              </Link>
            </li>
          </ul>
          <img
            src="first-next/Images/NorthLogo.png"
            alt="Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            style={{ zIndex: 0 }}
          />
        </div>
      </nav>
    </div>
  );
}
