import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact" class="py-5">
        <div class="bg-block"></div>
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-info">
              <h2>Contact Info</h2>

              <div class="info-group">
                <span class="icon">
                  <i class="fas fa-phone-alt"></i>
                </span>
                <span class="text">+55 (34)9999-9999</span>
              </div>

              <div class="info-group">
                <span class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span class="text">contact@webgeek.com</span>
              </div>

              <div class="info-group">
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="text">402, WebGeek Labs, Ohio Street, USA</span>
              </div>

              <ul class="social-links flex">
                <li>
                  <a href=" ">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href=" ">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href=" ">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href=" ">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="contact-form">
              <form action="" method="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name..."
                  />
                </div>

                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email address..."
                  />
                </div>

                <div class="input-group">
                  <textarea
                    class="form-control"
                    rows="10"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <div class="input-group">
                  <button type="submit" class="btn">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
