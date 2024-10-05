import "./eventPage.scss";
import data from "../../data/events/event-page.json";
import { EventSection } from "../../components/events";
import { EventSectionProps } from "../../types/event";
import Navbar from "../../components/navbar/navbar";
const EventPage = () => {
    const events: EventSectionProps[] = JSON.parse(JSON.stringify(data));

    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8 event-main">
                <h1 className="text-4xl font-semibold text-gray-800 text-center">
                    Events
                </h1>
                {events.map((event) => (
                    <EventSection key={event.event_type} events={event} />
                ))}
            </main>
        </>
    );
};

export default EventPage;
