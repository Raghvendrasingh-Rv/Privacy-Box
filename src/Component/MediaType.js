import React from "react";
import { useNavigate } from "react-router-dom";

function MediaType({ heading, param }) {
  const navigate = useNavigate();
  console.log({ param });

  return (
    <div
      className="box"
      onClick={() => {
        if (param === 1) return navigate("/textstore");
        else if (param === 2) navigate("/imagestore");
        else if (param === 3) navigate("/videostore");
        else if (param === 4) navigate("/hiddenitemstore");
      }}
    >
      <h1 className="txt">{heading}</h1>
    </div>
  );
}

export default MediaType;
