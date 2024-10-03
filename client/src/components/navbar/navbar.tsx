import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar_main">
            <div className="navbar_1">
                <div className="logo"><img className="logo_img" src="src/assets/cit-logo.png" alt="image loading" /></div>
            </div>
            <div className="navbar_2"></div>
            <div className="navbar_3">
                <div className="event_1">Events</div>
                <div className="team_1">Team</div>
                <div className="journey_1">Journey</div>
            </div>
        </div>
    );
}
