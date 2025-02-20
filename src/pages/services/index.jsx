import "./style.css";

export default function Services() {
  const services = [
    {
      title: "Concert Sound Systems",
      icon: "🎵",
      description: "High-quality audio systems for any venue size.",
    },
    {
      title: "LED Lighting",
      icon: "💡",
      description: "Dynamic lighting solutions for every event.",
    },
    {
      title: "Stage Design",
      icon: "🎪",
      description: "Custom stage setups and rigging.",
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
