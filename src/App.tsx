import * as React from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Root from "./pages/root";

function App() {
  return (
    <>
      <div className="relative flex justify-start items-center">
        <Root />
        <div className="ml-40 h-screen overflow-y-auto w-full bg-gray-200">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
