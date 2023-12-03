import React from "react";
import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import Navigation from "./components/UI/Navigation";

const App = () => {
  const cityName = "Szczecin";

  return (
    <div className="container mx-auto">
      <Header cityName={cityName} />
      <Home />
      <Navigation />
    </div>
  );
};

export default App;
