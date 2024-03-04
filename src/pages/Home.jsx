import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Blog from "../assets/blog.png";
function Home() {
  return (
    <div className="w-full py-8 bg-white">
      <div className="text-6xl text-center font-Dancing font-light mt-14">
        <Typewriter
          options={{
            strings: [
              "BlogSphere",
              "चिट्ठा क्षेत्र",
              "ব্লগ গোলক",
              "بلاگ دائرہ",
            ],
            autoStart: true,
            loop: true,
          }}
          className="text-2xl"
        />
      </div>
      <h1 className="text-3xl text-center font-Roboto font-light mt-10">
        An open source platform for building a writing space on
      </h1>
      <h1 className="text-3xl text-center font-Roboto font-light mt-2">
        the web sphere.
      </h1>
      <Link to="/signup" className="flex justify-center items-center mt-10">
        <button className="border border-[#7278bf] bg-[#7278bf] text-2xl text-white font-Roboto font-light px-6 py-2 rounded-lg">
          Get Started
        </button>
      </Link>
      <div className="w-full flex items-center justify-center mt-20">
        <img
          src={Blog}
          alt="blog"
          className="w-full max-w-[900px] rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between gap-12 mx-auto max-w-[1000px] mt-16">
        <div className="w-full">
          <h1 className="text-2xl font-semibold font-serif mb-4">
            Made for Writing
          </h1>
          <p className="font-Roboto text-gray-600">
            Our fast, auto-saving editor is all you need to quickly get your
            thoughts down and published to your blog.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold font-serif mb-4">
            Light & Easy to Install
          </h1>
          <p className="font-Roboto text-gray-600">
            WriteFreely sets your ideas and your server's resources free. Just
            run the binary to start your site up.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold font-serif mb-4">
            Crafted for Creativity
          </h1>
          <p className="font-Roboto text-gray-600">
            Crafted for seamless creativity, our app offers an intuitive
            interface designed to eliminate distractions.
          </p>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold font-serif mb-4">
            Seamless Publishing
          </h1>
          <p className="font-Roboto text-gray-600">
            Effortlessly jot down your thoughts and hit publish with our
            lightning-fast, auto-saving editor.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-24">
        <h1 className="text-4xl font-Roboto mb-4">Create a minimalist blog</h1>
        <p className="font-Roboto text-xl font-light">
          BlogSphere is built around blogging. There's no news feed,
          notifications, or unnecessary likes or claps to take you away from
          your train of thought. You get a distraction-free writing environment,
          and readers can enjoy a clean reading experience.
        </p>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-16">
        <h1 className="text-4xl font-Roboto mb-4">Publish to the fediverse</h1>
        <p className="font-Roboto text-xl font-light">
          Reach outside your own site with federation via ActivityPub.
          WriteFreely lets anyone on Mastodon, Pleroma, or any
          ActivityPub-enabled service follow your blog, bookmark your posts, and
          share them with their followers. See how it works.
        </p>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-16">
        <h1 className="text-4xl font-Roboto mb-4">
          Easy on the eyes (and your server)
        </h1>
        <p className="font-Roboto text-xl font-light">
          BlogSphere is written in Javascript, so it runs anywhere and takes up
          very few resources — you can even run it on a Raspberry Pi!
          Installation is as easy as downloading a binary and a few supporting
          files, no other dependencies required.
        </p>
      </div>
      <Link to="/signup" className="flex justify-center items-center mt-10">
        <button className="border border-[#7278bf] bg-[#7278bf] text-2xl text-white font-Roboto font-light px-6 py-2 rounded-lg">
          Get Started
        </button>
      </Link>
      <div className="w-full max-w-[900px] mx-auto mt-16">
        <h1 className="text-4xl font-Roboto font-light mb-4 text-center">
        See what others are building
        </h1>
        <p className="font-Roboto text-xl font-light text-center">
        WriteFreely powers tens of thousands of individual blogs, and hundreds of <br />communities.
        </p>
      </div>
      <div className="w-full max-w-[900px] mx-auto mt-16">
      <p className="font-Roboto text-xl font-light text-center mb-2">
      See what's been
        </p>
        <Link to="/signup" className="flex justify-center items-center">
        <h1 className="text-4xl font-Roboto font-light mb-4 text-center hover:text-gray-600">
        Created with WriteFreely
        </h1>
      </Link>
      </div>
    </div>
  );
}

export default Home;
