import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleLogout = async()=>{
    try {
      await logOut()
      
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className=" w-full flex items-center justify-between p-4 z-[100] absolute">
      <Link to={"/"}>
        <h1 className="text-red-500 text-4xl font-bold cursor-pointer">
          MOVIE
        </h1>
      </Link>
     {
      user?.email ?  <div>
      <Link to={"/account"}>
        <button className="text-white pr-4">Account</button>
      </Link>
      <Link to={"/signup"}>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px6 py-2 p-2 rounded cursor-pointer text-white">
          Log Out
        </button>
      </Link>
    </div> :  <div>
        <Link to={"/login"}>
          <button className="text-white pr-4">Sign in</button>
        </Link>
        <Link to={"/signup"}>
          <button className="bg-red-500 hover:bg-red-600 px6 py-2 p-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
     }
    </div>
  );
};

export default Navbar;
