import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then((response)=>{
    setMovies(response.data.results)
})
},[])
console.log(movies)

const movie = movies[Math.floor(Math.random()*movies.length)]
console.log(movie)
return <div className="w-full h_[100vh] text-white">
    <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
    <button> Play</button>
    <button > Watch list</button>
    </div>;
};

export default Main;
