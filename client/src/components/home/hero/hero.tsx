import "./hero.scss";
// import Navbar from "../../components/navbar/navbar";
import techcracy from "./../../../assets/Full_logo_with_tag_black-removebg-preview.png";
import eventButton from "./../../../assets/eventButton.png";
import tv1 from "./../../../assets/tv-01.png";
import tv2 from "./../../../assets/tv-02.png";

export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <img
                    className="techcracy"
                    src={techcracy}
                    alt="image loading"
                />
                <section className="summary">
                    Techcracy the ultimate technical festival in the BTR region
                    hosted by Central Institute of Technology Kokrajhar. Join us
                    for competitions, workshops, and inspiring talks that
                    celebrate innovation and creativity. Stay tuned for updates
                    and be a part of the innovation wave at Techcracy!
                </section>
                {/* <a href="/events"> */}
                <img
                    className="event_button"
                    src={eventButton}
                    alt="image loading"
                />
                {/* </a> */}
                <img className="tv_1" src={tv1} alt="no loading"></img>
                <img className="tv_2" src={tv2} alt="no loading"></img>
                <img className="tv_3" src={tv1} alt="no loading"></img>
            </section>
            {/* <section className="hero_bottom"></section> */}
        </>
    );
}
