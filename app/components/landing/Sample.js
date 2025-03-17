"use client";
// app/page.jsx

import Image from 'next/image';
import WaitlistForm from './WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="font-bold text-xl">PhysiquePro AI</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#features" className="text-gray-600 hover:text-black">Feature Highlights</a>
          <a href="#" className="text-gray-600 hover:text-black">Download</a>
        </div>
        <a href="#waitlist" className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium">
          Join Waitlist
        </a>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 rounded-3xl mx-6 my-8 p-8 md:p-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PhysiquePro AI - <br />
            Unlock Your Ultimate Potential.
          </h1>
          <p className="text-gray-700 mb-8">
            Track your workouts, monitor your progress, and stay motivated with
            our easy-to-use health and fitness mobile app.
          </p>
          <WaitlistForm />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative h-auto">
            <Image 
              src="/images/hero.png" 
              alt="PhysiquePro AI App" 
              width={800} 
              height={1200} 
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Your AI-Powered<br />Fitness Partner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PhysiquePro AI customizes your entire fitness journey—workouts,
            nutrition, and recovery—all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-100 rounded-xl p-6 relative">
            <div className="mb-4 bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">1</div>
            <h3 className="font-semibold text-lg mb-2">AI-Customized Workouts</h3>
            <p className="text-gray-700">
              Custom workout methods based on goals, experience, and available equipment
            </p>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 relative">
            <div className="mb-4 bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">2</div>
            <h3 className="font-semibold text-lg mb-2">Comprehensive Health Tracking</h3>
            <p className="text-gray-700">
              Seamlessly monitor workouts, nutrition, and recovery in one place
            </p>
          </div>
          <div className="bg-blue-100 rounded-xl p-6 relative">
            <div className="mb-4 bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">3</div>
            <h3 className="font-semibold text-lg mb-2">Science-Based Fitness Optimization</h3>
            <p className="text-gray-700">
              Data-driven progress tracking and personalized recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">Real People. Real Transformations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
              &quot;PhysiquePro AI made fitness easy! I finally see results without guessing what to do.&quot;
              </p>
              <div className="font-medium">Alex R.</div>
              <div className="text-sm text-gray-500">Busy Parent</div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="bg-gray-800 text-white py-12 px-6 rounded-3xl mx-6 my-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist & Get Exclusive Perks</h2>
            <p className="mb-6">Be one of the first to experience AI-powered fitness with exclusive benefits.</p>
            <WaitlistForm />
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-700 rounded-lg p-4 mb-2">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">✓</div>
                <p>First month FREE for waitlist members</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 mb-2">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">✓</div>
                <p>Early access to premium features</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 mb-2">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">✓</div>
                <p>Exclusive Founding Member badge</p>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">✓</div>
                <p>Personalized AI-generated plan on Day 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Your Journey Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Take Control of Your Fitness Journey</h2>
          <p className="text-xl mb-8">Join thousands of early adopters and experience the future of fitness.</p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-gray-900 text-white p-4 rounded-xl">
              <p className="font-medium">Start your Fitness Journey</p>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded-xl">
              <p className="font-medium">Toned ABS Fast</p>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded-xl">
              <p className="font-medium">Phase 1: Full Body</p>
            </div>
            <div className="bg-gray-900 text-white p-4 rounded-xl">
              <p className="font-medium">Health System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">PhysiquePro AI</h2>
            <p className="text-gray-400">Join thousands of early adopters and experience the future of fitness.</p>
          </div>

          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#features" className="text-gray-400 hover:text-white">Feature Highlights</a>
            <a href="#" className="text-gray-400 hover:text-white">Download</a>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 PhysiquePro AI</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Conditions</a>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.13 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 7.5h-1.944c-.721 0-1.306.196-1.306.75v1.5h3.251l-.375 3h-2.876V21h-3.75v-8.25H7.5v-3h2.75V7.5C10.25 5.25 11.625 3 14.25 3h3v4.5z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}