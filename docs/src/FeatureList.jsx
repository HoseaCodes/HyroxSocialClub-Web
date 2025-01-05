import React from "react";

const features = [
  {
    category: "Core Features",
    items: [
      { name: "User Authentication", description: "Sign up, login, and password recovery. Integration with third-party platforms (e.g., Google, Apple)." },
      { name: "Profile Management", description: "Edit personal details (name, age, weight, height, fitness level). Set fitness goals and upload profile photo." },
      { name: "AI Fitness Photo Analysis", description: "Upload inspiration photos and receive AI validation on fitness feasibility based on current fitness level." },
      { name: "AI-Generated Weekly Plans", description: "Personalized workout and meal plans with dynamic updates based on user progress." },
      { name: "Workout Logging", description: "Track daily workouts, log custom workouts, and integrate with wearable devices for automatic tracking." },
      { name: "Meal Logging", description: "Log meals using barcode scanning, AI-based calorie detection, or manual input." },
    ],
  },
  {
    category: "Progress Tracking",
    items: [
      { name: "Progress Charts", description: "Visualize trends in weight changes, workout intensity, and calorie consumption." },
      { name: "Body Scan Analysis", description: "Upload periodic photos to track physical changes with AI progress visualization." },
      { name: "High-Level Metrics Dashboard", description: "View summarized progress stats, performance insights, and recovery metrics." },
    ],
  },
  {
    category: "Enhanced AI Features",
    items: [
      { name: "AI-Powered Goal Adjustment", description: "Analyze progress and suggest recalibrations to goals, workouts, and meal plans." },
      { name: "AI Chat Assistant", description: "Respond to fitness and diet questions, provide motivational tips, and enable quick updates to plans." },
    ],
  },
  {
    category: "Habit and Motivation Tools",
    items: [
      { name: "Habit Tracking", description: "Track daily habits like water intake, sleep, and meditation with streak displays." },
      { name: "Gamification Elements", description: "Earn achievement badges, participate in challenges, and receive rewards for progress." },
      { name: "Notifications and Reminders", description: "Get reminders for workouts, meal prep, and motivational tips." },
    ],
  },
  {
    category: "Interactive Features",
    items: [
      { name: "Voice Commands", description: "Use hands-free logging and voice navigation for easy app interaction." },
      { name: "Offline Mode", description: "Log workouts and meals without internet access and sync data later." },
      { name: "Wearable Device Integration", description: "Sync with devices like Apple Watch or Fitbit to display metrics like steps and heart rate." },
    ],
  },
  {
    category: "Additional Features",
    items: [
      { name: "Stress and Recovery Insights", description: "Analyze workout intensity and provide recovery suggestions based on data." },
      { name: "Recipe Suggestions and Shopping List Generation", description: "Get AI-recommended recipes aligned with meal plans and auto-generate grocery lists." },
      { name: "Multi-Language Support", description: "Enable interface support for multiple languages for a global audience." },
      { name: "Data Export and Syncing", description: "Export progress charts and sync with third-party apps like MyFitnessPal." },
    ],
  },
];

const FeatureList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Feature List for AI Fitness App
        </h1>
        {features.map((featureGroup, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {featureGroup.category}
            </h2>
            <ul className="list-disc pl-6 space-y-4">
              {featureGroup.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h3 className="text-gray-700 font-medium">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
