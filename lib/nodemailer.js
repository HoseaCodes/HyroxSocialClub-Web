// lib/nodemailer.js

import nodemailer from 'nodemailer';
import waitinglist from '@/templates/emails/waitlist-confirmation';

// For Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true
});

// Verify connection configuration
export async function verifyEmailConfig() {
  return new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      console.log('SMTP Server connection status:', success);
      if (error) {
        console.log('Server connection failed:', error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });
}

// Waitlist confirmation email for users
export async function sendWaitlistConfirmationEmail(email) {
  try {
    // Simple HTML template
    const html = waitinglist;
    
    const result = await transporter.sendMail({
      from: `"PhysiquePro AI" <${process.env.SMTP_FROM || process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to the PhysiquePro AI Waitlist',
      html
    });
    
    console.log('Confirmation email sent: %s', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending waitlist confirmation email:', error);
    throw error;
  }
}

// Notification email for admin
export async function sendWaitlistNotificationEmail(userEmail) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Waitlist Signup</title>
    </head>
    <body>
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h2>New Waitlist Signup</h2>
        <p>A new user has joined the PhysiquePro AI waitlist:</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p>You can view all waitlist registrations in your database dashboard.</p>
      </div>
    </body>
    </html>
    `;
    
    const result = await transporter.sendMail({
      from: `"PhysiquePro AI" <${process.env.SMTP_FROM || process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: '🔔 New PhysiquePro AI Waitlist Signup',
      html
    });
    
    console.log('Admin notification email sent: %s', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending waitlist notification email:', error);
    throw error;
  }
}