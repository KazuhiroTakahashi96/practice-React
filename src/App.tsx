import * as React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
import Form from "./pages/form";
import Posts from "./pages/posts";
import Post from "./pages/post";
import PostIndex from "./pages/postIndex";

function App() {
  return (
    <>
      <div className="relative flex justify-start items-center">
        <ul className="absolute left-0 h-full w-40 bg-white p-5 pt-10 leading-8">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600" : undefined
              }
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600" : undefined
              }
              to="/posts"
            >
              POSTS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600" : undefined
              }
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600" : undefined
              }
              to="/form"
            >
              FORM
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-sky-600" : undefined
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="ml-40 h-screen overflow-y-auto w-full bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />}>
              <Route index element={<PostIndex />} />
              <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="/about" element={<About message="Aboutページ" />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
