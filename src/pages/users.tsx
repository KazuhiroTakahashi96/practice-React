import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="p-5">
      <h2 className="">Users</h2>
      <Outlet />
    </div>
  );
};

export default Users;
