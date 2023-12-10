import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FetchingData } from "../hook/fetchData";
import { Geolocation } from "../hook/geolocation";
import Card from "../UX/Card";
import CircleLoader from "react-spinners/ClipLoader";

const ForecastReport = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const src = "#";
  const hour = "14:00";
  const temp = "32 C";

  const dataHandler = async () => {
    try {
      const geolocaton = new Geolocation();
      const coords = await geolocaton.start();
      if (coords) {
        const urls =
          process.env.REACT_APP_WEATHER_URL +
          `forecast?lat=${coords.lat}&lon=${coords.lon}`;
        const fetchingData = new FetchingData(urls);
        const res = await fetchingData.get();

        setData(res);
      }
    } catch (err) {
      console.error("Error getting coordinates:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return loading && !data ? (
    <div className="center">
      <CircleLoader color="#f1f5f9" size={200} />
    </div>
  ) : (
    <main className="container mx-auto my-2 overflow-hidden pb-12">
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300">Today</h5>
        </div>
        <div className="flex mx-auto">
          <p className="text-slate-300">Forecast report</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {data.list.length > 0 && (
          <Card
            key={uuidv4()}
            src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
            hour={data.list[0].dt_txt}
            temp={data.list[0].main.temp}
            description={data.list[0].weather[0].description}
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex mx-auto">
          <h5 className="text-slate-300">Next forecast</h5>
        </div>
        <div className="flex mx-auto">
          <h5 className="text-slate-300">5-days/6:00-00:00</h5>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {data.list
          .filter((item, index) => index > 0)
          .map((item) => (
            <Card
              key={uuidv4()}
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              hour={item.dt_txt}
              temp={item.main.temp}
              description={item.weather[0].description}
            />
          ))}
      </div>
    </main>
  );
};

export default ForecastReport;
