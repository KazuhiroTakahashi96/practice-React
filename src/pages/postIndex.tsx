import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export async function loader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { posts };
}

const PostIndex = () => {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="py-1 underline hover:text-blue-400">
          <Link to={`${post.id}`}>
            {post.id}: {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostIndex;
