import "./Carousel3D.scss";
import poster from "./../../assets/poster.jpeg";
import React, { useEffect, useRef } from "react";

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
                        style={{ "--quantity": 10 } as React.CSSProperties}
                    >
                        <div
                            className="item"
                            style={{ "--position": 1 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 2 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 3 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 4 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 5 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 6 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 7 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 8 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 9 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />{" "}
                        </div>
                        <div
                            className="item"
                            style={{ "--position": 10 } as React.CSSProperties}
                        >
                            <img src={poster} alt="Dragon 1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel3D;
