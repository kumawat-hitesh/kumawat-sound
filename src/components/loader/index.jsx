// src/components/Loader.jsx
import { useEffect, useState } from "react";
import "./style.css";
import loadgif from "../loader/loading.gif"; // Import your GIF here

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const exitTimer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(exitTimer);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className={`loader-container ${!isLoading ? "exit" : ""}`}>
      <div className="loader-content">
        {/* Custom GIF loader */}
        <img
          src={loadgif} // Path to your GIF in public folder
          // OR import and use: src={yourImportedGif}
          alt="Loading..."
          className="loading-gif"
        />
        <h2>Kumawat Sound</h2>
      </div>
    </div>
  );
};

export default Loader;
