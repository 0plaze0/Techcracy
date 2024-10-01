import "./merchandise.scss";


export default function Merchandise() {
    return (
        <>
            <div className="section3">
                <h1 className="merchandise"></h1>
            </div>
            <div className="section4">
                <video className="merchandise" autoPlay muted loop playsInline>
                    <source
                        src="./assets/videos/merchandise.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </>
    );
}
