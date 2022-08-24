import React from "react";
import bannerImage from "../Assets/svg/bannerImage.svg";
import CountUp from "react-countup";
import { Icon } from "@iconify/react";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  var ReactRotatingText = require("react-rotating-text");
  return (
    <div className="grid 2xl:grid-cols-2 xl:xl:grid-cols-2 lg:xl:grid-cols-2 gap-x-5">
      <div>
        <div>
          <h1 className="text-3xl font-bold leading-loose animate__animated animate__bounceInLeft">
            Hello, <span className="text-primary">I'm</span>
          </h1>
          <h1 className="text-6xl font-extrabold mt-8 mb-2 animate__animated animate__bounceInLeft animate__delay-1s">
            Muhammad Asif
          </h1>
          <h1 className="text-4xl landing-relaxed animate__animated animate__bounceInLeft animate__delay-2s">
            <ReactRotatingText
              items={["Web Designer", "And", "Web Developer"]}
            />
          </h1>
          <p className="leading-loose mt-5 animate__animated animate__bounceInLeft animate__delay-3s">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi eos
            architecto eum et dolorem sit, enim, autem perspiciatis impedit,
            neque odio non accusantium consectetur magni nemo illo alias. Omnis,
            consectetur!
          </p>
        </div>
        <div>
          <h1 className="text-md uppercase font-bold mt-10 animate__animated animate__bounceInLeft animate__delay-4s">
            Find Me On
          </h1>
          <div
            name="button"
            className="gap-x-3 flex flex-wrap mt-10 animate__animated animate__bounceInLeft animate__delay-5s"
          >
            <a
              href="https://www.linkedin.com/in/muhammadoasif/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black hover:bg-primary/80 ease-in duration-300 rounded p-3">
                <Icon className="w-5 h-5" icon="eva:linkedin-outline" />
              </button>
            </a>
            <a
              href="https://www.facebook.com/Muhammad0Asif"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black hover:bg-primary/80 ease-in duration-300 rounded p-3">
                <Icon className="w-5 h-5" icon="eva:facebook-outline" />
              </button>
            </a>
            <a
              href="https://github.com/MuhammadOAsif"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black hover:bg-primary/80 ease-in duration-300 rounded p-3">
                <Icon className="w-5 h-5" icon="eva:github-outline" />
              </button>
            </a>
            <a
              href="https://dev.to/muhammadoasif"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black hover:bg-primary/80 ease-in duration-300 rounded p-3">
                <Icon
                  className="w-5 h-5"
                  icon="material-symbols:logo-dev-outline"
                />
              </button>
            </a>
          </div>
          <div name="count" className="mt-16 flex gap-x-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="text-4xl" style={{ height: 100 }}>
                  {isVisible ? <CountUp end={1} /> : null} +
                  <h1 className="text-sm mt-3">Year of experience</h1>
                </div>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="text-4xl" style={{ height: 100 }}>
                  {isVisible ? <CountUp end={75} /> : null} %
                  <h1 className="text-sm mt-3">Web Development</h1>
                </div>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <div className="text-4xl" style={{ height: 100 }}>
                  {isVisible ? <CountUp end={65} /> : null} %
                  <h1 className="text-sm mt-3">Web Design</h1>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
      <div className="w-full my-auto animate__animated animate__slower	3s animate__fadeInRight">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
