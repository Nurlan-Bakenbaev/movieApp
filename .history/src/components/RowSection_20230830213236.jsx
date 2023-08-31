import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RowSection = ({ title, fetchURL }) => {
  const [films, setFilms] = useState([]);
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
            <div
              key={id}
              className="relative p-2 inline-block w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer"
            >
              <img className="w-full h-full block "
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 overlay">
                <p className="text-white font-bold md:text-sm text-xs flex justify-center items-center h-full  text-center ">{item?.title}</p>
              <p>{isLiked ? }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowSection;
