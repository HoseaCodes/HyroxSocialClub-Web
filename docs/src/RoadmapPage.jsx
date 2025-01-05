import React from "react";

const RoadmapPage = () => {
    const roadmap = [
        {
          day: "Day 1: Project Setup and Planning",
          tasks: [
            "Initialize a new React Native project.",
            "Set up the folder structure and install dependencies.",
            "Research and select APIs for AI integrations, barcode scanning, and wearable integrations.",
            "Create an architecture plan for AI and real-time features.",
          ],
        },
        {
          day: "Day 2-3: Authentication, Profile, and User Management",
          tasks: [
            "Implement authentication (AWS Amplify or Firebase).",
            "Add profile creation and settings.",
            "Set up basic user data handling on the backend.",
            "Design habit tracking logic and create a habit tracking screen skeleton.",
          ],
        },
        {
          day: "Day 4: AI Photo Analysis and Body Scan Analysis",
          tasks: [
            "Implement photo upload and AI verification for inspiration photos.",
            "Add functionality for periodic body photo uploads.",
            "Integrate AI to analyze body changes over time and display progress visually.",
          ],
        },
        {
          day: "Day 5-6: AI-Generated Plans (Workouts and Meals)",
          tasks: [
            "Build AI logic for generating personalized meal and workout plans.",
            "Create weekly views for plans.",
            "Design and implement interactive daily plan screens.",
          ],
        },
        {
          day: "Day 7: Notifications and Reminders",
          tasks: [
            "Add push notifications for reminders: meal times, workout schedules, habit reminders.",
            "Create notification scheduling for long-term adherence to plans.",
          ],
        },
        {
          day: "Day 8: Workout and Meal Logging",
          tasks: [
            "Create screens for logging workouts and meals.",
            "Add barcode scanning and AI calorie detection for meals.",
            "Sync logged data with backend and update daily/weekly stats.",
          ],
        },
        {
          day: "Day 9: Offline Mode and Data Syncing",
          tasks: [
            "Enable offline functionality for logging workouts and meals.",
            "Implement local storage and syncing to the backend when reconnected.",
            "Test seamless transitions between offline and online modes.",
          ],
        },
        {
          day: "Day 10: Progress Charts and AI-Powered Goal Adjustment",
          tasks: [
            "Integrate charts for tracking calorie consumption, workout progress, and weight changes.",
            "Add AI logic for analyzing trends and suggesting goal adjustments.",
            "Display actionable insights on the progress screen.",
          ],
        },
        {
          day: "Day 11: Gamification Elements",
          tasks: [
            "Implement achievement badges for milestones (e.g., workout streaks).",
            "Add weekly challenges with leaderboards.",
            "Design progress-based rewards to motivate users.",
          ],
        },
        {
          day: "Day 12: Wearable Integration and Stress Insights",
          tasks: [
            "Integrate data syncing with wearables (e.g., Fitbit, Apple Watch).",
            "Display metrics like steps, heart rate, and calories burned.",
            "Implement stress and recovery insights using wearable data or logged habits.",
            "Show recovery trends on the dashboard.",
          ],
        },
        {
          day: "Day 13: Voice Commands and AI Chat Assistant",
          tasks: [
            "Add voice command functionality for logging workouts, meals, and navigating the app.",
            "Build an AI chat assistant to answer fitness-related queries and provide tips or quick plan adjustments.",
            "Design the chat interface and backend integration.",
          ],
        },
        {
          day: "Day 14: Dashboard and High-Level Metrics",
          tasks: [
            "Finalize the dashboard to show current progress on all metrics.",
            "Include habit streaks, calories logged, and workouts completed.",
            "Integrate gamification elements and reminders into the dashboard.",
          ],
        },
        {
          day: "Day 15: Final Testing, Optimization, and Polish",
          tasks: [
            "Conduct thorough testing across devices (online and offline).",
            "Optimize app performance for AI and wearable integrations.",
            "Finalize UI/UX for all screens, ensuring consistency and responsiveness.",
            "Prepare the app for beta testing.",
          ],
        },
        {
          day: "Post-Roadmap: Deployment and Enhancements",
          tasks: [
            "Deploy the app to beta platforms (TestFlight, Google Play).",
            "Gather user feedback and iterate.",
            "Plan future features like community elements or language support.",
          ],
        },
      ];
      

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          15-Day Roadmap
        </h1>
        <p className="text-gray-600 text-center mb-8">
          A detailed plan prioritizing foundational features first, followed by
          enhancements while ensuring a logical flow.
        </p>

        <div className="space-y-8">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {item.day}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
