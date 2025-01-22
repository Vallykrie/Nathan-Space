import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EpicPage from "./pages/EpicPage";
import ApodPage from "./pages/ApodPage";
import MarsGallery from "./pages/MarsPage";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epic" element={<EpicPage />} />
          <Route path="/apod" element={<ApodPage />} />
          <Route path="/marsrover" element={<MarsGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
