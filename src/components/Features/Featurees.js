import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <>
      <section id="features" class="py-5">
        <div class="section-heading">
          <div class="container">
            <h2>Features</h2>
            <span class="heading-lg">key features we acquire</span>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              vero facere suscipit commodi debitis fugiat.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="features-grid">
            <div class="feature-item">
              <span class="icon">
                <i class="fas fa-desktop"></i>
              </span>
              <h2>Development</h2>
            </div>

            <div class="feature-item">
              <span class="icon">
                <i class="fas fa-briefcase"></i>
              </span>
              <h2>Top Skills</h2>
            </div>

            <div class="feature-item">
              <span class="icon">
                <i class="fab fa-sketch"></i>
              </span>
              <h2>Design</h2>
            </div>

            <div class="feature-item">
              <span class="icon">
                <i class="fas fa-mobile-alt"></i>
              </span>
              <h2>Responsive</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
