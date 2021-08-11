import React from "react";

const SliderSingle = ({ img }) => {
  return (
    <div
      className="container-fluid carousel"
      style={{ backgroundImage: "url({img})" }}
    ></div>
  );
};

export default SliderSingle;
