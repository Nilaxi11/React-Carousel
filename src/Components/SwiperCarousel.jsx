import React from 'react';
import "../Components/SwiperMain.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function SwiperCarousel() {
  return (
    <Swiper
      direction="vertical"
      pagination={{ clickable: true }}
      modules={[Pagination, Mousewheel]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 0.5
      }}
      speed={1200}
      slidesPerView={1}
      className="mySwiper"
    >

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Silence of Nature</h1>
            <p>Where minimalism meets the raw beauty of untouched landscapes.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Monochrome Forest</h1>
            <p>Shadows, fog and depth — a cinematic experience beyond color.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Into the Mist</h1>
            <p>Lose yourself in the layers of mystery and calm atmosphere.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg" alt="swiper-img" />
          <div className="overlay">
            <h1>Abstract Earth</h1>
            <p>Textures, patterns and nature blending into futuristic minimalism.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Frozen Silence</h1>
            <p>Stillness captured in time, where cold meets clarity.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Endless Horizon</h1>
            <p>A journey beyond limits, fading into infinity.</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
          <img src="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg" alt="swiper-img" />
          <div className="overlay">
            <h1>Dark Waters</h1>
            <p>Reflections of silence flowing through unknown depths.</p>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}

export default SwiperCarousel;