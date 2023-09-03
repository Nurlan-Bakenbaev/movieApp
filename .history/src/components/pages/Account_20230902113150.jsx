import React from "react";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="absolute w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/9fdf8a2d-d6e3-4d7b-8756-3656013869ef/DE-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className=" absolute top-[20%] p-4 md:p-8"></div>
       <h1 className="text-3xl md:text">My Movies</h1>
        </div>
      </div>
    </>
  );
};

export default Account;
