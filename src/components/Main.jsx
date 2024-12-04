import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";

const Main = () => {
  return (
    <div id="main">

      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[400px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold ">Teen Bizz App</h1>

          <div>
            <h1></h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
              A tool to create
              <TypeAnimation
                sequence={[
                  "logos",
                  1000,
                  "websites",
                  1000,
                  "apps",
                  1000,
                  "designs",
                  1000,
                  "anything!",
                  1000, // Duration to wait before starting over
                  () => console.log("done"),
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", paddingLeft: "5px", color: "black" }}
              />
            </h2>
            <div>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <a
                  href="https://twitter.com/targetevolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="cursor-pointer" size={20} />
                </a>
                <a
                  href="https://www.facebook.com/targetevolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="cursor-pointer" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/targetevolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/targetevolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="cursor-pointer" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
