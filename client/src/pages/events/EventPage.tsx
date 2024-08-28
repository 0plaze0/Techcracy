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
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                <EventCard eventData={test_data} />
            </div>
        </div>
    );
};

export default EventPage;
