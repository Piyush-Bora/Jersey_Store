import React from "react";
import Cards from "./Cards";
import piyush from "../images/PiyushImg.jpg";
import harsh from "../images/Harsh.jpg";
import amar from "../images/Amar.jpg";

function About() {
  return (
    <div className="min-h-[calc(100vh-244px-64px)]">
      <div className="w-full text-4xl text-center mt-4 mb-2 font-bold text-[#c4d5f0]">
        Our Developers
      </div>
      {/* <div className="h-1 rounded-full mx-[40rem] bg-[#c4d5f0]"></div> */}
      <div className="card-contain flex flex-wrap justify-center mt-4">
        <Cards title="Piyush Bora" imgUrl={piyush} link="https://github.com/Piyush-Bora" />
        <Cards title="Harsh Chaudhari"  imgUrl={harsh}  link="https://github.com/HarshC-11" />
        <Cards title="Amar Dalvi" imgUrl={amar}  link="https://github.com/Amar1510" />
      </div>
    </div>
  );
}

export default About;
