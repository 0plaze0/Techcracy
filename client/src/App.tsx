import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
    Home,
    EventPage,
    AdminDashboard,
    AllEvent,
    AllOrganizer,
    Landing,
} from "./pages";
function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="events" element={<EventPage />} />
                <Route path="admin" element={<AdminDashboard />}>
                    <Route path="all-events" element={<AllEvent />} />
                    <Route path="all-organizer" element={<AllOrganizer />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
