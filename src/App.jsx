import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import EpicPage from "./pages/EpicPage";

// App Component
function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epic" element={<EpicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
