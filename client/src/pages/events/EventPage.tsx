import EventCard from "../../components/events/cards/EventCard";
import { Event } from "../../types/event";
const EventPage = () => {
    const test_data: Event = {
        title: "Hackathon",
        description:
            "A coding competition where participants showcase their skills and build innovative solutions.",
        date: "22-09-2024",
        location: "Online",
        image: "https://placehold.co/600x400?text=Hackathon",
        event_type: "Workshop",
    };
    const workshop: Event = {
        ...test_data,
        event_type: "Workshop",
    };
    const exhibition: Event = {
        ...test_data,
        event_type: "Exhibition",
    };
    const lecture_series: Event = {
        ...test_data,
        event_type: "Lecture Series",
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                <EventCard eventData={workshop} />
                <EventCard eventData={lecture_series} />
                <EventCard eventData={exhibition} />
            </div>
        </div>
    );
};

export default EventPage;
