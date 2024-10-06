import "./navbar.scss";
import citklogo from "./../../assets/citklogo.png";

export default function Navbar() {
    return (
        <div className="navbar_main">
            <div className="navbar_1">
                <div className="logo">
                    <img
                        className="logo_img"
                        src={citklogo}
                        alt="image loading"
                    />
                </div>
            </div>
            <div className="navbar_2"></div>
            <div className="navbar_3">
                <div className="event_1">
                    <a href="/">Home</a>{" "}
                </div>
                <div className="team_1">
                    <a href="/events">Events</a>
                </div>
                <div className="journey_1">
                    <a href="/team">Team</a>
                </div>
            </div>
        </div>
    );
}
