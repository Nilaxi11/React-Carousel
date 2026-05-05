import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../Components/Splide.css";

function SplideCarousel() {
  return (
    <div>

      {/*  HERO BANNER (your existing one) */}
      <div className="wrapper">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 3000,
            arrows: true,
            pagination: true,
          }}
        >

          <SplideSlide>
            <div className="slide">
              <img src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="splide-img" />
              <div className="text">
                <h2>Big Fashion Sale</h2>
                <p>Up to 70% OFF</p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="slide">
              <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="splide-img" />
              <div className="text">
                <h2>Electronics Deals</h2>
                <p>Latest gadgets available</p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="slide">
              <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="splide-img" />
              <div className="text">
                <h2>New Arrivals</h2>
                <p>Fresh collections everyday</p>
              </div>
            </div>
          </SplideSlide>

        </Splide>
      </div>


      {/* 🛍️ PRODUCT SLIDER */}
      <div className="product-wrapper">
        <h2 className="title">Trending Products</h2>

        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "20px",
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            arrows: true,
            pagination: false,

            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >

          <SplideSlide>
            <div className="card">
              <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=400" />
              <h4>Smartphone</h4>
              <p>₹29,999</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <img src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&w=400" />
              <h4>Headphones</h4>
              <p>₹2,999</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&w=400" />
              <h4>Laptop</h4>
              <p>₹79,999</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&w=400" />
              <h4>Smart Watch</h4>
              <p>₹4,999</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="card">
              <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&w=400" />
              <h4>Camera</h4>
              <p>₹45,000</p>
            </div>
          </SplideSlide>

        </Splide>
      </div>

    </div>
  );
}

export default SplideCarousel;