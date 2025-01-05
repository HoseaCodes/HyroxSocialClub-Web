import React, { useState } from 'react';
import { Menu, BookOpen, ChevronRight } from 'lucide-react';

const DocSite = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">AI Fitness App Docs</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar and Content */}
      <div className="flex h-screen pt-14">
        {/* Sidebar */}
        <aside
           className={`fixed left-0 z-40 w-64 h-full bg-white border-r border-gray-200 
           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
           lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
                    <div className="h-full overflow-y-auto pt-4">
          <nav className="px-4 py-4">
              {[
                { title: 'Application Overview', id: '1' },
                { title: 'Technology Stack', id: '2' },
                { title: 'Core Functionalities', id: '3' },
                { title: 'Architecture Design', id: '4' },
                { title: 'API Specifications', id: '5' },
                { title: 'Security', id: '6' },
                { title: 'Performance', id: '7' },
                { title: 'Milestones', id: '8' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#section-${item.id}`}
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {item.title}
                </a>
              ))}
            </nav>
            </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 overflow-y-auto lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-blue max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Tech Specification for AI Fitness App</h1>
              
              <section id="section-1" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Application Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  An AI-powered fitness app designed to help users achieve their fitness goals through personalized workout 
                  and meal plans, daily progress tracking, and AI insights. Users can log their activities, track their habits, 
                  and stay motivated through gamification elements, reminders, and wearable integrations.
                </p>
              </section>

              <section id="section-2" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Technology Stack</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Frontend</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Framework: React Native (for cross-platform mobile app development)</li>
                      <li>UI Library: NativeWind CSS (Tailwind CSS for React Native)</li>
                      <li>State Management: Redux Toolkit or React Context API</li>
                      <li>Navigation: React Navigation</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Backend</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Framework: Node.js with Express.js</li>
                      <li>Database: PostgreSQL with Sequelize ORM</li>
                      <li>Storage: AWS S3 (for user-uploaded images)</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">AI and Machine Learning</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Photo Analysis: AWS Rekognition or Google Vision API</li>
                      <li>Calorie Detection: Google Vision API or OpenCV with custom-trained model</li>
                      <li>AI Workout/Meal Plans: OpenAI API or custom TensorFlow model</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="section-3" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Core Functionalities</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">User Authentication and Profile Management</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Backend: AWS Cognito for secure user sign-up and login with JWT tokens</li>
                      <li>Database: Store user profile data in PostgreSQL</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Photo and Body Scan Analysis</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>AI Integration: AWS Rekognition for detecting and validating uploaded photos</li>
                      <li>Storage: Save images in AWS S3, linked with user profiles in PostgreSQL</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Workout and Meal Plan Generation</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>GPT-based AI for creating custom workout and meal plans</li>
                      <li>Calorie and macronutrient tracking integrated via USDA FoodData Central API</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="section-4" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Architecture Design</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Frontend: React Native app with modular components for screens and utilities</li>
                    <li>Backend: RESTful APIs built with Express.js, using PostgreSQL for data persistence</li>
                    <li>AI Services: Deployed models on AWS Lambda or Google Cloud AI Platform</li>
                    <li>Storage: Images and media in S3 with CDN (CloudFront) for faster access</li>
                  </ul>
                </div>
              </section>

              <section id="section-5" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. API Specifications</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Authentication API</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>POST /auth/signup: Create a new user</li>
                      <li>POST /auth/login: Authenticate a user and return a token</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Workout and Meal Plan API</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>GET /plans/workout: Get a user's workout plan</li>
                      <li>GET /plans/meal: Get a user's meal plan</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="section-6" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Security</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>HTTPS for all API communications</li>
                    <li>Encrypt sensitive data at rest (e.g., user images)</li>
                    <li>JWT tokens for session management</li>
                    <li>Role-based access for admin and regular users</li>
                  </ul>
                </div>
              </section>

              <section id="section-7" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Performance and Scalability</h2>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Caching: Use Redis for frequently accessed data</li>
                    <li>Load Balancing: Elastic Load Balancer (AWS) to handle spikes in traffic</li>
                    <li>Serverless Functions: Offload AI-heavy tasks to AWS Lambda for scalability</li>
                  </ul>
                </div>
              </section>

              <section id="section-8" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Milestones</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Week 1</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Complete user authentication and profile management</li>
                      <li>Implement basic AI photo analysis</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Week 2</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Build AI-generated plans (workouts and meals)</li>
                      <li>Create logging functionality</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Week 3</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Add wearable integrations, progress tracking, and charts</li>
                      <li>Implement notifications, habit tracking, and gamification</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Week 4</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Finalize UI/UX, testing, and deployment</li>
                    </ul>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocSite;