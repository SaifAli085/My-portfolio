import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from "../Cards/Cards";
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion"


const Services = () => {
  const transition = {duration: 1, type: 'spring'}

  const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      <div className="awesome awesome-s">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
          Develop Websites and Designes with Quality works...
          <br />
          Creates websites and applications using web languages such as HTML, CSS, and JavaScript.
        </span>
        <button className="btn s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
        initial={{left: '25rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        style={{ left: "14rem"} }
        >
          <Cards
            emoji={HeartEmoji}
            heading={"Design "}
            detail={"Adobe Photoshop, Corel Draw, PowerPoint"}
          />
        </motion.div>
        <motion.div
        initial={{left: '-10rem'}}
        whileInView={{left: '-5rem'}}
        transition={transition}
        style={{ left: "-4rem", top: '12rem' }}>
          <Cards
            emoji={Glasses}
            heading={"Developer "}
            detail={"HTML, CSS, Javascript, React"}
          /> 
        </motion.div>
        <motion.div
        initial={{left: '25rem'}}
        whileInView={{left: '14rem'}}
        transition={transition}
        style={{ left: "12rem", top: '19rem' }}>
          <Cards
            emoji={Humble}
            heading={"Extra "}
            detail={"C, C++, Java, Python "}
          />
        </motion.div>
        <div className="s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
