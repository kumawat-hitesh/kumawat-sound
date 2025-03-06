import React, { useRef } from "react";
import "./style.css";

const HomePage = ({ homeRef }) => {
  return (
    <div className="container">
      {/* Hero Section with ref */}
      <section className="hero" ref={homeRef}>
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

      <section className="section section-dark">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <p>
            Since 1971, Kumawat Sound India has been a pioneer in transforming
            ordinary events into extraordinary experiences through innovative
            sound and lighting solutions. Specializing in weddings, corporate
            functions, concerts, and large-scale productions, we combine
            advanced technology with expert engineering to deliver flawless
            audiovisual performances. Our offerings include high-quality sound
            systems for crystal-clear audio, dynamic stage lighting, and custom
            truss setups tailored to the unique needs of every event. Trust
            Kumawat Sound India to illuminate your moments with precision,
            passion, and professionalism. Let’s create magic together!
          </p>
        </div>
      </section>

      {/* Customizable Sections */}
      <section className="section section-dark">
        <h2 className="section-title">Our Services</h2>
        {/* Add your content here */}
      </section>

      <section className="section section-dark">
        <h2 className="section-title">Event Portfolio</h2>
        {/* Add your content here */}
      </section>
    </div>
  );
};

export default HomePage;
