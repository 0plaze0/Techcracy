import "./slider.css";

export default function Slider() {
    return (
        <>
            <section className="tilted-slider">
                <div className="slider-slide">
                    {Array(20)
                        .fill(0)
                        .map((_, i) => (
                            <img key={i} src="./assets/strap.png" alt="strap" />
                        ))}
                </div>
            </section>
            <section className="slider-bottom"></section>
        </>
    );
}
