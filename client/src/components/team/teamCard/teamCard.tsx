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
                    {/* Optional Overlay, Uncomment if needed */}
                    {/* <div className="overlay">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsem ....</p>
                        </div> */}
                </div>
                <div className="info">
                    <h4 className="name">John Doe</h4> {/* Name field */}
                    <span className="position">Team Leader</span>{" "}
                    {/* Position field */}
                </div>
            </div>
        </div>
    );
}
