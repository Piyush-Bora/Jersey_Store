import React from "react";
// import PropTypes from "prop-types";

function Cards(props) {
  return (
    <>
      <div className="card max-w-[30rem] m-6 max-h-full rounded-lg flex flex-col hover:scale-105 transform duration-300 shadow-2xl md:m-0 md:w-[23rem] mx-2 my-2 md:mx-4 md:my-4">
        <div className="img focus:outline-none">
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Category-img"
            className="rounded-t-lg object-cover h-[20rem] w-full focus:outline-none"
          />
        </div>
        <div className="text-part bg-white flex flex-col justify-between rounded-b-lg focus:outline-none">
          <span className="p-2 font-bold text-xl text-center">
            {props.title}
          </span>
          <hr className={`bg-gray-700 mx-5 ${props.description ? '' : 'hidden'}`} />
          <p className={`p-5 text-sm text-justify ${props.description ? '' : 'hidden'}`}>
            {props.description}
          </p>
          <a rel="noreferrer" href={props.link} className="m-3">
            <button className="bg-blue-900 text-white rounded-lg p-2 min-w-full">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {};

export default Cards;
