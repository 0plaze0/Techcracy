import { Event } from "../../../types/event";

const EventCard = ({ eventData }: { eventData: Event }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                className="w-full h-56 object-cover object-center"
                src={eventData.image}
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
