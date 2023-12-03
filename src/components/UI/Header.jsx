import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Header = ({ cityName }) => {
  return (
    <header className="container mx-auto my-8">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <FaLocationDot className="text-slate-100 text-3xl drop-shadow-md" />
          <span className="mx-2">
            <h1 className="text-6xl text-slate-100 drop-shadow-md">
              {cityName}
            </h1>
          </span>
        </div>
        <div className="flex justify-center items-center pt-2">
          <h3 className="text-slate-300 text-lg">May 18, 2023</h3>
        </div>
        <div className="flex justify-center items-center pt-4">
          <button type="button" className="text-slate-100 border border-slate-500 hover:border-0 hover:bg-blue-700 focus:bg-blue-700 acitive:bg-blue-700 px-5 py-2 rounded transition-all">Forecast</button>
          <button type="button" className="text-slate-100 border border-slate-500 hover:border-0  hover:bg-blue-700 focus:bg-blue-700 acitive:bg-blue-700 px-5 py-2 rounded transition-all">Air Quality</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
