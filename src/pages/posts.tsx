import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <div className="p-5">
      <h2 className="">Posts</h2>
      <Outlet />
    </div>
  );
};

export default Posts;
