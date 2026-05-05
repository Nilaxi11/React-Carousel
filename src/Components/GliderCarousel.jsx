import React, { useEffect, useRef } from "react";
import Glider from "glider-js";
import "glider-js/glider.min.css";

import "../Components/Glider.css";

function GliderCarousel() {
  const gliderRef = useRef(null);

  useEffect(() => {
    const glider = new Glider(gliderRef.current, {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      scrollLock: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    });

    //  Auto scroll (smooth feel)
    const auto = setInterval(() => {
      glider.scrollItem(glider.page + 1);
    }, 2500);

    return () => clearInterval(auto);
  }, []);

  return (
    <div className="glider-container">
      <h2 className="title">Popular Dishes</h2>

      <div className="glider" ref={gliderRef}>

        {/* Card 1 */}
        <div className="food-card">
          <div className="img-box">
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&w=400" alt="food-img" />
            <span className="offer">50% OFF</span>
            <span className="heart">❤</span>
          </div>
          <div className="info">
            <h4>Burger House</h4>
            <div className="meta">
              <span className="rating">4.3 ⭐</span>
              <span>25 mins</span>
            </div>
            <p>₹199 for one</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="food-card">
          <div className="img-box">
            <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&w=400" alt="food-img" />
            <span className="offer">30% OFF</span>
            <span className="heart">❤</span>
          </div>
          <div className="info">
            <h4>Pizza Hub</h4>
            <div className="meta">
              <span className="rating">4.5 ⭐</span>
              <span>30 mins</span>
            </div>
            <p>₹299 for one</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="food-card">
          <div className="img-box">
            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=400" alt="food-img" />
            <span className="offer">20% OFF</span>
            <span className="heart">❤</span>
          </div>
          <div className="info">
            <h4>Pasta Point</h4>
            <div className="meta">
              <span className="rating">4.2 ⭐</span>
              <span>20 mins</span>
            </div>
            <p>₹249 for one</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="food-card">
          <div className="img-box">
            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&w=400" alt="food-img" />
            <span className="offer">40% OFF</span>
            <span className="heart">❤</span>
          </div>
          <div className="info">
            <h4>Snack Cafe</h4>
            <div className="meta">
              <span className="rating">4.1 ⭐</span>
              <span>15 mins</span>
            </div>
            <p>₹149 for one</p>
          </div>
        </div>

      </div>

      <button className="glider-prev">‹</button>
      <button className="glider-next">›</button>
    </div>
  );
}

export default GliderCarousel;