import { EventData } from "./../../types/event";
import data from "./../../data/events/events.json";

import CardSection from "./../../components/events/cards/CardSection";

const AllEvent = () => {
  const events = data as EventData[];
  return (
    <div className="flex flex-col gap-4 mt-6">
      {events.map((event: EventData) => (
        <CardSection key={event.event_type} events={event} edit={true} />
      ))}
    </div>
  );
};

export default AllEvent;
