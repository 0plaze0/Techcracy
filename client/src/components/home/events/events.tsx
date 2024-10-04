import "./events.css";

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
                    src="src\assets\imsomnia.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="exhibition"
                    src="src\assets\exibitions.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="competition"
                    src="src\assets\competitions.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="workshop"
                    src="src\assets\workshop.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="lecture"
                    src="src/assets/lecture_series.png"
                    alt="image loading"
                />
            </a>
            <section className="event_header">Our events</section>
            <section className="event_summary">Techcracy 2024 features thrilling events like gaming tournaments technical competitions, workshops, lecture series, exhibition.</section>
            <p className="highlights">These are the main highlights of TECHCRACY 2024</p>
        </section>
        </>
    );
}
