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
import { Carousel3D } from "./components";
function App() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home />} />
                <Route path="landing" element={<Landing />} />
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
