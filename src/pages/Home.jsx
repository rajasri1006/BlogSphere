import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Blog from "../assets/blog.jpg" 
function Home() {
  return (
    <div className="w-full py-8 bg-white">
      <div className="text-6xl text-center font-Dancing font-light mt-14">
      <Typewriter
        options={{
          strings: ["BlogSphere", "चिट्ठा क्षेत्र", "بلاگ دائرہ"],
          autoStart: true,
          loop: true,
        }}
        className="text-2xl"
      />
      </div>
      <h1 className="text-3xl text-center font-Roboto font-light mt-10">An open source platform for building a writing space on</h1>
      <h1 className="text-3xl text-center font-Roboto font-light mt-2">the web sphere.</h1>
      <Link to="/signup" className="flex justify-center items-center mt-10">
      <button className="border border-[#7278bf] bg-[#7278bf] text-2xl text-white font-Roboto font-light px-6 py-2 rounded-lg">
        Get Started
      </button>
      </Link>
      <div className="w-full flex items-center justify-center mt-20">
        <img src={Blog} alt="blog" className="w-full max-w-[900px] rounded-lg shadow-2xl" />
      </div>
    </div>
  );
}

export default Home;
