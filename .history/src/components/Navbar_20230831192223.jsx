import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to={"/"}>
        <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
          MOVIE
        </h1>
      </Link>
      <div>
        <Link to={"/login"}>
          <button className="text-white pr-4">Sign in</button>
        </Link>
        <Link to={'/signup'}>
          <button className="bg-red-500 px6 py-2 p-2 rounded cursor-pointer text-white">
            Sign out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
