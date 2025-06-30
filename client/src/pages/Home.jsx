// File: src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/cricket-banner.jpg";
import img1 from "../assets/cricket1.jpg";
import img2 from "../assets/cricket2.jpg";
import img3 from "../assets/cricket3.jpg";
import stadium1 from "../assets/stadium1.png";
import stadium2 from "../assets/stadium2.png";
import stadium3 from "../assets/stadium3.png";
import stadium4 from "../assets/stadium4.png";
import stadium5 from "../assets/stadium5.png";
import stadium6 from "../assets/stadium6.png";

import "../styles/Home.css";

const stadiums = [
  { name: "Wankhede Stadium, Mumbai", image: stadium1 },
  { name: "Eden Gardens, Kolkata", image: stadium2 },
  { name: "M. A. Chidambaram Stadium, Chennai", image: stadium3 },
  { name: "M. Chinnaswamy Stadium, Bengaluru", image: stadium4 },
  { name: "Arun Jaitley Stadium, Delhi", image: stadium5 },
  { name: "Punjab Cricket Association Stadium, Mohali", image: stadium6 }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img src={bannerImg} alt="Cricket Banner" className="hero-image" />
        <div className="hero-content">
          <h2>Welcome to the World of Cricket</h2>
          <p>
            Catch thrilling cricket moments, explore top players, and enjoy
            exclusive blogs crafted for every fan.
          </p>
          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => {
                const section = document.getElementById("stadium-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
            <button className="btn secondary" onClick={() => navigate("/about")}>
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Stadium Section */}
      <section id="stadium-section" className="stadium-section">
        <div className="stadium-header">
          <h2>🏟️ Top Cricket Stadiums in India</h2>
          <button className="add-btn" onClick={() => navigate("/add-stadium")}>
            ➕ Add Stadium
          </button>
        </div>

        <div className="stadium-grid">
          {stadiums.map((stadium, index) => (
            <div className="stadium-card" key={index}>
              <img src={stadium.image} alt={stadium.name} />
              <h3>{stadium.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>What We Offer</h3>
        <p>Get insights, stories, and visuals from across the cricketing world.</p>
        <div className="service-cards">
          <div className="card">
            <div className="icon">🏏</div>
            <h4>Modern Design</h4>
            <img src={img1} alt="Design" />
          </div>
          <div className="card">
            <div className="icon">📸</div>
            <h4>High Quality</h4>
            <img src={img2} alt="Quality" />
          </div>
          <div className="card">
            <div className="icon">⚡</div>
            <h4>Quick Updates</h4>
            <img src={img3} alt="Support" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
