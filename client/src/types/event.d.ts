export interface EventOrganizer {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  image?: {
    id: string;
    url: string;
  };
}

export interface Event {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: {
    id: string;
    url: string;
  };
  organizers?: EventOrganizer[];
  event_type: "Workshop" | "Exhibition" | "Lecture Series";
  //  speakers or other invited guests (optional)
}

export interface EventData {
  events: Event[];
  event_type: "Workshop" | "Exhibition" | "Lecture Series";
}
