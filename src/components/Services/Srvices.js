import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <section id="services" class="py-5">
        <div class="section-heading">
          <div class="container">
            <h2>Services</h2>
            <span class="heading-lg">What We Provide</span>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              vero facere suscipit commodi debitis fugiat.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="services-left">
            <img src={require("../images/services-img.png")} alt="" />
          </div>

          <div class="services-right">
            <div class="services-grid">
              <div class="service-item">
                <div class="icon flex">
                  <i class="fas fa-lock"></i>
                </div>
                <span class="badge">free</span>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore officiis sequi laborum, nesciunt mollitia architecto.
                  Voluptatem nemo totam saepe? Deserunt!
                </p>
                <h2>SSL Certification</h2>
              </div>

              <div class="service-item">
                <div class="icon flex">
                  <i class="fas fa-globe"></i>
                </div>
                <span class="badge">free</span>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore officiis sequi laborum, nesciunt mollitia architecto.
                  Voluptatem nemo totam saepe? Deserunt!
                </p>
                <h2>Personal Domain</h2>
              </div>

              <div class="service-item">
                <div class="icon flex">
                  <i class="fas fa-tools"></i>
                </div>
                <span class="badge">free</span>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore officiis sequi laborum, nesciunt mollitia architecto.
                  Voluptatem nemo totam saepe? Deserunt!
                </p>
                <h2>Technical Support</h2>
              </div>

              <div class="service-item">
                <div class="icon flex">
                  <i class="fas fa-server"></i>
                </div>
                <span class="badge">free</span>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore officiis sequi laborum, nesciunt mollitia architecto.
                  Voluptatem nemo totam saepe? Deserunt!
                </p>
                <h2>Media Storage</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
