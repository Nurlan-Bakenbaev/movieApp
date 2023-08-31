import React from "react";
import MainSection from "../MainSection";
import requests from "../../Request";
export const Home = () => {
  return (
    <div>
      <MainSection />
      <RowSection 
      title="Up Coming" 
      fetchURL={requests.requestUpcoming} />
      <RowSection 
      title="Up Coming" 
      fetchURL={requests.requestUpcoming} /><RowSection 
      title="Up Coming" 
      fetchURL={requests.requestUpcoming} />
    </div>
  );
};
