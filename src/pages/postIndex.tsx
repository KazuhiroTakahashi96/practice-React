import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostIndex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<
    {
      body?: string;
      id?: number;
      title?: string;
      userId?: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <ul>
      {isLoading ? (
        posts.map((post) => (
          <li key={post.id} className="py-1">
            <Link to={`${post.id}`}>
              {post.id}: {post.title}
            </Link>
          </li>
        ))
      ) : (
        <p>データがありません</p>
      )}
    </ul>
  );
};

export default PostIndex;
