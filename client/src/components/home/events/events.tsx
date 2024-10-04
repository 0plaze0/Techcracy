import "./events.css";
import imsomia from "./../../../assets/imsomnia.png";
import exhibitions from "./../../../assets/exibitions.png";
import competitions from "./../../../assets/competitions.png";
import workshop from "./../../../assets/workshop.png";
import lecture from "./../../../assets/lecture_series.png";

export default function Events() {
    return (
        <>
            <section className="events-section">
                {/* <img
                className="mario"
                src="/assets/marioRun.gif"
                alt="image loading"
            /> */}
                {/* <img
                className="soil"
                src="/assets/underground.png"
                alt="image loading"
            /> */}
                <a href="">
                    <img
                        className="insomnia"
                        src={imsomia}
                        alt="image loading"
                    />
                </a>
                <a href="">
                    <img
                        className="exhibition"
                        src={exhibitions}
                        alt="image loading"
                    />
                </a>
                <a href="">
                    <img
                        className="competition"
                        src={competitions}
                        alt="image loading"
                    />
                </a>
                <a href="">
                    <img
                        className="workshop"
                        src={workshop}
                        alt="image loading"
                    />
                </a>
                <a href="">
                    <img
                        className="lecture"
                        src={lecture}
                        alt="image loading"
                    />
                </a>
                <section className="event_header">Our events</section>
                <section className="event_summary">
                    Techcracy 2024 features thrilling events like gaming
                    tournaments technical competitions, workshops, lecture
                    series, exhibition.
                </section>
                <p className="highlights">
                    These are the main highlights of TECHCRACY 2024
                </p>
            </section>
        </>
    );
}
