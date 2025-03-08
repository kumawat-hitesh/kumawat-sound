import React, { useEffect, useRef } from "react";
import "./style.css";

/**
 * A generic component that applies a "slide into top" animation when scrolled into view.
 *
 * Props:
 * - tag: string – The HTML tag to render (defaults to "div").
 * - className: string – Additional class names to apply.
 * - children: node – Content to render inside the component.
 * - ...rest: any – Other props to pass to the rendered element.
 */
const SlideIntoTop = ({
  tag: Tag = "div",
  className = "",
  children,
  ...rest
}) => {
  const elementRef = useRef(null);

  const handleScrollAnimation = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        elementRef.current.classList.add("scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);
    // Check on mount in case element is already in view
    handleScrollAnimation();
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <Tag ref={elementRef} className={`slide-top ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default SlideIntoTop;
