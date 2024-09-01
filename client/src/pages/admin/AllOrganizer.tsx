import { useEffect, useState } from "react";
import { OrganizerIcon } from "../../components";
import { EventOrganizer } from "../../types/event";
import { api } from "../../config/api";

const AllOrganizer = () => {
  const [organizers, setOrganizers] = useState<EventOrganizer[]>([]);
  useEffect(() => {
    const fetchOrganizer = async () => {
      try {
        const { data } = await api("/api/v1/organizer/get-organizer");
        if (data.success) setOrganizers(data.organizers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrganizer();
  }, []);
  return (
    <div className="container mx-auto flex justify-center">
      {organizers.map((organizer) => (
        <OrganizerIcon key={organizer._id} organizer={organizer} edit={true} />
      ))}
    </div>
  );
};

export default AllOrganizer;
