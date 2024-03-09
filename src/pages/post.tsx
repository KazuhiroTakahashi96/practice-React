import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<{
    body?: string;
    id?: number;
    title?: string;
    userId?: number;
  }>({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [postId]);

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

export default Post;
