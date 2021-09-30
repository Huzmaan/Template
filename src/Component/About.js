import React from "react";
import boyimg from "../Images/boy.jpg";

const About = () => {
  return (
    <>
      <div className="about-css" id="about">
        <div>
          <p className="type-css">About</p>
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
      </div>
    </>
  );
};

export default About;
