import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movie, setMovie] = useState([]);
useEffect(()=>{
axios.get(requests.requestPopular).then(())
},[])
  return <div>Main</div>;
};

export default Main;
