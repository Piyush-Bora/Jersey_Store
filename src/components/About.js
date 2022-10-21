import React from "react";
import Cards from "./Cards";

function About() {
  return (
    <div className="min-h-[calc(100vh-244px-64px)]">
      <div className="w-full text-4xl text-center mt-4 mb-2 font-bold text-white">
        Our Developers
      </div>
      <div className="h-1 rounded-full mx-[40rem] bg-white"></div>
      <div className="card-contain flex flex-wrap justify-center mt-4">
        <Cards title="Piyush Bora" />
        <Cards title="Harsh Chaudhari" />
        <Cards title="Amar Dalvi" />
      </div>
    </div>
  );
}

export default About;
