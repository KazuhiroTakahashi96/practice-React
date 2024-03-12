import { useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: { postId: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  if (!res.ok) {
    throw Error("Not Found");
  }
  const post = await res.json();
  return { post };
}

const User = () => {
  const { post } = useLoaderData();

  return (
    <div className="pt-3">
      <h2>ID：{post.id}</h2>
      <div>
        <p>タイトル：{post.title}</p>
        <p>内容：{post.body}</p>
      </div>
    </div>
  );
};

export default User;
