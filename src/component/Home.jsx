// import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import "./Home.css";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p> Loading....</p>}
      {data && <BlogList data={data} />}

    </div>
  );
};

export default Home;
 