import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaChartPie } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="container fixed bottom-0 mx-auto my-5">
      <ul className="flex justify-around items-center z-10">
        <Link className="mx-2" to={"/"}>
          <FaHome className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </Link>
        <Link className="mx-2" to={"/search"}>
          <FaSearch className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </Link>
        <Link className="mx-2" to={"/charts"}>
          <FaChartPie className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </Link>
        <Link className="mx-2" to={"/settings"}>
          <IoMdSettings className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
