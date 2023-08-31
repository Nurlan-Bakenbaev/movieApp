import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieRows from "./MovieRows";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const RowSection = ({ title, fetchURL }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setFilms(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      const scrollAmount = slider.offsetWidth; // Scroll one container width to the left
      if (slider.scrollLeft - scrollAmount <= 0) {
        slider.scrollLeft = slider.scrollWidth; // Loop to the end
      } else {
        slider.scrollLeft -= scrollAmount;
      }
    }
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      const scrollAmount = slider.offsetWidth; // Scroll one container width to the right
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0; 
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  

  return (
    <div>
      <h1 className="text-white p-4 fond-bold md:text-xl">{title}</h1>
      <div className="relative flex items-center group">
        <button onClick={slideLeft}>
          <ChevronLeftIcon
            fontSize="large"
            className="text-white  cursor-pointer opacity-70 hover:opacity-100 z-10 "
          />
        </button>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((item, id) => (
            <MovieRows key={id} item={item} />
          ))}
        </div>
        <ChevronRightIcon
        onClick={slideRight}
          fontSize="large"
          className="text-white  cursor-pointer opacity-70 hover:opacity-100 z-10"
        />
      </div>
    </div>
  );
};

export default RowSection;
