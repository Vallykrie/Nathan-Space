// NASA EPIC API Project: Vite + Tailwind CSS + JSX

// Import required CSS for Tailwind (Handled by Vite)
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import EpicPage from "./pages/EpicPage";

// App Component
function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <nav className="bg-gray-900 p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-xl font-bold">
              Space Dashboard
            </Link>
            <div>
              <Link to="/epic" className="mr-4 hover:underline">
                EPIC Images
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/epic" element={<EpicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
