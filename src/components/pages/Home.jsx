import React from "react";
import { Link } from "react-router-dom";
import { WindDirection } from "../hook/windDirections.js";
import { GiMultiDirections } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { RiWaterPercentLine } from "react-icons/ri";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const Home = ({
  icon,
  icon_description,
  temp,
  windDir,
  windSpeed,
  humadity,
  sunrise,
  sunset,
  day,
}) => {
  const temperature = Math.round(temp - 273.15).toFixed(0);
  const windHandler = new WindDirection(windDir);
  const windDirection = windHandler.currDir();

  const sunriseTimeHandler = (sunrise) => {
    const date = new Date(sunrise * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour + ":" + minute;

    return time;
  };

  const sunsetTimeHandler = (sunset) => {
    const date = new Date(sunset * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour + ":" + minute;

    return time;
  };

  return (
    <main className="container mx-auto my-2">
      <div className="flex justify-center items-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={icon_description}
          width={150}
          height={150}
        />
      </div>
      <div className="flex jusitfy-center items-center my-2">
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Temp</p>
          <div className="flex flex-row items-center">
            <p className="text-slate-100">{temperature}</p>
            <TbTemperatureCelsius className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Wind</p>
          <div className="flex flex-row items-center">
            <p className="text-slate-100">{`${windSpeed} m/s ${windDirection}`}</p>
            <GiMultiDirections className="text-md text-slate-100 ml-1" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Humadity</p>
          <div className="flex flex-row items-center">
            <p className="text-slate-100">{humadity}</p>
            <RiWaterPercentLine className="text-xl text-slate-100 ml-1" />
          </div>
        </div>
      </div>
      <div className="container w-3/4 mx-auto my-5">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <div className="flex flex-row items-center justify-center">
              <BsFillSunriseFill className="text-3xl text-slate-100 mr-2"/>
              <p className="text-slate-300 text-xl">
                {sunsetTimeHandler(sunrise)}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-row items-center justify-center">
              <BsFillSunsetFill className="text-3xl text-slate-100 mr-2"/>
              <p className="text-slate-300 text-xl">
                {sunriseTimeHandler(sunset)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="flex justify-start">
            <h5 className="text-slate-300 text-md">{day}</h5>
          </div>
          <div className="flex justify-end">
            <Link
              to={"/charts"}
              className="text-blue-400 text-md hover:text-slate-500"
            >
              view charts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
