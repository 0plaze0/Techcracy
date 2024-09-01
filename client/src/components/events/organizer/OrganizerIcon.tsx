import { api } from "../../../config/api";
import { EventOrganizer } from "../../../types/event";
import { TrashIcon } from "@heroicons/react/16/solid";

const OrganizerIcon = ({
  organizer,
  edit,
}: {
  organizer: EventOrganizer;
  edit: boolean;
}) => {
  const handleDelete = async (_id: string) => {
    try {
      const { data } = await api.delete(
        `/api/v1/organizer/delete-organizer/${_id}`
      );
      if (data.success) window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-1 px-2 py-2">
      <div className="flex px-2 py-2 gap-2 justify-center items-center rounded border-solid border-2 border-blue-500">
        <div>
          <img
            alt="Icon"
            src={`${import.meta.env.VITE_BASE_API}api/v1/organizer/get-image/${
              organizer.image?.id
            }`}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
        </div>
        <p>{organizer.name}</p>
        {edit && (
          <span onClick={() => handleDelete(organizer._id)}>
            <TrashIcon className="h-6 w-6 text-red-800 hover:text-red-300" />
          </span>
        )}
      </div>
    </div>
  );
};

export default OrganizerIcon;
