import React from "react";
import TeamCard from "../teamCard/teamCard";
import { facultyRoles } from "./../../../data/faculty/faculty"; // Import your data and interfaces

const FacultyTeam: React.FC = () => {
    return (
        <div className="row">
            {facultyRoles.map((roleData) =>
                roleData.members.map((member) => (
                    <TeamCard
                        key={member.name}
                        name={member.name}
                        role={roleData.role}
                        image="https://i.ibb.co/JC4skS0/team-animate.jpg" // Add member-specific image if available
                    />
                ))
            )}
        </div>
    );
};

export default FacultyTeam;
