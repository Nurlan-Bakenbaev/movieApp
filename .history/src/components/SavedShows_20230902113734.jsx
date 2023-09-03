import React from "react";

const SavedShows = () => {
  return (
    <>
      <h1 className="text-white p-4 fond-bold md:text-xl">{title}</h1>
      <div className="relative flex items-center group">
        <button onClick={slideLeft}>
          <ChevronLeftIcon
            fontSize="large"
            className="text-[orange] cursor-pointer opacity-0 group-hover:opacity-100 z-10 "
          />
        </button>
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {films.map((item, id) => (
            <MovieRows key={id} item={item} />
          ))}
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
