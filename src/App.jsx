import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Loader from "./components/loader";
import CustomCursor from "./components/customCursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// Pages
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  const [showContent, setShowContent] = useState(false);
  const homeRef = useRef(null);

  // Function to scroll to the home section
  const scrollToHome = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Match this with loader exit animation duration
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Loader />
      <CustomCursor />
      {showContent && (
        <div className="main-content">
          <Navbar scrollToHome={scrollToHome} />
          <Routes>
            <Route path="/" element={<Home homeRef={homeRef} />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes */}
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
