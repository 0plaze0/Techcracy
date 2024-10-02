// import data from "../../data/events/events.json";
// import EventContainer from "../../components/events/cards/EventContainer";
// import { EventData } from "../../types/event";
import WorkshopCarousel from "../../components/events/WorkshopCarousel/WorkshopCarousel";

const EventPage = () => {
    const workshopimages = [
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
        "assets/events/workshops/drone-workshop.jpeg",
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold text-gray-800">Events</h1>

            <div>
                {/* <EventContainer events={events} /> */}

                <h1 className="text-3xl font-semibold text-gray-800 center-align">
                    Workshops
                </h1>
                <WorkshopCarousel images={workshopimages} />
            </div>
        </main>
    );
};

export default EventPage;
