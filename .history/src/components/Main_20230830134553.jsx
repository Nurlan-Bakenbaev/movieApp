import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);
  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px]  bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-[550px] object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w">
        <button className="border text-black bg-white rounded py-2 px-5  hover:bg-blue-500 transition duration-500 ease-in-out">
          Play
        </button>
        <button className="border text-white border-gray-300 rounded py-2 px-5 m-4 ">
          Watch later
        </button>
      </div>
    </div>
  );
};

export default Main;
