import React from "react";
import Card from "../UX/Card";

const ForecastReport = () => {
  const src = "#";
  const hour = "14:00";
  const temp = "32 C";

  return (
    <main className="container mx-auto my-2 overflow-hidden pb-12">
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300">Today</h5>
        </div>
        <div className="flex mx-auto">
          <p className="text-slate-300">Forecast report</p>
        </div>
      </div>
      <div className="flex flex-col md:items-center justify-center">
        <Card src={src} hour={hour} temp={temp} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300">Next forecast</h5>
        </div>
        <div className="flex mx-auto">
          <h5 className="text-slate-300">5-days</h5>
        </div>
      </div>
      <div className="flex flex-col md:items-center justify-center">
        <Card src={src} hour={hour} temp={temp} />
        <Card src={src} hour={hour} temp={temp} />
        <Card src={src} hour={hour} temp={temp} />
        <Card src={src} hour={hour} temp={temp} />
        <Card src={src} hour={hour} temp={temp} />
      </div>
    </main>
  );
};

export default ForecastReport;
