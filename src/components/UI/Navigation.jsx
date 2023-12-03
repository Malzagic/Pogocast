import React from "react";
import { FaHome, FaSearch, FaChartPie } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="container fixed bottom-0 mx-auto my-5">
      <ul className="flex justify-around items-center">
        <li className="mx-2">
          <FaHome className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </li>
        <li className="mx-2">
          <FaSearch className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </li>
        <li className="mx-2">
          <FaChartPie className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </li>
        <li className="mx-2">
          <IoMdSettings className="text-slate-100 hover:text-slate-500 active:text-slate-600 text-2xl drop-shadow-md" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
