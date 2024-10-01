import EventCardsEdit from "./EventCardEdit";
import EventCards from "./EventCard";
import { Event, EventData } from "../../../types/event";

const CardSection = ({
  events,
  edit,
}: {
  events: EventData;
  edit: boolean;
}) => {
  const event_type = events.event_type;

  return (
    <section className="container mx-auto px-4 py-8 text-center w-full">
      <h2 className="text-4xl font-semibold text-gray-800">{event_type}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {!edit
          ? events.events.map((event: Event) => (
              <EventCards key={event._id} eventData={event} />
            ))
          : events.events.map((event: Event) => (
              <EventCardsEdit key={event._id} eventData={event} />
            ))}
      </div>
    </section>
  );
};

export default CardSection;
