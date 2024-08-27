import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<h1>Test</h1>} />
    </Routes>
  );
}

export default App;
