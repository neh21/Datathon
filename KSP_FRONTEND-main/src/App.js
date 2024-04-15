import "./App.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Analytics from "./Components/Analytics";
import Map_report from "./Components/Map_report";
import Predict from "./Components/Predict";
import BeatManagement from "./Components/BeatManagement";
import BeatReport from "./Components/BeatReport";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path = "/analytics" element={<Analytics/>} />
        <Route exact path = "/maps" element={<Map_report/>} />
        <Route exact path = "/predict" element={<Predict/>} />
        <Route exact path = "/beats" element={<BeatManagement/>} />
        <Route exact path = "/reportbeat" element={<BeatReport/>} />
      </Routes>
    </Router>
  );
}

export default App;
