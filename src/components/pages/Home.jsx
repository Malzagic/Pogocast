import React from "react";
import { Link } from "react-router-dom";

const Home = ({ icon, icon_description, temp, wind, humadity, sunrise, sunset, day }) => {
  const temperature = Math.round(temp - 273.15).toFixed(0);

  const windDirection = (wind) => {
    const direction = ["N", "E", "S", "W"];
    let currDirection;

    if (wind === 0 || (wind >= 0 && wind < 90)) {
      currDirection = direction[0];
    } else if (wind === 90 || (wind >= 90 && wind < 180)) {
      currDirection = direction[1];
    } else if (wind === 180 || (wind >= 180 && wind < 270)) {
      currDirection = direction[2];
    } else if (wind === 270 || (wind >= 270 && wind < 339)) {
      currDirection = direction[3];
    }

    return currDirection;
  };

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
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon_description} width={150} height={150}/>
      </div>
      <div className="flex jusitfy-center items-center my-2">
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Temp</p>
          <p className="text-slate-100">{temperature}</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Wind</p>
          <p className="text-slate-100">{windDirection(wind)}</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-slate-500">Humadity</p>
          <p className="text-slate-100">{humadity}</p>
        </div>
      </div>
      <div className="container w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <p className="text-slate-300 text-md">
              Sunrise: {sunriseTimeHandler(sunrise)}
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-slate-300 text-md">Sunset: {sunsetTimeHandler(sunset)}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
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
