import "./sponsor.scss";

export default function Sponsor() {
    return (
        <div className="sponsor">
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Left Section: Contact and Social Links */}
                    <div className="footer-left">
                        <div className="social-icons">
                            <a href="#"><img src="src/assets/mail-icon.png" alt="Mail" /></a>
                            <a href="#"><img src="src/assets/contact-icon.png" alt="Contact" /></a>
                        </div>
                        <div className="contact-info">
                            <p>Contact Us:</p>
                            <address>
                                Central Institute of Technology, Kokrajhar <br />
                                PO: Rangalikhuta, Dist: Kokrajhar <br />
                                BTAD, Assam 783370 <br />
                                <a href="https://cit.ac.in">cit.ac.in</a>
                            </address>
                        </div>
                    </div>

                    {/* Middle Section: Divider and Developed By */}
                    <div className="footer-middle">
                        <div className="divider-icon">
                            <img src="src/assets/divider-icon.png" alt="Divider Icon" />
                        </div>
                        <p className="developed-by">Developed by ..........</p>
                        <p className="copyright">© Techcracy24'</p>
                    </div>

                    {/* Right Section: Event Information */}
                    <div className="footer-right">
                        <div className="sponsor-logo">
                            <img src="src/assets/sponsor-logo.png" alt="Sponsor Logo" />
                        </div>
                        <p className="event-description">
                            Techcracy 2024 offers a diverse range of thrilling gaming competitions, technical challenges, and interactive workshops designed to push the boundaries of innovation.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}
