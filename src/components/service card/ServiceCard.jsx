import React from "react";
import "./ServiceCard.css";

function ServiceCard({service}) {
  return (
      <div className="service-card">
        <img src={service.img} alt="Service" />
        <h2 className="service-title">{service.title}</h2>
        <p className="service-description">{service.description}</p>
      </div>
  );
}

export default ServiceCard;
