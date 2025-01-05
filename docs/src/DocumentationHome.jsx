import React from "react";

const docs = [
  { name: "Tech Spec", link: "./Docsite" },
  // { name: "Core Features", link: "/docs/core-features" },
  // { name: "Progress Tracking", link: "/docs/progress-tracking" },
  // { name: "Enhanced AI Features", link: "/docs/enhanced-ai" },
  // { name: "Habit and Motivation Tools", link: "/docs/habit-motivation" },
  // { name: "Interactive Features", link: "/docs/interactive-features" },
  // { name: "Additional Features", link: "/docs/additional-features" },
];

const DocumentationHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Documentation Home
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Welcome to the AI Fitness App documentation. Select a section below to view more details.
        </p>
        <ul className="space-y-4">
          {docs.map((doc, index) => (
            <li key={index} className="bg-blue-50 hover:bg-blue-100 transition rounded-lg">
              <a
                href={doc.link}
                className="block px-4 py-3 text-blue-600 font-semibold text-lg"
              >
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentationHome;
