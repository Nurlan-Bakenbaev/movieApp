import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);

      navigate("/");
    } catch (err) {
    if (error.code === "auth/wrong-password"){
      
    }
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/9fdf8a2d-d6e3-4d7b-8756-3656013869ef/DE-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/75">
          <div className="max-w-[320px] mx-auto py-16 text-white">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? (
              <p className="bg-red-400 rounded text-center p-3 ">{error}</p>
            ) : (
              ""
            )}
            <form onSubmit={handleSumbit} className="flex flex-col w-full py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded outline-none "
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded outline-none"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-700 py-3 my-6 rounded font-bold">
                Log In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>
                  <input className="mr-2 " type="checkbox" /> Remember me
                </p>
                <p>Need help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600 ">New to Netflix?</span>
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
