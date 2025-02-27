import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// Pages
import Home from "./pages/home";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Match this with loader exit animation duration
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Loader />

      {showContent && (
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes */}
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
