import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero-content">
            <img className="homeimg" src={require("../Assets/homeimg.png")} />
            <h1 className="hero-heading">Welcome to Jagriti.</h1>
            <p className="paras">
              Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur
              adipisicing elit. Odit, id
            </p>

            <div className="box">
              <button className="btn1 btn2 button">
                <Link to="/events">Explore Events &#x0003E;</Link>
              </button>
              <button className="btn1 btn3 button">Workshops &#x0003E;</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
