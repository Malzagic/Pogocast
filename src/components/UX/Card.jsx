import React from "react";

const Card = ({src, hour, temp}) => {
  return (
    <div className="p-4 bg-blue-600 border border-blue-800 rounded-lg shadow-md m-2">
      <div className="flex justify-between">
        <img src={src} alt="forecast icon" />
        <div className="flex flex-col">
          <p className="text-slate-100">{hour}</p>
          <p className="text-slate-100">{temp}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
