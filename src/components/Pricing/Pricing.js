import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <section id="pricing" class="py-5">
        <div class="section-heading">
          <div class="container">
            <h2>pricing</h2>
            <span class="heading-lg">What you have to pay</span>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              eos animi, voluptate consequatur eveniet accusantium
            </p>
          </div>
        </div>

        <div class="container">
          <div class="pricing-grid">
            <div class="pricing-item">
              <h2>Start Plan</h2>
              <div class="price">
                <p>
                  <span>Free</span>
                </p>
              </div>
              <a href=" " class="btn">
                Start for free <i class="fas fa-arrow-right"></i>
              </a>
              <ul>
                <li>Unlimites Plans</li>
                <li>Free Sub-Domain</li>
                <li>Unlimited Data</li>
                <li>24/7 Support</li>
                <li>Free static app domain included.</li>
                <li>No credit card</li>
              </ul>
            </div>

            <div class="pricing-item">
              <h2>Monthly Plan</h2>
              <div class="price">
                <p>
                  <span>$12</span>/month
                </p>
              </div>
              <a href=" " class="btn">
                Start Monthly<i class="fas fa-arrow-right"></i>
              </a>
              <ul>
                <li>Unlimites Plans</li>
                <li>Free Sub-Domain</li>
                <li>Unlimited Data</li>
                <li>24/7 Support</li>
                <li>Billed & 12 por website monthly.</li>
                <li>Total is $144 per year</li>
              </ul>
            </div>

            <div class="pricing-item">
              <h2>Yearly Plan</h2>
              <div class="price">
                <p>
                  <span>$9</span>/month
                </p>
              </div>
              <a href=" " class="btn">
                Start Annually<i class="fas fa-arrow-right"> </i>
              </a>
              <ul>
                <li>Unlimites Plans</li>
                <li>Free Sub-Domain</li>
                <li>Unlimited Data</li>
                <li>24/7 Support</li>
                <li>Billed & 108 per website monthly.</li>
                <li>$36 cheaper to this way.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
