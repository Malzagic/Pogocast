import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";

import fetchData from "./components/hook/fetchData";
import geolocation from "./components/hook/geolocation";

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
  const getData = async (lat, lon) => {
    const data = await fetchData(
      process.env.REACT_APP_WEATHER_URL + `?lat=${lat}&lon=${lon}`
    );

    console.log(data);
    setData(data);
    setLoading(false);
  };

  const getCoords = async () => {
    const coords = await geolocation();

    getData(coords.lat, coords.lon);
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
      getCoords();
    }

    dateHandler();
    // eslint-disable-next-line
  }, []);

  console.log(loading);

  return loading && !data ? (
    <div className="center">
      <CircleLoader color="#f1f5f9" size={200} />
    </div>
  ) : (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header cityName={data.name} date={date} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                icon={data.weather[0].icon}
                icon_description={data.weather[0].description}
                temp={data.main.temp}
                wind={data.wind.deg}
                humadity={data.main.humidity}
                sunrise={data.sys.sunrise}
                sunset={data.sys.sunset}
                day={day}
              />
            }
          />
          <Route path="/forecast" element={<ForecastReport />} />
          <Route path="/details" element={<Details />} />
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
