import React from "react";
import "./custombtn.css";

const customButton = ({ children, radiusButton, inheritBg, ...otherProps }) => {
  return (
    <button
      className={`${radiusButton ? "custom-radius" : ""} ${
        inheritBg ? "custom-button_inherit" : ""
      }  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
