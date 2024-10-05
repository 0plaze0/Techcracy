import "./sponsor.scss";
import insta from "./../../../assets/insta.png";
import mail from "./../../../assets/gmail.png";
import cit3 from "./../../../assets/cit3.png";
import logo_tech from "./../../../assets/logo_tech.png";

export default function Sponsor() {
    return (
        <div className="sponsor">
            <div className="Pankhi"></div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        {/* Left Section: Contact and Social Links */}
                        <div className="footer-left">
                            <div className="social-icons">
                                <p>Follow us:</p>
                                <div className="Saloi143">
                                    <a href="https://www.instagram.com/techcracy.citk/">
                                        <img src={insta} alt="Mail" />
                                    </a>
                                    <a className="mail" href="#">
                                        <img src={mail} alt="Contact" />
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div className="contact-info">
                                <p>Contact Us:</p>
                                <br />
                                <address>
                                    Central Institute of Technology, Kokrajhar{" "}
                                    <br />
                                    PO: Rangalikhuta, Dist: Kokrajhar <br />
                                    BTAD, Assam 783370 <br />
                                    <a href="https://cit.ac.in">cit.ac.in</a>
                                </address>
                            </div>
                        </div>

                        {/* Middle Section: Divider and Developed By */}
                        <div className="footer-middle">
                            <div className="divider-icon">
                                <img src={logo_tech} alt="Divider Icon" />
                            </div>
                            <p className="developed-by">
                                Developed by{" "}
                                <a href="https://webteamtechcracy.netlify.app/">
                                    <b> Techcracy Web Team</b>
                                </a>
                            </p>
                            {/* <hr /> */}
                            <div className="h_rule"></div>
                            <p className="copyright">© Techcracy24'</p>
                        </div>
                        {/* Right Section: Event Information */}
                        <div className="footer-right">
                            <div className="sponsor-logo">
                                <img src={cit3} alt="Sponsor Logo" />
                            </div>
                            <p className="event-description">
                                Techcracy 2024 offers a diverse range of
                                thrilling gaming competitions, technical
                                challenges, and interactive workshops designed
                                to push the boundaries of innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
