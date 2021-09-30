import React from "react";
// import "./App.css";
import Img from "../Images/streetart1.jpg";
import ArtImg from "../Images/streetart2.jpg";
import street from "../Images/streetart3.jpg";
import street4 from "../Images/streetart4.jpg";
import street5 from "../Images/streetart5.jpg";
// import boyimg from "./Images/boy.jpg";
const Main = () => {
  return (
    <div className="Img-css">
      <div className="first-div">
        <img className="street1" src={Img} alt="street1" />
        <img className="street3" src={ArtImg} alt="street3" />
        <img className="street5" src={street5} alt="street5" />
      </div>
      <div className="second-div">
        <img className="street2" src={street} alt="street2" />
        <img className="street4" src={street4} alt="street4" />
      </div>
    </div>
  );
};
export default Main;
