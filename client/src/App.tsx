import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, EventPage } from "./pages";
function App() {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path="events" element={<EventPage />} />
            </Route>
        </Routes>
    );
}

export default App;
