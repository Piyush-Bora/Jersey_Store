import React from "react";

export default function Form(props) {

  return (
    <div className="min-h-[calc(100vh-244px-64px)] flex justify-center">
      <div className="chat-form w-full flex justify-center items-center">
        <div className="contain w-[calc(100%-20px)] sm:w-[calc(100%-60px)] h-auto lg:w-1/3 bg-white rounded-xl">
          <form className="p-4 md:p-7 font-nunito">
            {/* <!-- header text --> */}
            <div className="head text-2xl font-bold text-center">
              <h3>Login Page</h3>
              <div className="dash h-1 bg-blue-500 rounded-3xl max-w-full mx-8 mt-2"></div>
            </div>

            {/* <!-- mobile number div --> */}
            <div className="flex flex-col mt-7">
              <span className="text-lg font-semibold text-gray-700">
                Enter the Mobile Number here:
              </span>
              <input
                id="phnum"
                type="text"
                className="block w-full bg-slate-300 rounded-md py-2 px-4 mt-2 focus:outline-gray-400 focus:bg-slate-100"
              />
              <span className="text-lg font-semibold text-gray-700 mt-4">
                Password
              </span>
              <input 
                id="phnum"
                type="password"
                className="block w-full bg-slate-300 rounded-md py-2 px-4 mt-2 focus:outline-gray-400 focus:bg-slate-100"
              />
            </div>

            {/* <!-- submit button div --> */}
            <div onClick={props.link} className="space-y-2 mt-6">
              <a
                id="chatbtn"
                href="/"
                onClick="chatlink();"
                type="button"
                className="flex space-x-2 justify-center items-center mt-3 bg-indigo-700 w-full rounded-lg py-2 px-4 focus:outline-none hover:bg-indigo-600 duration-200"
              >
                <img alt="" src="src/whatsapp.png" className="h-6" />
                <span className="text-white text-lg">Login</span>
              </a>
            </div>
          </form>
          {/* <!-- end of form --> */}
        </div>
      </div>
    </div>
  );
}
