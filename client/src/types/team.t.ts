export interface FacultyMember {
    name: string;
    designation: string;
    department: string;
}

export interface FacultyRoles {
    role: string;
    members: FacultyMember[];
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
  }
  
  export interface TeamRoles {
    role: string;
    members: TeamMember[];
  }