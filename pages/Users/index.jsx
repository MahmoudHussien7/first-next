import Link from "next/link";
import { useSession } from "next-auth/react";

const Page = ({ users }) => {
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  return (
    <div className="overflow-x-auto">
      {isLoggedIn ? (
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link href={`/Users/${user.id}`}>See more...</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-0 m-40 rounded flex items-center justify-center ">
          <Link
            className="justify-center items-center m-5"
            href="/api/auth/signin"
          >
            Please sign in to view users.
          </Link>
        </div>
      )}
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default Page;
