import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import ForecastReport from "./components/pages/ForecastReport";
import Details from "./components/pages/Details";
import Navigation from "./components/UI/Navigation";
import SearchBar from "./components/pages/SearchBar";

// Features for lazy loading for the end of projects
// const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  const cityName = "Szczecin";

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header cityName={cityName} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/forecast" element={<ForecastReport />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="/search" element={<SearchBar/>}/>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
