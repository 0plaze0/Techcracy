const EventCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                className="w-full h-56 object-cover object-center"
                src={"https://placehold.co/600x400?text=Hackathon"}
                alt="event"
            />
            <div className="p-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                    {"Hackathon"}
                </h1>
                <p className="mt-2 text-gray-600">
                    {
                        "A coding competition where participants showcase their skills and build innovative solutions."
                    }
                </p>
                <div className="flex justify-between items-center mt-4">
                    {/* <Link to={`/events/${event.name}`} className="text-blue-600 hover:underline">View</Link> */}
                    <p className="text-gray-600">Date: {"22-09-2024"}</p>
                </div>
            </div>
        </div>
    );
};
export default EventCard;
