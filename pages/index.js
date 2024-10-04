import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold animate-fadeIn transition duration-300 text-blue-500">
            You can now see our Users
          </h1>
          <p className="text-lg md:text-xl mt-4 transition duration-500 hover:text-gray-700 animate-fadeIn">
            And also see their details
          </p>
          <a href={isLoggedIn ? "/Users" : "/api/auth/signin"}>
            <div className="mt-10 px-1 py-3 bg-blue-500 text-white text-xl rounded transition duration-300 hover:bg-blue-600 animate-wiggle">
              {isLoggedIn ? "Show Our Users" : "Sign in Now!"}
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
