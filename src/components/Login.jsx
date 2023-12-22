import React from "react";
import { FcGoogle } from "react-icons/fc";
import { DiYahooSmall } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/login`, values)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/");
        } else {
          alert("Error in Registration");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="lg:w-full lg:flex">
        <div className="lg:w-1/2">
          <img
            src="https://static-01.daraz.lk/p/77487adf22141f4135415e0077e30a52.jpg_750x750.jpg_.webp"
            className="w-full h-full object-cover"
            alt="Sample image"
          />
        </div>

        <form onSubmit={handleSubmit} className="lg:w-1/2 p-8 mt-60">
          <p className="text-2xl font-semibold mb-4">Sign in with</p>

          <div className="flex flex-row gap-2 items-center mb-4">
            <FcGoogle size={30} />
            <DiYahooSmall size={50} />
            <FaFacebook size={30} />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="w-full rounded border border-blue-500 bg-transparent px-3 py-2 outline-none"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded border border-blue-500 bg-transparent px-3 py-2 outline-none"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full mt-4">
            Login
          </button>

          <p className="mt-2 text-sm font-semibold">
            Don't have an account?
            <Link
              to="/register"
              className="text-danger hover:text-danger-600 focus:text-danger-600 active:text-danger-700 font-bold underline underline-offset-4"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
