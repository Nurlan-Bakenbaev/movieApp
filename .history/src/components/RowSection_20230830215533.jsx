import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieRows from "./MovieRows";
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
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroo">
          {films.map((item, id) => (
            <MovieRows key={id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowSection;
