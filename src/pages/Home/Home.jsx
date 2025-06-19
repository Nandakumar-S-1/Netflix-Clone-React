import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/background_banner_main.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
const home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-text">
          <h1 className="Title">Unlimited movies, TV shows and more</h1>
          <h4 className="title-2">Starts at ₹149. Cancel at any time.</h4>
        </div>
      </div>

      {/* <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />info</button>
        </div> */}

      {/* </div> */}
      <div className="more-cards">
        <TitleCards />
        <TitleCards title={"Now playing"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics For You"} category={"top_rated"} />
        <TitleCards title={"Popular On Netflix"} category={"popular"} />
      </div>
      <FAQ/>
      <Footer />
    </div>
  );
};

export default home;
