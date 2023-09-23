import React from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "swiper";
import Certificate1 from "../../img/certificate1.jpg";
import Certificate2 from "../../img/certificate2.jpg";
import Certificate3 from "../../img/certificate3.jpg";
const Portfolio = () => {
  const settings = {
    modules: Pagination,
    slidesPerView: 3,
    pagination: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          modules: Pagination,
          slidesPerView: 1,
          pagination: true,
        },
      },
    ],
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <div className="main">
        <span className="certificate">My Certificates</span>

        <Slider {...settings} className="portfolio-slider">
          <img src={Certificate1} alt="" />
          <img src={Certificate3} alt="" />
          <img src={Certificate2} alt="" />
        </Slider>
      </div>
      <div className="main-2">
      <span style={{ color: darkMode ? "white" : "" }} className="projects-1">
        Recent Projects
      </span>
      <span className="projects-2">Portfolio</span>
      <div className="projects">
        <span>
          1. Fitness Club Projects -{" "}
          <a
            style={{ color: darkMode ? "yellow" : "" }}
            href="https://thefitnessclubs.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
           https://thefitnessclubs.pages.dev/
          </a>
        </span>
        <span>
          2. Simple Form Website -{" "}
          <a
            href="https://basicforms.pages.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: darkMode ? "yellow" : "" }}
          >
            https://basicforms.pages.dev/
          </a>
        </span>
        <span>
          3. KBC Quiz Game -{" "}
          <a
            href="https://kbcquiz.pages.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: darkMode ? "yellow" : "" }}
          >
            https://kbcquiz.pages.dev/
          </a>
        </span>
        
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
