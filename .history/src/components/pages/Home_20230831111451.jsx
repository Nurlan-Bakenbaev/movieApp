import React from "react";
import MainSection from "../MainSection";
import requests from "../../Request";
import RowSection from "../RowSection";
export const Home = () => {
  return (
    <div>
      <MainSection />
      <RowSection rowId={1} title="Up Coming" fetchURL={requests.requestUpcoming} />
      <RowSection rowId={2} title="Popular" fetchURL={requests.requestPopular} />
      <RowSection rowId={3} title="Top Rated" fetchURL={requests.requestTopRated} />
      <RowSection rowId={4} title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};
export default
