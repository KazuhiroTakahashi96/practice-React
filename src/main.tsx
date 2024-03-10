import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Form from "./pages/form";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Post, { loader as postLoader } from "./pages/post";
import PostIndex, { loader as postsLoader } from "./pages/postIndex";
import Posts from "./pages/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            element: <Post />,
            loader: postLoader,
            errorElement: <NotFound />,
          },
        ],
      },
      {
        path: "about",
        element: <About message="Aboutページ" />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
