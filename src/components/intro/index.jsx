import React from "react";
import Avatar from "../../assets/img/avatar.png";
import Avatar1 from "../../assets/img/chan-dung-edit.png";
import Avatar2 from "../../assets/img/full-nguoi-edit.webp";
import "./style.css";
const Greeting = () => {
  return (
    <div className="intro-wrapper">
      <div className="nav-wrapper">
        <div className="nav-wrapper-left__dots-wrapper">
          <div className="browser-dot dot-1"></div>
          <div className="browser-dot dot-2"></div>
          <div className="browser-dot dot-3"></div>
        </div>
        <ul className="nav-wrapper-right__navigation-list">
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="tel:+201018544438"
            >
              Call
            </a>
          </li>
        </ul>
      </div>
      <div className="left-column">
        <img className="avatar" src={Avatar2} alt="Avatar2" />
        <h5>AYDA ELANANY</h5>
        <p>{" oriented teacher in Arabic language "}</p>
      </div>
      <div className="right-column">
        <div className="right-column__preview-shadow">
          <div className="right-column__preview">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <h3>What I Do?</h3>
            <p style={{ fontSize: "16px" }}>
            اسمي عايدة العناني أنا معلمة كبيرة وموجهة في اللغة العربية
            </p>
            <img className="avatar" src={Avatar} alt="Avatar" />
            <img className="avatar" src={Avatar1} alt="Avatar1" />

            <div className="corner corner-br"></div>
            <div className="corner corner-bl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
