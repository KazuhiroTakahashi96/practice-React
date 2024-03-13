import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export async function loader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return { users };
}

const UserIndex = () => {
  const { users } = useLoaderData();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="py-2">
          <Link
            to={`${user.id}`}
            className="py-1 underline hover:text-blue-400"
          >
            {user.id}: {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserIndex;
