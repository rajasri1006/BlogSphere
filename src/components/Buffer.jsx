import React from "react";
import "./styles/buffer.css";

const Buffering = () => {
  return (
    <div className="relative w-[117%] rounded-full h-2 bg-gray-100 -mt-10 -ml-9">
      <div className="absolute left-0 top-0 h-2 rounded-full bg-blue-500 animate-loading"></div>
    </div>
  );
};

export default Buffering;
