import "./events.css";

export default function Events() {
    return (
        <section className="events-section">
            <img
                className="mario"
                src="/assets/marioRun.gif"
                alt="image loading"
            />
            <img
                className="soil"
                src="/assets/underground.png"
                alt="image loading"
            />
            <a href="">
                <img
                    className="insomnia"
                    src="/assets/INSOMNIA.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="exhibition"
                    src="/assets/exhibition.png"
                    alt="image loading"
                />
            </a>
            <a href="">
                <img
                    className="competition"
                    src="/assets/compition.png"
                    alt="image loading"
                />
            </a>
        </section>
    );
}
