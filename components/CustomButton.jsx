import React from "react";

const CustomButton = ({ title, containerStyle, iconRight }) => {
  return (
    <button className={`inline-flex items-center ${containerStyle}`}>
      {title}
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
