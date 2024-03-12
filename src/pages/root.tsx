import { Link, NavLink, Outlet, Routes } from "react-router-dom";

const Root = () => {
  return (
    <>
      <ul className="absolute left-0 h-full w-40 bg-white p-5 pt-10 leading-8">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/posts"
          >
            POSTS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/users"
          >
            USERS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/form"
          >
            FORM
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-sky-600" : "")}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Root;
