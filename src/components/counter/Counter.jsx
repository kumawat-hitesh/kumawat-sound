import React, { useState, useEffect, useRef } from "react";

const Counter = ({ number, title }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 5000; // Animation duration in ms
            const increment = number / (duration / 16); // 16ms per frame

            let start = 0;
            const timer = setInterval(() => {
              start += increment;
              setCount(Math.min(Math.floor(start), number));
              if (start >= number) {
                clearInterval(timer);
                observer.unobserve(entry.target); // Stop observing after animation
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [number]);

  return (
    <div className="counter-item" ref={counterRef}>
      <div className="counter-number">{count}+</div>
      <div className="counter-title">{title}</div>
    </div>
  );
};

export default Counter;
