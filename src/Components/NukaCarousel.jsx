import React from "react";
import { Carousel } from "nuka-carousel";

function NukaCarousel() {
    return (
        <div style={{ width: "700px", margin: "40px auto" }}>

            {/* IMPORTANT WRAPPER */}
            <div style={{ position: "relative" }}>

                <Carousel
                    autoplay
                    wrapAround
                    pauseOnHover
                    showArrows
                    showDots
                >
                    <img src="https://picsum.photos/id/1018/700/400" alt="nuka" />
                    <img src="https://picsum.photos/id/1015/700/400" alt="nuka" />
                    <img src="https://picsum.photos/id/1019/700/400" alt="nuka" />
                </Carousel>
            </div>
        </div>
    );
}

export default NukaCarousel;