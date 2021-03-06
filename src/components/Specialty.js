import React from "react";

const Specialty = ({ name, description, icon }) => {
  return (
    <div class="specialty" data-aos="fade-in" data-aos-delay="300">
      <div class="icon-container">
        <i class={icon}></i>
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Specialty;
