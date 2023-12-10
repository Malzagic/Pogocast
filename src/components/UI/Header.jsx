import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Header = ({ cityName, country, date }) => {
  return (
    <header className="container mx-auto my-8">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <FaLocationDot className="text-slate-100 text-3xl drop-shadow-md" />
          <span className="mx-2">
            <h1 className="text-6xl text-slate-100 drop-shadow-md">
              {cityName},
            </h1>
          </span>
          <span className="text-6xl text-slate-100 mx-2">{country}</span>
        </div>
        <div className="flex justify-center items-center pt-2">
          <h3 className="text-slate-300 text-lg">{date}</h3>
        </div>
        <div className="flex justify-center items-center pt-4">
          <Link
            to={"/forecast"}
            type="button"
            className="text-slate-100 border border-slate-500 hover:border-0 hover:bg-blue-700 focus:bg-blue-700 acitive:bg-blue-700 px-5 py-2 rounded transition-all"
          >
            Forecast
          </Link>
          <Link
            to={"/details"}
            type="button"
            className="text-slate-100 border border-slate-500 hover:border-0  hover:bg-blue-700 focus:bg-blue-700 acitive:bg-blue-700 px-5 py-2 rounded transition-all"
          >
            Details
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
