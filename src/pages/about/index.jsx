import React, { useEffect } from "react";
import "./style.css";

const AboutPage = ({ aboutRef }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" ref={aboutRef}>
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-text">
          <h1>ABOUT US</h1>
        </div>
      </section>
      <section className="section">
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
    </div>
  );
};

export default AboutPage;
