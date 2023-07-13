"use client";
import { useState } from "react";

const Card = ({ title, text, icon }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => setShowFull((prev) => !prev);

  {
    /* card style */
  }
  const cardClasses = `w-full h-64 bg-gray-400 border border-gray-400 rounded-lg shadow-md p-4 py-6 hover:scale-y-110  hover:pb-8 ease-in-out duration-300 hover:my-2 hover:h-auto`;

  return (
    <div
      className={cardClasses}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div
        className={`flex items-center justify-center ${
          showFull ? "scale-x-110 ease-in-out duration-300" : ""
        }`}
      >
        {icon}
      </div>

      <h2 className="text-xl font-medium mt-4">{title}</h2>
      <div className="mt-4 text-gray-300 text-[14px]">
        <p>{showFull ? text : text.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default Card;
