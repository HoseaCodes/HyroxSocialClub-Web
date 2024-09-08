'use client';

import { useState, useEffect } from 'react';

export default function FoodLogPage() {
  const [foodLogs, setFoodLogs] = useState([]);
  const [newLog, setNewLog] = useState({ name: '', calories: '' });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/food');
      const data = await res.json();
      setFoodLogs(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLog),
    });

    const data = await res.json();
    setFoodLogs((prev) => [...prev, data]);
    setNewLog({ name: '', calories: '' });
  };

  const handleDelete = async (id) => {
    const res = await fetch('/api/food', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setFoodLogs(foodLogs.filter((log) => log._id !== id));
  };

  return (
    <div>
      <h1>Food Log</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newLog.name}
          onChange={(e) => setNewLog({ ...newLog, name: e.target.value })}
          placeholder="Food Name"
        />
        <input
          type="text"
          value={newLog.calories}
          onChange={(e) => setNewLog({ ...newLog, calories: e.target.value })}
          placeholder="Calories"
        />
        <button type="submit">Add Food Log</button>
      </form>

      <ul>
        {foodLogs.map((log) => (
          <li key={log._id}>
            {log.name} - {log.calories} calories
            <button onClick={() => handleDelete(log._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
