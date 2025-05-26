import { useEffect, useState } from "react";
import "./style.css"; // We'll create this next

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);

      // Add hover event listeners for links and buttons
      const links = document.querySelectorAll("a");
      const buttons = document.querySelectorAll("button");

      links.forEach((link) => {
        link.addEventListener("mouseover", () => setLinkHovered(true));
        link.addEventListener("mouseout", () => setLinkHovered(false));
      });

      buttons.forEach((button) => {
        button.addEventListener("mouseover", () => setButtonHovered(true));
        button.addEventListener("mouseout", () => setButtonHovered(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Determine cursor class based on state
  const cursorClasses = [
    "cursor",
    hidden && "cursor--hidden",
    clicked && "cursor--clicked",
    linkHovered && "cursor--link-hovered",
    buttonHovered && "cursor--button-hovered",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
