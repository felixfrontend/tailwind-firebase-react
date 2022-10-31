import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="UpComming" fetchURL={requests.requestsUpoming} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestsPopular} />
      <Row rowId="3" title="Trending" fetchURL={requests.requestsTrending} />
      <Row rowId="4" title="Top Rated" fetchURL={requests.requestsTopRated} />
      {/* <Row title="Horror" fetchURL={requests.requestsHorror} /> */}
    </>
  );
};

export default Home;
