import { Event } from "../types/event";

const data = [
  {
    event_id: "1",
    title: "Hackathon",
    description:
      "A coding competition where participants showcase their skills and build innovative solutions.",
    date: "2022-10-15",
    location: "Auditorium",
    image: "https://placehold.co/600x400?text=Hackathon",
    organizers: [
      {
        _id: "34",
        name: "Coding Club",
        contact: "codingclub@gmail.com",
      },
    ],
    event_type: "Exhibition",
  },
  {
    event_id: "2",
    title: "Tech Talks",
    description:
      "A series of informative talks by industry experts on the latest technology trends.",
    date: "2022-10-16",
    location: "Conference Hall",
    image: "https://placehold.co/600x400?text=Tech%20Talks",
    organizers: [
      {
        _id: "2",
        name: "Techcracy",
        contact: "codingclub@gmail.com",
      },
    ],
    event_type: "Lecture Series",
  },
  {
    event_id: "3",
    title: "Robotics Workshop",
    description:
      "Hands-on workshop to learn about building and programming robots.",
    date: "2022-10-17",
    location: "Robotics Lab",
    image: "https://placehold.co/600x400?text=Robotics%20Workshop",
    organizers: [
      {
        _id: "3",
        name: "Robotics Club",
        contact: "roboticsclub@gmail.com",
      },
    ],
    event_type: "Workshop",
  },
];

export const eventTypeSorter = (data: Event[]) => {
  const eventSort: { event_type: string; events: Event[] }[] = [
    { event_type: "Workshop", events: [] },
    { event_type: "Lecture Series", events: [] },
    { event_type: "Exhibition", events: [] },
  ];

  data.forEach((event) => {
    eventSort.forEach((type) => {
      if (type.event_type == event.event_type) type.events.push(event);
    });
  });

  return eventSort;
};

console.log(eventTypeSorter(data as Event[]));
