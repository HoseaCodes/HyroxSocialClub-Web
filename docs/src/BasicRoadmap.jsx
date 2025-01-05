import React, { useState, useEffect } from "react";

const BasicRoadmap = () => {
  // Initialize roadmap with dates and completion status
  const initialRoadmap = [
    {
      day: "Day 1",
      date: "January 1, 2025",
      title: "Project Setup and Planning",
      tasks: [
        { id: "1-1", text: "Initialize a new React project.", completed: true },
        { id: "1-2", text: "Set up the folder structure and install dependencies (e.g., React Router, Redux/Context API, Tailwind CSS).", completed: true },
        { id: "1-3", text: "Research and select AI APIs for image recognition, barcode scanning, and meal/workout plan generation.", completed: true },
        { id: "1-4", text: "Create a detailed architecture diagram and flowchart for app features.", completed: true },
      ],
    },
    {
      day: "Day 2-3",
      date: "January 2-3, 2025",
      title: "Authentication and User Management",
      tasks: [
        { id: "2-1", text: "Implement user authentication using AWS Amplify or Firebase Authentication.", completed: true },
        { id: "2-2", text: "Create signup/login screens with email/password and social login options.", completed: true },
        { id: "2-3", text: "Add profile creation with fields for fitness level, goals, age, gender, and weight.", completed: true },
        { id: "2-4", text: "Create a basic dashboard screen layout.", completed: true },
      ],
    },
    {
      day: "Day 4-5",
      date: "January 4-5, 2025",
      title: "AI Integration for Photo Analysis",
      tasks: [
        { id: "4-1", text: "Implement functionality for users to upload fitness inspiration photos.", completed: true },
        { id: "4-2", text: "Integrate AI for photo analysis to verify if the image is a person.", completed: true },
        { id: "4-3", text: "Provide feedback to users if the uploaded image is invalid.", completed: true },
        { id: "4-4", text: "Build the backend logic for storing the inspiration image and user's fitness level.", completed: true },
      ],
    },
    {
      day: "Day 6-7",
      date: "January 6-7, 2025",
      title: "AI-Generated Plans (Workouts and Meals)",
      tasks: [
        { id: "6-1", text: "Use AI to generate workout (still v1) and meal plans (moved to v2) based on user goals and fitness level.", completed: false },
        { id: "6-2", text: "Design and implement weekly plan views with separate tabs for workouts and meals.", completed: false },
        { id: "6-3", text: "Store generated plans in a backend database.", completed: false },
      ],
    },
    {
      day: "Day 8-9",
      date: "January 8-9, 2025",
      title: "Food Logging and Barcode Scanning",
      tasks: [
        { id: "8-1", text: "Create a screen for users to log meals manually.", completed: true },
        { id: "8-2", text: "Add a barcode scanning feature to fetch calorie and nutritional information.", completed: false },
        { id: "8-3", text: "Implement a camera-based AI feature to estimate calorie counts from food images.", completed: false },
        { id: "8-4", text: "Store logged meals in a backend database and update daily calorie counts.", completed: false },
      ],
    },
    {
      day: "Day 10-11",
      date: "January 10-11, 2025",
      title: "Workout Logging",
      tasks: [
        { id: "10-1", text: "Create a screen for users to log completed workouts.", completed: false },
        { id: "10-2", text: "Include fields for workout type, duration, and calories burned.", completed: false },
        { id: "10-3", text: "Update backend database with logged workout details.", completed: false },
        { id: "10-4", text: "Add progress bars or completion percentages for daily and weekly goals.", completed: false },
      ],
    },
    {
      day: "Day 12",
      date: "January 12, 2025",
      title: "Charts and Progress Tracking",
      tasks: [
        { id: "12-1", text: "Integrate a chart library to visualize weight changes, workout trends, and calorie goals.", completed: false },
        { id: "12-2", text: "Display charts on a dedicated progress screen.", completed: false },
      ],
    },
    {
      day: "Day 13",
      date: "January 13, 2025",
      title: "Profile and Settings Screens",
      tasks: [
        { id: "13-1", text: "Build a profile screen to allow users to update their profile, goals, and fitness levels.", completed: false },
        { id: "13-2", text: "Add a settings screen for app preferences like notifications and data privacy.", completed: false },
      ],
    },
    {
      day: "Day 14",
      date: "January 14, 2025",
      title: "Dashboard and High-Level Metrics",
      tasks: [
        { id: "14-1", text: "Design a dashboard to show key metrics like calorie intake, workout streaks, and plan adherence.", completed: false },
        { id: "14-2", text: "Ensure data aggregation from the backend for real-time updates.", completed: false },
      ],
    },
    {
      day: "Day 15",
      date: "January 15, 2025",
      title: "Final Touches and Testing",
      tasks: [
        { id: "15-1", text: "Conduct end-to-end testing for all features.", completed: false },
        { id: "15-2", text: "Optimize app performance and fix any bugs.", completed: false },
        { id: "15-3", text: "Ensure responsiveness for various screen sizes.", completed: false },
        { id: "15-4", text: "Prepare the app for deployment with icons, splash screens, and metadata.", completed: false },
      ],
    },
  ];

  // Load saved completion status from localStorage or use initial state
  const [roadmap, setRoadmap] = useState(() => {
    const saved = localStorage.getItem('roadmapProgress');
    return saved ? JSON.parse(saved) : initialRoadmap;
  });

  // Save to localStorage whenever completion status changes
  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(roadmap));
  }, [roadmap]);

  // Calculate progress for a single day
  const calculateDayProgress = (tasks) => {
    if (!tasks.length) return 0;
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
    const totalTasks = roadmap.reduce((acc, day) => acc + day.tasks.length, 0);
    const completedTasks = roadmap.reduce((acc, day) =>
      acc + day.tasks.filter(task => task.completed).length, 0
    );
    return Math.round((completedTasks / totalTasks) * 100);
  };

  // Handle checkbox toggle
  const toggleTask = (dayIndex, taskId) => {
    setRoadmap(prevRoadmap => {
      const newRoadmap = [...prevRoadmap];
      const dayTasks = newRoadmap[dayIndex].tasks;
      const taskIndex = dayTasks.findIndex(task => task.id === taskId);
      dayTasks[taskIndex] = {
        ...dayTasks[taskIndex],
        completed: !dayTasks[taskIndex].completed
      };
      return newRoadmap;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          AI-Powered Fitness App Roadmap
        </h1>

        {/* Overall Progress */}
        <div className="mb-8 bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">Overall Progress</h2>
            <span className="text-sm font-medium text-gray-600">
              {calculateOverallProgress()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${calculateOverallProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-8">
          {roadmap.map((item, dayIndex) => (
            <div key={dayIndex} className="bg-white shadow rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-700">
                  {item.day}: {item.title}
                </h2>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>

              {/* Day Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                  <span className="text-sm font-medium text-gray-600">
                    {calculateDayProgress(item.tasks)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${calculateDayProgress(item.tasks)}%` }}
                  ></div>
                </div>
              </div>

              <ul className="mt-2 space-y-2">
                {item.tasks.map((task) => (
                  <li key={task.id} className="flex items-start gap-2 text-gray-600">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(dayIndex, task.id)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={task.completed ? "line-through text-gray-400" : ""}>
                      {task.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicRoadmap;