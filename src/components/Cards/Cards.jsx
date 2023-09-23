import React from "react";
import "./Cards.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Cards = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "pink" : "" }}>{detail}</span>
      <button className="c-button">Learn more</button>
    </div>
  );
};

export default Cards;
