import React from "react";

const layout = ({ children }) => {
  return (
    <div className="cont">
      <h2 className="text-5xl font-extrabold">Our Works</h2>
      {children}
    </div>
  );
};

export default layout;
