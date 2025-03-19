'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '../context/auth-context';
import Footer from '@/components/landing/Footer';

const LoginPage = () => {
  const router = useRouter();
  const { auth, login, isInitialized } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Check authentication status once on mount
  useEffect(() => {
    console.log('Login page mounted, auth state:', { auth, isInitialized });
    
    if (isInitialized) {
      if (auth === true) {
        console.log('User is authenticated, redirecting to logs');
        router.push('/logs');
      } else {
        console.log('User is not authenticated, showing login form');
        setCheckingAuth(false);
      }
    }
  }, [auth, isInitialized, router]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);
    
    try {
      if (!email || !password) {
        setError('Please enter both email and password');
        setIsLoggingIn(false);
        return;
      }

      // For demo purposes - any email/password combination works
      // In a real app, you would validate credentials against your backend
      const token = 'demo-token-' + Date.now();
      
      console.log('Attempting login with:', { email });
      await login(token, email);
      router.push('/logs');
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Show loading state while checking authentication
  if (!isInitialized || checkingAuth) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-xl text-center">
          <div className="mb-4">Checking authentication...</div>
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h1 className="text-2xl font-semibold text-center mb-6">Login to Your Account</h1>
          
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
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
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoggingIn}
              className={`w-full py-2 ${isLoggingIn ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isLoggingIn ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : 'Login'}
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <button className="text-blue-500 hover:text-blue-700">Forgot Password?</button>
            <p className="mt-2 text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:text-blue-700">Sign up</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;