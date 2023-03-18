import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="sept">
        <div class="banner">
          <div class="container">
            <div class="banner-text">
              <h1>Creative, flexible and affordable website design.</h1>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo cum ratione laborum deleniti atque assumenda.
              </p>
              <form method="" action="">
                <div class="input-group flex">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email address ..."
                  />
                  <button type="submit" class="btn">
                    send
                  </button>
                </div>
              </form>
            </div>

            <div class="banner-image">
              <img
                src={require("../images/header-img.png")}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
