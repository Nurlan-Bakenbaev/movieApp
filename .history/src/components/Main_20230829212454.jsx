import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movie, setMovies] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then((response)=>{
    setMovies(responce)
})
},[])
  return <div>Main</div>;
};

export default Main;
