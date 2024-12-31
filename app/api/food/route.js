import connectToDatabase from '@/lib/mongodb';
// import Meal from '@/models/Meal';
import User from '@/models/index';

const userData = {
  username: 'Dom',
  macrosPerecents: {
    protein: 30,
    carbs: 25,
    fats: 45,
  },
  bodyweight: {
    '09-06-24': {
      weight: 205,
      goalWeight: 230,
    },
    '09-07-24': {
      weight: 206,
      goalWeight: 230,
    },
    currentDate: {
      weight: 206,
      goalWeight: 230,
    }
  },
  food: {
    '09-06-24': {
      Breakfast: { eggs: 2, bacon: 3 },
      'Mid-Morning-Snack': { apple: 1 },
      Lunch: { chicken: 100, rice: 180 },
      'Afternoon-Snack': { almonds: 10 },
      Dinner: { steak: 200, potato: 150 },
      'Evening-Snack': { proteinShake: 100 },
      caloriesEaten: 1350,
      goal: 3000,
      macros: {
        protein: 200,
        carbs: 300,
        fats: 100,
      },
    },
    '09-07-24': {
      Breakfast: {},
      'Mid-Morning-Snack': {},
      Lunch: {},
      'Afternoon-Snack': {},
      Dinner: {},
      'Evening-Snack': {},
      caloriesEaten: 0,
      goal: 0,
      macros: {
        protein: 200,
        carbs: 300,
        fats: 100,
      },
    },
    currentDate: {
      Breakfast: {},
      'Mid-Morning-Snack': {},
      Lunch: {},
      'Afternoon-Snack': {},
      Dinner: {},
      'Evening-Snack': {},
      caloriesEaten: 0,
      goal: 0,
      macros: {
        protein: 200,
        carbs: 300,
        fats: 100,
      },
    }
  },
};


// GET request to retrieve food logs, optionally filtering by date or username
export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    const date = searchParams.get('date');

    if (!username) {
      return new Response(JSON.stringify({ error: 'Username is required' }), { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    // Initialize date data if it doesn't exist
    if (!user.food.has(date)) {
      user.food.set(date, {
        Breakfast: {},
        'Mid-Morning-Snack': {},
        Lunch: {},
        'Afternoon-Snack': {},
        Dinner: {},
        'Evening-Snack': {},
        caloriesEaten: 0,
        goal: 0,
        macros: { protein: 0, carbs: 0, fats: 0 }
      });
    }

    // Convert Map to object for response
    const responseData = {
      ...user.toObject(),
      food: Object.fromEntries(user.food),
      bodyweight: Object.fromEntries(user.bodyweight)
    };

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// POST request to add a new food log entry for a specific user
// export async function POST(req) {
//   try {
//     // Establish the database connection
//     await connectToDatabase();
//     const body = await req.json();

//     console.log(body)
//     const { username, date, foodItem, meal } = body;

//     if (!username || !date || !foodItem || !meal) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//     }

//     const user = await User.findOne({ username: username })
//     if (user) {
//       if (!user.food[date]) {
//         user.food[date] = {
//           Breakfast: {},
//           'Mid-Morning-Snack': {},
//           Lunch: {},
//           'Afternoon-Snack': {},
//           Dinner: {},
//           'Evening-Snack': {},
//           caloriesEaten: 0,
//           goal: 0,
//           macros: {
//             protein: 0,
//             carbs: 0,
//             fats: 0,
//           },
//         }
//         console.log('what', user.food[date])
//       }

//       // Get the food log for the specified date
//       const foodLog = user.food.get(date);

//       // Get current meal data
//       const currentMeal = foodLog[meal] instanceof Map ? foodLog[meal] : new Map();

//       // Convert foodItem object to entries and update Map
//       Object.entries(foodItem).forEach(([key, value]) => {
//         currentMeal.set(key, value);
//       });

//       // Set updated meal back to foodLog
//       foodLog[meal] = currentMeal;

//       // Mark the path as modified
//       user.markModified(`food.${date}.${meal}`);

//       // // Recalculate total calories and macros
//       // foodLog.caloriesEaten = Object.values(foodLog.Breakfast).reduce((sum, item) => sum + (item.calories || 0), 0)
//       //   + Object.values(foodLog['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.calories || 0), 0)
//       //   + Object.values(foodLog.Lunch).reduce((sum, item) => sum + (item.calories || 0), 0)
//       //   + Object.values(foodLog['Afternoon-Snack']).reduce((sum, item) => sum + (item.calories || 0), 0)
//       //   + Object.values(foodLog.Dinner).reduce((sum, item) => sum + (item.calories || 0), 0)
//       //   + Object.values(foodLog['Evening-Snack']).reduce((sum, item) => sum + (item.calories || 0), 0);

//       // foodLog.macros.protein = Object.values(foodLog.Breakfast).reduce((sum, item) => sum + (item.protein || 0), 0)
//       //   + Object.values(foodLog['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0)
//       //   + Object.values(foodLog.Lunch).reduce((sum, item) => sum + (item.protein || 0), 0)
//       //   + Object.values(foodLog['Afternoon-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0)
//       //   + Object.values(foodLog.Dinner).reduce((sum, item) => sum + (item.protein || 0), 0)
//       //   + Object.values(foodLog['Evening-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0);

//       // foodLog.macros.carbs = Object.values(foodLog.Breakfast).reduce((sum, item) => sum + (item.carbs || 0), 0)
//       //   + Object.values(foodLog['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0)
//       //   + Object.values(foodLog.Lunch).reduce((sum, item) => sum + (item.carbs || 0), 0)
//       //   + Object.values(foodLog['Afternoon-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0)
//       //   + Object.values(foodLog.Dinner).reduce((sum, item) => sum + (item.carbs || 0), 0)
//       //   + Object.values(foodLog['Evening-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0);

//       // foodLog.macros.fats = Object.values(foodLog.Breakfast).reduce((sum, item) => sum + (item.fats || 0), 0)
//       //   + Object.values(foodLog['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0)
//       //   + Object.values(foodLog.Lunch).reduce((sum, item) => sum + (item.fats || 0), 0)
//       //   + Object.values(foodLog['Afternoon-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0)
//       //   + Object.values(foodLog.Dinner).reduce((sum, item) => sum + (item.fats || 0), 0)
//       //   + Object.values(foodLog['Evening-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0);

//       console.log(`Updated food log for date ${date}:`, foodLog);


//       // Update the date's food log in the Map
//       user.food.set(date, foodLog);
//       await user.save()
//     } else {
//       return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
//     }

//     return new Response(JSON.stringify(user), { status: 201 });
//   } catch (error) {
//     console.log(error)
//     console.error('Error in POST request:', error);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
export async function POST(req) {
  try {
    await connectToDatabase();
    const { username, date, foodItem, meal } = await req.json();

    if (!username || !date || !foodItem || !meal) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    // Initialize food map if empty
    if (!user.food) {
      user.food = new Map();
    }

    // Initialize date data if doesn't exist
    if (!user.food.has(date)) {
      user.food.set(date, {
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
    }

    const dayData = user.food.get(date);

    // Initialize meal Map if needed
    if (!(dayData[meal] instanceof Map)) {
      dayData[meal] = new Map();
    }

    // Update meal data
    Object.entries(foodItem).forEach(([key, value]) => {
      dayData[meal].set(key, value);
    });

    // Update the food map
    user.food.set(date, dayData);
    user.markModified('food');

    // Recalculate total calories and macros
    const meals = ['Breakfast', 'Mid-Morning-Snack', 'Lunch', 'Afternoon-Snack', 'Dinner', 'Evening-Snack'];

    dayData.caloriesEaten = meals.reduce((total, mealName) => {
      const mealData = dayData[mealName];
      if (mealData instanceof Map) {
        return total + Array.from(mealData.values()).reduce((sum, value) => sum + value, 0);
      }
      return total + Object.values(mealData).reduce((sum, value) => sum + value, 0);
    }, 0);
    
    // dayData.macros.protein = Object.values(dayData.Breakfast).reduce((sum, item) => sum + (item.protein || 0), 0)
    //   + Object.values(dayData['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0)
    //   + Object.values(dayData.Lunch).reduce((sum, item) => sum + (item.protein || 0), 0)
    //   + Object.values(dayData['Afternoon-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0)
    //   + Object.values(dayData.Dinner).reduce((sum, item) => sum + (item.protein || 0), 0)
    //   + Object.values(dayData['Evening-Snack']).reduce((sum, item) => sum + (item.protein || 0), 0);

    // dayData.macros.carbs = Object.values(dayData.Breakfast).reduce((sum, item) => sum + (item.carbs || 0), 0)
    //   + Object.values(dayData['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0)
    //   + Object.values(dayData.Lunch).reduce((sum, item) => sum + (item.carbs || 0), 0)
    //   + Object.values(dayData['Afternoon-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0)
    //   + Object.values(dayData.Dinner).reduce((sum, item) => sum + (item.carbs || 0), 0)
    //   + Object.values(dayData['Evening-Snack']).reduce((sum, item) => sum + (item.carbs || 0), 0);

    // dayData.macros.fats = Object.values(dayData.Breakfast).reduce((sum, item) => sum + (item.fats || 0), 0)
    //   + Object.values(dayData['Mid-Morning-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0)
    //   + Object.values(dayData.Lunch).reduce((sum, item) => sum + (item.fats || 0), 0)
    //   + Object.values(dayData['Afternoon-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0)
    //   + Object.values(dayData.Dinner).reduce((sum, item) => sum + (item.fats || 0), 0)
    //   + Object.values(dayData['Evening-Snack']).reduce((sum, item) => sum + (item.fats || 0), 0);


    await user.save();

    // Convert Maps to Objects for response
    const responseData = {
      ...user.toObject(),
      food: Object.fromEntries(user.food)
    };

    return new Response(JSON.stringify(responseData), { status: 201 });
  } catch (error) {
    console.error('Error in POST request:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// PUT request to update existing food log data
// export async function PUT(req) {
//   try {
//     // Establish the database connection
//     const { db } = await connectToDatabase();
//     const body = await req.json();

//     const { username, date, foodEntry } = body;

//     if (!username || !date || !foodEntry) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//     }

//     const result = await User.findOneAndUpdate(
//       { username },  // Find by username
//       { $set: { [`food.${date}`]: foodEntry } },  // Update the food entry for the specific date
//       { new: true }  // Return the updated document
//     );

//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
export async function PUT(req) {
  try {
    await connectToDatabase();
    const { username, date, meal, foodItem } = await req.json();

    const user = await User.findOne({ username });
    if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

    const dayData = user.food.get(date) || {
      Breakfast: new Map(),
      'Mid-Morning-Snack': new Map(),
      Lunch: new Map(),
      'Afternoon-Snack': new Map(),
      Dinner: new Map(),
      'Evening-Snack': new Map(),
      caloriesEaten: 0,
      goal: 0,
      macros: { protein: 0, carbs: 0, fats: 0 }
    };

    if (!(dayData[meal] instanceof Map)) {
      dayData[meal] = new Map();
    }

    Object.entries(foodItem).forEach(([key, value]) => {
      dayData[meal].set(key, value);
    });

    user.food.set(date, dayData);
    user.markModified('food');
    await user.save();

    const responseData = {
      ...user.toObject(),
      food: Object.fromEntries(user.food)
    };

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('Error in PUT request:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// DELETE request to delete a specific date's food log
// export async function DELETE(req) {
//   try {
//     // Establish the database connection
//     const { db } = await connectToDatabase();
//     const body = await req.json();

//     const { username, date } = body;

//     if (!username || !date) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//     }

//     const result = await User.findOneAndUpdate(
//       { username },  // Find by username
//       { $unset: { [`food.${date}`]: "" } },  // Remove the specific date's food log entry
//       { new: true }  // Return the updated document
//     );

//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }

export async function DELETE(req) {
  try {
    await connectToDatabase();
    const { username, date, meal, foodItem } = await req.json();

    if (!username || !date || !meal || !foodItem) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const dayData = user.food.get(date);
    if (!dayData) {
      return new Response(JSON.stringify({ error: 'No food data for this date' }), { status: 404 });
    }

    if (dayData[meal] instanceof Map) {
      dayData[meal].delete(foodItem);
    } else {
      delete dayData[meal][foodItem];
    }

    user.food.set(date, dayData);
    user.markModified('food');
    await user.save();

    const responseData = {
      ...user.toObject(),
      food: Object.fromEntries(user.food)
    };

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('Error in DELETE request:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}