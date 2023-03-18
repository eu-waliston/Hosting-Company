import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <div>
        <section id="testimonials" class="py-5">

          <div class="section-heading">
            <div class="container">
              <h2>testimonials</h2>
              <span class="heading-lg">wha clients say</span>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                vero facere suscipit commodi debitis fugiat.
              </p>
            </div>
          </div>

          <div class="container">
            <div class="testimonials-grid">
              <div class="testimonials-item">
                <div class="image">
                  <img src={require("../images/client-1.webp")} alt="client" />
                </div>
                <p class="text">
                  <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Velit eos animi, voluptate
                  consequatur eveniet accusantium.
                  <i class="fas fa-quote-right"></i>
                </p>
                <h2>Cloe Marena</h2>
                <span>Senior Developer</span>
              </div>

              <div class="testimonials-item">
                <div class="image">
                  <img src={require("../images/client-2.webp")} alt="client" />
                </div>
                <p class="text">
                  <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Velit eos animi, voluptate
                  consequatur eveniet accusantium.
                  <i class="fas fa-quote-right"></i>
                </p>
                <h2>Bob Roberts</h2>
                <span>CEO</span>
              </div>

              <div class="testimonials-item">
                <div class="image">
                  <img src={require("../images/client-3.webp")} alt="client" />
                </div>
                <p class="text">
                  <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Velit eos animi, voluptate
                  consequatur eveniet accusantium.
                  <i class="fas fa-quote-right"></i>
                </p>
                <h2>Will Turner</h2>
                <span>Developer</span>
              </div>

              <div class="testimonials-item">
                <div class="image">
                  <img src={require("../images/client-4.webp")} alt="client" />
                </div>
                <p class="text">
                  <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Velit eos animi, voluptate
                  consequatur eveniet accusantium.
                  <i class="fas fa-quote-right"></i>
                </p>
                <h2>Celia Reynolds</h2>
                <span>Marketing</span>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Testimonials;