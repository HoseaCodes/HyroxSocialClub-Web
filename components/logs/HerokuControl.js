import React, { useState, useEffect } from 'react';

const HerokuControl = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`https://api.heroku.com/apps/${process.env.NEXT_PUBLIC_HEROKU_APP_NAME}/formation`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HEROKU_API_KEY}`,
          'Accept': 'application/vnd.heroku+json; version=3',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('Failed to check status');
      
      const formations = await response.json();
      const webDyno = formations.find(f => f.type === 'web');
      setIsRunning(webDyno?.quantity > 0);
    } catch (err) {
      console.error('Status check failed:', err);
      setError('Failed to check server status');
    }
  };

  useEffect(() => {
    checkServerStatus();
  }, []);

  const toggleServer = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.heroku.com/apps/${process.env.NEXT_PUBLIC_HEROKU_APP_NAME}/formation/web`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HEROKU_API_KEY}`,
            'Accept': 'application/vnd.heroku+json; version=3',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            quantity: isRunning ? 0 : 1,
            size: 'eco'
          })
        }
      );

      if (!response.ok) throw new Error('Failed to toggle server');
      
      setIsRunning(!isRunning);
      
    } catch (err) {
      console.error('Toggle failed:', err);
      setError('Failed to toggle server status');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex items-center gap-2">
        <div 
          className={`w-3 h-3 rounded-full ${
            isRunning ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className="font-medium">
          Server is {isRunning ? 'Running' : 'Stopped'}
        </span>
      </div>
      
      <button
        onClick={toggleServer}
        disabled={isLoading}
        className={`
          px-6 py-2 rounded-lg font-medium transition-colors
          ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 
            isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
          text-white
        `}
      >
        {isLoading ? 'Processing...' : 
         isRunning ? 'Stop Server' : 'Start Server'}
      </button>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default HerokuControl;