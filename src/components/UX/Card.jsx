import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

const Card = ({ src, hour, temp, description }) => {
  const temperature = Math.round(temp - 273.15).toFixed(0);
  return (
    <div className="p-4 bg-blue-600 border border-blue-800 rounded-lg shadow-md m-2">
      <div className="flex justify-between items-center">
        <img src={src} alt={description} width={50} height={50} />
        <p className="text-sm text-slate-100">{description}</p>
        <div className="flex flex-col items-end">
          <p className="text-slate-100">{hour}</p>
          <div className="flex flex-row items-center">
            <p className="text-slate-100">{temperature}</p>
            <TbTemperatureCelsius className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
