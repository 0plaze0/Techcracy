import { EventData } from "./../../types/event";
// import data from "./../../data/events/events.json";

import CardSection from "./../../components/events/cards/CardSection";
import { useEffect, useState } from "react";
import { api } from "../../config/api";
import { eventTypeSorter } from "../../utils/eventSorter";

const AllEvent = () => {
  const [events, setEvents] = useState<EventData[] | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await api("/api/v1/event/get-event");

        setEvents(eventTypeSorter(data.events) as EventData[]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-6">
      {events?.map((event: EventData) => (
        <CardSection key={event.event_type} events={event} edit={true} />
      ))}
    </div>
  );
};

export default AllEvent;
