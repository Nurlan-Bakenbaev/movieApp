import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movie, setMovies] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then((responce)=>{
    setMovie
})
},[])
  return <div>Main</div>;
};

export default Main;
