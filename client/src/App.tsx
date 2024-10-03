import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, EventPage, TeamPage } from "./pages";
import { Carousel3D } from "./components";
function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="3d" element={<Carousel3D />} />
                <Route path="events" element={<EventPage />} />
            </Route>
        </Routes>
    );
}

export default App;
