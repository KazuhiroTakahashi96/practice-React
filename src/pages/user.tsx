import { useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: { userId: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  if (!res.ok) {
    throw Error("Not Found");
  }
  const user = await res.json();
  return { user };
}

const User = () => {
  const { user } = useLoaderData();

  return (
    <div className="pt-3">
      <h2>名前：{user.name}</h2>
      <div>
        <p>Eメール：{user.email}</p>
        <p>電話番号：{user.phone}</p>
      </div>
    </div>
  );
};

export default User;
