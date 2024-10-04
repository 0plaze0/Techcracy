import "./teamArea.css";
import { TeamCard } from "..";
import { teamRoles } from "./../../../data/team/team";

const baseImgUrl = "/assets/team/compressed new/";
// interface TeamMember {
//     name: string;
//     role: string;
//     image: string;
// }

// interface TeamRoles {
//     role: string;
//     members: TeamMember[];
// }

const teamData = teamRoles;

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
                    {teamData.map((role) =>
                        role.members.map((member) => (
                            <TeamCard
                                key={member.name}
                                name={member.name}
                                role={member.role}
                                image={
                                    member.image == "null"
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
    );
}
