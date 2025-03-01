import React from "react";
import "./style.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome To Kumawat Sound India!</h1>
          <div className="type-line">
            Transforming ordinary events into extraordinary experiences
          </div>
          <div className="type-line">
            Expert engineers ensuring flawless sound and visual effects
          </div>
          <div className="type-line">
            Advanced technology for immersive event experiences
          </div>
          <div className="type-line">
            High-quality sound systems for crystal-clear audio
          </div>
          <div className="type-line">
            Custom setups for concerts, weddings, and shows
          </div>
          <div className="type-line">
            Professional audio and lighting for all events
          </div>
        </div>
      </section>

      {/* Customizable Sections */}
      <section className="section section-dark">
        <h2 className="section-title">Our Services</h2>
        {/* Add your content here */}
      </section>

      <section className="section section-light">
        <h2 className="section-title">Event Portfolio</h2>
        {/* Add your content here */}
      </section>

      <section className="section section-dark">
        <h2 className="section-title">Technical Specs</h2>
        {/* Add your content here */}
      </section>

      <section className="section section-light">
        <h2 className="section-title">Contact Us</h2>
        {/* Add your content here */}
      </section>
    </div>
  );
};

export default HomePage;
