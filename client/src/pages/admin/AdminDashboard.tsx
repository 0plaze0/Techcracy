import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";

const AdminDashboard = () => {
  return (
    <main className="container grid grid-cols-5 gap-1 mx-auto px-4 py-8">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4 px-2 py-2 ">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminDashboard;
