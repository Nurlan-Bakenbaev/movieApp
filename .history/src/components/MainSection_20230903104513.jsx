import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import backgroundMain from "./OfflineContent/backgroundMain.jpg";
const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
      console.log(response.data) 
    });
  }, []);
  
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];
  if (!movies) {
    return (
      <>
        <img src={backgroundMain} alt="background" />
      </>
    );
  } else
    return (
      <div className="w-full h-[550px]  text-white">
        <div className="w-full h-full">
          <div className="absolute flex items-center justify-center w-full h-[550px]  bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-[550px] object-cover "
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="absolute w-full top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title} </h1>
          <div className="my-2">
            <button className="border text-black bg-white rounded py-2 px-5  hover:bg-gray-400 transition duration-500 ease-in-out">
              Play
            </button>
            <button className="hover:text-red-500 border text-white border-gray-300 rounded py-2 px-5 m-4 ">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date} rating:<span className="text-sm text-white m-1 p-1 bg-orange-500 rounded">{`TMDB ${movie?.vote_average}`}</span>
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)} 
          </p>
        </div>
      </div>
    );
};

export default Main;
