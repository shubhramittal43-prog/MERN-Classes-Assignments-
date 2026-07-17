import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;