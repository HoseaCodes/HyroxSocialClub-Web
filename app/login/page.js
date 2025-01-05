'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '../context/auth-context'; // Import the useAuth hook
import NavBar from '../components/navigation';
import Footer from '../components/Footer';

const LoginPage = () => {
  const { login } = useAuth(); // Access the login method from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Example: Validate login and retrieve a token
    const token = 'YOUR_TOKEN_HERE'; // Replace with real token logic
    login(token, email); // Call login from context to set the auth state and store the token
    router.push('/logs'); // Redirect to the protected dashboard page after login
  };

  return (
    <>
      <NavBar />
      {/* Login Section */}
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h1 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <button className="text-blue-500 hover:text-blue-700">Forgot Password?</button>
            <p className="mt-2 text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:text-blue-700">Sign up</a>
            </p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LoginPage;
