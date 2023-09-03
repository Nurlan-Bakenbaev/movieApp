import React, { useEffect, useState } from "react";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const MovieDetail = () => {
  const [movie, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user?.email) {
      const docRef = doc(db, "users", user.email);

      const unsubscribe = onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
          setMovies(doc.data().selectedMovie);
        }
      });

      return () => unsubscribe();
    }
  }, [user?.email]);
  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full">
        <div className="absolute flex items-center justify-center w-full h-[550px]  bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-[550px] object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
          alt={movie?.movieTitle}
        />
      </div>
      <div className="flex items-center absolute top-[300px] left-[10%]">
        <div>
          <img
            className="relative h-[300px] w-auto"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster}`}
            alt="Poster"
          />
          <button className="text-green-500 absolute bottom-2 left-2 flex">
            <ThumbUpIcon/><span className="text-gray-400 ml-1">{movie.vote}</span>
          </button>
        </div>
        <div className=" w-full p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {movie?.movieTitle}{" "}
          </h1>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release} rating:
            <span className="text-sm text-white m-1 p-1 bg-orange-500 rounded">{`TMDB ${movie?.voteRate}`}</span>
            <span className="mx-2 uppercase">lang:{movie.lang} </span>
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
