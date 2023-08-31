import React from "react";
import MainSection from "../MainSection";
import requests from "../../Request";
import RowSection from "../RowSection";
export const Home = () => {
  return (
    <div>
      <MainSection />
      <RowSection rowI title="Up Coming" fetchURL={requests.requestUpcoming} />
      <RowSection rowI title="Popular" fetchURL={requests.requestPopular} />
      <RowSection rowI title="Top Rated" fetchURL={requests.requestTopRated} />
      <RowSection rowI title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};
