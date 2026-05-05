import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function KeenCarousel() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 3,
            spacing: 10, // ✅ removes partial visibility between slides
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: { perView: 2, spacing: 0 },
            },
            "(max-width: 480px)": {
                slides: { perView: 1, spacing: 0 },
            },
        },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 2000);

        return () => clearInterval(interval);
    }, [instanceRef]);

    const movies = [
        "https://picsum.photos/id/1011/600/600",
        "https://picsum.photos/id/1012/600/600",
        "https://picsum.photos/id/1013/600/600",
        "https://picsum.photos/id/1014/600/600",
        "https://picsum.photos/id/1015/600/600",
        "https://picsum.photos/id/1016/600/600",
    ];

    return (
        <div style={{ position: "relative", padding: "20px" }}>
            {/* Slider */}
            <div ref={sliderRef} className="keen-slider">
                {movies.map((src, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <img src={src} alt="" />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button className="arrow left" onClick={() => instanceRef.current?.prev()}>
                <FaChevronLeft />
            </button>
            <button className="arrow right" onClick={() => instanceRef.current?.next()}>
                <FaChevronRight />
            </button>

            {/* Styles */}
            <style>{`
        .keen-slider {
          overflow: hidden;
        }

        .keen-slider__slide {
          overflow: hidden;
        }

        .keen-slider__slide img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block; /* ✅ removes tiny gaps */
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          border: none;
          padding: 12px;
          cursor: pointer;
          z-index: 20;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow svg {
          color: white;
          font-size: 20px;
        }

        .left {
          left: 10px;
        }

        .right {
          right: 10px;
        }

        .arrow:hover {
          background: rgba(0,0,0,0.8);
        }
      `}</style>
        </div>
    );
}

export default KeenCarousel;