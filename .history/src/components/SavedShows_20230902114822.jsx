import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState,useEffect  } from "react";
import {UserAuth} from './context/AuthContext'
import { db } from "./firebase";
import {updateDoc,doc,onSnapshot} from 'firebase/firestore'
 const {user} = UserAuth
const SavedShows = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      const scrollAmount = slider.offsetWidth;
      if (slider.scrollLeft - scrollAmount <= 0) {
        slider.scrollLeft = slider.scrollWidth;
      } else {
        slider.scrollLeft -= scrollAmount;
      }
    }
  };
  const slideRight = () => {
    const slider = document.getElementById("slider" );
    if (slider) {
      const scrollAmount = slider.offsetWidth;
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <h1 className="text-white p-4 fond-bold md:text-xl">Movies</h1>
      <div className="relative flex items-center group">
        <button onClick={slideLeft}>
          <ChevronLeftIcon
            fontSize="large"
            className="text-[orange] cursor-pointer opacity-0 group-hover:opacity-100 z-10 "
          />
        </button>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          <div
            key={item.id}
            className="relative p-2 inline-block  w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer"
          >
            <img
              className="w-full h-full block "
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 overlay">
              <p className="text-white font-bold md:text-sm text-xs flex justify-center items-center h-full  text-center ">
                {item?.title}
              </p>
              <p
                onClick={saveMovie}
                className="text-gray-300 absolute top-4 left-4 "
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </p>
            </div>
          </div>
        </div>
        <ChevronRightIcon
          onClick={slideRight}
          fontSize="large"
          className="text-[orange] cursor-pointer opacity-0  group-hover:opacity-100 z-10"
        />
      </div>
    </>
  );
};

export default SavedShows;
