import React, { useEffect, useState } from "react";
import { FetchingData } from "../hook/fetchData";
import { FaSearch } from "react-icons/fa";
import ForecastReport from "./ForecastReport";

const SearchBar = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState();
  const dataHandler = async () => {
    try {
      const urls = process.env.REACT_APP_WEATHER_URL + `weather?q=${cityName}`;
      const fetchingData = new FetchingData(urls);
      const res = await fetchingData.get();

      console.log(res);
      setData(res);
    } catch (err) {
      console.error("Error getting coordinates:", err);
    } finally {
      setLoading(false);
    }
  };

  const boolen = true;
  return (
    <main className="container mx-auto my-2 overflow-hidden pb-12">
      <div className="flex justify-center items-center">
        <form>
          <div className="relative">
            <div className="text-sm text-slate-600 absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              className="block w-full text-md text-slate-600 py-2 px-4 ps-10 border-0 rounded outline-blue-300"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-sm text-slate-100 absolute end-2.5 bottom-1.5 px-3 py-1 rounded-lg bg-blue-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {boolen && (
        <div className="flex flex-col pt-5">
          <ForecastReport />
        </div>
      )}
    </main>
  );
};

export default SearchBar;
