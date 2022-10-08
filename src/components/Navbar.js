import React from "react";
// import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <header className="sticky z-50 top-0 w-full bg-slate-900/80 text-white h-16 flex items-center px-3 justify-between">
        {/* <!-- left elements div --> */}
        <div className="left-div logo">
          <img className="h-10" src="src/img/whatsapp.png" alt="" />
        </div>

        {/* <!-- right elements div --> */}
        <nav className="right-div">
          <button onClick={props.toggleNavBar} className="p-2 mr-1 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-cyan-800 space-y-2 p-5 mt-3 font-nunito font-medium text-lg z-50 transform translate-x-full ${props.mode === "false" ? "translate-x-0" : "translate-x-full"} duration-300 md:relative md:flex md:min-h-0 md:space-y-0 md:p-0 md:bg-opacity-0 md:opacity-100 md:mt-0 md:space-x-4 md:translate-x-0 md:mr-2`}
          >
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <a href="/home">Home</a>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <a href="/">About</a>
            </li>
            <li className="hover:bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none focus:bg-indigo-500">
              <a href="/">Products</a>
            </li>
            <li className="bg-indigo-500 rounded-2xl px-3 py-2 text-center focus:outline-none hover:bg-teal-600 duration-300">
              <a href="/form">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
