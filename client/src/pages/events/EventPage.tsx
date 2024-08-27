import EventCard from "../../components/events/cards/EventCard";

const EventPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-gray-800">Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                <EventCard />
            </div>
        </div>
    );
};

export default EventPage;
