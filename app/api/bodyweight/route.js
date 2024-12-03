import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('social-club');
        const collection = db.collection('bodyweight')
        const { date, weight, goalWeight } = await request.json();

        if (!date || !weight || !goalWeight) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }


        // Upsert (insert or update) the bodyweight entry for the specific date
        const result = await collection.updateOne(
            { date },  // Filter by date
            { $set: { weight, goalWeight } },  // Update weight and goalWeight
            { upsert: true }  // Insert if not found
        );

        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            return NextResponse.json({ message: 'Data saved successfully' }, { status: 201 });
        } else {
            return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ error: 'Unable to process the request' }, { status: 500 });
    }
}

// GET request to retrieve bodyweight data for a specific date or all dates
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('social-club');
        const collection = db.collection('bodyweight')
        const { searchParams } = new URL(request.url);
        const date = searchParams.get('date');

        if (date) {
            // Find the bodyweight data for the specific date
            const bodyweightData = await collection.findOne({ date });

            if (bodyweightData) {
                return NextResponse.json(bodyweightData, { status: 200 });
            } else {
                return NextResponse.json({ message: 'No data found for this date' }, { status: 404 });
            }
        }

        // Retrieve all bodyweight data if no specific date is provided
        const allData = await collection.find({}).toArray();
        return NextResponse.json(allData, { status: 200 });
    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
    }
}