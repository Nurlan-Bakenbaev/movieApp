import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RowSection = ({ title, fetchURL }) => {
  const [films, setFilms] = useState([]);
  const [isLiked, setLiked] = useState(false);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setFilms(response.data.results);
    });
  }, [fetchURL]);
  console.log(films);
  return (
    <div>
      <h1 className="text-white p-4 fond-bold md:text-xl">{title}</h1>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {films.map((item, id) => (
         <MovieRows/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowSection;
