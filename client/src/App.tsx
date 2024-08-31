import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Home,
  EventPage,
  AdminDashboard,
  CreateEvent,
  AllEvent,
} from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="events" element={<EventPage />} />
        <Route path="admin" element={<AdminDashboard />}>
          <Route path="create-events" element={<CreateEvent />} />
          <Route path="all-events" element={<AllEvent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
