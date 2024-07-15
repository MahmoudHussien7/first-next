import Navbar from "./Components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold animate-fadeIn  transition duration-300 hover:text-blue-500">
            You can now see our Users
          </h1>
          <p className="text-lg md:text-xl mt-4 transition duration-300 hover:text-gray-700 animate-fadeIn">
            And also see their details
          </p>
          <Link href="/Users">
            <div
              div
              className="mt-10 px-1 py-3 bg-blue-500 text-white text-xl rounded transition duration-300 hover:bg-blue-600 animate-wiggle"
            >
              View Users
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
