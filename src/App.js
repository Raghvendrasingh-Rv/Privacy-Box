import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import HiddenItemStore from "./pages/HiddenItemStore";
import VideoStore from "./pages/VideoStore";
import ImageStore from "./pages/ImageStore";
import TextStore from "./pages/TextStore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/textstore" element={<TextStore/>} />
        <Route path="/imagestore" element={<ImageStore/>} />
        <Route path="/videostore" element={<VideoStore/>} />
        <Route path="/hiddenitemstore" element={<HiddenItemStore/>} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
