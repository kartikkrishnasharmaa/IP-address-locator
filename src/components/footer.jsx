import React from "react";
import "../assets/css/footer.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Powered by
        <span> </span>
        <b>
          <a
            rel="noopener noreferrer"
            title="Powered by"
            href="https://ipapi.co/"
            target="_blank"
          >
            IP API
          </a>
        </b>
      </p>
      <p>
        {" "}
        Made with <span> </span>
        <AiFillHeart className="heart" />
        <span> </span>
        by
        <b>
          <span> </span>{" "}
          <a
            rel="noopener noreferrer"
            title="Follow Sajid"
            href="https://github.com/kartikkrishnasharmaa"
          >
            {" "}
            Kartik Krishna Sharma
          </a>
        </b>
      </p>
    </div>
  );
};

export default Footer;
