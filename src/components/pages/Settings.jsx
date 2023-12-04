import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <main className="container md:w-1/2 mx-auto my-2 overflow-hidden pb-12">
        <div className="flex flex-col justify-center mx-5">
          <Link
            to={"/about"}
            type="button"
            className="text-slate-100 text-lg w-50 text-center bg-blue-700 px-10 py-2 rounded border border-slate-600 hover:border-0 transition-all"
          >
            About
          </Link>
        </div>
      </main>
      <footer className="footer flex justify-center">
        <p className="text-slate-100 text-sm">Copyright &copy; PMDev {date}</p>
      </footer>
    </>
  );
};

export default Settings;
