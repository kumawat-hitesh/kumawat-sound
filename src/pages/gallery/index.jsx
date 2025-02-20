import "./style.css";

export default function Gallery() {
  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
  ];

  return (
    <section className="gallery">
      <h2>Our Work</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
