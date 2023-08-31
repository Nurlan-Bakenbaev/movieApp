import React from "react";
import MainSection from "../MainSection";
import requests from "../../Request";
import RowSection from "../RowSection";
export const Home = () => {
  return (
    <div>
      <MainSection />
      <RowSection rowId title="Up Coming" fetchURL={requests.requestUpcoming} />
      <RowSection rowId title="Popular" fetchURL={requests.requestPopular} />
      <RowSection rowId title="Top Rated" fetchURL={requests.requestTopRated} />
      <RowSection rowId title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};
