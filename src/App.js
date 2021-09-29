import React from "react";
import "./App.css";
import Img from "./Images/streetart1.jpg";
import ArtImg from "./Images/streetart2.jpg";
import street from "./Images/streetart3.jpg";
import street4 from "./Images/streetart4.jpg";
import street5 from "./Images/streetart5.jpg";
import boyimg from "./Images/boy.jpg";
const App = () => {
  return (
    <div className="Main">
      <div className="part-css">
        <div className="Inline-css">
          <p>MY ART</p>
          <p>About</p>
        </div>
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
      </div>
      <footer className="footer-css">
        <div>
          <p className="about-css">About</p>
        </div>
        <div className="boyimg-css">
          <img src={boyimg} alt="boyimg" width="300" height="350" />
        </div>
        <form className="form-css">
          <div className="paragraph">
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <p className="css">Do not hesitate to contact me!</p>
            <p className="inp-text">Name </p>
            <input className="inp-css" type="text" name="" />
            <p className="inp-text">Email</p>
            <input className="inp-css" type="email" name="" />
            <p className="inp-text">Message</p>
            <input className="inp-css" type="text" name="" />
          </div>
        </form>
        <button className="btn-css">Send</button>
        <p className="link-css">
          powered by
          <a href="https://www.w3schools.com/w3css/default.asp">W3.css</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
