import { Event } from "../../../types/event";
import "./EventCard.scss";
const EventCard = ({ eventData }: { eventData: Event }) => {
  const card_class = eventData.event_type.toLowerCase().split(" ")[0];
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${card_class}`}>
      <img
        className="w-full h-56 object-cover object-center"
        src={eventData?.image?.id}
        alt="event"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          {eventData.title}
        </h1>
        <p className="mt-2 text-gray-600">
          {eventData.description.length > 100
            ? eventData.description.substring(0, 100) + "..."
            : eventData.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">Date: {eventData.date}</p>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
