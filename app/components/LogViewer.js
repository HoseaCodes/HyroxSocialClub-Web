'use client';

// components/LogViewer.js
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, XCircle, AlertCircle, Download, Pause, Play } from 'lucide-react';

const WS_URL = process.env.NODE_ENV === 'production'
  ? 'wss://log-websocket-918cf29961a3.herokuapp.com'
  : 'ws://localhost:5003';

function LogViewer() {
  const [logs, setLogs] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filter, setFilter] = useState('all');
  const logContainerRef = useRef(null);
  const ws = useRef(null);
  const pausedLogs = useRef([]);

  // Determine log level color and icon
  const getLogDetails = (logText) => {
    if (logText.includes('[ERROR]')) {
      return { 
        color: 'text-red-500',
        icon: <XCircle size={16} className="text-red-500" />,
        level: 'error'
      };
    }
    if (logText.includes('[WARN]')) {
      return { 
        color: 'text-yellow-500',
        icon: <AlertCircle size={16} className="text-yellow-500" />,
        level: 'warn'
      };
    }
    return { 
      color: 'text-green-500',
      icon: <Terminal size={16} className="text-green-500" />,
      level: 'info'
    };
  };

  // Filter logs based on selected level
  useEffect(() => {
    const filtered = logs.filter(log => {
      if (filter === 'all') return true;
      const { level } = getLogDetails(log);
      return level === filter;
    });
    setFilteredLogs(filtered);
  }, [logs, filter]);

  // Auto scroll to bottom when new logs come in
  useEffect(() => {
    if (logContainerRef.current && !isPaused) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [filteredLogs, isPaused]);

  // Connect to WebSocket
   const connectWebSocket = () => {
    console.log('Connecting to WebSocket:', WS_URL); // Debug log
    ws.current = new WebSocket(WS_URL);
    
    ws.current.onopen = () => {
      setIsConnected(true);
      setError(null);
      setLogs(prev => [...prev, 'Connected to log stream']);
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'log' && !isPaused) {
        setLogs(prev => [...prev, message.data]);
      } else if (message.type === 'log' && isPaused) {
        pausedLogs.current.push(message.data);
      } else if (message.type === 'error') {
        setError(message.data);
      }
    };

    ws.current.onclose = () => {
      setIsConnected(false);
      setLogs(prev => [...prev, 'Disconnected from log stream']);
    };

    ws.current.onerror = (error) => {
      setError('WebSocket error: ' + error.message);
      setIsConnected(false);
    };
  };

  // Cleanup WebSocket on unmount
  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  // Handle stream pause/resume
  const togglePause = () => {
    setIsPaused(!isPaused);
    if (isPaused && pausedLogs.current.length > 0) {
      setLogs(prev => [...prev, ...pausedLogs.current]);
      pausedLogs.current = [];
    }
  };

  // Download logs as text file
  const downloadLogs = () => {
    const text = filteredLogs.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `heroku-logs-${new Date().toISOString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Terminal className="text-gray-400" size={18} />
              <h2 className="text-gray-200 font-semibold text-sm sm:text-base">PhysiquePro-Ai Logs</h2>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Filter dropdown */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-700 text-gray-200 rounded px-2 py-1 text-xs sm:text-sm flex-grow sm:flex-grow-0"
              >
                <option value="all">All Logs</option>
                <option value="error">Errors</option>
                <option value="warn">Warnings</option>
                <option value="info">Info</option>
              </select>
  
              {/* Control buttons */}
              <div className="flex space-x-2 sm:space-x-4">
                <button
                  onClick={togglePause}
                  className="text-gray-400 hover:text-gray-200 p-1"
                  title={isPaused ? "Resume" : "Pause"}
                >
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                </button>
  
                <button
                  onClick={downloadLogs}
                  className="text-gray-400 hover:text-gray-200 p-1"
                  title="Download Logs"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Log Container */}
        <div 
          ref={logContainerRef}
          className="bg-gray-950 p-2 sm:p-4 h-[400px] sm:h-[600px] overflow-y-auto font-mono text-xs sm:text-sm"
        >
          {filteredLogs.length === 0 ? (
            <div className="text-gray-500 text-center mt-16 sm:mt-32 text-sm">
              No logs available. Click &quot;Start Streaming&quot; to begin.
            </div>
          ) : (
            filteredLogs.map((log, index) => {
              const { color, icon } = getLogDetails(log);
              return (
                <div 
                  key={index} 
                  className={`${color} flex items-start space-x-2 mb-1 hover:bg-gray-900 p-1 rounded break-all`}
                >
                  <span className="mt-1 flex-shrink-0">{icon}</span>
                  <span className="whitespace-pre-wrap">{log}</span>
                </div>
              );
            })
          )}
        </div>
  
        {/* Footer */}
        <div className="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <button
              onClick={() => {
                if (!isConnected) connectWebSocket();
              }}
              disabled={isConnected}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium w-full sm:w-auto ${
                isConnected 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isConnected ? 'Connected' : 'Start Streaming'}
            </button>
            
            {error && (
              <div className="flex items-center space-x-2 text-red-500 text-xs sm:text-sm w-full sm:w-auto">
                <XCircle size={16} />
                <span className="truncate">Error: {error}</span>
              </div>
            )}
  
            <div className="text-gray-400 text-xs sm:text-sm w-full sm:w-auto text-right">
              {filteredLogs.length} logs {isPaused && '(Paused)'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogViewer;