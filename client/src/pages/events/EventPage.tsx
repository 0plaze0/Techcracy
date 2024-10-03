// import data from "../../data/events/events.json";
import data from "../../data/events/event-page.json";
// import { EventData } from "../../types/event";
// import WorkshopCarousel from "../../components/events/WorkshopCarousel/WorkshopCarousel";
import { EventSection } from "../../components/events";
import { EventSectionProps } from "../../types/event";
const EventPage = () => {
    const events: EventSectionProps[] = JSON.parse(JSON.stringify(data));
    // const image_dir = "/assets/events/";
    // const workshopimages = Array.from({ length: 5 }, (_) => {
    //     return `${image_dir}workshops/arduino.png`;
    // });
    // const workshopimages = Array(5).fill(`${image_dir}workshops/arduino.png`);

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold text-gray-800 text-center">Events</h1>
            {events.map((event) => (
                <EventSection key={event.event_type} events={event} />
            ))}
        </main>
    );
};

export default EventPage;
