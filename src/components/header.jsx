import React from "react";
import "../assets/css/header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkByiSrVBfmg38-WGyRkziwO4C2L3ifLzMXw&usqp=CAU"
          className="logo"
          alt="Company"
        />
        IP Tracker
      </div>
    </div>
  );
};

export default Header;
