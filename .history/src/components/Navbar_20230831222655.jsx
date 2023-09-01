import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  return (
    <div className=" w-full flex items-center justify-between p-4 z-[100] absolute">
      <Link to={"/"}>
        <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
          MOVIE
        </h1>
      </Link>
     {
      user?.email ? 
     }
    </div>
  );
};

export default Navbar;
