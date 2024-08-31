import { EventData } from "../../../types/event";
import CardSection from "./CardSection";

const EventContainer = ({ events }: { events: EventData[] }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {events.map((event: EventData) => (
        <CardSection key={event.event_type} events={event} edit={false} />
      ))}
    </div>
  );
};

export default EventContainer;
