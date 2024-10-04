import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Logo from "/Image/NorthLogo.png";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div>
      <nav className="sticky bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between relative">
          <div className="absolute inset-0 flex items-start z-10 left-14 top-1">
            <a href="/" className="text-white font-bold text-2xl">
              THE NORTH
            </a>
          </div>
          <img
            src={Logo.src}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full z-20 flex items-start"
          />
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none"> </button>
          </div>
          <ul className="lg:flex space-x-4 relative z-10">
            {isLoggedIn ? (
              <>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/Users"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href="/News"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/Gallery"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/Reviews"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    FeedBack
                  </a>
                </li>
                <li>
                  <button
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
          <img
            src="first-next/Images/NorthLogo.png"
            alt="Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
