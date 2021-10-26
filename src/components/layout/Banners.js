import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <section
          class="intro carousel slide bg-overlay-light h-auto"
          id="carouselExampleCaptions"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="1"
              class=""
            ></li>
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="2"
              class=""
            ></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block img-fluid"
                alt="First slide"
                src="../assets/images/slider3.jpg"
                width="100%"
              />
              <div class="carousel-caption ">
                <h2 class="display-4 text-white mb-2 mt-4">
                  Enjoy a Luxury Experience
                </h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                alt="Second slide"
                src="../assets/images/cabs.png" 
                width="100%"
               
              />
              <div class="carousel-caption ">
                <h2 class="display-4 text-white mb-2 mt-4">
                  Simple &amp; Elegant
                </h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                alt="Third slide"
                src="../assets/images/slider5.jpg"
                width="100%"
              />
              <div class="carousel-caption ">
                <h2 class="display-4 text-white mb-2 mt-4">
                  Gold &amp; Silver
                </h2>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </section>
      </div>
    );
  }
}
