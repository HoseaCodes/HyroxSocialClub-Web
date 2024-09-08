import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req) {
  const client = await clientPromise;
  const db = client.db('social-club');

  const foodLogs = await db.collection('foodLogs').find({}).toArray();
  return new Response(JSON.stringify(foodLogs), { status: 200 });
}

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const body = await req.json();

  const result = await db.collection('foodLogs').insertOne(body);
  return new Response(JSON.stringify(result), { status: 201 });
}

export async function PUT(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const body = await req.json();

  const result = await db
    .collection('foodLogs')
    .updateOne({ _id: new ObjectId(body._id) }, { $set: body });

  return new Response(JSON.stringify(result), { status: 200 });
}

export async function DELETE(req) {
  const client = await clientPromise;
  const db = client.db('social-club');
  const { id } = await req.json();

  const result = await db.collection('foodLogs').deleteOne({ _id: new ObjectId(id) });

  return new Response(JSON.stringify(result), { status: 200 });
}
