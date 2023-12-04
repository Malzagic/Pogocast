import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="container mx-auto my-2 overflow-hidden pb-12">
      <h1 className="text-slate-100 text-center text-4xl">About</h1>
      <p className="text-slate-200 text-center text-md pt-4">
        This project is made for educational purposes by{" "}
        <Link
          to={"https://www.pmdev.ovh/"}
          target="_blank"
          className="text-slate-400 hover:text-blue-300 transition-all"
        >
          PMDev
        </Link>{" "}
        Przemysław Młoczkowski to show experience and improve skills in frontend
        development appliaction. Pogocast is appliaction for weather forecast
        and current weather statment. I use here{" "}
        <Link
          to={"https://openweathermap.org/api"}
          target="_blank"
          className="text-slate-400 hover:text-blue-300 transition-all"
        >
          openweatherapi
        </Link>{" "}
        to gain experience in API interfaces and show how I used them in
        application. Feel free to see how it works. Enjoy!
      </p>
    </main>
  );
};

export default About;
