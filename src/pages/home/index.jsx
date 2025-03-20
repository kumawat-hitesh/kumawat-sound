import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import audio from "../../assets/service-audio.jpg";
import lighting from "../../assets/service-lighting.jpg";

const HomePage = ({ homeRef }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

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
        <button onClick={handleKnowMore}>Know more</button>
      </section>

      {/* Additional sections */}
      <section className="section section-dark">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-image-container">
              <img src={audio} alt="Audio Services" className="service-image" />
            </div>
            <h3 className="service-title">Audio</h3>
            <p className="service-description">
              Professional sound systems for crystal-clear acoustics in any
              venue
            </p>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img
                src={lighting}
                alt="Visual Services"
                className="service-image"
              />
            </div>
            <h3 className="service-title">Visual</h3>
            <p className="service-description">
              Immersive lighting and video systems for stunning visual
              experiences
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <h2 className="section-title">Event Portfolio</h2>
      </section>
    </div>
  );
};

export default HomePage;
