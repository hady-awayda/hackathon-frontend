import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((global) => global);
  console.log(state);
  return <div></div>;
};

export default Home;
