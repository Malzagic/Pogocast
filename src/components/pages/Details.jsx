import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <main className="container mx-auto my-2">
      <div className="flex justify-center items-center">
        <img src="#" alt="weather icon" />
      </div>
      <div className="grid grid-cols-3 jusitfy-center items-center gap-2 my-2">
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Feels Like</p>
          <p className="text-slate-100">32 c</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Temp min</p>
          <p className="text-slate-100">29 c</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Pressure</p>
          <p className="text-slate-100">1020 hpa</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Pressure</p>
          <p className="text-slate-100">1020 hpa</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Visibility</p>
          <p className="text-slate-100">100%</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Wind Direction</p>
          <p className="text-slate-100">West</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300 text-md">Monday</h5>
        </div>
        <div className="flex mx-auto">
          <Link
            to={"/charts"}
            className="text-blue-400 text-md hover:text-slate-500"
          >
            view charts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Details;
