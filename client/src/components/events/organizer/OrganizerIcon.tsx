const OrganizerIcon = () => {
  return (
    <div className="flex gap-1 px-2 py-2">
      <div className="flex px-2 py-2 gap-2 justify-center items-center rounded border-solid border-2 border-blue-500">
        <div>
          <img
            alt="Icon"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          />
        </div>
        <p>David Blane</p>
      </div>
    </div>
  );
};

export default OrganizerIcon;
