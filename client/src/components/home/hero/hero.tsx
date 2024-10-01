import "./hero.css";

export default function Hero() {
    return (
        <section className="hero-section">
            <video className="tech_video" autoPlay muted loop playsInline>
                <source
                    src="./assets/videos/techcracyVideo.mp4"
                    type="video/mp4"
                />
            </video>
            <img
                className="techcracy"
                src="./assets/Full_logo_with_tag_black-removebg-preview.png"
                alt="image loading"
            />
        </section>
    );
}
