import React from "react";
import { Link } from "react-router-dom";
import { WindDirection } from "../hook/windDirections";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiBarometer, WiRaindrops } from "react-icons/wi";
import { BsFillCloudFogFill } from "react-icons/bs";

const Details = ({
  icon,
  icon_description,
  feels_like,
  temp_min,
  pressure,
  rain,
  visibility,
  windDir,
  day
}) => {
  const feelsLike = Math.round(feels_like - 273.15).toFixed(0);
  const tempMin = Math.round(temp_min - 273.15).toFixed(0);
  const windHandler = new WindDirection(windDir);
  const windDirection = windHandler.currDir();

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
          <p className="text-slate-500">Rain within 1h (mm)</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{rain}</p>
            <WiRaindrops className="text-2xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Visibility in meters</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-slate-100">{visibility}</p>
            <BsFillCloudFogFill className="text-md text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Wind Direction</p>
          <p className="text-slate-100">{windDirection}</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex mx-auto">
          <h5 className="text-slate-300 text-md">{day}</h5>
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
