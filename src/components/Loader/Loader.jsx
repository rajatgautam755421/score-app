import React from "react";
import Loader from "react-loader-spinner";
const LoaderCom = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={200}
        width={200}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderCom;
