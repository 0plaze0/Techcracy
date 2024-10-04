import Navbar from "../../navbar/navbar";
import "./hero.css";
// import Navbar from "../../components/navbar/navbar";

export default function Hero() {
    return (
        <>
            <section className="hero-section">
            {/* <Navbar /> */}
            {/* <Navbar></Navbar> */}

                {/* <video className="tech_video" autoPlay muted loop playsInline>
                    <source
                        src="./assets/videos/techcracyVideo.mp4"
                        type="video/mp4"
                    />
                </video> */}
                <img
                    className="techcracy"
                    src="./assets/Full_logo_with_tag_black-removebg-preview.png"
                    alt="image loading"
                />
                <section className="summary">Techcracy the ultimate technical festival in the BTR region hosted by Central Institute of Technology Kokrajhar. Join us for competitions, workshops, and inspiring talks that celebrate innovation and creativity. Stay tuned for updates and be a part of the innovation wave at Techcracy!</section>
            <img className="event_button" src="src/assets/eventButton.png" alt="image loading" />
            <img className="tv_1" src="src/assets/tv-01.png" alt="no loading"></img>
            <img className="tv_2" src="src/assets/tv-02.png" alt="no loading"></img>
            <img className="tv_3" src="src/assets/tv-01.png" alt="no loading"></img>
            </section>
            {/* <section className="hero_bottom"></section> */}
        </>
    );
}
