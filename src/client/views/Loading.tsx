import React, { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fead12");

  return (
    <div className="loading-bg h-100 d-flex align-items-center justify-content-center">
      <div className="container loading-container d-flex flex-column align-items-center justify-content-center">
        <h2 className="loading-text text-center mb-4">Loading...</h2>
        <BounceLoader color={color} loading={loading} size={150} />
      </div>
    </div>
  );
};

export default Loading;
