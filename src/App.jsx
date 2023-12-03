import React from "react";
import Header from "./components/UI/Header";
import Navigation from "./components/UI/Navigation";

const App = () => {
  const cityName = "Szczecin";
  
  return (
    <div className="container mx-auto">
      <Header cityName={cityName}/>
      <Navigation />
    </div>
  );
};

export default App;
