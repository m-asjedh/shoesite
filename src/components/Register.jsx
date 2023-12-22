import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/register`, values)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/login");
        } else {
          alert("Error in Registration");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-running-shoe-buying-guide-refresh-lead-64517574cc201.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="w-full rounded border border-blue-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Email{" "}
                </label>

                <input
                  name="email"
                  className="w-full rounded border border-blue-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-black"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  name="password"
                  className="w-full rounded border border-blue-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>

              <div className="col-span-6">
                <p className="text-md text-black">
                  By creating an account, you agree to our{" "}
                  <span className="text-black">terms and conditions </span>
                  and <span className="text-black">privacy policy</span>.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
                  Create Account
                </button>

                <p className="mt-4 text-lg text-black sm:mt-0 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 font-bold  underline-offset-4">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-black  text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 font-bold underline underline-offset-4"
                  >
                    Log in
                    {"  "}
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
