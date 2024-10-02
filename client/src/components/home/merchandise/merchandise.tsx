import "./merchandise.scss";
// import ScrollingFrames from "../../Carousel";
import Slider from "../slider/slider";
export default function Merchandise() {
    return (
        <>
            <div className="section3"></div>
            <Slider />
            <div className="section4">
                <video className="merchandise" autoPlay muted loop playsInline>
                    <source
                        src="./assets/videos/merchandise.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            {/* <div className="merchandise_bottom"></div> */}
        </>
    );
}
