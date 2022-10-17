import React from "react";
import dataServices from "./Data";
import BoxServices from "./BoxServices";
import "./Services.scss";

const Services = () => {
  const Data = dataServices.map((item) => {
    return (
      <BoxServices
        icon={item.icon}
        title={item.title}
        text={item.text}
        key={item.id}
      />
    );
  });
  return (
    <div className="container">
      <section className="services">
        <h2>Our Services</h2>
        <h6></h6>
        <p>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that <br /> have meaning and add a value for
          our clients.
        </p>
        <div className="boxesServices">{Data}</div>
      </section>
    </div>
  );
};

export default Services;
