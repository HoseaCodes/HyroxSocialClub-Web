// app/api/waitlist/route.js

import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import { sendWaitlistConfirmationEmail, sendWaitlistNotificationEmail } from '@/lib/nodemailer';

// Create a connection pool to your PostgreSQL database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false // For AWS RDS, you might need this
  }
});

export async function POST(request) {
  try {
    // Parse request body
    const { email } = await request.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Valid email is required' },
        { status: 400 }
      );
    }

    console.log(`Attempting to add ${email} to waitlist...`);
    
    // Test database connection
    try {
      await pool.query('SELECT NOW()');
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Database connection failed', error: dbError.message },
        { status: 500 }
      );
    }

    // Check if email already exists in waitlist
    const checkResult = await pool.query(
      'SELECT * FROM waitlist WHERE email = $1',
      [email]
    );

    if (checkResult.rows.length > 0) {
      return NextResponse.json(
        { success: false, message: 'This email is already on our waitlist' },
        { status: 409 }
      );
    }

    // Insert into database
    const result = await pool.query(
      'INSERT INTO waitlist (email, join_date) VALUES ($1, NOW()) RETURNING id',
      [email]
    );
    
    console.log(`Added to database with ID: ${result.rows[0].id}`);

    // Send confirmation email to user
    try {
      await sendWaitlistConfirmationEmail(email);
      console.log('Confirmation email sent to user');
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Continue anyway as the user is already in the database
    }
    
    // Send notification email to admin
    try {
      await sendWaitlistNotificationEmail(email);
      console.log('Notification email sent to admin');
    } catch (emailError) {
      console.error('Error sending admin notification:', emailError);
      // Continue anyway as this is just a notification
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!',
      id: result.rows[0].id
    });
    
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to join waitlist. Please try again later.', error: error.message },
      { status: 500 }
    );
  }
}