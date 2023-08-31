import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl font-bold cursor-pointer">MOVIE</h1>
      <div>
        <button className="text-white ">Sign in</button>
        <button className="bg-red-500 px6 py-2 rounded cursor-pointer text-white">Singo out</button>
      </div>
    </div>
  );
};

export default Navbar;
