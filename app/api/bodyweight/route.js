import connectToDatabase from '@/lib/mongodb';
import User from '@/models/index';
import { NextResponse } from 'next/server';

// Helper function to ensure all MongoDB fields are serializable
const sanitizeUser = (user) => {
    if (!user) return null;

    // Convert MongoDB document to a plain JS object
    const userObj = user.toObject();

    // Ensure _id field is a string
    userObj._id = userObj._id.toString();

    // If bodyweight contains dates, ensure they are serializable as well
    if (userObj.bodyweight) {
        Object.keys(userObj.bodyweight).forEach((date) => {
            const data = userObj.bodyweight[date];
            if (data && data.date) {
                // Convert date fields to strings if they exist
                data.date = data.date.toISOString();
            }
            // Handle other non-serializable fields if necessary
        });
    }

    return userObj;
};

export async function GET(request) {
    try {
        // Establish the database connection
        await connectToDatabase();
        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username');
        const date = searchParams.get('date');

        if (!username) {
            return NextResponse.json({ error: 'Username is required' }, { status: 400 });
        }

        // Retrieve bodyweight data for the specific date or all dates
        const query = { username };
        if (date) {
            query[`bodyweight.${date}`] = { $exists: true };  // Check if bodyweight data exists for the specific date
        }

        const user = await User.findOne(query);

        console.log('user:', user);

        
        if (user) {
            return NextResponse.json(user.bodyweight, { status: 200 });
            // const sanitizedUser = sanitizeUser(user);
            // if (date) {
            //     return NextResponse.json({ date, ...user.bodyweight[date] }, { status: 200 });
            // } else {
            //     return NextResponse.json(user.bodyweight, { status: 200 });
            // }
        } else {
            return NextResponse.json({ message: 'No data found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({ error: 'Unable to fetch data' }, { status: 500 });
    }
}
