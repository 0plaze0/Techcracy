export interface EventOrganizer {
  name: string;
  email?: string;
  phone?: string;
  image: string;
}

export interface Event {
  event_id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: {
    id: string;
    url: strig;
  };
  organizers?: EventOrganizer[];
  event_type: "Workshop" | "Exhibition" | "Lecture Series";
}
