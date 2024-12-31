import connectToDatabase from '@/lib/mongodb';
import User from '@/models/index';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { username } = await req.json();

    if (!username) {
      return new Response(JSON.stringify({ error: 'Username required' }), { status: 400 });
    }

    const user = new User({
      username,
      macrosPerecents: {
        protein: 30,
        carbs: 25, 
        fats: 45
      },
      bodyweight: new Map(),
      food: new Map(),
    });

    // Add today's empty log
    const today = new Date().toLocaleDateString('en-US');
    
    user.food.set(today, {
      Breakfast: new Map(),
      'Mid-Morning-Snack': new Map(),
      Lunch: new Map(),
      'Afternoon-Snack': new Map(), 
      Dinner: new Map(),
      'Evening-Snack': new Map(),
      caloriesEaten: 0,
      goal: 0,
      macros: { protein: 0, carbs: 0, fats: 0 }
    });

    await user.save();
    
    const responseData = {
      ...user.toObject(),
      food: Object.fromEntries(user.food)
    };

    return new Response(JSON.stringify(responseData), { status: 201 });

  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
