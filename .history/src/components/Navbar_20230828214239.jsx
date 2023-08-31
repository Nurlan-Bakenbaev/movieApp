import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl font-bold cursor-pointer">MOVIE</h1>
      <div>
        <button>Sign in</button>
        <button className="bg-red-500 px6 py-2 rounded curso">Singo out</button>
      </div>
    </div>
  );
};

export default Navbar;
