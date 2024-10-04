import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NewsPage = ({ news }) => {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center animate-pulse text-gray-800">
        News
      </h1>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((article) => (
            <div key={article.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-700">
                {article.title}
              </h2>
              <p className="text-lg text-gray-600">{article.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mt-4">
          <Link href="/api/auth/signin">
            <div className="text-white">Please sign in to view news.</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
}

export default NewsPage;
