import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
    Home,
    EventPage,
    AdminDashboard,
    AllEvent,
    AllOrganizer,TeamPage, WebTeam
} from "./pages";
import { Carousel3D } from "./components";
function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="web-team" element={<WebTeam />} />
                <Route path="3d" element={<Carousel3D />} />
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
