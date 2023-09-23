import React, { useState } from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7xtzih",
        "template_nyizaoe",
        form.current,
        "mHp5O2lznsoBy9my5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome awesome-c">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span className="setting">Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input
            type="submit"
            value="Send"
            className="btn btnEdit"
            placeholder="Name"
          />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
