import React from "react";
import Specialty from "./Specialty";
import SectionHeading from "./SectionHeading";

const Services = () => {
  return (
    <section class="services" id="services">
      <div class="container">
        <SectionHeading
          mainHeading="Services"
          subHeading="What I can do for you"
        />
        <div class="specialties">
          <Specialty
            name="Back End Web Development"
            description="Creating REST APIs and using OOP with Python, Java and Kotlin. Strong skills in database
            management and querying with Postgres and using Git as the version control system of choice."
            icon="fas fa-code"
          />
          <Specialty
            name="Data Science"
            description="Exploring data in Jupyter Notebooks through visualisation, 
            experimenting with a variety of machine learning models and 
            containerising the model for deployment into production."
            icon="fas fa-chart-bar"
          />
          <Specialty
            name="Data Engineering"
            description="From setting up cloud infrastructure on AWS using Terraform and CloudFormation, to transforming data 
            and creating reproducible ML workflows through pipeline tools such as Kubeflow Pipelines."
            icon="fas fa-random"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;