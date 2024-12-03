import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET request to retrieve food logs, optionally filtering by date or username
export async function GET(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  
  // Parse search params to filter data (e.g., by date or username)
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  const date = searchParams.get('date');

  let query = {};
  if (username) query.username = username;
  if (date) query[`food.${date}`] = { $exists: true };  // Check if food data exists for the date

  const foodLogs = await db.collection('foodLogs').find(query).toArray();

  return new Response(JSON.stringify(foodLogs), { status: 200 });
}

// POST request to add a new food log entry for a specific user
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const body = await req.json();

  const { username, date, foodEntry } = body;
  
  if (!username || !date || !foodEntry) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const result = await db.collection('foodLogs').updateOne(
    { username },  // Find the document by username
    { 
      $set: { [`food.${date}`]: foodEntry }  // Add or update the food entry for the specific date
    },
    { upsert: true }  // Create document if it doesn't exist
  );

  return new Response(JSON.stringify(result), { status: 201 });
}

// PUT request to update existing food log data
export async function PUT(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const body = await req.json();

  const { username, date, foodEntry } = body;

  if (!username || !date || !foodEntry) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const result = await db.collection('foodLogs').updateOne(
    { username },  // Find by username
    { 
      $set: { [`food.${date}`]: foodEntry }  // Update the food entry for the specific date
    }
  );

  return new Response(JSON.stringify(result), { status: 200 });
}

// DELETE request to delete a specific date's food log
export async function DELETE(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const body = await req.json();

  const { username, date } = body;

  if (!username || !date) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const result = await db.collection('foodLogs').updateOne(
    { username },  // Find by username
    { 
      $unset: { [`food.${date}`]: "" }  // Remove the specific date's food log entry
    }
  );

  return new Response(JSON.stringify(result), { status: 200 });
}
