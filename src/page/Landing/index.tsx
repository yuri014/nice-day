import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../../components/Logo/Logo";

function Landing() {  
  return (
    <div id="landing-block">
      <div id="landing-content" className="container">
        <div className="weather-logo">
          <div className="logo">
            <Logo />
          </div>
          <h3>A fun way to inform you about the weather</h3>
        </div>
        <div className="buttons-container">
          <Link to="/pokemon">
            <img
              src="https://www.freepngimg.com/thumb/pokemon/35997-1-anime-pokemon-transparent-picture.png"
              alt=""
            />
          </Link>
          <Link to="/avatar">
            <img
              src="https://imagensemoldes.com.br/wp-content/uploads/2020/02/Avatar-A-Lenda-Aang-PNG-23-1200x1020.png"
              alt=""
            />
          </Link>
        </div>
        <div className="buttons-container">
          <Link to="/naruto">
            <img
              src="https://i.pinimg.com/originals/d3/aa/30/d3aa3027791f41764861a6b481b856bb.png"
              alt=""
            />
          </Link>
          <Link to="/cats">
            <img
              src="http://arbroath.cats.org.uk/uploads/images/pages/cats_pairs.png"
              alt=""
            />
          </Link>
        </div>
        <footer>
          <a href="https://www.freepik.com/vectors/cloud">
            Cloud vector created by starline - www.freepik.com
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
