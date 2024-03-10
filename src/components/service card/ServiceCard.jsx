import React from "react";
import "./ServiceCard.css";

function ServiceCard({service}) {
  return (
      <div class="service-card">
        <img src={service.img} alt="Service Image" />
        <h2 class="service-title">{service.title}</h2>
        <p class="service-description">{service.description}</p>
      </div>
  );
}

export default ServiceCard;
