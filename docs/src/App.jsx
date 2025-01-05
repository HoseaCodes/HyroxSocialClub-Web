import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeatureList from "./FeatureList"; // Adjust the path as needed
import DocumentationHome from "./DocumentationHome"; // The home screen for app documentation
import Docsite from "./Docsite"; // The tech spec documentation
import RoadmapPage from "./RoadmapPage"; // The roadmap for the app
import BasicRoadmap from "./BasicRoadmap"; // The basic roadmap for the app

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="bg-white shadow p-4 mb-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Documentation Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-blue-500 hover:underline">
                Feature List
              </Link>
            </li>
            <li>
              <Link to="/techspec" className="text-blue-500 hover:underline">
                Tech Spec
              </Link>
            </li>
            <li>
              <Link to="/basic-roadmap" className="text-blue-500 hover:underline">
                Basic Roadmap
              </Link>
            </li>
            <li>
              <Link to="/advanced-roadmap" className="text-blue-500 hover:underline">
                Advanced Roadmap
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<DocumentationHome />} />
          <Route path="/features" element={<FeatureList />} />
          <Route path="/techspec" element={<Docsite />} />
          <Route path="/basic-roadmap" element={<BasicRoadmap />} />
          <Route path="/advanced-roadmap" element={<RoadmapPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
