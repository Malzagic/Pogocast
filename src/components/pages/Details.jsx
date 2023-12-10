import React from "react";
import { Link } from "react-router-dom";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiBarometer, WiRaindrops } from "react-icons/wi";
import { AiOutlinePercentage } from "react-icons/ai";

const Details = ({
  icon,
  icon_description,
  feels_like,
  temp_min,
  pressure,
  rain,
  visibility,
}) => {
  const feelsLike = Math.round(feels_like - 273.15).toFixed(0);
  const tempMin = Math.round(temp_min - 273.15).toFixed(0);
  return (
    <main className="container mx-auto my-2">
      <div className="flex justify-center items-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={icon_description}
        />
      </div>
      <div className="grid grid-cols-3 jusitfy-center items-center gap-2 my-2">
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Feels Like</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{feelsLike}</p>
            <TbTemperatureCelsius className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Temp min</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{tempMin}</p>
            <TbTemperatureCelsius className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Pressure (hpa)</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{pressure}</p>
            <WiBarometer className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Rain (mm)</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{rain}</p>
            <WiRaindrops className="text-2xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Visibility</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{visibility}</p>
            <AiOutlinePercentage className="text-md text-slate-100 ml-1" />
          </div>
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
