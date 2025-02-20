import { motion } from "framer-motion";
import "./style.css";

export default function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>
          Transform Your Events with <span>Professional Sound & Lights</span>
        </h1>
        <p>Concerts • Weddings • Corporate Events • Private Parties</p>
        <button className="cta-button">Book Now</button>
      </div>
    </motion.section>
  );
}
