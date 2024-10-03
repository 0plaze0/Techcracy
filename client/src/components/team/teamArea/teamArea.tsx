import "./teamArea.css";
import { TeamCard } from "..";
interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface TeamRoles {
    role: string;
    members: TeamMember[];
}

interface Team {
    roles: TeamRoles[];
}

const teamData: Team = {
    roles: [
        {
            role: "Developers",
            members: [
                {
                    name: "Alice Smith",
                    role: "Frontend Developer",
                    image: "https://example.com/images/alice.jpg",
                },
                {
                    name: "Bob Johnson",
                    role: "Backend Developer",
                    image: "https://example.com/images/bob.jpg",
                },
            ],
        },
        {
            role: "Designers",
            members: [
                {
                    name: "Charlie Brown",
                    role: "UI/UX Designer",
                    image: "https://example.com/images/charlie.jpg",
                },
            ],
        },
    ],
};

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
                    {teamData.roles.map((role) =>
                        role.members.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
