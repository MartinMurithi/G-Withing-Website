import React from "react";
import services from "../data/Services";
import "../components/service card/ServiceCard";
import ServiceCard from "../components/service card/ServiceCard";
import Underline from "../components/underline/Underline"

function Services() {
  return (
    <div className="servicesSection" id="services">
      <h4 className="serviesSectionTitle">Our Services</h4>
      <Underline />
      <p className="servicesSectionIntro">
        We Are Committed To Give You Our Best Services
      </p>

      <div className="servicesList">
        {services?.map((service) => {
          return <ServiceCard service={service} key={service.id} />;
        })}
      </div>
    </div>
  );
}

export default Services;
