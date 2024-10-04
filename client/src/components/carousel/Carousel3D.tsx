import "./Carousel3D.scss";
import React, { useEffect, useRef } from "react";
import {
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
} from "../../constants/Images";

const Carousel3D: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (sliderRef.current) {
                const scrollY = window.scrollY;

                const rotationY = scrollY * 0.5;
                sliderRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(${rotationY}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="carousel-container">
                <div className="banner">
                    <div
                        className="slider"
                        ref={sliderRef}
                        style={{ "--quantity": 6 } as React.CSSProperties}
                    >
                        <div
                            className="item"
                            style={{ "--position": 1 } as React.CSSProperties}
                        >
                            <img src={poster1} alt="Dragon 1" />
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 2 } as React.CSSProperties}
                        >
                            <img src={poster2} alt="Dragon 1" />
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 3 } as React.CSSProperties}
                        >
                            <img src={poster3} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 4 } as React.CSSProperties}
                        >
                            <img src={poster4} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 5 } as React.CSSProperties}
                        >
                            <img src={poster5} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 6 } as React.CSSProperties}
                        >
                            <img src={poster6} alt="Dragon 1" />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel3D;
