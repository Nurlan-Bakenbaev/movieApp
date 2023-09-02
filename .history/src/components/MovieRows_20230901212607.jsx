import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { db } from "./firebase";
import ErrorMessage from "./ErrorMessage";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const MovieRows = ({ item }) => {
  const { user } = UserAuth();
  const [isLiked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLiked(!isLiked);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
       alert('Please log in to save a movie')
    }
  };
  return (
    <div
      key={item.id}
      className="relative p-2 inline-block  w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer"
    >
      <img
        className="w-full h-full block "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 overlay">
        <p className="text-white font-bold md:text-sm text-xs flex justify-center items-center h-full  text-center ">
          {item?.title}
        </p>
        <p onClick={saveMovie} className="text-gray-300 absolute top-4 left-4 ">
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </p>
      </div>
    </div>
  );
};

export default MovieRows;
