import "./teamCard.css";

export default function TeamCard() {
    return (
        <div className="col-md-4 single-item col-lg-3">
            <div className="item">
                <div className="thumb">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/JC4skS0/team-animate.jpg"
                        alt="Thumb"
                    />
                    {/* <div className="overlay">
                        <h4>Lorem</h4>
                        <p>Lorem Ipsem ....</p>
                    </div> */}
                </div>
                <div className="info">
                    <span className="message">
                        <a href="#">
                            <i className="fas fa-envelope-open"></i>
                        </a>
                    </span>
                    {/* <h4>Lorem Ipsum</h4> */}
                    <span>Mighty Warrior</span>
                </div>
            </div>
        </div>
    );
}
