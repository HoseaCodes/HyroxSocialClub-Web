'use client';

// components/WaitlistForm.jsx
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    try {
      setStatus('loading');
      setMessage('');
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully joined the waitlist!');
        setEmail(''); // Clear the input on success
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
        console.error('Error details:', data);
      }
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again later.');
    }
  };
  
  return (
    <div className="waitlist-form-container">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 rounded-lg md:rounded-r-none bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-lg md:rounded-l-none font-medium text-white ${
            status === 'loading'
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {message && (
        <div
          className={`mt-3 px-4 py-2 rounded text-center ${
            status === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
      
      {status === 'success' && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Check your inbox for a confirmation email! If you don&apos;t see it, please check your spam folder.
        </p>
      )}
    </div>
  );
}