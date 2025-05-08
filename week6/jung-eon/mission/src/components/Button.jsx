import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button className="blue-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
