import React from "react";
import Cards from './Cards';

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-5 text-white">
        Categories
      </h1>
      <div className="card-contain flex flex-wrap justify-center">
        <Cards title="International Jerseys" />
        <Cards title="Design Concepts" />
        <Cards title="League Jerseys" />
      </div>
    </div>
  );
}

export default Home;
