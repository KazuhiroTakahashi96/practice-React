import * as React from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound";
interface LoginForm {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange", // (property) mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all" | undefined
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <>
      {/* <div className="h-screen bg-gray-600 flex justify-center items-center"> */}
      <div className="h-screen bg-gray-200 flex justify-around items-center">
        <ul className="bg-white p-5">
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
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About message="Aboutページ" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-2/5 text-lg bg-white p-10 rounded-md"
        >
          <div className="py-3">
            <label htmlFor="name">名前</label>
            <input
              id="name"
              type="text"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
              {...register("name")}
            />
            <p className="text-red-600 text-sm">
              {errors.name?.message as React.ReactNode}
            </p>
          </div>
          <div className="py-3">
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="email"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
              {...register("email")}
            />
            <p className="text-red-600  text-sm">
              {errors.email?.message as React.ReactNode}
            </p>
          </div>
          <div className="py-3">
            <label htmlFor="name">パスワード</label>
            <input
              id="password"
              type="password"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
              {...register("password")}
            />
            <p className="text-red-600  text-sm">
              {errors.password?.message as React.ReactNode}
            </p>
          </div>

          <button className="mt-5 p-2 bg-blue-400 w-full text-slate-100 rounded-md">
            送信
          </button>
        </form> */}
      </div>
    </>
  );
}

export default App;
