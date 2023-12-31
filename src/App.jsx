import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";

import { FetchingData } from "./components/hook/fetchData";
import { Geolocation } from "./components/hook/geolocation";

import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import ForecastReport from "./components/pages/ForecastReport";
import Details from "./components/pages/Details";
import Navigation from "./components/UI/Navigation";
import SearchBar from "./components/pages/SearchBar";
import Charts from "./components/pages/Charts";
import Settings from "./components/pages/Settings";
import About from "./components/pages/About";

// Features for lazy loading for the end of projects
// const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  // State managment
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [day, setDay] = useState();

  // Functions
  const dataHandler = async () => {
    try {
      const geolocaton = new Geolocation();
      const coords = await geolocaton.start();
      if (coords) {
        const urls =
          process.env.REACT_APP_WEATHER_URL +
          `weather?lat=${coords.lat}&lon=${coords.lon}`;
        const fetchingData = new FetchingData(urls);
        const res = await fetchingData.get();

        console.log(res)
        setData(res);
      }
    } catch (err) {
      console.error("Error getting coordinates:", err);
    } finally {
      setLoading(false);
    }
  };

  const dateHandler = () => {
    const date = new Date();
    const todaysDate = date.toDateString().split(" ");

    const dayString =
      todaysDate[1] + " " + date.getDate() + ", " + todaysDate[3];
    setDate(dayString);
    setDay(todaysDate[0]);
  };

  // Change statment managment
  useEffect(() => {
    const confirmed = window.confirm(
      "You have to turn on the location for pogocast to use this application. Do you agree?"
    );
    if (confirmed) {
      dataHandler();
    }

    dateHandler();
    // eslint-disable-next-line
  }, []);

  return loading && !data ? (
    <div className="center">
      <CircleLoader color="#f1f5f9" size={200} />
    </div>
  ) : (
    <div className="container mx-auto">
      <BrowserRouter>
        {data && <Header cityName={data.name} country={data.sys.country} date={date} />}
        <Routes>
          <Route
            path="/"
            element={
              data && (
                <Home
                  icon={data.weather[0].icon}
                  icon_description={data.weather[0].description}
                  temp={data.main.temp}
                  windDir={data.wind.deg}
                  windSpeed={data.wind.speed}
                  humadity={data.main.humidity}
                  sunrise={data.sys.sunrise}
                  sunset={data.sys.sunset}
                  day={day}
                />
              )
            }
          />
          <Route path="/forecast" element={<ForecastReport />} />
          <Route
            path="/details"
            element={
              data && (
                <Details
                  icon={data.weather[0].icon}
                  icon_description={data.weather[0].description}
                  feels_like={data.main.feels_like}
                  temp_min={data.main.temp_min}
                  pressure={data.main.pressure}
                  rain={data.rain ? data.rain["1h"] : data.rain = {"1h": "0"}}
                  visibility={data.visibility}
                  windDir={data.wind.deg}
                  day={day}
                />
              )
            }
          />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
