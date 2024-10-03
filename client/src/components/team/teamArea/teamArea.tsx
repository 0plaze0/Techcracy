import "./teamArea.css";
import { TeamCard } from "..";

export default function TeamArea() {
    return (
        <section className="team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2>Our Team</h2>
                            <p>Meet our amazing team</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
        </section>
    );
}
