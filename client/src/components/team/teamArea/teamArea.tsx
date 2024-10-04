import Navbar from "../../navbar/navbar";
import Sponsor from "../../../components/home/sponsor/sponsor";
import "./teamArea.css";
import { TeamCard } from "..";
import { teamRoles } from "./../../../data/team/team"; // Student team data
import { facultyRoles } from "./../../../data/faculty/faculty"; // Faculty team data

const baseImgUrl = "/assets/team/compressed new/";
const baseeImgUrl = "/assets/team/Faculty incharges/";

const TeamArea = () => {
    return (
        <>
            <Navbar />
            {/* Faculty Section */}
            <section className="team-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-text-center">
                                <h2>Faculty Incharges</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {facultyRoles.map((role) =>
                            role.members.map((member) => (
                                <TeamCard
                                    key={member.name}
                                    name={member.name}
                                    role={`${member.designation}`} // Faculty specific role
                                    image={
                                        member.image === "null"
                                            ? "no image"
                                            : `${baseeImgUrl}${encodeURIComponent(
                                                  member.image.split(".")[0]
                                              )}.jpg`
                                    } // Add real image path if available
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Student Team Section */}
            <section className="team-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-text-center">
                                <h2>Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamRoles.map((role) =>
                            role.members.map((member) => (
                                <TeamCard
                                    key={member.name}
                                    name={member.name}
                                    role={member.role}
                                    image={
                                        member.image === "null"
                                            ? "no image"
                                            : `${baseImgUrl}/${
                                                  member.image.split(".")[0]
                                              }-min.png`
                                    }
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
            <Sponsor />
        </>
    );
};

export default TeamArea;
