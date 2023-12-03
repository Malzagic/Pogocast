import React from "react";

const Home = () => {
  return (
    <main className="container mx-auto my-2">
      <div className="flex justify-center items-center">
        <img src="#" alt="weather icon" />
      </div>
      <div className="flex jusitfy-center items-center my-2">
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Temp</p>
          <p className="text-slate-100">32 c</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Wind</p>
          <p className="text-slate-100">32 c</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Humadity</p>
          <p className="text-slate-100">32 c</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300 text-md">Monday</h5>
        </div>
        <div className="flex mx-auto">
          <a href="#" className="text-blue-400 text-md hover:text-slate-500">view charts</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
