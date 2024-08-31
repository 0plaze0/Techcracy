import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, EventPage, AdminDashboard } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="events" element={<EventPage />} />
        <Route path="admin" element={<AdminDashboard />}>
          <Route path="create-events" element={<h1>CreateEvent</h1>} />
          <Route path="all-events" element={<h1>all events</h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
