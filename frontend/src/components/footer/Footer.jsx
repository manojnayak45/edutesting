import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy;  EduNest A E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Rathod Manoj Kumar</a>
        </p>
        <div className="social-links">
          <a href=" www.linkedin.com/in/rathod-manoj-kumar">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/manojnayak45">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/iammanojrathod?igsh=Z3hlYnRqbjJpeDJo">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
