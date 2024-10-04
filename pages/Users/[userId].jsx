import React from "react";
import { useRouter } from "next/router";

const UserPage = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 animate-bounce">
        {user.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-xl font-semibold text-gray-700">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-xl font-semibold text-gray-700">
            <strong>Address:</strong>
          </p>
          <p className="text-lg text-gray-600">
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
          <p className="text-xl font-semibold text-gray-700 mt-4">
            <strong>Company:</strong>
          </p>
          <p className="text-lg text-gray-600">{user.company.name}</p>
          <p className="text-lg text-gray-600">
            <strong>Catchphrase:</strong> {user.company.catchPhrase}
          </p>
          <p className="text-lg text-gray-600">
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await res.json();

  // Check if the user exists
  if (!user.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default UserPage;
