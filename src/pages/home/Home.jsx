import React from "react";
import profile from "./../../assets/home.jpeg";
import { links } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home-img" />
      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I'm Bhairav Karande</span> Web Developer
          </h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            atque alias ratione sit quae dignissimos nesciunt impedit
            exercitationem harum eius nihil laborum aliquid. Rem incidunt odio,
            commodi aspernatur perspiciatis veritatis?
          </p>
          <Link to="/about" className="button">
            More About Me <span className="button-icon"><FaArrowRight /></span>
            
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
